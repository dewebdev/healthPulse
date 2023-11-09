import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf"; // Import components from react-pdf
import pdfFile from "../assets/sample.pdf";

const DiagnosisAndAccident = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto.format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1461800919507-79b16743b257?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  ];

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
        className="w-full h-full object-cover absolute lg:hidden opacity-30"
      />
      <div className="relative right_section lg:w-1/2 flex flex-col justify-center m-4 p-4 gap-4 ">
        <h1 className="text-2xl font-Kenia">Revelation after the Accident</h1>
        <div className="overflow-auto flex flex-col gap-4 font-Playpen font-Playpensans">
          <p className="">
            "Following the accident, he was rushed to KMC Hospital in Mangalore,
            medical assessments revealed a critical condition that would forever
            alter his life. His creatinine level had spiked to a staggering 9.5,
            a level that was nothing short of critical. It was a shock, and it
            led to further investigations. What we discovered was both
            surprising and, in a way, a blessing in disguise. The accident
            hadn't damaged his kidneys, but it had uncovered a lifelong
            challenge."
          </p>
          <p className="">
            "Rhonak had been living with abnormally small kidneys since birth.
            As he grew, his kidneys struggled to cope with the demands of his
            adult body, ultimately leading to kidney failure. The accident,
            painful as it was, became the turning point. Without it, we might
            never have known about this hidden condition until it was too late.
            It's a stark reminder that sometimes life's challenges, while
            excruciating, reveal deeper truths. Rhonak, a fit and proactive
            individual, had carried this hidden burden, showing that appearances
            can often be deceiving. In addition to the kidney diagnosis, the
            accident also caused some minor spine fractures and nerve damage,
            resulting in agonizing pain that Rhonak endured without painkillers
            due to his CKD condition."
          </p>
          <p className="">
            "And then, life took an unexpected turn. As he was embarking on a
            new chapter, recently started in a job in Pune, Rhonak decided to
            return to Mangalore to nurture the next generation of tech
            enthusiasts by conducting an IoT internship for Alvas BCA juniors."
          </p>
          <p className="">
            "He was advised to be on bed rest for two months to heal. The
            accident, while unforeseen and painful, served as a critical moment
            of revelation and the start of a remarkable journey of resilience
            and transformation."
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
              <Page pageNumber={pageNumber} width={pageWidth} />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisAndAccident;
