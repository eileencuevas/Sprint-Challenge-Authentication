import React from 'react';
import styled from 'styled-components';

const JokesContainer = styled.div`
    width: 85%;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const EmptyContainer = styled(JokesContainer)`
    flex-direction: column;
    
    p {
        margin: 1rem 0;
    }
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
   if (props.jokes.length > 0) {
        return(
            <JokesContainer>
                {props.jokes.map(joke => {
                    return <IndividualJoke key={joke.id}>{joke.joke}</IndividualJoke>;
                })}
            </JokesContainer>
        );
   } else {
       return (
           <EmptyContainer>
               <p>No Jokes Available :(</p>
               <p>Why don't you log in?</p>
           </EmptyContainer>
       );
   }
}

export default Jokes;