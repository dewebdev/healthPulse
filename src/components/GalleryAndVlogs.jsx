// GalleryAndVlogs.js

import React from 'react';

const GalleryAndVlogs = () => {
	return (
		<div className='container mx-auto p-4 font-Playpensans text-center '>
			<h2 className='text-3xl font-bold mb-8 text-center font-ShadowsIntoLight text-teal-500'>
				Gallery and Vlogs
			</h2>
			<p className='mb-8'>
				Welcome to a visual journey that offers a unique perspective into
				Rhonak's life, experiences, and his unwavering spirit.
			</p>

			<p className='mb-8'>
				Click on the images and video thumbnails to connect with Rhonak's
				journey on a personal level. Your support and presence in this visual
				journey mean a lot to us.
			</p>

			<div className='flex flex-col lg:flex-row gap-4 m-2 '>
				<iframe
					className='w-full lg:w-1/3'
					height='315'
					src='https://www.youtube.com/embed/CFutaryxkBg?si=0eQEYD0D_X14-w0L'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
				<iframe
					className='w-full lg:w-1/3'
					height='315'
					src='https://www.youtube.com/embed/YvxiakpXVf4?si=DWnw2X09_JiwcuY5'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
				<iframe
					className='w-full lg:w-1/3'
					height='315'
					src='https://www.youtube.com/embed/GJP4avkWwKU?si=EC_NPJustT39Dnun'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
			</div>
			<p>
				Thank you for visiting this website and supporting Rhonak on his
				journey. Your presence and support mean the world to us.
			</p>
		</div>
	);
};

export default GalleryAndVlogs;
