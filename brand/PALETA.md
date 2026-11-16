# Paleta extraída do logo oficial da AMPD

Cores convertidas dos fills `rgb(R%, G%, B%)` do SVG gerado pelo pdftocairo, com arredondamento para o inteiro 0–255 mais próximo.

## Cores principais (usar no site)

| Papel | Hex | RGB | Notas de contraste WCAG 2.2 |
|---|---|---|---|
| Navy (fundos escuros, rodapé, CTA) | `#011225` | 1, 18, 37 | Branco sobre navy 18,84:1 (AAA) |
| Quase-preto (texto corrido) | `#231F20` | 35, 31, 32 | Sobre branco 16,30:1 (AAA); sobre #F5FBFE 15,61:1 (AAA) |
| Índigo (títulos, lema) | `#2E3092` | 46, 48, 146 | Sobre branco 10,75:1 (AAA). Falha sobre navy (1,75:1) |
| Teal (botões, links, ações) | `#076A97` | 7, 106, 151 | Sobre branco 5,97:1 (AA). Preferir este, não o ciano, para texto e botão em fundo claro |
| Ciano (marca, ícones, detalhes grandes) | `#00A2D1` | 0, 162, 209 | Sobre branco 2,96:1 — **não usar como texto**. Sobre navy 6,36:1 (AA) |
| Ciano vivo (destaques, hover em fundo escuro) | `#00AEEF` | 0, 174, 239 | Irmão mais claro do ciano da marca |
| Ciano claro (blobs, badges, fundos suaves) | `#6CDCFC` | 108, 220, 252 | Sobre navy 11,92:1 (AAA). Não usar como texto sobre branco |
| Lavanda (volume da sigla, chips) | `#B6B2D8` | 182, 178, 216 | Sobre navy 9,29:1 (AAA) |
| Lavanda clara (superfícies) | `#E0DEEF` | 224, 222, 239 | Degradê da sigla AMPD |
| Off-white do site | `#F5FBFE` | 245, 251, 254 | Derivado do ciano, para fundo da página |
| Branco | `#FFFFFF` | 255, 255, 255 | Cards, botão outline, texto sobre navy/teal |

## Cores de apoio do logo (asas e degradê da sigla)
Asas: `#00A2D1`, `#076A97`, `#6CDCFC`, `#39B4D8`, `#00AEEF`, `#40BCF0`.
Sigla AMPD: escala de 20+ passos entre `#E0DEEF` e `#2E3092` (volume 3D). Não é necessário usar todos os passos no UI; índigo + lavanda bastam.

## Regras práticas
- Texto corrido: `#231F20` sobre `#FFFFFF` ou `#F5FBFE`.
- Títulos: `#2E3092` ou `#011225` sobre fundo claro; branco sobre fundo navy.
- Botão primário: fundo `#076A97` ou `#011225`, texto branco (AA).
- Botão secundário: contorno `#076A97` ou `#2E3092`, texto da mesma cor, fundo transparente ou branco.
- O ciano `#00A2D1` é a cor da marca (asas, ícones, sublinhado, ilustrações), não a cor do parágrafo.
- Não usar o laranja `#E86800` do logo do Centro como cor oficial da AMPD.
