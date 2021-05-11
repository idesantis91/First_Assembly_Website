import React from 'react';
import styled from 'styled-components';
//Images
import congregation from '../img/congregation.jpeg';
const HomeAbout = () =>{

    return(
        <HomeStyled>
                <Description>
                    <p>We are a church community of Believers who are passionate about our relationship with Jesus Christ.  We love to worship God and are committed to growing in our relationship with Him.</p>

                    <p>The atmosphere at First Assembly of God is respectfully casual and we do our best to always keep it “real” as we walk and grow in the Christian Faith together.</p>

                    <p>If you are looking for a church to call “Home”, or are just passing through the New Castle area looking for a church to worship with, please feel free to come on in…the coffee is hot and the people are friendly.</p>
                </Description>
                <Image>
                <img src={congregation} alt="congregation" />
            </Image>
        </HomeStyled>
    );
};

const HomeStyled = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    h2{
        padding: 1rem 13rem;
        color: white;
        font-size: 2.5rem;
    }
`;

const Image = styled.div`
    flex:1;
    overflow: hidden;
    img{
        width:100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Description = styled.div`
    flex:1;
    padding-right: 5rem;
    p{
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
        color:#e6e1e1;
    }
`;

export default HomeAbout;