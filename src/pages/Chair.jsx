import React, { useState } from "react";
import { jsPDF } from "jspdf";
import RetreatRocks from "../img/RetreatRocks.png";

const Chair = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${formData.name}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    // Add more form data to the PDF as needed
    doc.save("retreat-schedule.pdf");
  };

  return (
    <div className="container mx-auto p-4">
      <img
        src={RetreatRocks}
        alt="Retreat Banner"
        className="w-2/3 h-auto mb-6 rounded-lg"
      />

      <h1 className="text-3xl font-bold mb-6">Retreat Schedule</h1>

      {/* Form for user input */}
      <form className="mb-8">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="mb-2 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-2 p-2 border rounded"
        />
        <button
          type="button"
          onClick={exportToPDF}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Export to PDF
        </button>
      </form>

      {/* Existing schedule content */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Friday</h2>
        {/* ... (rest of the Friday schedule) */}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Saturday</h2>
        {/* ... (rest of the Saturday schedule) */}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sunday</h2>
        {/* ... (rest of the Sunday schedule) */}
      </div>
    </div>
  );
};

export default Chair;
