# HRIS-Permission-Dashboard-UI
A modern Human Resources Information System (HRIS) dashboard UI built from React, TypeScript, Vitee and Tailwind CSS.

## ✨ Features
- 📂 Molecular fi;e structer (components, layouts, pages)
- 📑 Siderbar navigation with icons
- 🧭 Dashboard layout wrapper
- 👥 User Groups tabbed interface
- 📋 Responsive and styled user table
- 💅 Built with utility-first Tailwind CSS

  ----

## 🔧 Tech Stack

- [React] (https://reactjs.org/)

- [TypeScript] (https://www.typescriptlang.org/)

- [Tailwind CSS] (https://tailwindcss.com/)

- [Vite] (https://vitejs.dev/)

- [React Icons] (https://react-icons.github.io/react-icons).

  ----

## ✅ Project Folder Structer

hris-permission-ui/ │

├── public/

│ └── vite.svg # Vite default asset (optional) │ ├── src/

│ ├── assets/ # Images, logos, icons (optional)

│ │ └── logo.svg

│ │ ├── components/ # Reusable UI components

│ │ ├── Sidebar.tsx

│ │ └── Topbar.tsx # (Add later) │ │ ├── layouts/ # Layout wrappers

│ │ └── DashboardLayout.tsx │ │ ├── pages/ # Route-level views

│ │ └── UserGroups.tsx │ │ ├── App.tsx # Main app wrapper

│ ├── App.css # Global base styles

│ ├── index.css # Tailwind directives

│ └── main.tsx # Entry point

│ ├── .gitignore

├── index.html # Vite entry

├── package.json

├── postcss.config.js

├── tailwind.config.js

├── tsconfig.json

└── README.md


## 🧠 Notes:

  - components/ -> for resuable building blocks like Sidebar, Tabs, UserRow, Button, etc.
  - layouts/ -> holds full-pageb wrappers(e.g., DashboardLayout wraps sidebar +content)
  - pages/ -> top level screen logic, one file per route/view
  - assests/ -> any custo,e icons, images, SVGS( these are optional for now)
---
## 🚀 Getting Started

Clone the repo:

1. git clone https://github.com/alirazi1992/hris-permission-ui.git
```bash
cd hris-permisssion-ui
```
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```
---
## ✅ Next Steps?
  
  - Add a `Topbar.tsx`

  - Exract table rows to a `UserRow` component

  - Add routing with `react-router-dom` for multiple pages
---
## 📸 Screenshots
Coming Soon after full UI components and functionality.
---
## 🧠 Author
Ali Razi - LinkedIn: linkdin.com/in/alirazi1992
---
## 🏗️ Status

✅ UI foundation ready 
🚧 More features coming soon: filters, invite model, table logic, backend integration
