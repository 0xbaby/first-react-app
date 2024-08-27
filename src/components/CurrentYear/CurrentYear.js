import React from 'react';
import './CurrentYear.css';

export const CurrentYear = () => {
	const date = new Date();
	const formattedDate = date.getFullYear();

	return (
		<div className='header'>
			{formattedDate}
		</div>
	);
}
