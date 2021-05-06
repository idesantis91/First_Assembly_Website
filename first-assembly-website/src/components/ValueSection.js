import React from 'react'; 
import styled from 'styled-components';

const ValueSection = () =>{

    return(
        <ValueSectionStyled>
            <div className="value-header">
                <h2>OUR VALUES</h2>
            </div>
            <div className="line"></div>
            <p>We live a life of <span>WORSHIP</span> to God</p>
            <p>We deliberately <span>CONNECT</span> with God, the Church and our Community.</p>
            <p>We are committed to <span>GROW</span> as Disciples of Jesus Christ</p>
            <p>We will <span>SERVE</span> wholeheartedly and sacrificially.</p>
            <p>We will obey Jesus’ command to <span>GO</span> and make Disciples.</p>
        </ValueSectionStyled>
    )
}

const ValueSectionStyled = styled.div`
    padding: 5rem 10rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    background: #282828;
    height: 60vh;
    .line{
        height: 0.5rem;
        background: #1FA3CD;
        margin-bottom: 3rem;
        width: 10%;
        padding-top: 0rem;
        margin-left: auto;
        margin-right: auto;
        }

        h2{
            font-family:'Asap', sans-serif;
            padding: 2rem 26rem;
            text-align: center;
            padding-bottom: 2rem;
            color: white;
            font-size: 2.5rem;
        }

        p{
            text-align: center;
            font-weight: light;
            font-size: 1.5rem;
            overflow: hidden;
            padding-bottom: .5rem;
            padding-top: 0.5rem;
        }

        span{
            color: #1FA3CD;
        }
`;


export default ValueSection;