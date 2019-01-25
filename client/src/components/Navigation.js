import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
        margin: 1rem;
        font-size: 3rem;
        font-weight: bold;
    }
`

const LinkContainer = styled.nav`
    width: 40%;
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Link = styled(NavLink)`
`

const Navigation = () => {
    return(
        <NavDiv>
            <h1>Dad Jokes</h1>
            <LinkContainer>
                <Link exact to='/register'>Register</Link>
                <Link exact to='/login'>Login</Link>
            </LinkContainer>
        </NavDiv>
    );
}

export default Navigation;