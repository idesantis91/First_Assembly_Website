import React from 'react';
//Style
import styled from 'styled-components';

const GivingSection = () =>{

    return(
        <Background>
            <GiveHeader>
                <h2>GIVE</h2>
                <div className="line"></div>
            </GiveHeader>
            <GiveContent>
                <h2>Giving can be a beautiful act of worship.</h2>
                <p>Giving (i.e., tithing) is not a way to absolve of guilt or gain favor with God—Jesus has already secured that for us. Instead, giving is a joyful response to God’s gifts and kindness toward us (2 Cor 9:7). All contributions and offerings are used to further our mission of sharing God’s love in our community.</p>
                <form>
                <button formaction="https://app.easytithe.com/App/Giving/firs2021183" >GIVE TO FIRST ASSEMBLY OF GOD - NEW CASTLE, PA</button> 
                </form>
                <p id="disclaimer">First Assembly of God - New Castle, PA First Assembly of God is a registered 501(c)(3) organization. <br></br><span>All donations are tax-deductible.</span></p>
            </GiveContent>
        </Background>
    )
}

const Background = styled.div`
    background: white;
`

const GiveHeader = styled.div`
    padding: 1rem 10rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
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
            color: #808080;
            font-size: 2.5rem;
            text-align: center;
        }
`;

const GiveContent = styled.div`
    text-align: center;
    h2{
        color: #808080;
    }
 h3{
     text-align: center;
     color: #808080;
 }
 p{
     text-align: center;
     color: #808080;
     margin-left: 15rem;
     margin-right: 15rem;
     font-weight: lighter;
     padding-bottom: 2rem;
 }
 span{
     font-weight: bold;
     color: #808080;
 }
button{
    background: none;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: #1FA3CD;
    border-color: #1FA3CD;
    border-width: .3rem;
    border-style: solid;
    transition: 0.2s ease-out;
    &:hover{
        background: linear-gradient(to right, #00B4DB, #0083B0);
        color: white;
        border-radius: 1rem;
    }

    #disclaimer{
        padding-bottom:0rem;
    }
}
`;

export default GivingSection;