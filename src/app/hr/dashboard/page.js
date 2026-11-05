import LogoutButton from "@/components/LogoutButton";
import DashboardGuard from "@/components/DashboardGuard";

export default function HRDashboard() {
  return (
    <DashboardGuard allowedRole="hr">
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">HR Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the HCM Lite HR Panel.
        </p>
        <div className="mt-6">
          <LogoutButton />
        </div>
      </main>
    </DashboardGuard>
  );
}