# Ripwave Surfboards — site e conteúdo

Projeto completo do site institucional, catálogo de pranchas e conteúdo para Instagram.

## Publicar na Vercel

Importe este repositório e use a raiz (`./`) como **Root Directory**.

- Framework: **TanStack Start** (definido em `vercel.json`).
- Instalação: `npm ci`.
- Build: `npm run build`.
- Output Directory: mantenha o padrão do framework, sem override para `public` ou `dist`.
- O adaptador Nitro gera `.vercel/output`, incluindo as funções de servidor.

Se o projeto já havia sido importado como repositório de arquivos, remova os overrides antigos de framework e pasta de saída e faça um novo deploy do branch `main`.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Código em `src`, imagens e vídeos do site em `public`. Pastas geradas e dependências não são versionadas. O acervo de posts permanece em `posts` e não faz parte do conteúdo servido pelo site.

---
# Ripwave — conteúdo para Instagram

Acervo de trabalho dos posts da Ripwave Surfboards, Santos/SP.

## Carrossel mais recente

A versão com o logo da prancha contínuo e sem a linha laranja está em:

- [Pacote completo](posts/carrossel-subaquatico/carrossel-uniao-corrigida.zip)
- [Capa](posts/carrossel-subaquatico/01-capa-com-titulo-v3.png)
- [Página 2](posts/carrossel-subaquatico/02-uniao-corrigida.png)
- [Página 3](posts/carrossel-subaquatico/03-uniao-corrigida.png)
- [Prévia da união](posts/carrossel-subaquatico/uniao-corrigida.png)

## Organização

- `posts/carrossel-como-e-feita`: produção, artes, legenda e referências.
- `posts/carrossel-prancha-branca`: showcase da prancha branca.
- `posts/carrossel-subaquatico`: carrossel de motivos, revisões e entregas.
- `posts/post-explosao-agua`: estudos de produto e versão na praia.
- `posts/post-pipeline`: imagem de surf no tubo.
- `posts/outputs`: outros ensaios e arquivos exportados.
- `posts/work`: arquivos de preparação e scripts de trabalho.

Versões anteriores foram preservadas. Os prompts acompanham os arquivos quando disponíveis. Parte das imagens foi gerada ou editada com IA. Caminhos locais em scripts e prompts documentam o ambiente original e podem precisar de ajuste em outro computador.

