import React from 'react';
//Componenets
import HomeAbout from '../components/HomeAbout';
import Welcome from '../components/Welcome';

const Home = () => {

    return(
        <div>
            <Welcome/>
            <HomeAbout/>
        </div>
    )
}

export default Home;