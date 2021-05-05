import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Import Img
import Logo from '../img/FAOG_Logo.png';

const Nav = () =>{

    return(
        <StyledNav>
            <h1><Link id="logo" to="/"><img src={Logo} alt="" width="200" height="50"/></Link></h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/give">Give</Link>
                </li>
                <li>
                    <Link to="/prayer">Prayer</Link>
                </li>
                <li>
                    <Link to="/leadership-team">Leadership Team</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

//Style

const StyledNav = styled.nav`
    min-height: 10vh;
    background-color: #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;

    ul{
        display:flex;
        list-style: none;
    }

    li{
        padding-left: 5rem;
        position: relative;
        border-color: white;
    }

    a{
        border-color: white;
        color: white;
        font-weight: bold;
        font-size: large;
        text-decoration: none;
        transition: all 0.5s ease;
        &:hover{
            color:#1FA3CD;
        }
    }

    /* button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: .5rem 1rem;
        border: 3px solid #1FA3CD;
        border-radius: 1rem;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #1FA3CD;
            color: white;
        }
    } */
`;

export default Nav;