import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;

    h1 {
        margin: 1rem;
        font-size: 3rem;
        font-weight: bold;
    }

    p {
        cursor: pointer;
    }
`

const Logo = styled(NavLink)`
    margin: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-family: 'ZCOOL KuaiLe', cursive;
`

const LinkContainer = styled.nav`
    width: 40%;
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
    cursor: pointer;
    color: white;
`

const Navigation = props => {
    return(
        <NavDiv>
            <Logo exact to ='/'>Dad Jokes</Logo>
            <LinkContainer>
                <Link exact to='/register'>Register</Link>
                {props.jokes.length > 0 ? <p onClick={props.logOut}>Log Out</p> :
                    <Link exact to='/login'>Log In</Link>
                }
            </LinkContainer>
        </NavDiv>
    );
}

export default Navigation;