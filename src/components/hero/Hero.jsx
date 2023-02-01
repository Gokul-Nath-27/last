import React from 'react'
import './hero.css'
import Typewriter from 'typewriter-effect'
import aicte from '../../assets/aicte.png'
import tandf from '../../assets/tandf.webp'
const Hero = () => {
    return (
        <section className='hero'>
            <div className="main-content">
                <p className='sponsor'>
                <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(80)
                                .typeString("AICTE Sponsored International conference on")
                                .start()
                        }}
                    />
                </p>

                <h1 className='title'>
                    Applications of AI, ML, DL, Big Data on Recent Societial Issues (ICARSI'23)
                </h1>
                <p className='date'>
                    21<sup>st</sup> and 22<sup>nd</sup> April 2023.
                </p>
                <div className="logoo">
                    <img  src={aicte} alt="aicte" />
                    <img  src={tandf} alt="aicte" />
                </div>
                <p className='dept'>
                    Organized by<br /> Department of Computer Science and Engineering
                </p>
            </div>
        </section>
    )
}
export default Hero