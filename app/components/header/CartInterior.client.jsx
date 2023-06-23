//import { useRef, useEffect } from "react";
import { useUrl } from "@shopify/hydrogen";
//import { useDrawer } from "./Drawer.client";

import { CartDetails } from "../CartDetails.client";




export default function CartInterior({ shop }) {
    const { pathname } = useUrl();
    

    const isHome = pathname === "/";

    


    return (
        <div className="cartPage">                
            <CartDetails />
        </div>
    );
}

