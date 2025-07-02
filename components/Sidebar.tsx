import {
  FaHome,
  FaUserTie,
  FaUsers,
  FaBriefcase,
  FaMoneyBill,
  FaCog,
} from "react-icons/fa";

const navItems = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaUserTie />, label: "Clients" },
  { icon: <FaUsers />, label: "Employees" },
  { icon: <FaBriefcase />, label: "Jobs" },
  { icon: <FaUsers />, label: "User Groups", active: true },
  { icon: <FaMoneyBill />, label: "Payroll" },
  { icon: <FaCog />, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-700 text-white flex flex-col p-6">

      <h1 className="text-xl font-bold mb-10 tracking-wide">Labourlink</h1>

      <nav className="flex flex-col gap-2 text-sm font-medium">
        {navItems.map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
              active
                ? "bg-blue-900 font-semibold"
                : "hover:bg-blue-600 text-white/90"
            }`}
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;



