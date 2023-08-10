import { useState, useEffect, useRef } from "react";
import "./styles.css";

import {motion} from 'framer-motion'

function Skills () {

    const images2 = useRef ();
    const [width, setWidth] = useState (0)
  
    useEffect (() => {
        console.log(images2.current?.scrollWidth, images2.current?.offsetWidth)
        setWidth (images2.current?.scrollWidth - images2.current?.offsetWidth)
    }, [])
      

    const HTML = "https://i.imgur.com/1SRP8W3.jpg";
    const JS = "https://i.imgur.com/5bVX6FX.png";
    const CSS = "https://i.imgur.com/GTXXAqI.jpg";
    const TS = "https://i.imgur.com/V5iYuEp.png";
    const React = "https://i.imgur.com/EQiBEH1.jpg";
    const Angular = "https://i.imgur.com/us0kH92.png";
    const NodeJS = "https://i.imgur.com/QFSVXbn.png";
    const Git = "https://i.imgur.com/89N5JiA.jpg"
  
    const images = [HTML, JS, CSS, TS, React, Angular, NodeJS, Git]
  
    const handleArrowClick = (direction) => {
      const container = images2.current;
      const containerWidth = container.offsetWidth;
      const inner = container.querySelector(".inner");
      const scrollAmount = direction === "right" ? -containerWidth : containerWidth;
    
      
      if (inner) {
        const currentPosition = inner.getBoundingClientRect().left - container.getBoundingClientRect().right;
        const newPosition = currentPosition + scrollAmount;
        
        const maxScrollLeft = 0;
        const maxScrollRight = container.scrollWidth - containerWidth;
        const finalPosition = Math.max(Math.min(newPosition, maxScrollLeft), -maxScrollRight);
    
  
        inner.style.transform = `translateX(${finalPosition}px)`;
      }
    };
  
  
    return (
      <>

  
      <div className="arrow arrow-left" onClick={() => handleArrowClick("left")}>
        &lt;
      </div>
      <div className="arrow arrow-right" onClick={() => handleArrowClick("right")}>
        &gt;
      </div>
  
  
      <h1 className="Skills">SKILLS</h1>
       <div className="Carousel">
          <motion.div ref={images2} className="images2" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="inner"
            drag="x"
            dragConstraints={{right: 1, left: -width}}
            >
              {images.map(image => (
                <motion.div className="item" key={image}>  
                  <img src={image} alt='Languages'/>
                </motion.div>
              ))}
  
            </motion.div>
          </motion.div>
  
       </div>
       
       </>
  
    );
  }
  
  export default Skills; 