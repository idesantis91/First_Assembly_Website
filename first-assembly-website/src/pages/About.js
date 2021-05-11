import React from 'react';
//Components
import AboutSection from '../components/AboutSection';
import ValueSection from '../components/ValueSection';
import VisionSection from '../components/VisionSection';
import Footer from '../components/Footer';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const About = () =>{

    return(
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <ValueSection />
            <VisionSection />
            <Footer/>
        </motion.div>
    );
};

export default About;