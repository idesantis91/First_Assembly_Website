import React from 'react'; 
import styled from 'styled-components';

const ValueSection = () =>{

    return(
        <Background>
            <ValueHeader>
            <div className="value-header">
                <h2>OUR VALUES</h2>
            </div>
            <div className="line"></div>
            </ValueHeader>
        <ValueSectionStyled>
            <p>We live a life of <span>WORSHIP</span> to God</p>
            <p>We deliberately <span>CONNECT</span> with God, the Church and our Community.</p>
            <p>We are committed to <span>GROW</span> as Disciples of Jesus Christ</p>
            <p>We will <span>SERVE</span> wholeheartedly and sacrificially.</p>
            <p>We will obey Jesus’ command to <span>GO</span> and make Disciples.</p>
        </ValueSectionStyled>
        </Background>
    )
}

const Background = styled.div`
    background: #282828;
`;

const ValueSectionStyled = styled.div`
    flex: 1;
    /* padding: 5rem 10rem; */
    padding-bottom: 0rem;
    padding-top: 1rem;
    background: #282828;
    height: 40vh;
    overflow: hidden;

        p{
            text-align: center;
            font-weight: light;
            color: #e6e1e1;
            font-size: 1.5rem;
            overflow: hidden;
            padding-bottom: .5rem;
            padding-top: 0.5rem;

        }

        span{
            color: #1FA3CD;
        }
`;

const ValueHeader = styled.div`
    padding: 1rem 10rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    background: #282828;
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
            padding: 1.5rem 15rem;
            color: white;
            font-size: 2.5rem;
            text-align: center;
        }
`;


export default ValueSection;