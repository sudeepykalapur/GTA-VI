import React, { use, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'


function App() {
  let [showContent,setShowContent] = useState(false);
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      transformOrigin:"50% 50%",
    }).to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      opacity:0,
      transformOrigin:"50% 50%",
      onUpdate: function() {
        if(this.progress() >=0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })
useGSAP(() =>{
  if(!showContent) return;

  gsap.to(".main",{
    scale:1,
    rotate:0,
    duration:2,
    delay:-1,
    ease:"Expo.easeInOut",
  });
  gsap.to(".sky",{
    scale:1.1,
    rotate:0,
    duration:2,
    delay:-.8,
    ease:"Expo.easeInOut",
  });
  gsap.to(".bg",{
    scale:1.1,
    rotate:0,
    duration:2,
    delay:-.8,
    ease:"Expo.easeInOut",
  });
  gsap.to(".character",{
    scale:0.8,
    x:"-0.6%",
    bottom:"-50%",
    rotate:0,
    duration:2,
    delay:-.8,
    ease:"Expo.easeInOut",
  });



  const main = document.querySelector(".main");

  main?.addEventListener("mousemove",function(e){
    const xMove = (e.clientX/window.innerWidth-0.5)*40;
    gsap.to(".main .text",{
      x:`${xMove}%`,
    });
     gsap.to(".sky",{
      x:xMove,
    });
    gsap.to(".bg",{
      x:xMove*1.7,
    });
  });
},[showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7] bg-black'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar absolute w-full top-0 left-0 px-6 py-6  z-10'>
              <div className='logo flex gap-5'>
                <div className='lines flex flex-col gap-[4px]'>
                  <div className='line1 w-12 h-1 bg-white'></div>
                  <div className='line2 w-6 h-1 bg-white'></div>
                  <div className='line3 w-4 h-1 bg-white'></div>
                </div>
                <h3 className='text-2xl -mt-[6px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>
            <div className='relative imagesdiv overflow-hidden w-full h-screen'>
              <img className='absolute scale-[1.5] rotate-[-20deg] sky scale-[1.2] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
              <img className='absolute scale-[1.8] rotate-[-3deg] bg  top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="Background"/>
                <div className='text text-white flex flex-col absolute top-18 left-0 left-1/2 -translate-x-1/2 leading-[9rem]'>
                <h3 className='text-[8rem] -ml-20'>grand</h3>
                <h3 className='text-[8rem] ml-20'>theft</h3>
                <h3 className='text-[8rem] -ml-20'>auto</h3>
              </div>
              <img className='absolute character -bottom-[180%] left-100 scale-[3] -translate-x-1/2 rotate-[-20deg]' src="./girlbg.png" alt="" />
            </div>
            <div className='btmbar absolute bottom-0 left-0 w-full px-6 py-12 bg-gradient-to-t from-black to-transparent'>
              <div className='flex text-white gap-4 items-center'>
                <i className=" text-2xl ri-arrow-down-line"></i>
                <h3 className='font-[Helvitica-Now-Display]'>Scroll Down</h3>

              </div>
              <img className='absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 ' src="./ps5.png" alt="" />
            </div>
          </div>
          <div className='w-full h-screen px-10 flex items-center justify-center bg-black'>
            <div className='cntnr flex text-white w-full h-[80%]'>
              <div className='limg relative w-1/2 h-full'>
                <img className='absolute overflow-hidden scale-[] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
              </div>
              <div className='rg w-[40%] py-8'>
                <h1 className='text-6xl'>Still Running,</h1>
                <h1 className='text-6xl'>Not Hunting</h1>
                <p className='mt-10  font-[Helvetica_Now_Display]'>Step into the chaos of Vice City — a vibrant, dangerous open world where every street tells a story. In GTA VI, you’re not just playing the game — you're living the legend.</p>
                <p  className='mt-3  font-[Helvetica_Now_Display]'>Explore the underbelly of a city that never sleeps, where power is earned, respect is taken, and freedom has no rules. Whether you’re racing through neon-lit highways, building your empire, or escaping five-star heat — every choice leads to a new path.</p>
                <p  className='mt-10  font-[Helvetica_Now_Display]'> This is more than a game. This is a revolution in open-world storytelling. From gritty heists to heart-pounding getaways, GTA VI delivers cinematic intensity with next-gen realism. Are you ready to rise</p>
                <button className='bg-yellow-500 px-8 py-8 text-2xl mt-8 text-black'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App