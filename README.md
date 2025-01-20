# Task Management App

## Project Description

This is a Task Management App built with React, TypeScript, Redux, and Tailwind CSS. It allows users to manage their tasks with features such as task creation, editing, deletion, search,dark and light mode and calendar view. The app uses `json-server` for local data storage and provides a form-based interface to manage tasks, including fields like title, description, category, start date, and due date.

Key features include:
- Task creation and editing
- Task deletion
- Task search functionality
- Calendar view for tasks
- Dark and light mode
- Form validation using Formik and Yup
- Styled with Tailwind CSS and Chakra UI for a responsive design

## Setup Instructions

Follow these steps to set up and run the app locally:

### 1. Clone the repository

```bash
git clone https://github.com/chibuezecharles/Task-Management-App.git
cd task-management-app

### 2. Install Dependencies, Install the necessary dependencies using npm or yarn.
npm install or yarn install
### 3. Run the development server using Vite:
npm run dev
This will start the development server on http://localhost:5173.

Libraries & Tools Used
React: A JavaScript library for building user interfaces.
Redux: A state management library for JavaScript applications.
TypeScript: A superset of JavaScript that provides static typing.
Vite: A fast build tool and development server.
Tailwind CSS: A utility-first CSS framework for creating custom designs.
Chakra UI: A component library for building accessible UIs.
Formik & Yup: Form handling and validation library.
json-server: A fake REST API server for rapid prototyping.
React Router: For routing and navigation within the app.







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
