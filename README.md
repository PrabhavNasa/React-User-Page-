Dashboard UI Assignment – React + Tailwind CSS
This repository contains the Dashboard UI built as part of the internship assignment. The project is developed using React (TypeScript) and styled with Tailwind CSS, ensuring a modern, clean, and fully responsive interface.

The dashboard replicates the given design and includes stats cards, interactive charts, traffic insights, notifications, and activity feed, structured into modular React components for maintainability.

 Tech Stack
React (TypeScript) – UI development with type safety

Tailwind CSS – Utility-first styling for responsive layouts

Recharts – For Line, Pie, and Bar charts visualization

Lucide Icons / React Icons – For navigation & UI icons

Vite – Fast bundler for development & production

Vercel – Deployment platform

Project Structure
pgsql
Copy
Edit
src/
 ├── components/
 │    ├── charts/                 # Charts components
 │    │     ├── LineChart.tsx
 │    │     ├── PieChart.tsx
 │    │     ├── TrafficByDevice.tsx
 │    │     └── TrafficList.tsx
 │    │
 │    ├── ChartsSection.tsx       # Wrapper for charts
 │    ├── Header.tsx              # Top navigation bar
 │    ├── Layout.tsx              # Main layout wrapper
 │    ├── RightSidebar.tsx        # Notifications & contacts
 │    ├── Sidebar.tsx             # Left sidebar navigation
 │    └── StatsCards.tsx          # Cards showing key stats
 │
 ├── App.tsx                      # Root application component
 ├── main.tsx                     # Entry point
 ├── index.css                    # Global Tailwind styles
 ├── vite-env.d.ts                # Vite TypeScript env types
 │
 ├── package.json                 # Dependencies
 ├── tailwind.config.js           # Tailwind config
 ├── postcss.config.js            # PostCSS config
 └── eslint.config.js             # ESLint config
 Features
 Sidebar Navigation – With sections for Dashboard, eCommerce, Projects, Blog, etc.

 Stats Overview Cards – Key metrics like Views, Visits, New Users, Active Users with trends

 Charts Section –

 Line Chart → User growth over time

 Pie Chart → Traffic distribution by location

 Bar Chart → Traffic by device

 Right Sidebar – Notifications, activities, and contacts list

 Responsive Layout – Optimized for desktop and mobile devices

 Clean UI/UX – Tailwind CSS utilities for consistent spacing, colors, and typography

 Getting Started
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/React-User-Page.git
cd React-User-Page
Install dependencies

bash
Copy
Edit
npm install
Start development server

bash
Copy
Edit
npm run dev
Open in browser

 arduino
 Copy
 Edit
 Deployment
 Hosted Link → https://react-user-page.vercel.app/
 GitHub Repo → React-User-Page

 UI Preview

Author
 Prabhav Nasa
 Email: nasaprabhav@gmail.com
 LinkedIn: linkedin.com/in/prabhavnasa23
