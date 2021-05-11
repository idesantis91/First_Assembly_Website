import React from 'react';
//Import Img
import Logo from '../img/FAOG_Logo.png';
//Styled
import styled from 'styled-components';

const Footer = () =>{

    return(
        <FooterStyled>
            <ImageStyled>
                <img src={Logo} alt="logo" width="200" height="50"/>
            </ImageStyled>
            <Location>
                <h3>Location</h3>
                <ul>
                    <li><p>2021 Pulaski Road</p>
                    <p>New Castle, PA 16105</p>
                    </li>
                </ul>
            </Location>
            <Service>
            <h3>Service Times</h3>
                <ul>
                    <li>
                        <p>Sundays</p>
                        <p>10:30am Worship</p>
                    </li>
                    <li>
                        <p>Wednesday</p>
                        <p>6:30pm Family Night Ministries</p>
                        <p>Children, Teens, Adult Bible Study/Prayer</p>
                    </li>
                </ul>
            </Service>
        </FooterStyled>
    )
};

//Style
const Location = styled.div`
    float: right;
    padding-top: 2rem;
    h3{
        padding-top: 0rem;
        color: #1FA3CD;
    }
    p{
        padding: 0rem 0rem 0rem 0rem;
        font-size: small;
    }
    ul{
        display: flex;
    }

    li{
        display: block;
        border-color: white;
        list-style: none;
    }
`;

const Service = styled.div`
    float: right;
    padding-top: 2rem;
    position: relative;
    h3{
        color: #1FA3CD;
    }
    p{
        padding: 0rem 0rem 0rem 0rem;
        font-size: small;
    }

    ul{
        float: right;
        display:flex;
        padding-right: 2rem;
    }

    li{
        display:block;
        position: relative;
        padding-right: 2rem;
        list-style: none;
    }
`;

const FooterStyled = styled.div`
    height: 20vh;
    position: relative;
    display: flex; 
    justify-content: space-between;
    overflow: hidden;
`;

const ImageStyled = styled.div`
    img{
        position: relative;
        margin-top: 2rem;
    }
`;

export default Footer;