import {FaBell} from "react-icons/fa";

const Topbar = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">User Groups</h2>

            <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-black transition">
                    <FaBell size={18} />
                </button>
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
            </div>
        </div>
    );
};

export default Topbar;