
import { TopLogo } from './TopLogo';
import MainForm from './MainForm.client';

import { useRef, useEffect } from "react"

import { Link } from '@shopify/hydrogen';

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function Hero() {

    let backScroll = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        
        gsap.to( backScroll, {
            scrollTrigger: {
                trigger: '.scrollTrigger', 
                scrub: 1,
            },
            duration: 2,
            x: '0',
            y: '100%',
            ease: "ease-in",
        })
    }, [])

    return (
        <div id='reserve' className='scrollTrigger'>
            <div 
                className={`heroContainer`}
                ref={el => {backScroll = el}}
            ></div>
            <div className={`heroOverlay`}>
                <div className={`topOverlay`}/>
                <div className="topBanner">
                    Closest reservable Put-in-Bay Golf Cart Rental to the Jet Express dock <Link to="/location">Location</Link>
                </div>
                <div className={`topLogo`}>
                    <TopLogo />
                </div>
                <div className={`hero flex-vertical`}>
                    <div className={`text-center`}>
                        <h1 className={`h1`}>Rent Golf Carts on Put-in-Bay<br/>Rent Bikes on Put-in-Bay</h1>
                        <div className={`inside-sm text-center heroFormContainer`}>
                            <MainForm />
                            <p className="text-center bright">
                                New for 2023, Rent your golf cart overnight for multiple days.<br/>
                                The more days you reserve, the more discount you receive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;