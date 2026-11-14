import { Link } from 'react-router';
import cartSVG from '../assets/cart.svg';

function CartButton(props){

	let notiSticker;

	if(props.totalCartItems > 0) {
		notiSticker = (
			<div className={`
				absolute -top-2 -right-3 
				flex h-5 w-5 
				items-center justify-center
				rounded-full
				p-1
				bg-red-400
			`}>
				<p className=''>{props.totalCartItems}</p>
			</div>
		);
	}

	return (

		<Link to="cart" className='relative nav-underline'>
			<img src={cartSVG} className='size-6' />
			{notiSticker}
		</Link>
	);
}

export default CartButton;