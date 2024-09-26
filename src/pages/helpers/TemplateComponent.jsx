import React, { useRef } from "react";
import Boathouse from "../../components/Boathouse";

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
        <Boathouse />
      </div>{" "}
      {/* This closing tag was missing */}
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
};

export default TemplateComponent;
