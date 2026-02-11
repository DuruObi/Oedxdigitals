import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Projects from "./pages/dashboard/Projects";
import Profile from "./pages/dashboard/Profile";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Client dashboard pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import Projects from "./pages/dashboard/Projects";
import Profile from "./pages/dashboard/Profile";

// Admin dashboard pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminInvoices from "./pages/admin/AdminInvoices";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Client dashboard - protected */}
          <Route path="/dashboard" element={
            <ProtectedRoute><DashboardHome /></ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute><Projects /></ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          } />

          {/* Admin dashboard - protected by role */}
          <Route path="/admin" element={
            <AdminRoute><AdminDashboard /></AdminRoute>
          } />
          <Route path="/admin/projects" element={
            <AdminRoute><AdminProjects /></AdminRoute>
          } />
          <Route path="/admin/messages" element={
            <AdminRoute><AdminMessages /></AdminRoute>
          } />
          <Route path="/admin/invoices" element={
            <AdminRoute><AdminInvoices /></AdminRoute>
          } />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
