# 💼 Portfólio — Gustavo Conceição

Portfólio pessoal desenvolvido com **React + Vite**. Design clean e profissional com animações suaves no scroll.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-✓-blue)

🔗 **[Ver online →](https://portfolio-hazel-ten-ym311zz0b8.vercel.app/)**

---

## ✨ Seções

- **Hero** — apresentação com card de código animado
- **Sobre** — descrição + cards de estatísticas animados
- **Skills** — hard skills com barras animadas + soft skills
- **Projetos** — cards com links para GitHub/demo
- **Contato** — formulário com feedback + redes sociais

---

## 🛠️ Tecnologias

- React 18 + Vite 5
- CSS Modules
- Hooks: useState, useEffect, useRef, custom `useInView`
- Intersection Observer API 
- Google Fonts

---

## 🚀 Como rodar

```bash
# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse **http://localhost:5173**

---

## 📁 Estrutura

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Sobre.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Projetos.jsx / .module.css
│   ├── Contato.jsx / .module.css
│   ├── Footer.jsx / .module.css
│   └── Icons.jsx
├── data/
│   └── data.js          ← edite seus dados aqui!
├── hooks/
│   └── useInView.js     ← custom hook de animação
├── App.jsx
├── main.jsx
└── index.css



