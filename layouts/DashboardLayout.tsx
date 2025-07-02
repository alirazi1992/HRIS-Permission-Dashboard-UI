// src/layouts/DashboardLayout.tsx

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-blue-700 text-white flex flex-col p-6">
        <h1 className="text-xl font-bold mb-10 tracking-wide">Labourlink</h1>
        {/* Sidebar content */}
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-white min-h-screen p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout; // ✅ Add this line
