import React from 'react';
//components
import GivingSection from '../components/GiveSection';
import Footer from '../components/Footer';
//animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Give = () =>{

    return(
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <GivingSection />
            <Footer />
        </motion.div>
    )
}

export default Give;