import { useState } from "react";

const tabs = ["All users", "Administrator", "Manager", "Consultant"];

const UserGroups = () => {
  const [activeTab, setActiveTab] = useState("All users");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Groups</h2>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition-all text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Date Added</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 font-medium text-gray-800">Jane Smith</td>
              <td className="px-4 py-2 text-green-600">Active</td>
              <td className="px-4 py-2">Administrator</td>
              <td className="px-4 py-2">2025-07-01</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 font-medium text-gray-800">John Doe</td>
              <td className="px-4 py-2 text-red-600">Inactive</td>
              <td className="px-4 py-2">Manager</td>
              <td className="px-4 py-2">2025-06-20</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tab Status */}
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <p className="text-gray-600">
          Showing: <strong>{activeTab}</strong>
        </p>
      </div>
    </div>
  );
};

export default UserGroups;
