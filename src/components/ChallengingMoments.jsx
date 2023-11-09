import React, { useState } from "react";
import Modal from "./Modal";

const ChallengingMoments = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // PDF URL or path
  const pdfSrc = "/path-to-your-pdf-file.pdf"; // Replace with your PDF file's path

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" p-8  shadow-md bg-black text-gray-300 h-screen w-full overflow-auto">
      <h2 className="text-3xl font-Kenia mb-4">
        A Critical Turn in the Journey
      </h2>
      {/* Image Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Dialysis Photos</h3>
        <img
          src="/path-to-your-dialysis-image.jpg" // Replace with the actual image path
          alt="Dialysis Photos"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col gap-5 font-Playpensans">
        <p>
          "After the accident, there seemed to be a glimmer of hope. Rhonak was
          discharged from the hospital after a few weeks. His creatinine levels
          had seen a slight improvement, going from a shocking 14 down to 11,
          and eventually to 10. At that point, it appeared that there might be
          two paths forward: a life tethered to regular dialysis or the best
          option—kidney transplant. Yet, since Rhonak still showed no visible
          symptoms of his kidney failure, a decision was made to wait and
          explore the possibility of medication.
        </p>
        <p>
          During this time, Rhonak adopted a new diet tailored to his CKD
          condition and was prescribed a host of medications. He felt relatively
          fine, albeit a bit weak. In the span of the next three months, his
          creatinine levels consistently hovered between 9.5 and 12, offering a
          glimmer of hope.
        </p>
        <p>
          However, just when things seemed to be looking up, his creatinine
          level spiked from 11.3 to a staggering 23 in just one week. Suddenly,
          all the symptoms associated with kidney failure surfaced—vomiting,
          body swelling, breathlessness. It was undoubtedly the most trying week
          of his life. Rhonak struggled to eat and lost his appetite. He became
          very weak, to the point where even drinking water became a challenge.
          Anything that entered his mouth came right back out.
        </p>
        <p>
          Then came a time when he could barely move, let alone walk. It was a
          moment of reckoning when he was rushed to the hospital, and the
          doctor's examination and reports revealed a critical state. There was
          no more room for medications; dialysis was the only option. Waiting
          any longer would have been catastrophic; the doctor mentioned the
          looming risk of a heart attack if further delay occurred. This news
          was a devastating blow to Rhonak, his family, and all his loved ones.
        </p>
        <p>
          Later that same day, the first session of dialysis began—a grueling
          five days in a row. The following week, the thrice-a-week dialysis
          routine was initiated."
        </p>
        {/* Include the content you provided here */}
      </div>

      {/* Button to View Report */}
      <div className="mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          View Report
        </button>
      </div>

      {/* Render the Modal component */}
      <Modal isOpen={isModalOpen} toggleModal={closeModal} pdfSrc={pdfSrc} />
    </div>
  );
};

export default ChallengingMoments;
