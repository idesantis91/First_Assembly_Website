import React from 'react';
import styled from 'styled-components';

const Welcome = () =>{

    return(
        <WelcomeStyled>
            <h2>Welcome to First Assembly of God - New Castle, PA</h2>
            <div className="line"></div>
        </WelcomeStyled>
    )
}

const WelcomeStyled = styled.div`
    padding: 5rem 10rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    .line{
        height: 0.5rem;
        background: #1FA3CD;
        margin-bottom: 3rem;
        padding: 0rem 20rem;
        width: 100%;
        }

        h2{
            font-family:'Asap', sans-serif;
            padding: 5rem 14rem;
            color: white;
            text-align:center;
            font-size: 2.5rem;
        }
`;

export default Welcome;