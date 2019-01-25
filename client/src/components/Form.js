import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 85%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const JokeForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }
`

class Form extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handlesChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin = event => {
        event.preventDefault();
        axios
            .post('http://localhost:3300/api/login/', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data);
                window.location.reload(); 
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleRegister = event => {
        event.preventDefault();
        axios
            .post('http://localhost:3300/api/register/', this.state)
            .then(response => {
                alert('Registered Sucessfully! Redirecting you to our login page...');
                this.props.history.push('/login');
            })
            .catch(error => {
                alert('Registration unsucessful! Try again with a unique username.');
                console.log(error);
            });
    }

    render() {
        return(
            <FormContainer>
                <JokeForm onSubmit={this.props.login ? this.handleLogin : this.handleRegister}>
                    <h2>{this.props.login ? 'Sign In' : 'Sign Up'}</h2>
                    <input 
                        name='username'
                        type='text'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handlesChange}
                        isrequired
                    />
                    <input 
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handlesChange}
                        isrequired
                    />
                    <button>{this.props.login ? 'Sign In' : 'Register'}</button>
                </JokeForm>
            </FormContainer>
        );
    }
}

export default Form;