import LogoutButton from "@/components/LogoutButton";
import DashboardGuard from "@/components/DashboardGuard";

export default function AdminDashboard() {
  return (
    <DashboardGuard allowedRole="admin">
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the HCM Lite Admin Panel.
        </p>
        <div className="mt-6">
          <LogoutButton />
        </div>
      </main>
    </DashboardGuard>
  );
}