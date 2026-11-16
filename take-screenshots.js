const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Criar diretórios se não existirem
const screenshotsDir = path.join(__dirname, 'docs', 'screenshots');
const artifactsDir = '/opt/cursor/artifacts';

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

if (!fs.existsSync(artifactsDir)) {
  fs.mkdirSync(artifactsDir, { recursive: true });
}

(async () => {
  const browser = await chromium.launch();
  
  const pages = [
    { url: 'http://localhost:3000', name: 'home' },
    { url: 'http://localhost:3000/pages/como-ajudar.html', name: 'como-ajudar' },
    { url: 'http://localhost:3000/pages/noticia-exemplo.html', name: 'noticia-exemplo' }
  ];
  
  for (const pageInfo of pages) {
    console.log(`Capturando screenshots de ${pageInfo.name}...`);
    
    // Desktop 1440px
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktopPage.goto(pageInfo.url, { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(1000); // Aguardar fontes carregarem
    
    const desktopPath = path.join(screenshotsDir, `${pageInfo.name}-desktop.png`);
    await desktopPage.screenshot({ path: desktopPath, fullPage: true });
    
    // Copiar para artifacts
    fs.copyFileSync(desktopPath, path.join(artifactsDir, `${pageInfo.name}-desktop.png`));
    console.log(`  ✓ Desktop: ${desktopPath}`);
    
    await desktopPage.close();
    
    // Mobile 390px
    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobilePage.goto(pageInfo.url, { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1000);
    
    const mobilePath = path.join(screenshotsDir, `${pageInfo.name}-mobile.png`);
    await mobilePage.screenshot({ path: mobilePath, fullPage: true });
    
    // Copiar para artifacts
    fs.copyFileSync(mobilePath, path.join(artifactsDir, `${pageInfo.name}-mobile.png`));
    console.log(`  ✓ Mobile: ${mobilePath}`);
    
    await mobilePage.close();
  }
  
  await browser.close();
  console.log('\n✅ Todos os screenshots foram capturados!');
  console.log(`📂 Salvos em: ${screenshotsDir}`);
  console.log(`📦 Artefatos em: ${artifactsDir}`);
})();
