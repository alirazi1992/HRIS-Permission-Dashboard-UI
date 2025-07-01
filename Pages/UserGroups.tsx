import { useState } from "react";

const tabs = ["All users", "Administrator", "Manager", "Consultant"];

const UserGroups = () => {
  const [activeTab, setActiveTab] = useState("All users");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Groups</h2>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Date Added</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample rows will go here */}
          </tbody>
        </table>
      </div>

      {/* Tab status below */}
      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <p className="text-gray-600">
          Showing: <strong>{activeTab}</strong>
        </p>
      </div>
    </div>
  );
};

export default UserGroups;
