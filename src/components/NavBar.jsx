import { Link } from "react-router";

import CartButton from './CartButton.jsx';
import ThemeToggle from "./ThemeToggle.jsx";

function NavBar(props) {
	
	return (
		<div className="flex justify-between px-24 py-3 sticky top-0 bg-zinc-400">
			<div className="flex gap-8">
				<Link to="/" className="nav-underline">Home</Link>
				<Link to="shop" className="nav-underline">Shop</Link>
			</div>
			<div className="flex gap-4 items-center">
				<CartButton totalCartItems={props.totalCartItems}/>
				<ThemeToggle isLightTheme={props.isLightTheme} toggleTheme={props.toggleTheme} />
			</div>
		</div>
	);
}

export default NavBar;