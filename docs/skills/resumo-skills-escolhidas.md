# Skills e guias de design escolhidos para o Site AMPD

Pesquisa em 16 de novembro de 2026 (Horário de Brasília). Os cinco abaixo são os que mais agregam a este projeto (HTML + Tailwind + JS, associação de pessoas com deficiência, acessibilidade obrigatória). Cópias úteis em esta pasta.

## 1. frontend-design (Anthropic)
- Link: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
- Cópia: `frontend-design-SKILL.md`
- O que agrega: obriga um ponto de vista visual próprio, ancorado no assunto (aqui, inclusão e o lema “Nada sobre nós, sem nós”), e lista clichês de “design de IA” a evitar (creme + terracota, cards idênticos com a mesma sombra, eyebrow em caixa alta, setinha em todo botão). Processo em duas passagens: planejar paleta, tipo e princípios; depois construir e criticar.
- Aplicação: não copiar o visual “ONG genérica” dos temas WordPress; usar a paleta real do logo e tipografia ligada à acessibilidade.

## 2. ui-ux-pro-max (nextlevelbuilder)
- Link: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Cópia da skill: `ui-ux-pro-max-SKILL.md`
- O que agrega: base pesquisável de estilos, pares de fontes, diretrizes de UX e acessibilidade (contraste 4,5:1, foco visível, alt, teclado, `prefers-reduced-motion`, skip link, erros com `aria-live`). Para “Non-profit/Charity”, recomenda estilo acessível + orgânico, cores da causa, histórias de impacto, fluxo de doação, transparência, voluntariado e agenda. Stack padrão: HTML + Tailwind — exatamente o da etapa 3.
- Aplicação: checklist de UX na implementação; não improvisar padrões de formulário e doação.

## 3. WCAG 2.2 (W3C / WAI)
- Links: https://www.w3.org/WAI/standards-guidelines/wcag/ e https://www.w3.org/WAI/WCAG22/quickref/
- O que agrega: o critério oficial de acessibilidade, meta AA já definida na etapa 1. Contraste, teclado, formulários, reflow até 200% ou 320 px, alvo de toque, consistência da ajuda (2.2), texto não justificado em bloco, legendas e alternativas.
- Aplicação: cada componente da etapa 3 precisa passar AA; o ciano da marca já foi testado e não pode ser texto sobre branco.

## 4. Tailwind CSS — boas práticas oficiais
- Link: https://tailwindcss.com/docs/styling-with-utility-classes
- O que agrega: tokens no `@theme` (cores da paleta oficial, raios, sombras), `prefers-reduced-motion` com `motion-reduce:`, escala de tipo com `clamp`, foco visível (`outline`, `ring`), containers e malha consistentes, sem CSS solto que fuja do sistema.
- Aplicação: o site da etapa 3 será Tailwind; as cores entram como tokens (`navy`, `indigo`, `teal`, `cyan`, `paper`), não como hex espalhado.

## 5. shadcn/ui + WAI-ARIA Authoring Practices
- Links: https://ui.shadcn.com/ e https://www.w3.org/WAI/ARIA/apg/
- O que agrega: padrões prontos e acessíveis de menu, diálogo, abas, formulário e foco — mesmo que o site seja HTML estático, as APG descrevem o comportamento correto (menu mobile, modal de doação se houver, abas de “como ajudar”). O shadcn MCP do ambiente ajuda se algum trecho for React; senão, as APG guiam o JS vanilla.
- Aplicação: menu, formulários, botão “copiar PIX” com `aria-live`, e o painel de acessibilidade (contraste e fonte) sem armadilhas de teclado.

VLibras (https://vlibras.gov.br/) entra como widget, complementar às regras acima, não como substituto de HTML acessível.
