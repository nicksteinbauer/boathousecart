import { Component } from 'react'

//import { Link } from '@shopify/hydrogen';

import ScrollLink1 from "../navlinks/ScrollLink1.client";
import ScrollLink2 from "../navlinks/ScrollLink2.client";
import ScrollLink3 from "../navlinks/ScrollLink3.client";
import ScrollLink4 from "../navlinks/ScrollLink4.client";
import ScrollLink5 from "../navlinks/ScrollLink5.client";
import Link5 from '../navlinks/Link5.client';

export class Menu extends Component {
    

    render() {
        return (
            <ul className="flex-md navUl">
                <li className="flex-vertical home">
                    <ScrollLink1 />
                </li>
                <li className="flex-vertical home">
                    <ScrollLink2 />
                </li>
                <li className="flex-vertical home">
                    <ScrollLink3 />
                </li>
                <li className="flex-vertical home">
                    <ScrollLink4 />
                </li>
                <li className="flex-vertical home">
                    <ScrollLink5 />
                </li>
            </ul>
        )
    }
}

export default Menu

