import React, {useState, useRef, useCallback, useEffect} from 'react'
import {Card, Container} from "react-bootstrap";
import {useGesture} from "react-use-gesture";
import {useSpring} from "@react-spring/web";
import {motion, useElementScroll, useMotionValue, useTransform, useViewportScroll} from "framer-motion";
import {Link} from "react-router-dom";
import "./Page.css"
import {Hello, Home, Gallery, Contact} from "./index";


function pageIterate (num) {
    if (num > 3) return 0
     else if(num < 0) return 3

}

const pages =  {
    "Home": <Home/>,
    "Hello": <Hello/>,
    "Gallery": <Gallery/>,
    "Contact": <Contact/>
}



export default function Pages(props) {

    const ref = useRef(null)

    const [index, setIndex] = useState(0);

    const { scrollY } = useViewportScroll(ref)

    // const [lastYPos, setLastYPos] = useState(0);
    // useEffect(() => {
    //
    //     function handleScroll() {
    //         const yPos = window.pageYOffset
    //         // const isScroll = yPos - lastYPos; //y < last -> up
    //         // isScroll < 0? setIndex(1) : setIndex(-1);
    //         setLastYPos(yPos);
    //         console.log(scrollYProgress)
    //     }
    //
    //     window.addEventListener('scroll',handleScroll(),false);
    //
    //     return () => {
    //         window.removeEventListener('scroll',handleScroll(),false)
    //     };
    // },[lastYPos])


    // useEffect(()=> {
    //     scrollY.onChange(setIndex(index + Math.sign(scrollY)));
    // },[index])

    const [yLast, setYLast] = useState(0);
    useEffect(() =>{
        scrollY.onChange(setIndex(scrollY.getVelocity().toFixed(1)))
    }, [index])


    const scaleHome = useTransform(scrollY, [0, 400, 800, 1200, 1600, 2000, 2400, 2800], [1,1,0,0,0,0,0,0])
    const scaleHello = useTransform(scrollY, [0, 400, 800, 1200, 1600, 2000, 2400, 2800], [0,0,1,1,0,0,0,0])
    const scaleGallery = useTransform(scrollY, [0, 400, 800, 1200, 1600, 2000, 2400, 2800], [0,0,0,0,1,1,0,0])
    const scaleContact = useTransform(scrollY, [0, 400, 800, 1200, 1600, 2000, 2400, 2800], [0,0,0,0,0,0,1,1])

    return(
        <motion.div
            animate={{y:scrollY}}
            ref={ref}
        >
            <Container className="card" style={{fontSize:"5rem"}}>
                {/*<h1>{index}</h1>*/}
                <motion.div
                    style={{opacity: scaleHome}}
                >
                    <Link to={{pathname:'/'}}><Card>HOME</Card></Link>
                </motion.div>
                <motion.div
                    style={{opacity: scaleHello}}
                >
                    <Link to={{pathname:'/hello'}}><Card>HELLO</Card></Link>
                </motion.div>
                <motion.div
                    style={{opacity: scaleGallery}}
                >
                    <Link to={{pathname:'/gallery'}}><Card>GALLERY</Card></Link>
                </motion.div>
                <motion.div
                    style={{opacity: scaleContact}}
                >
                    <Link to={{pathname:'/contact'}}><Card>CONTACT</Card></Link>
                </motion.div>

            </Container>

        </motion.div>
    )
}