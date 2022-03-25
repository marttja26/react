const Links = ({ className }) => {
	return (
		<nav className={`lg:flex lg:flex-1 ${className}`}>
			<ul className="lg:flex">
				<li className="text-l p-5 lg:py-0">
					<a href="">INICIO</a>
				</li>
				<li className="text-l p-5 lg:py-0">
					<a href="">TIENDA</a>
				</li>
				<li className="text-l p-5 lg:py-0">
					<a href="">NOSOTROS</a>
				</li>
			</ul>
		</nav>
	);
};

export default Links;
