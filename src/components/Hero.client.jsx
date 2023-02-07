
import { TopLogo } from './TopLogo';
import MainForm from './MainForm.client';

import { useRef, useEffect } from "react"


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
        <div className='scrollTrigger'>
            <div 
                className={`heroContainer`}
                ref={el => {backScroll = el}}
            ></div>
            <div className={`heroOverlay`}>
                <div className={`topOverlay`}/>
                <div className={`topLogo`}>
                    <TopLogo />
                </div>
                <div className={`hero flex-vertical`}>
                    <div className={`text-center`}>
                        <h1 className={`h1`}>Rent Golf Carts on Put-in-Bay<br/>Rent Bikes on Put-in-Bay</h1>
                        <div className={`inside-sm text-center heroFormContainer`}>
                            <MainForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;