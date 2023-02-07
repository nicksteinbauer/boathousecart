import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Drawer.client";

import { CartDetails } from "./CartDetails.client";
import ScrollLink1 from "./navlinks/ScrollLink1.client";
import ScrollLink2 from "./navlinks/ScrollLink2.client";
import ScrollLink3 from "./navlinks/ScrollLink3.client";
import ScrollLink4 from "./navlinks/ScrollLink4.client";

export default function Header({ shop }) {
    const { pathname } = useUrl();
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    const isHome = pathname === "/";
    return (
        <>
            <Drawer open={isOpen} onClose={closeDrawer}>
                
                <CartDetails onClose={closeDrawer} />
                
            </Drawer>
            <header
                role="banner"
                className={`always-flex justify mainHeader padding-10 ${isHome ? "imHome" : "imNotHome"}`}
            >
                <div className="mainLogo">
                    <Link className="logoLink flex-vertical" to="/">
                    
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 373.8 77.6" 
                            fill="currentColor"
                            className="cartRentalLogo"
                        >
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path d="M190.5,77.6c-5.1,0-9.5-1.4-12.9-4.3c-3.9-3.1-5.9-7.3-5.9-12.3c0-0.8,0-1.4,0-1.9c-5.4-0.6-9.5-2-12.4-4.3
                                            c-2.8-2.4-4.2-5-4.2-7.9c0-6.4,4.9-12.6,14.5-18.3c4.1-2.5,8.2-4.5,12.2-5.8c-1.5-2-2.2-4.5-2.2-7.4c0-1.8,0.4-3.3,1.3-4.5
                                            c2.2-3.1,5.5-5.6,9.9-7.4c5.1-2.3,10.4-3.4,15.6-3.4c4.4,0,7.4,0.9,9.1,2.6c1.1,1.1,1.6,2.7,1.6,4.5c-0.1,2-1,3.8-2.6,5.3
                                            c-1.6,1.5-3.3,2.2-5.2,2.2c-2.7,0-3.3-1.1-3.3-2c0-0.4,0.1-1.6,1.9-1.6l1.7,0.3c0.6,0,1.3-0.5,2-1.4c0.8-1,1.2-1.9,1.2-2.8
                                            c0-1.4-0.8-2.5-2.5-3.1c-1.2-0.4-2.3-0.6-3.4-0.6c-5.2,0-9.6,1.1-13.1,3.3c-3.5,2.2-6,4.6-7.6,7.3c-0.9,1.5-1.3,3-1.3,4.6
                                            c0,1.3,0.3,2.4,0.7,3.2c2.4-0.6,4.5-1,6.4-1c1.5,0,6,0,6,2.9c0,0.5-0.2,1-0.5,1.4c-1,1.6-3,2.4-6,2.4c-2.8,0-5.4-0.8-7.7-2.4
                                            c-3.3,1-7.2,3.2-11.6,6.3c-6.9,5.1-10.5,10.2-10.5,15.1c0,5.2,3.4,8.1,10.4,8.8c1.7-9.3,6.4-16.4,14-21.1
                                            c2.5-1.6,5.3-2.8,8.3-3.5c2.9-0.7,4.9-1.1,5.9-1.3c1.1-0.2,2.9-0.6,5.4-1c2.5-0.4,4-0.7,4.4-0.7c5.8-1,9.6-2.1,11.2-3.3
                                            c1.5-1.1,2.3-2.2,2.3-3.1c0-0.3,0-0.6-0.1-0.9c-0.2-0.9,0.2-1.4,0.7-1.5c0.5-0.1,1,0,1.4,0.4l0.1,0.1c0.6,0.8,0.9,1.8,0.9,3
                                            c0,1.2-0.7,2.6-2.1,4.2c-2,2-4.8,3.4-8.3,4.2c-1.3,0.3-3,0.7-5.2,1.1c-1.5,0.3-2.7,0.5-3.6,0.7c0.9,1.2,1.3,2.8,1.3,4.8
                                            c0,4.9-2.9,9.8-8.7,14.4c-6.2,5-14.5,7.5-24.7,7.6c0,0.5,0,1,0,1.7c0,4.3,1.4,7.7,4.2,10.1c2.8,2.5,6.5,3.7,10.8,3.7
                                            c1.4,0,2.6-0.5,3.7-1.4c1-0.9,1.5-1.9,1.5-3.1c0-0.3-0.1-0.8-0.3-1.3c-0.3-0.6-0.1-1,0-1.2c0.2-0.4,0.7-0.6,1.3-0.6
                                            c1.2,0,1.8,1.1,1.8,3.2c0,1.9-0.8,3.6-2.4,5C194.4,76.9,192.5,77.6,190.5,77.6z M188.6,23.9c1,0.4,2,0.5,3.1,0.5
                                            c1.2,0,2-0.2,2.1-0.5c-0.1-0.1-0.5-0.3-1.9-0.3C190.9,23.7,189.8,23.8,188.6,23.9z M201.4,33c-0.5,0-1.7,0.1-4.5,0.8
                                            c-11.7,4.4-18.7,11.6-20.9,21.4c1.1,0,2.2-0.1,3.3-0.3c8.1-0.9,14.6-3.5,19.3-7.7c3.9-3.5,5.8-7.1,5.8-10.7
                                            C204.4,33.4,202.8,33,201.4,33z"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <path d="M16.7,70.1c-5.4,0-9.6-1.2-12.4-3.7C1.5,63.9,0,60.3,0,55.8V18c0-4.5,1.4-8,4.2-10.5C7,5,11.1,3.8,16.5,3.8
                                    c5.4,0,9.6,1.2,12.4,3.7c2.9,2.5,4.3,6,4.3,10.5v10h-8.6V18c0-4.5-2.5-6.6-8-6.6s-8,2.1-8,6.6v37.8c0,4.5,2.5,6.6,8,6.6
                                    s8-2.1,8-6.6v-6.2h8.6v6.2c0,4.5-1.4,8-4.2,10.5C26.2,68.8,22.1,70.1,16.7,70.1z"/>
                            </g>
                            <g>
                                <path d="M77.3,68.7h-8.7l-3.2-14.2H49l-3.2,14.2h-8.7L51.5,5.2H63L77.3,68.7z M50.7,46.8h13l-6.5-28.7L50.7,46.8z"/>
                            </g>
                            <g>
                                <path d="M118.8,68.7h-9.5L98.3,46.9h-6v21.7h-8.6V5.2h15.3c5.2,0,9.1,1.3,11.9,3.8c2.8,2.5,4.2,6,4.2,10.5v13.2
                                    c0,6.4-2.7,10.8-7.9,12.9L118.8,68.7z M92.2,39.2h6.7c5.1,0,7.4-2.1,7.4-6.6V19.4c0-2.1-0.6-3.7-1.8-4.8c-1.3-1.1-3.1-1.7-5.6-1.7
                                    h-6.7V39.2z"/>
                            </g>
                            <g>
                                <path d="M139,68.7h-8.6V12.9h-12.3V5.2h33.2v7.7H139V68.7z"/>
                            </g>
                            <g>
                                <path d="M254.2,68.7H238V5.2h15.3c5.2,0,9.1,1.3,11.9,3.8c2.8,2.5,4.2,6,4.2,10.5v5.7c0,4.8-1.7,8.2-5.1,10.2
                                    c4,1.9,6,5.4,6,10.6v8.5c0,4.5-1.4,8-4.1,10.5C263.4,67.4,259.4,68.7,254.2,68.7z M246.6,61h7.6c2.4,0,4.2-0.6,5.5-1.9
                                    c1.3-1.3,1.9-2.8,1.9-4.6v-8.5c0-1.8-0.7-3.4-2-4.9c-1.3-1.5-3.1-2.2-5.4-2.2h-7.6V61z M246.6,32.1h6.7c2.4,0,4.2-0.7,5.5-2.1
                                    c1.3-1.5,2-3.1,2-4.9v-5.7c0-1.8-0.6-3.3-1.9-4.6c-1.3-1.3-3.1-2-5.5-2h-6.7V32.1z"/>
                            </g>
                            <g>
                                <path d="M296.2,68.7h-18.1V61h4.7V12.9h-4.7V5.2h18.1v7.7h-4.7V61h4.7V68.7z"/>
                            </g>
                            <g>
                                <path d="M339.9,68.7h-9.5l-14-27.6l-2,3.3v24.4h-8.6V5.2h8.6v23.6l14.9-23.6h9.7l-17.4,27.5L339.9,68.7z"/>
                            </g>
                            <g>
                                <path d="M373.8,68.7h-29.9V5.2h28.9v7.7h-20.3v19.7H369v7.7h-16.5V61h21.3V68.7z"/>
                            </g>
                        </g>
                        </svg>

                    </Link>
                </div>

                <ul className="flex-xs navUl">
                    <li className="flex-vertical">
                        <ScrollLink1 />
                    </li>
                    <li className="flex-vertical">
                        <ScrollLink2 />
                    </li>
                    <li className="flex-vertical">
                        <ScrollLink3 />
                    </li>
                    <li className="flex-vertical">
                        <ScrollLink4 />
                    </li>
                    <li className="flex-vertical">
                        <Link className='reserveButton' to="">Reserve Now</Link>
                    </li>
                </ul>

                <button
                    onClick={openDrawer}
                    className="cartIcon flex-vertical"
                >
                    <IconBag />
                    <CartBadge dark={isHome} />
                </button>
            </header>
        </>
    );
}

function IconBag() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="iconBag"
        >
            <title>Bag</title>
            <path
                fillRule="evenodd"
                d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
            />
      </svg>
    );
}
function CartBadge({ dark }) {
    const { totalQuantity } = useCart();

    if (totalQuantity < 1) {
        return null;
    }
    return (
        <div
        className={`${dark ? "text-black bg-white" : "text-white bg-black"} tbd flex-vertical`}
        >
        <span>{totalQuantity}</span>
        </div>
    );
}