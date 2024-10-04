import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";


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
// PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Retreat Roster", 14, 22);

    doc.autoTable({
      startY: 30,
      head: [["Name", "Phone Number", "Email"]],
      body: rows.map(row => [row.name, row.phone, row.email]),
      theme: "grid",
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    doc.save("retreat_roster.pdf");
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
      <div className="mt-4 flex justify-between">
        <button
          onClick={addRow}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add Row
        </button>
        <button
          onClick={generatePDF}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Print PDF
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
