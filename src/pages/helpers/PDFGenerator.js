import React from 'react';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const PDFGenerator = ({ retreatData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set document properties
    doc.setProperties({
      title: 'Lake of Dreams 2024 Fall Recovery Retreat',
      subject: 'Retreat Schedule and Assignments',
      author: 'Retreat Organizer',
      keywords: 'retreat, recovery, schedule',
      creator: 'PDF Generator'
    });

    // Add a title
    doc.setFontSize(20);
    doc.setTextColor(0, 102, 204);
    doc.text("Lake of Dreams 2024 Fall Recovery Retreat", 105, 15, null, null, "center");

    // Add a subtitle
    doc.setFontSize(12);
    doc.setTextColor(102, 102, 102);
    doc.text("Schedule and Assignments", 105, 22, null, null, "center");

    // Add content sections
    addSection(doc, "Leadership", [
      { label: "Chair", value: retreatData.chairName, phone: retreatData.chairPhone },
      { label: "Co-Chair", value: retreatData.coChairName, phone: retreatData.coChairPhone },
      { label: "Shadow", value: retreatData.shadowName, phone: retreatData.shadowPhone }
    ], 30);

    addSection(doc, "Friday Crew", [
      { label: "Crew Chief", value: retreatData.fridayCrewChief, phone: retreatData.fridayCrewChiefPhone },
      { label: "Crew Member 1", value: retreatData.fridayCrew1, phone: retreatData.fridayCrew1Phone },
      { label: "Crew Member 2", value: retreatData.fridayCrew2, phone: retreatData.fridayCrew2Phone },
      { label: "Crew Member 3", value: retreatData.fridayCrew3, phone: retreatData.fridayCrew3Phone }
    ], doc.lastAutoTable.finalY + 10);

    // Add more sections for Saturday, Sunday, etc.

    // Save the PDF
    doc.save("retreat_schedule.pdf");
  }

  const addSection = (doc, title, data, startY) => {
    doc.setFontSize(14);
    doc.setTextColor(0, 102, 204);
    doc.text(title, 14, startY);

    const tableData = data.map(item => [item.label, item.value, item.phone]);

    doc.autoTable({
      startY: startY + 5,
      head: [['Role', 'Name', 'Phone']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [0, 102, 204], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      margin: { top: 30, right: 14, bottom: 20, left: 14 },
    });
  }

  return (
    <button onClick={generatePDF}>Generate PDF</button>
  );
}

export default PDFGenerator;