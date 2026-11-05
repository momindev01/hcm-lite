import LogoutButton from "@/components/LogoutButton";
import DashboardGuard from "@/components/DashboardGuard";

export default function EmployeeDashboard() {
  return (
    <DashboardGuard allowedRole="employee">
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to your HCM Lite Employee Panel.
        </p>
        <div className="mt-6">
          <LogoutButton />
        </div>
      </main>
    </DashboardGuard>
  );
}