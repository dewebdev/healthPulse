import React from 'react';
import QRCodeImage from '../assets/qr.png'; // Replace with the actual path to your QR code image

const FundraiserPage = () => {
	return (
		<div className='h-full m-5 text-center'>
			<h2 className='text-3xl font-bold mb-8 mt-8 text-center font-ShadowsIntoLight text-teal-500'>
				Fundraiser
			</h2>

			<p className='mb-8 bg-gray-50 text-black rounded p-2'>
				Your support is crucial for Rhonak's medical journey, covering ongoing
				treatment and transplant expenses. Contributions through Impact Guru are
				deeply appreciated, but occasional delays and additional expenses may
				not be fully covered—your kindness makes a significant difference.
			</p>

			<div className='mb-8 flex flex-col lg:flex-row gap-4 items-center'>
				{/* Donation Options */}
				<div className='lg:w-2/3'>
					<h3 className='text-2xl font-bold mb-4 font-ShadowsIntoLight text-teal-500'>
						Donation Options
					</h3>

					{/* Impact Guru Fundraiser */}
					<div className='mb-6'>
						<h4 className='text-xl font-bold mb-2 '>
							1. Impact Guru Fundraiser
						</h4>
						<p>
							We have an ongoing fundraiser on Impact Guru that covers most of
							Rhonak's medical expenses. Your contributions to this fundraiser
							are immensely appreciated.{' '}
							<a
								href='https://www.impactguru.com/fundraiser/help-rhonak-prasanna'
								target='_blank'
								className='text-blue-500'
							>
								Donate Now
							</a>
						</p>
					</div>

					{/* Personal Bank Donation */}
					<div>
						<h4 className='text-xl font-bold mb-2'>
							2. Personal Bank Donation
						</h4>
						<p>
							For those who wish to extend their generosity through Rhonak's
							personal bank account, your support is equally cherished. Your
							contributions ensure we can meet immediate needs and address
							unforeseen expenses.
						</p>
						<p className='mb-2 bg-gray-50 rounded text-black p-4 mt-6'>
							Account Name: RHONAK PRASANNA
							<br />
							Account Number: 32112720606
							<br />
							IFSC Code: SBIN0007903
							<br />
							Bank: STATE BANK OF INDIA, KINNIGOLI BRANCH
							<br />
							SWIFT Code: SBININBB
							<br />
							Bank Code: 007903
						</p>
					</div>
				</div>

				{/* QR Code Section */}
				<div className='lg:w-1/3'>
					<h3 className='text-2xl font-bold mb-4 font-ShadowsIntoLight text-teal-500'>
						QR Code for Payment
					</h3>
					<p>Scan the QR code below for easy and quick payments:</p>
					<img
						src={QRCodeImage}
						alt='QR Code for Payment'
						className='mx-auto mt-4 mb-4 w-[350px]'
					/>
					<p>
						Thanks for your support through Impact Guru or directly to Rhonak.
						Your contribution is a blessing that keeps our spirits high.
						Grateful for your vital role in this journey.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FundraiserPage;
