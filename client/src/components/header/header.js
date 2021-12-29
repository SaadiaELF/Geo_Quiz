import GQNavbar from "../navbar/navbar";
import Hero from "../hero/hero";
import "./header.css";


function Header() {
    return (
        <div>
            <div className="header-blue">
                <GQNavbar></GQNavbar>
                <Hero />
            </div>
        </div>
    )
}

export default Header;