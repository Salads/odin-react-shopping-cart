import { useState } from 'react';

import ratingStar from '../assets/star-svgrepo-com.svg';

function ShopItem({data}) {

	return (
		<div className={`
			flex flex-col items-center 
			border-solid border-gray-400 border-2 rounded-xl
			max-w-96
			px-8 py-4
			bg-white
			gap-4
		`}>
			<img src={data.image} className='h-48 w-auto'/>
			<p className='text-center'>{data.title}</p>
			<div className='flex flex-row justify-around w-full'>
				<div className='flex flex-row gap-1'>
					<img src={ratingStar} className='size-4 self-center'/>
					<p>{data.rating.rate}</p>
					<p>({data.rating.count})</p>
				</div>
				<p>{data.category}</p>
			</div>
			<p className='flex-1 mb-6 max-h-48 overflow-clip'>{data.description}</p>
			<div className='flex flex-row justify-between w-full'>
				<p className='self-center'>${data.price}</p>
				<div className='flex flex-col'>
					<p>Quantity Here</p>
					<button>Add To Cart</button>
				</div>
			</div>
		</div>
	);
}

export default ShopItem;