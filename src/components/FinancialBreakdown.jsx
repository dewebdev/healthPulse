// FinancialBreakdown.js

import React from 'react';

const FinancialBreakdown = () => {
	// Monthly Costs
	const monthlyCostsSubset = monthlyCosts.slice(0, 5); // Selecting the specified costs
	const monthlyTotal = monthlyCostsSubset.reduce(
		(total, item) => total + parseCurrency(item.value),
		0
	);

	return (
		<div className='container mx-auto p-4 '>
			<h2 className='text-3xl font-bold mt-8 text-center font-ShadowsIntoLight text-teal-500'>
				Financial Breakdown
			</h2>

			{/* Monthly Costs */}
			<div className='mb-8 text-black'>
				<h3 className='text-2xl font-bold mb-4 mt-10 font-ShadowsIntoLight text-white'>
					Monthly Costs
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{monthlyCostsSubset.map((item) => (
						<div key={item.label} className='bg-white p-4 rounded-md shadow-md'>
							<p className='text-lg font-bold mb-2'>{item.label}</p>
							<p>{item.value}</p>
						</div>
					))}
				</div>
				{/* Total of Selected Monthly Costs */}
				<div className='mt-10 text-xl font-bold text-center font-ShadowsIntoLight text-teal-500'>
					Total approx Monthly Costs: ₹{monthlyTotal}
				</div>
			</div>

			{/* Transplant Costs */}
			<div>
				<h3 className='text-2xl font-bold mb-4 font-ShadowsIntoLight '>
					Transplant Costs
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black'>
					{transplantCosts.map((item) => (
						<div key={item.label} className='bg-white p-4 rounded-md shadow-md'>
							<p className='text-lg font-bold mb-2'>{item.label}</p>
							<p>{item.value}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FinancialBreakdown;

// Utility function to parse currency values and convert to numbers
function parseCurrency(currency) {
	return parseFloat(currency.replace('₹', '').replace(',', ''));
}

const monthlyCosts = [
	{ label: 'Dialysis (12 sessions)', value: '₹18,720' },
	{ label: 'Dialyzer change (every 10 days)', value: '₹3,600' },
	{ label: 'Medication', value: '₹15,000' },
	{ label: 'Injection (Monthly)', value: '₹9,200' },
	{ label: 'Blood tests and diagnostics', value: '₹7,000' },
];

const transplantCosts = [
	{ label: 'Surgical procedure', value: 'Cost varies' },
	{ label: 'Post-operative care', value: 'Cost varies' },
	{ label: 'Immunosuppressant medications', value: 'Cost varies' },
	{ label: 'Finding a suitable donor', value: 'Cost varies' },
	{ label: 'Medical assessments', value: 'Cost varies' },
];
