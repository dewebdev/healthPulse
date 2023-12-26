import React from 'react';
import { FaYoutube, FaInstagram, FaPhone } from 'react-icons/fa';
import IntroVideo from '../assets/IntroVideo.mp4';

const Home = () => {
	const handleYoutubeClick = () => {
		// Open YouTube link in a new tab
		window.open('https://www.youtube.com/@rhonak', '_blank');
	};

	const handleInstagramClick = () => {
		// Open Instagram link in a new tab
		window.open(
			'https://www.instagram.com/rhonak/?utm_source=qr&igshid=MXUycm8xdjBrcTVmcw%3D%3D',
			'_blank'
		);
	};

	const handlePhoneClick = () => {
		// Trigger a phone call
		window.location.href = 'tel:+919663649577'; // Replace with your phone number
	};

	return (
		<div className='relative min-h-screen'>
			{/* Video Background with Audio */}
			<video
				className='absolute inset-0 w-full h-full object-cover z-0'
				autoPlay
				loop
				muted
			>
				<source src={IntroVideo} type='video/mp4' />
			</video>

			{/* Text Field in the Center */}
			<div className='absolute inset-0 flex items-center justify-center z-10'>
				<div className='bg-black bg-opacity-5 p-4 rounded-md'>
					<h1 className='text-4xl text-gray-400 text-center'>
						"Rhonak Prasanna: A Story of Resilience and Hope"
					</h1>
				</div>
			</div>

			{/* Social Media Buttons at Bottom Right */}
			<div className='absolute flex flex-col justify-center items-center top-4 right-4 z-10 space-y-4 '>
				<button
					className=' text-2xl text-white hover:text-blue-500'
					onClick={handlePhoneClick}
				>
					<FaPhone />
				</button>
				<button
					className='text-2xl text-white hover:text-red-500'
					onClick={handleYoutubeClick}
				>
					<FaYoutube />
				</button>
				<button
					className='text-2xl text-white hover:text-pink-500'
					onClick={handleInstagramClick}
				>
					<FaInstagram />
				</button>
			</div>

			{/* Scrolling Indicator in the Bottom Center */}
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10'>
				<a href='#about'>
					<div className='flex flex-col items-center'>
						<div className='mb-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='w-8 h-8 text-white'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 14l-7 7m0 0l-7-7m7 7V3'
								/>
							</svg>
						</div>
						<p className='text-white text-lg'>Scroll down</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Home;
