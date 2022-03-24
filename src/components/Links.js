const Links = ({ className }) => {
	return (
		<nav className={`lg:block lg:w-2/4 ${className}`}>
			<ul className="lg:flex lg:justify-center">
				<li className="text-xl px-5 py-5 lg:py-0">
					<a href="">INICIO</a>
				</li>
				<li className="text-xl px-5 py-5 lg:py-0">
					<a href="">TIENDA</a>
				</li>
				<li className="text-xl px-5 py-5 lg:py-0">
					<a href="">NOSOTROS</a>
				</li>
			</ul>
		</nav>
	);
};

export default Links;
