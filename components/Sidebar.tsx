import { FaUsers, FaBriefcase, FaUserTie, FaHome, FaCog, FaMoneyBill } from 'react-icons/fa';

const Sidebar = () => {
    return(
        <aside className='w-64 h-screen bg-[#0F172A] text-white flex-col p-4'>
            <h1 className='text-xl font-bold mb-8'>LabourLink</h1>
            <nav className='flex flex-col gap-4 text-sm'>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2'><FaHome />Home</a>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2'><FaUserTie />Clinets</a>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2'><FaUsers />Employees</a>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2'><FaBriefcase />Jobs  </a>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2 font-semmibold text-blue-400'>User Groups</a>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2'><FaMoneyBill /> Payroll</a>
                <a href='#' className='hover:text-blue-400 flex items-center gap-2'><FaCog /> Settings</a>
            </nav>
        </aside>
    );
};

export default Sidebar;