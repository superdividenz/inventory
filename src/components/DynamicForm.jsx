import React, { useState } from "react";

const DynamicForm = () => {
  const [rows, setRows] = useState([{ name: "", phone: "", email: "" }]);

  const addRow = () => {
    setRows([...rows, { name: "", phone: "", email: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full px-2 py-1 border rounded"
                  placeholder={`Name ${index + 1}`}
                  value={row.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="tel"
                  className="w-full px-2 py-1 border rounded"
                  placeholder={`Phone Number ${index + 1}`}
                  value={row.phone}
                  onChange={(e) => handleChange(index, "phone", e.target.value)}
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="email"
                  className="w-full px-2 py-1 border rounded"
                  placeholder={`Email ${index + 1}`}
                  value={row.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        + Add Row
      </button>
    </div>
  );
};

export default DynamicForm;
