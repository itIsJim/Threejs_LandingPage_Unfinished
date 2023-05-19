import React from 'react'
import './App.css'
import Pages from "./Pages";
import {Route, Routes, Link} from "react-router-dom";
import {Home, Hello, Gallery, Contact} from "./index"
import {Container} from "react-bootstrap";
import {useElementScroll} from "framer-motion";

function App() {

    // const ref = React.useRef(null)
    //
    // const [index, setIndex] = React.useState(0);
    //
    // const { scrollYProgress } = useElementScroll(ref)
    //
    // scrollYProgress.onChange(v=>setIndex(v))

    return (
        <>
            <div className="App">
                <Container className="App-container">
                    <div className="App-content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/hello" element={<Hello/>}/>
                            <Route path="/gallery" element={<Gallery/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                        <Pages className="pages"/>
                    </div>
                </Container>
           </div>
        </>
  )
}

export default App
