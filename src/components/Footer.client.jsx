import { Link } from "@shopify/hydrogen";
import { PinLogo } from "./PinLogo";
import { MainLogo } from "./header/MainLogo";
import BoathouseBlock from "./BoathouseBlock.client";

function Footer() {

    
    return (
        <footer className="mainFooter">
            <div className="inside-xl lowerFooter flex-md">
                <div className="forty">
                    <div className="always-flex theLogos">
                        <PinLogo /><MainLogo />
                    </div>
                    <h4>Boathouse Cart & Bike Rental</h4>
                    <p>
                        Hartford Avenue<br/>
                        Put-in-Bay, OH 43456
                    </p>
                    <p>
                        <a href="tel:419-285-2113">419-285-2113</a><br/>
                        <a href="mailto:info@boathousecartrental.com">info@boathousecartrental.com</a>
                    </p>
                </div>
                <div className="thirty">
                    <h4>Navigation</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Rates</Link>
                        </li>
                        <li>
                            <Link to="/">Location</Link>
                        </li>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Reserve Now</Link>
                        </li>
                    </ul>
                </div>
                <div className="thirty">
                    <h4>Boathouse Block</h4>
                    <BoathouseBlock />
                </div>
            </div>
        </footer>
    )

}
export default Footer;
