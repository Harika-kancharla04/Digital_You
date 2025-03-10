import React, { useRef } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import ResumeTemplate1 from "./ResumeTemplate1";
import ResumeTemplate2 from "./ResumeTemplate2";

const ResumeDownload = ({ selectedTemplate }) => {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    if (resumeRef.current) {
      toPng(resumeRef.current, { quality: 1 })
        .then((dataUrl) => {
          const pdf = new jsPDF("p", "mm", "a4");
          const imgWidth = 300; // A4 width in mm
          const imgHeight = 297; // A4 height in mm
          pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
          pdf.save("resume.pdf");
        })
        .catch((err) => {
          console.error("Failed to generate PDF:", err);
        });
    }
  };

  return (
    <div>
      <button className="download-btn" onClick={handleDownload}>
        Download Resume
      </button>
      {/* This div wraps the resume for capturing */}
      <div ref={resumeRef} className="resume-wrapper">
        {selectedTemplate === "template1" ? <ResumeTemplate1 /> : <ResumeTemplate2 />}
      </div>
    </div>
  );
};

export default ResumeDownload;
