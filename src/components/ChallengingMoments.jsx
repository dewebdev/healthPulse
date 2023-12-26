import React, { useState } from 'react';
import Modal from './Modal';
import hospitalimg1 from '../assets/hospitalimg1.jpeg';

const ChallengingMoments = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className='flex flex-col lg:flex-row lg:gap-10 h-full lg:h-screen w-full shadow-md bg-black text-gray-300 p-5 '>
			<h2 className='text-3xl font-Playpensans mb-4 font-bold text-teal-500 '>
				A Critical Turn in the Journey
			</h2>
			<img
				src={hospitalimg1} // Replace with the actual image path
				alt='Dialysis Photos'
				className='lg:w-1/2  rounded-lg shadow-md'
			/>
			<div className=' flex flex-col gap-5 my-5 lg:my-auto text-center md:text-left '>
				<p>
					After the accident, things seemed a bit hopeful. Rhonak left the
					hospital a few weeks later. His creatinine levels, which were
					initially really bad at 14, got a bit better, going down to 11, and
					eventually to 10. There were two possible paths: either he would need
					regular dialysis or the best option, a kidney transplant. But because
					Rhonak didn't show obvious signs of kidney failure, they decided to
					wait and try out medications.
				</p>
				<p>
					During this time, Rhonak changed his diet to fit his kidney condition
					and took a bunch of medicines. He felt okay, though a bit weak. For
					the next three months, his creatinine levels stayed between 9.5 and
					12, giving some hope.
				</p>
				<p>
					Just when it seemed like things were getting better, his creatinine
					level shot up from 11.3 to a really high 23 in just one week. All the
					signs of kidney failure showed up—vomiting, body swelling, difficulty
					breathing. It was the toughest week for Rhonak. He couldn't eat and
					lost his appetite. He became so weak that even drinking water was
					hard. Whatever went into his mouth came right back out.
				</p>
				<p>
					There was a point when he could hardly move, let alone walk. He had to
					go to the hospital, and the doctor said it was critical. Medications
					weren't enough; dialysis was the only choice. Waiting longer could
					have been really bad; the doctor talked about the risk of a heart
					attack if they waited. This news was heartbreaking for Rhonak, his
					family, and all his loved ones.
				</p>
				<p>
					On the same day, he started the first session of dialysis—a tough five
					days in a row. The next week, they started doing dialysis three times
					a week.
				</p>
			</div>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={openModal}
			>
				View Report
			</button>
			{/* Include the content you provided here */}
			{/* Render the Modal component */}
			<Modal isOpen={isModalOpen} toggleModal={closeModal} />
		</div>
	);
};

export default ChallengingMoments;
