import { useRef, useEffect } from "react";
import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Drawer.client";

import { CartDetails } from "../CartDetails.client";


import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { MainLogo } from "./MainLogo";

import MobileMenuInterior from "./MobileMenuInterior.client";
import MenuInterior from "./MenuInterior.client";

export default function HeaderInterior({ shop }) {
    const { pathname } = useUrl();
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    const isHome = pathname === "/";

    let headStick = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        
        gsap.to( headStick, {
            scrollTrigger: {
                trigger: '.mainHeader',
                endTrigger: 'html',
                scrub: 1,
                toggleClass: "sticky",
                start: "top 0px"
            }
        })
    }, [])


    return (
        <>
            <Drawer open={isOpen} onClose={closeDrawer}>
                
                <CartDetails onClose={closeDrawer} />
                
            </Drawer>
            <header
                role="banner"
                className={`always-flex justify mainHeader padding-10 ${isHome ? "imHome" : "imNotHome"}`}
                ref={el => {headStick = el}}
            >
                <div className="mainLogo">
                    <Link className="logoLink flex-vertical" to="/">
                        <MainLogo />
                    </Link>
                </div>

                <div className="desktopNav"><MenuInterior /></div>

                <div className="menuButton always-flex">

                    <MobileMenuInterior />

                    <button
                        onClick={openDrawer}
                        className="cartIcon flex-vertical"
                    >
                        <IconBag />
                        <CartBadge dark={isHome} />
                    </button>

                </div>
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