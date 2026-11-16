# Site AMPD — Associação Marauense da Pessoa com Deficiência

Site oficial da AMPD de Marau/RS, desenvolvido com HTML estático, Tailwind CSS e JavaScript vanilla, com foco em acessibilidade WCAG 2.2 AA.

## 📋 Sobre o projeto

Este site foi desenvolvido para promover a inclusão digital e a transparência da AMPD, seguindo rigorosamente os requisitos de acessibilidade para atender o público com deficiência.

### Características principais

- ✅ **HTML estático multi-página** — sem dependências de backend
- ✅ **Tailwind CSS** compilado para produção
- ✅ **Acessibilidade WCAG 2.2 AA**
  - Skip links
  - Foco visível
  - Navegação por teclado
  - Alt text em todas as imagens
  - Contraste AAA nos textos principais
  - Painel de acessibilidade (tamanho de fonte + alto contraste)
  - VLibras integrado
  - Suporte a prefers-reduced-motion
- ✅ **Paleta e tipografia oficiais** do logo da AMPD
- ✅ **Responsivo** — mobile, tablet e desktop
- ✅ **Performance otimizada** — lazy loading, WebP, CSS minificado

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 16+ e npm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd site-ampd

# Instale as dependências
npm install

# Compile o CSS e rode em modo desenvolvimento
npm run dev

# O comando acima fica observando mudanças no CSS.
# Abra public/index.html no navegador ou use um servidor local:
npx serve public
# Depois acesse http://localhost:3000
```

### Scripts disponíveis

```bash
npm run dev    # Compila CSS e observa mudanças
npm run build  # Compila CSS minificado para produção
```

## 📁 Estrutura do projeto

```
site-ampd/
├── brand/                  # Logo e identidade visual
├── docs/                   # Documentação do projeto
│   ├── research/          # Pesquisa e dados da AMPD
│   ├── refs/              # Referências visuais
│   ├── skills/            # Guias de design seguidos
│   ├── CREDITOS-IMAGENS.md
│   └── PENDENCIAS.md      # Lista de pendências de conteúdo
├── public/                 # Site pronto para publicação
│   ├── index.html         # Página inicial
│   ├── pages/             # Páginas internas
│   │   ├── a-ampd.html
│   │   ├── o-que-fazemos.html
│   │   ├── noticias.html
│   │   ├── noticia-exemplo.html
│   │   ├── eventos.html
│   │   ├── publicacoes.html
│   │   ├── como-ajudar.html
│   │   └── contato.html
│   └── assets/
│       ├── css/           # CSS compilado
│       ├── js/            # JavaScript vanilla
│       └── img/           # Imagens otimizadas
├── src/                    # Fonte do CSS
│   └── input.css          # CSS com Tailwind
├── tailwind.config.js      # Configuração do Tailwind
├── package.json
└── README.md
```

## 🌐 Como publicar

O site é **totalmente estático** e pode ser hospedado em qualquer serviço de hospedagem web.

### Opção 1: GitHub Pages (Gratuito)

1. Faça push do código para um repositório GitHub
2. Vá em Settings → Pages
3. Configure a source para a branch `main` e pasta `/public` (ou `/` se mover o conteúdo de public para raiz)
4. O site ficará disponível em `https://<usuario>.github.io/<repositorio>/`

### Opção 2: Netlify (Gratuito, recomendado)

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `public`
4. Deploy automático a cada push

### Opção 3: Vercel (Gratuito)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Importe o repositório
3. Configure:
   - **Build command:** `npm run build`
   - **Output directory:** `public`
4. Deploy automático

### Opção 4: Servidor tradicional (hospedagem paga)

1. Compile o CSS: `npm run build`
2. Faça upload do conteúdo da pasta `public/` via FTP/SFTP
3. Configure o domínio para apontar para o diretório
4. Pronto!

## ⚠️ Antes de publicar

Revise e resolva as pendências listadas em `docs/PENDENCIAS.md`, especialmente:

1. **Chave PIX** e QR Code para doações
2. **Telefone/WhatsApp** oficial
3. **Endereço** definitivo da sede
4. **Horário** de funcionamento
5. **Missão, Visão e Valores** (validar os textos)

Todos os placeholders estão marcados visivelmente no site.

## 🎨 Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Navy | `#011225` | Fundos escuros, rodapé, CTA |
| Texto escuro | `#231F20` | Texto corrido |
| Índigo | `#2E3092` | Títulos, lema |
| Teal | `#076A97` | Botões, links, ações |
| Ciano | `#00A2D1` | Marca, ícones, detalhes |
| Ciano claro | `#6CDCFC` | Badges, fundos suaves |
| Lavanda | `#B6B2D8` | Chips, volumes |
| Papel | `#F5FBFE` | Fundo da página |

## 🔤 Tipografia

- **Títulos:** Outfit (Google Fonts) — Light, Regular, Semibold, Bold
- **Corpo:** Atkinson Hyperlegible (Google Fonts) — Regular, Bold
  - Escolhida por ser otimizada para legibilidade e acessibilidade

## 📦 Tecnologias utilizadas

- HTML5 semântico
- CSS3 com Tailwind CSS 3.4+
- JavaScript vanilla (ES6+)
- Google Fonts (Outfit + Atkinson Hyperlegible)
- VLibras (widget do governo para tradução em Libras)

## ✅ Checklist de acessibilidade

- [x] Contraste de cores WCAG AA/AAA
- [x] Skip link funcional
- [x] Foco visível em todos os elementos interativos
- [x] Navegação completa por teclado
- [x] Alt text em todas as imagens
- [x] ARIA labels e roles apropriados
- [x] Formulários com validação e feedback
- [x] VLibras integrado
- [x] Painel de acessibilidade (fonte e contraste)
- [x] HTML semântico (header, nav, main, article, footer)
- [x] Suporte a leitores de tela
- [x] Respeito a prefers-reduced-motion

## 📊 Performance e SEO

- Lazy loading de imagens
- CSS minificado para produção
- Fontes carregadas de forma otimizada
- Meta tags apropriadas em todas as páginas
- Estrutura de URLs amigável
- Sitemap (a adicionar)

## 🤝 Contribuindo

Este é um projeto desenvolvido para a AMPD. Contribuições devem ser coordenadas com a diretoria da associação.

## 📄 Licença

© 2024 AMPD — Associação Marauense da Pessoa com Deficiência. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para promover inclusão e acessibilidade**

*"Nada sobre nós, sem nós"*
