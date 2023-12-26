import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';

const AboutMe = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [showFullText, setShowFullText] = useState(false);
	const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((currentImage + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentImage, images]);

	const toggleReadMore = () => {
		setShowFullText(!showFullText);
	};

	const toggleReadLess = () => {
		setShowFullText(false);
	};

	return (
		<div
			id='about'
			className='aboutMe bg-black w-full h-screen flex justify-between text-white'
		>
			<img
				src={images[currentImage]}
				alt='rhonak_images'
				className='w-full h-screen object-cover absolute lg:hidden opacity-30'
			/>
			<div className='relative left_section lg:w-1/2 flex flex-col justify-center m-4 p-4 gap-4'>
				<h1 className='text-2xl font-bold font-Playpensans text-teal-500'>
					About Me - Introduction
				</h1>
				<div className='overflow-auto flex flex-col gap-4 '>
					{showFullText ? (
						<>
							<p className=''>
								Meet Rhonak, a 21-year-old adventurer from the peaceful city of
								Mangalore. He's got an unstoppable spirit, like a fierce
								determination that helps him tackle any challenge that comes his
								way. For Rhonak, challenges are just steps on the journey of
								life.
							</p>
							<p className=''>
								What makes Rhonak special isn't just his love for adventure, but
								also his endless positivity, constant curiosity, and a real
								passion for having fun. To him, life isn't just about reaching
								goals; it's about collecting amazing stories along the way.
								Rhonak has a Bachelor's degree in Computer Applications from
								Alvas College, bringing some smarts to all his adventures.
							</p>
							<p className=''>
								He's not just an explorer; he's also a popular vlogger,
								capturing the exciting moments life throws at him. But then,
								life threw a curveball. Even though he had just started a job in
								Pune, Rhonak decided to go back to Mangalore.
							</p>
							<p className=''>
								He wanted to help the next generation of tech enthusiasts by
								running an IoT internship for Alvas BCA juniors. And then,
								everything changed. Right when he was about to head back to
								Pune, Rhonak's world was completely transformed by a
								life-changing bike accident.
							</p>
							<button
								className='text-blue-500 cursor-pointer'
								onClick={toggleReadLess}
							>
								Read Less
							</button>
						</>
					) : (
						<>
							<p className=''>
								Meet Rhonak, a 21-year-old adventurer from the peaceful city of
								Mangalore. He's got an unstoppable spirit, like a fierce
								determination that helps him tackle any challenge that comes his
								way. For Rhonak, challenges are just steps on the journey of
								life.
							</p>
							<p className=''>
								What makes Rhonak special isn't just his love for adventure, but
								also his endless positivity, constant curiosity, and a real
								passion for having fun. To him, life isn't just about reaching
								goals; it's about collecting amazing stories along the way.
								Rhonak has a Bachelor's degree in Computer Applications from
								Alvas College, bringing some smarts to all his adventures.
							</p>
							<button
								className='text-blue-500 cursor-pointer'
								onClick={toggleReadMore}
							>
								Read More
							</button>
						</>
					)}
				</div>
			</div>
			<div className='hidden lg:flex right_section w-1/2 opacity-80'>
				<img
					src={images[currentImage]}
					alt='rhonak_images'
					className='w-full h-full object-cover'
				/>
			</div>
		</div>
	);
};

export default AboutMe;
