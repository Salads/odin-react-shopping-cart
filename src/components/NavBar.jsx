import { Link } from "react-router";

function NavBar() {
	
	return (
		<div className="flex gap-8">
			<Link to="/">Home</Link>
			<Link to="shop">Shop</Link>
			<Link to="cart">Cart</Link>
		</div>
	);
}

export default NavBar;