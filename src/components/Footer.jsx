
function Footer() {
	return (
		<div className="flex justify-center gap-32 py-4 bg-(--color-navbar-background)">
			<div className="flex flex-col">
				<p className="footer-section">Other Links</p>
				<p className="footer-link">About Us</p>
				<p className="footer-link">Careers</p>
				<p className="footer-link">Support</p>
			</div>
			<div className="flex flex-col">
				<p className="footer-section">Contact Us</p>
				<p className="footer-link">coolemail@email.com</p>
				<p className="footer-link">(555)-123-4568</p>
			</div>
		</div>
	);
}

export default Footer;