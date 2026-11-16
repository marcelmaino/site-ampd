# Temas WordPress estudados (padrões, não código)

Todas as cinco URLs responderam HTTP 200 com `curl` e user-agent de Chrome, em 16/11/2026. HTML salvo em `html/`. CSS principais em `css/`. São demos comerciais: estudar estrutura, tipografia, doação e efeitos para recriar do zero, **sem copiar código, textos nem imagens**.

## BigHearts (WebGeniusLab) — WordPress + Elementor + GiveWP + Slider Revolution

Fontes do tema: Nunito Sans (corpo) e Quicksand (destaques); Amatic SC aparece no kit, uso secundário.
Cores observadas no CSS da Home 8: azul `#1C67D2` / `#1453AD` / `#002F72`, texto `#232323`, fundo suave `#EDF4FD`, acento ouro `#FFAC00`. Raios 10 px e 25 px; sombras do tipo `11px 10px 38px rgba(0,0,0,.1)`. Títulos de até 132 px / 72 px / 42 px.
JS relevante: `wgl-counter` (números animados ao entrar na viewport), `wgl-video-popup`, `wgl-give-forms` (doação GiveWP), `wgl-testimonials`, `wgl-blog`, `wgl-info-box`, Slider Revolution no hero de algumas homes. Não copiar esses plugins; recriar o comportamento em JS próprio, com `prefers-reduced-motion`.

### https://wgl-dsites.net/bighearts/home-8/
Tom “oceano / meio ambiente”. Seções úteis: hero com vídeo (“Watch Video”, “Become an [donor/volunteer]”); quatro cards de causa (Save Ecosystems, Ocean Protection, Emission Reduction, Water Recycle); convite a voluntariado; campanhas; depoimentos; faixa de counters (anos, toneladas, voluntários, campanhas); últimas notícias; CTA “Donate now” repetido no cabeçalho e no rodapé. Formulário GiveWP na página. Newsletter não aparece como bloco principal (mais CTA de doação).

Aproveitar: repetição visível do botão de doar (no nosso caso, “Doe agora” → PIX); cards de causa viram “como ajudar” / serviços; counters só com números reais; grade de notícias; vídeo se a AMPD tiver material.

### https://wgl-dsites.net/bighearts/home-13/
Tom de assistência a crianças. Hero + dois caminhos (Immediate Assistance / Long-Term Support); counters; três cards de ajuda (Individual, Psychology, Ambulance); números de impacto mais “duros”; histórias com retrato e “Read more”; acordeão. Aproveitar a **dupla de caminhos** (ex.: “Preciso de atendimento” vs “Quero ajudar”) e o formato de histórias — só com autorização de imagem e sem tom de pena.

### https://wgl-dsites.net/bighearts/home-15/
Tom de cuidado a idosos. Hero de apoio e respeito; três serviços (medicação, saúde física, nutrição); counters; depoimentos; **cards de campanha com valores Raised / To go** (barra de progresso de doação, GiveWP). Aproveitar o padrão visual da barra e do “já arrecadado / falta” **somente se** a AMPD tiver meta pública; caso contrário, não inventar barra. O bloco PIX da AMPD pode usar o mesmo lugar de destaque que esses cards de campanha ocupam.

## Philantrop (Artureanec) — WordPress + Elementor + GiveWP + plugin próprio

Fontes: Epilogue e Sora (títulos/corpo). Cores de interface: coral `#EF644C`, amarelo `#FFCE59` / `#FBC647`, quase-preto `#18191A` / `#333`, sucesso `#27AE60`.
Widgets: heading, button, events, icon box, counter, team, causes slider, partners, ticker, content slider, testimonials, stories, video, **popup de doação**, formulário Give com valores pré-definidos (US$ 10, 25, 50, 100, 250 + valor livre) e `give-progress-bar`.
Há painel lateral, busca no header, telefone no header e botão permanente de doar.

### https://demo.artureanec.com/themes/philantrop/volunteers/
Página de voluntariado: hero “We Help people / a volunteer”; causas; histórias; equipe de voluntários; grade de eventos; formulário/popup de doação com chips de valor e barra de progresso. Aproveitar: página “Seja voluntário” com retratos (autorizados), agenda de eventos, e o **padrão de chips de valor** adaptado ao PIX em reais (valores sugeridos + “outro valor” + copiar chave), sem usar o plugin Give.

### https://demo.artureanec.com/themes/philantrop/home-save-philantrop/
Home de campanha: hero “Save People / We save lives”; ticker; missão; sliders de causas e histórias; voluntários; depoimentos; posts recentes; parceiros; vários pontos de doação (popup + barras). Aproveitar: faixa de parceiros, slider/lista de histórias e notícias, CTA de doação recorrente na jornada da página — traduzido para PIX + Nota Fiscal Gaúcha, não para gateway estrangeiro.

## O que não levar para o site da AMPD
- Textos, fotos, ícones e logos das demos.
- Paleta coral/amarelo ou o azul #1C67D2 das demos (temos paleta oficial).
- Nunito Sans, Quicksand, Epilogue, Sora como faces principais (queremos tipografia ligada à acessibilidade e distinta).
- Pop-ups agressivos de doação que roubem o foco do teclado sem aviso.
- Barras de progresso com metas inventadas.
- Copiar HTML/CSS/JS dos temas (licença comercial de terceiros).
