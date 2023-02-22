import { PinLogo } from "./PinLogo";

import { Link } from "@shopify/hydrogen";

import Cart2Person from "/2-Person-Golf-Cart.jpg";
import Cart4Person from "/4-Person-Golf-Cart.jpg";
import Cart6Person from "/6-Person-Golf-Cart.jpg";
import Bike from "/BicycleUpdated.jpg";

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
                        $14 per hour plus tax <br/>$76 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $17 / hour + tax | $19 Weekends | $22 Holidays<br/>
                        $90 / day + tax | $100 Weekends | $130 Holidays
                    </p>
                    <p><Link className="reserveButton" to="products/2-person-golf-cart-rental">Book Now</Link></p>
                </div>
                <div>
                    <img className="Cart4Person" src={Cart4Person} alt="Cart Rental 4 Person Cart" />
                    <h4>4-Person Cart Rates - 2023</h4>
                    <p>
                        <strong>Off-Season</strong><br/>
                        $16 per hour plus tax <br/>$86 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $19 / hour + tax | $21 Weekends | $27 Holidays<br/>
                        $100 / day + tax | $110 Weekends | $141 Holidays
                    </p>
                    <p><Link className="reserveButton" to="products/4-person-golf-cart-rental">Book Now</Link></p>
                </div>
                <div>
                    <img className="Cart6Person" src={Cart6Person} alt="Cart Rental 6 Person Cart" />
                    <h4>6-Person Cart Rates - 2023</h4>
                    <p>
                        <strong>Off-Season</strong><br/>
                        $18 per hour plus tax <br/>$96 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $17 / hour + tax | $19 Weekends | $22 Holidays<br/>
                        $90 / day + tax | $100 Weekends | $130 Holidays
                    </p>
                    <p><Link className="reserveButton" to="products/6-person-golf-cart-rental">Book Now</Link></p>
                </div>
                <div>
                    <img className="Bike" src={Bike} alt="Bicycle Rental" />
                    <h4>Bicycle Rates - 2023</h4>
                    <p>
                        <strong>Off-Season</strong><br/>
                        Single Bikes - $6 per hour plus tax <br/>$96 plus tax per day
                    </p>
                    <p>
                        <strong>Peak Season</strong><br/>
                        $22 / hour + tax | $27 Weekends | $32 Holidays<br/>
                        $110 / hour + tax | $141 Weekends | $190 Holidays
                    </p>
                    <p><Link className="reserveButton" to="products/bicycle-rentals-24">Book 24"</Link> <Link className="reserveButton" to="products/bicycle-rentals-26">Book 26"</Link></p>
                </div>
            </div>
            
        </section>
    )

}
export default Rates;
