# Activity Centre Dashboard

A modern **React-based Activity Centre Dashboard** built to replicate enterprise-style financial workflow interfaces. The dashboard provides a clean card-based layout to monitor **NAV workflows, capital events, reports, and payments** in one place.

---

# 🚀 Overview

This project recreates a professional **Activity Centre Dashboard** interface with:

* Top Navigation Bar
* Filter Chips & Search
* Workflow Dashboard Cards
* Styled Tables with Status Badges
* Progress Bars & Checkpoints
* Responsive Card Layout

The UI is designed to match **modern enterprise dashboard standards**.

---

# ✨ Features

* 📊 NAV Overview table with progress bars and checkpoint tags
* 🔄 Other Workflows card with status pills
* 💰 Capital Events table
* 📄 Reports table
* 💳 Payments table
* 🔍 Custom topbar and filter bar

---

# 🛠 Tech Stack

* React
* Vite
* CSS
* Material UI
* JSON (Mock Data)

---

# 📁 Project Structure

```bash
src/
  components/
    Topbar.jsx
    FilterBar.jsx
    NavOverviewTable.jsx
    OtherWorkflows.jsx
    CapitalEvents.jsx
    Reports.jsx
    Payments.jsx
  data/
    data.json
  pages/
    Dashboard.jsx
  styles/
    global.css
    header.css
    dashboard.css
  App.jsx
  main.jsx
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

# 📦 Build for Production

```bash
npm run build
```

Preview Production Build:

```bash
npm run preview
```

---

# 🧠 Usage

The dashboard displays sample financial workflow data:

## NAV Workflows

Shows workflow progress and checkpoint tracking

## Other Workflows

Displays report packs and completion status

## Capital Events

Lists capital call activity

## Reports

Shows accounting report status

## Payments

Displays payment entries and approval state

You can replace mock data in:

```
src/data/data.json
```

with your backend API.

---

# 🎨 Customization

You can customize:

* Colors → `src/styles/header.css`
* Layout → `src/styles/dashboard.css`
* Data → `src/data/data.json`
* Navigation → `Topbar.jsx`
* Tables → Individual components

---

# 🤝 Contributing

1. Fork repository
2. Create branch
3. Make changes
4. Submit pull request

---

# 👨‍💻 Author

**Vedant Kherade**
---

# ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
