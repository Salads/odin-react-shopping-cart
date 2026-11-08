import { Link } from "react-router";

function NavBar() {
	
	return (
		<div className="flex justify-between bg-zinc-400">
			<div className="flex gap-8">
				<Link to="/">Home</Link>
				<Link to="shop">Shop</Link>
				
			</div>
			<div className="flex gap-8">
				<Link to="cart">Cart</Link>
				<button>Toggle Theme</button>
			</div>
		</div>
	);
}

export default NavBar;