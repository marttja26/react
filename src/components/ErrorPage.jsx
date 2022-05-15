import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="flex flex-auto flex-col p-5 bg-white">
			<div className="flex flex-col items-center m-auto">
				<p className="flex text-2xl">ESTA PAGINA NO EXISTE.</p>
				<Link to="/" className="flex text-2xl text-blue-300 underline">
					VOLVER A LA PAGINA PRINCIPAL.
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
