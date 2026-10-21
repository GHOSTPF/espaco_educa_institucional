# Espaço Educa — site institucional

Site em React + Vite + TypeScript, estilizado com Tailwind CSS v4 e roteado com React Router.

## Scripts

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build de dist/ localmente
npm run lint      # ESLint
```

## Deploy

O build gera arquivos estáticos em `dist/`. Como o site usa rotas no navegador
(ex.: `/politica-de-privacidade`), o servidor precisa redirecionar rotas
desconhecidas para `index.html` (fallback de SPA).
