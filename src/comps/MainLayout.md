# 🧱 MainLayout Component

The `MainLayout` component is the top-level layout used across all major routes. It ensures consistent UI structure by accepting three main building blocks of a page: `aside`, `toolbar`, and `body`.

---

## ✅ Purpose

To provide a **reusable**, **clean**, and **uniform layout** that can be used as the root structure for every primary route in the application.

---

## 🧩 Props

| Prop     | Type     | Required | Description                            |
|----------|----------|----------|----------------------------------------|
| `aside`  | `node`   | ✅ Yes    | Component to render in the sidebar     |
| `toolbar`| `node`   | ✅ Yes    | Component to render at the top (header/tool section) |
| `body`   | `node`   | ✅ Yes    | Main content to render in the page     |

---

## 🧪 Example Usage

```jsx
import MainLayout from './MainLayout';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Dashboard from './Dashboard';

function DashboardPage() {
  return (
    <MainLayout
      aside={<Sidebar />}
      toolbar={<TopBar />}
      content={<Dashboard />}
    />
  );
}

---

## Styling CSS

aside, content and toolbar will be the order.
these three sections will be on each others side
