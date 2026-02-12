import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { use } from "react";

const App = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

   // GSAP TIMELINE

   useGSAP(()=>{
     let t1 = gsap.timeline(
    {
      repeat:2,repeatDelay:1
      ,yoyo:true
    }
   );  

   t1.to('.box',{
        y:100,
        duration:1,
        stagger:1,
        opacity:1
   })
  
   },[])


   











  // gsap.to()  , gsap.from() , gsap.fromTo()
  // useGSAP(()=>{
  //   gsap.fromTo("#text",{
  //       x:-100,
  //       opacity:0,
  //       duration:3,
  //       // delay:1,
  //       repeat:-1,
  //       yoyo:true
  //   },
  //   {
  //     x:100,
  //     opacity:1,
  //     duration:3,
  //     ease:'elastic',
  //     delay:1,
  //       repeat:-1,
  //       yoyo:true
  //   })
  // },[]);

  return (
    <>
      <h1 id="text"> HELLO</h1>

      <div className="container">
        <div className="box" style={{opacity:'0'}}></div>
        <div className="box" style={{opacity:'0'}}></div>
        <div className="box" style={{opacity:'0'}}></div>
        <div className="box" style={{opacity:'0'}}></div>
        <div className="box" style={{opacity:'0'}}></div>
      </div>
    </>
  );
};

export default App;
