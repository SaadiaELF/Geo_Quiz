import GQNavbar from "../navbar/navbar";
import Hero from "../hero/hero";
import "./header.css";


function Header() {
    return (
        <div>
            <header>
                <GQNavbar></GQNavbar>
                <Hero />
            </header>
        </div>
    )
}

export default Header;