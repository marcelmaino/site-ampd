const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Criar diretórios se não existirem
const screenshotsDir = path.join(__dirname, '..', 'docs', 'screenshots');
const artifactsDir = '/opt/cursor/artifacts';

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

if (!fs.existsSync(artifactsDir)) {
  fs.mkdirSync(artifactsDir, { recursive: true });
}

(async () => {
  const browser = await chromium.launch();
  
  // Usar file:// para testar caminhos relativos
  const publicDir = path.join(__dirname, '..', 'public');
  
  const pages = [
    { path: path.join(publicDir, 'index.html'), name: 'home' },
    { path: path.join(publicDir, 'pages', 'como-ajudar.html'), name: 'como-ajudar' },
    { path: path.join(publicDir, 'pages', 'noticia-exemplo.html'), name: 'noticia-exemplo' },
    { path: path.join(publicDir, 'pages', 'evento-exemplo.html'), name: 'evento-exemplo' },
    { path: path.join(publicDir, 'pages', 'artigo-exemplo.html'), name: 'artigo-exemplo' }
  ];
  
  for (const pageInfo of pages) {
    console.log(`\nCapturando screenshots de ${pageInfo.name}...`);
    const fileUrl = `file://${pageInfo.path}`;
    
    // Desktop 1440px
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    
    // Navegar usando file://
    await desktopPage.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await desktopPage.waitForTimeout(2000); // Aguardar fontes e imagens carregarem
    
    const desktopPath = path.join(screenshotsDir, `${pageInfo.name}-desktop.png`);
    await desktopPage.screenshot({ path: desktopPath, fullPage: true });
    
    // Copiar para artifacts
    fs.copyFileSync(desktopPath, path.join(artifactsDir, `${pageInfo.name}-desktop.png`));
    console.log(`  ✓ Desktop: ${desktopPath}`);
    
    await desktopPage.close();
    
    // Mobile 390px  
    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobilePage.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(2000);
    
    const mobilePath = path.join(screenshotsDir, `${pageInfo.name}-mobile.png`);
    await mobilePage.screenshot({ path: mobilePath, fullPage: true });
    
    // Copiar para artifacts
    fs.copyFileSync(mobilePath, path.join(artifactsDir, `${pageInfo.name}-mobile.png`));
    console.log(`  ✓ Mobile: ${mobilePath}`);
    
    await mobilePage.close();
  }
  
  // Testar navegação com file://
  console.log('\n🔗 Testando navegação entre páginas...');
  const testPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const homeUrl = `file://${path.join(publicDir, 'index.html')}`;
  await testPage.goto(homeUrl, { waitUntil: 'networkidle' });
  
  // Clicar no primeiro link do menu
  try {
    await testPage.click('a[href="pages/a-ampd.html"]');
    await testPage.waitForLoadState('networkidle');
    console.log('  ✓ Link da home para página interna funciona');
    
    // Voltar para home
    await testPage.click('a[href="../index.html"]');
    await testPage.waitForLoadState('networkidle');
    console.log('  ✓ Link de página interna para home funciona');
  } catch (e) {
    console.log('  ✗ Erro ao testar navegação:', e.message);
  }
  
  await testPage.close();
  await browser.close();
  
  console.log('\n✅ Todos os screenshots foram capturados!');
  console.log(`📂 Salvos em: ${screenshotsDir}`);
  console.log(`📦 Artefatos em: ${artifactsDir}`);
})();
