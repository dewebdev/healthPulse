// ContactPage.js

import React from 'react';

const ContactPage = () => {
	return (
		<div className='container mx-auto p-4 text-center text-black'>
			<div className='bg-gray-200 p-6 rounded-lg shadow-md'>
				<h2 className='text-3xl font-bold mb-8 text-center font-ShadowsIntoLight'>
					Contact Us
				</h2>

				<p className='mb-8'>
					If you have any questions, wish to share words of encouragement, or
					want to get in touch with us, please feel free to reach out. We
					appreciate your support and value your thoughts.
				</p>

				<div className='mb-8'>
					<h3 className='text-xl font-bold mb-2'>Contact Information</h3>
					<p>
						Email:{' '}
						<a
							href='mailto:rhonakshine+support@gmail.com'
							className='text-blue-500'
						>
							Click Here To Mail Me
						</a>
					</p>
				</div>

				<p>
					We're here to listen and to connect with you. Your messages mean the
					world to us, and we'll do our best to respond as promptly as possible.
				</p>

				<p>
					Thank you for being a part of this journey. Your support keeps us
					moving forward with hope and determination.
				</p>
			</div>
		</div>
	);
};

export default ContactPage;
