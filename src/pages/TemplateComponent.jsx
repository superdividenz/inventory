import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TemplateComponent = () => {
  const componentRef = useRef();

  const handleDownloadPdf = async () => {
    const canvas = await html2canvas(componentRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();

    // Add the image to the PDF and save it
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("download.pdf");
  };

  return (
    <div className="container">
      <div
        ref={componentRef}
        className="template"
        style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
      >
        <h1>My Template</h1>
        <p>This is a sample template to capture with html2canvas.</p>
        <p>Feel free to customize the content and styles!</p>
      </div>
      <button onClick={handleDownloadPdf} style={{ marginTop: "20px" }}>
        Download as PDF
      </button>
    </div>
  );
};

export default TemplateComponent;
