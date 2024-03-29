import React from 'react';
//Componenets
import HomeAbout from '../components/HomeAbout';
import Welcome from '../components/Welcome';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Home = () => {

    return(
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <Welcome/>
            <HomeAbout/>
        </motion.div>
    )
}

export default Home;