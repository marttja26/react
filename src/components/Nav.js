function Nav({className}) {
    return (
        <nav className={className}>
            <ul className="md:flex">
                <li className="text-xl px-5 py-5 md:py-0"><a href="">INICIO</a></li>
                <li className="text-xl px-5 py-5 md:py-0"><a href="">TIENDA</a></li>
                <li className="text-xl px-5 py-5 md:py-0"><a href="">NOSOTROS</a></li>
            </ul>
        </nav>
    )
}

export default Nav; 
