# Centro Ar Climatização — página de links

Landing page estática, mobile-first, criada com Vite, React, TypeScript e CSS. Não usa backend, banco de dados ou formulários.

## Requisitos

- Node.js 22.12 ou superior
- Corepack (incluído nas instalações oficiais do Node.js) ou pnpm 12.16.1

## Rodar localmente

```bash
corepack enable
pnpm install
pnpm dev
```

Abra o endereço local exibido no terminal, normalmente `http://localhost:5173`.

## Verificar e gerar a versão de produção

```bash
pnpm typecheck
pnpm build
pnpm preview
```

O build pronto para publicação fica em `dist/`. O comando `pnpm build` já executa a checagem de tipos antes de gerar os arquivos.

## Personalização

- Altere textos, telefones, links, serviços e metadados em [`src/config/site.ts`](src/config/site.ts).
- A logomarca original do cliente foi copiada sem redesenho para [`public/logo.png`](public/logo.png). A página serve uma versão WebP otimizada (`public/logo.webp`) em navegadores compatíveis. Os arquivos `favicon.png` e `apple-touch-icon.png` foram derivados da mesma marca.
- O HTML recebe os metadados de `site.ts` durante o build, por meio de `vite.config.ts`.
- Depois de definir o domínio final, use uma URL absoluta para `og:image` e `twitter:image` em compartilhamentos sociais, caso o serviço de destino exija isso. No projeto local, ambas apontam para `/logo.png`.

## Publicar no Vercel

1. Envie esta pasta para um repositório Git e importe-o no Vercel.
2. Selecione o preset **Vite** (normalmente detectado automaticamente).
3. Use `pnpm build` como comando de build e `dist` como diretório de saída.
4. Publique. Não são necessárias variáveis de ambiente.

## Publicar no Cloudflare Pages

1. Conecte o repositório ao Cloudflare Pages.
2. Configure o comando de build como `pnpm build`.
3. Configure o diretório de saída como `dist`.
4. Publique. Não são necessárias variáveis de ambiente.

Todos os botões externos abrem em nova aba. Os números e destinos usados são os informados pelo cliente.
