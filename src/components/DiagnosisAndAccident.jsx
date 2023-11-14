import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf"; // Import components from react-pdf
import pdfFile from "../assets/pre-dialysis.pdf";
import hospitalimg2 from "../assets/hospitalimg2.jpeg";
import hospitalimg3 from "../assets/hospitalimg3.jpg";

const DiagnosisAndAccident = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hospitalimg2, hospitalimg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(null);

  const openPdf = () => {
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setIsPdfOpen(false);
  };

  const downloadPdf = () => {
    // Create a link element and trigger a click to download the PDF file
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Old Medical Report";
    link.click();
  };

  const handleResize = () => {
    // Update page width based on screen width
    if (window.innerWidth < 768) {
      setPageWidth(355); // Adjust width for smaller screens
    } else {
      setPageWidth(740); // Default width for larger screens
    }
  };

  useEffect(() => {
    handleResize(); // Set initial page width
    window.addEventListener("resize", handleResize); // Listen for screen size changes
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on unmount
    };
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div className="aboutMe bg-black w-full h-screen flex justify-between text-white ">
      <div className="hidden lg:flex left_section w-1/2 opacity-80">
        <img
          src={images[currentImage]}
          alt="hospital_images"
          className="w-full h-full object-cover"
        />
      </div>
      <img
        src={images[currentImage]}
        alt="hospital_images"
        className="w-full h-screen object-cover absolute lg:hidden opacity-30"
      />
      <div className="relative right_section lg:w-1/2 flex flex-col justify-center m-4 p-4 gap-4 ">
        <h1 className="text-2xl font-Playpensans font-bold">
          Revelation after the Accident
        </h1>
        <div className="overflow-auto  flex flex-col gap-4 font-Playpen font-Playpensans">
          <p className="">
            After the accident, Rhonak got rushed to KMC Hospital in Mangalore.
            The doctors found out something serious that would change his life
            forever. His creatinine level shot up to 9.5, which is really bad.
            It was a shock, and they had to dig deeper to figure out what was
            going on. Surprisingly, the accident didn't hurt his kidneys, but it
            uncovered a lifelong problem.
          </p>
          <p className="">
            Turns out, Rhonak had small kidneys from the time he was born. As he
            grew up, his kidneys couldn't handle the needs of his adult body,
            and that led to kidney failure. The accident, painful as it was,
            turned out to be a silver lining. If it hadn't happened, they might
            not have known about this issue until it was too late. It's a
            reminder that life's challenges, even though they hurt, sometimes
            reveal important truths. Rhonak, who seemed fit and active, had been
            carrying this hidden problem. It goes to show that looks can be
            deceiving. The accident also caused some small spine fractures and
            nerve damage, bringing Rhonak a lot of pain, which he had to bear
            without painkillers because of his kidney condition.
          </p>

          <p className="">
            The doctors told him to take it easy for two months to heal. The
            accident, though unexpected and painful, turned out to be a crucial
            moment that revealed a lot and marked the beginning of a remarkable
            journey of resilience and transformation.
          </p>
        </div>

        <button
          onClick={openPdf}
          className="bg-blue-500   text-white px-4 py-2 rounded"
        >
          View Old Diagnosis Report
        </button>
        <button
          onClick={downloadPdf}
          className="bg-green-500  text-white px-4 py-2 rounded"
        >
          Download Old Diagnosis Report
        </button>
      </div>
      {isPdfOpen && (
        <div className="pdf-iframe absolute lg:w-1/2 w-screen h-screen overflow-auto ">
          <div className=" flex flex-col text-black ">
            {/* Use Tailwind CSS classes to center the PDF viewer */}
            <button
              onClick={closePdf}
              className="bg-red-500 text-white px-4 py-2  w-full top-0  z-10 sticky"
            >
              Close PDF
            </button>
            <Document
              file={pdfFile}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {[...Array(numPages)].map((_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={pageWidth}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisAndAccident;
