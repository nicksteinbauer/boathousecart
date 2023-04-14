import { PinLogo } from "./PinLogo";

import { Link } from "@shopify/hydrogen";

import Cart2Person from "../assets/GolfCart2Person.jpg";
import Cart4Person from "../assets/GolfCart4Person.jpg";
import Cart6Person from "../assets/GolfCart6Person.jpg";
import Bike from "../assets/BicycleUpdated.jpg";

function Rates() {

    
    
    
    return (
        <section id="rates" className="rates">
            <div className="text-center inside-sm">
                <h2><span><PinLogo /></span>Rates</h2>
                <h3>We offer competitive rates with all other Put-in-Bay Cart rentals</h3>
            </div>
            <div className="inside-xxl auto-grid-rates">
                <div>
                    <img className="Cart2Person" src={Cart2Person} alt="Cart Rental 2 Person Cart" />
                    <h4>2-Person Cart Rates - 2023</h4>
                    <p>
                        <strong>Off-Season</strong><br/>
                        $73 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $95 / day + tax | $105 Sundays | $130 Saturdays &amp; Holidays
                    </p>
                </div>
                <div>
                    <img className="Cart4Person" src={Cart4Person} alt="Cart Rental 4 Person Cart" />
                    <h4>4-Person Cart Rates - 2023</h4>
                    <p>
                        <strong>Off-Season</strong><br/>
                        $83 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $105 / day + tax | $115 Sundays | $141 Saturdays &amp; Holidays
                    </p>
                </div>
                <div>
                    <img className="Cart6Person" src={Cart6Person} alt="Cart Rental 6 Person Cart" />
                    <h4>6-Person Cart Rates - 2023</h4>
                    <p>
                        <strong>Off-Season</strong><br/>
                        $95 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $115 / day + tax | $145 Sundays | $190 Saturdays &amp; Holidays
                    </p>
                </div>
                <div>
                    <img className="Bike" src={Bike} alt="Bicycle Rental" />
                    <h4>Bicycle Rates - 2023</h4>
                    <p>
                        Single Bikes - $6 per hour plus tax <br/>$25 plus tax per day
                    </p>
                    <p>
                        <strong>Holidays</strong><br/>
                        Single Bikes - $7 per hour plus tax <br/>$28 plus tax per day
                    </p>
                </div>
            </div>
            
        </section>
    )

}
export default Rates;
