#  Dashboard UI Assignment – React + Tailwind CSS  

This repository contains the **Dashboard UI** built as part of the internship assignment.  
The project is developed using **React (TypeScript)** and styled with **Tailwind CSS**, ensuring a modern, clean, and fully responsive interface.  

The dashboard replicates the given design and includes **stats cards, interactive charts, traffic insights, notifications, and activity feed**, structured into modular React components for maintainability.  

---

##  Tech Stack  

- **React (TypeScript)** – UI development with type safety  
- **Tailwind CSS** – Utility-first styling for responsive layouts  
- **Recharts** – For Line, Pie, and Bar charts visualization  
- **Lucide Icons / React Icons** – For navigation & UI icons  
- **Vite** – Fast bundler for development & production  
- **Vercel** – Deployment platform  

---

##  Project Structure  

```bash
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
 ```
 ---
 
##  Features  

### 📌 Sidebar Navigation  
- Sections for **Dashboard, eCommerce, Projects, Blog**, and more.  

### 📌 Stats Overview Cards  
- Key metrics including:  
  -  Views  
  -  Visits  
  -  New Users  
  -  Active Users  
- Includes **trend indicators** for insights.  

### 📌 Charts Section  
-  **Line Chart** – User growth over time  
-  **Pie Chart** – Traffic distribution by location  
-  **Bar Chart** – Traffic by device  

### 📌 Right Sidebar  
- Notifications  
- Activity feed  
- Contacts list  

### 📌 Responsive Layout  
- Fully optimized for **desktop and mobile devices**.  

### 📌 Clean UI/UX  
- Built with **Tailwind CSS utilities** ensuring:  
  - Consistent spacing  
  - Modern color palette  
  - Accessible typography  

---

## ⚡ Getting Started  

Follow these steps to set up the project locally:  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/PrabhavNasa/React-User-Page-.git
cd React-User-Page-
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

### 4️⃣ Open in your browser
```bash
http://localhost:5173
```

---

##  Deployment  

The project is deployed using **Vercel** for fast and reliable hosting.  

  **Live Demo:** [React User Page](https://react-user-page.vercel.app/)  
  **GitHub Repository:** [React-User-Page](https://github.com/PrabhavNasa/React-User-Page-.git)

 ---
 
 ##  UI Preview  

![Dashboard UI Preview](<img width="1470" height="797" alt="Screenshot 2025-08-17 at 3 38 07 PM" src="https://github.com/user-attachments/assets/064dd1b1-b8cf-482d-9a7b-6bb4a8f31be2" />
)  

---



## Author  

**Prabhav Nasa**  
📧 Email: [nasaprabhav@gmail.com](mailto:nasaprabhav@gmail.com)  
🔗 GitHub: [PrabhavNasa](https://github.com/PrabhavNasa)  
🔗 LinkedIn: [prabhavnasa23](https://www.linkedin.com/in/prabhavnasa23)
