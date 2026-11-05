export default function RoleSelector({ role, setRole }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Account Type
      </label>

      <div className="flex gap-3">

        <button
          type="button"
          onClick={() => setRole("employee")}
          className={`w-1/2 p-3 rounded-lg border ${
            role === "employee"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Employee
        </button>

        <button
          type="button"
          onClick={() => setRole("hr")}
          className={`w-1/2 p-3 rounded-lg border ${
            role === "hr"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          HR Specialist
        </button>

      </div>
    </div>
  );
}