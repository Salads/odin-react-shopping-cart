import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import CartPage from './pages/CartPage.jsx';

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true,  element: <HomePage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "cart", element: <CartPage /> },
		],
	}
];

export default routes;