import React, { useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const Video = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (val) => {
        console.log(val)
    })

    const scale = useTransform(scrollYProgress, [0.49, 0.545], [0.8,1]);
    const borderRadius = useTransform(scrollYProgress,[0.49,0.545, 0.549], ['80px','80px','0px']);

  return (
    <motion.div
        ref={ref}
        style={{
            scale: scale,
            transformOrigin: "center",
            
        }}
        className='flex mt-[40px] items-center justify-center flex-col bg-[#fff]'>
        <div className='flex w-full h-full'>
            <a className='flex max-w-full w-full '>
                <motion.video
                    style={{
                        borderTopLeftRadius: borderRadius,
                        borderTopRightRadius: borderRadius,
                    }}
                    autoPlay muted loop playsInline className="w-full h-full">
                    <source src="https://res.cloudinary.com/superlist/video/upload/v1714992773/website/superpowers/SuperList_Out_final_oxtb4t.webm" type="video/webm" />
                </motion.video>
            </a>
        </div>
    </motion.div>
  )
}

export default Video