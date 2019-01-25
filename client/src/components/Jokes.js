import React from 'react';
import styled from 'styled-components';

const JokesContainer = styled.div`
    width: 85%;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
`

const IndividualJoke = styled.p`
    height: 15rem;
    width: 22.5rem;
    padding: 1rem;
    margin: 1.5rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Jokes = props => {
   if (props.jokes) {
        return(
            <JokesContainer>
                {props.jokes.map(joke => {
                    return <IndividualJoke key={joke.id}>{joke.joke}</IndividualJoke>;
                })}
            </JokesContainer>
        );
   } else {
       return (
           <JokesContainer>No Jokes Available :(</JokesContainer>
       );
   }
}

export default Jokes;