import { Link } from "react-router";

function HomePage() {
	return (
		<div className="flex flex-col flex-1 justify-center items-center">
			<div className={`
					flex flex-col items-center justify-around
					border-3 border-dashed rounded-xl
					w-125 h-100 

					border-zinc-200 
				`}>
				<p>
					Nothing here yet! Click the button below to view the shop!
				</p>
				<Link to="shop">
					<button className="btn-primary">Go To Shop</button>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;