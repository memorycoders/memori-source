import React from 'react';

import Header from '../components/Header/Header';
import TextTyping from '../components/TextTyping/TextTyping.js';
import FooterHome from '../components/Footer/FooterHome.js';
function Home(props) {
    return (
        <div className="home">
            <Header></Header>
            <div className="home-typing">
                <TextTyping></TextTyping>
            </div>
            <FooterHome></FooterHome>
        </div>
    );
}

export default Home;