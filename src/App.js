
import React from 'react';
import './App.css';
import Form from './fragments/Form';


export default class App extends React.Component{
  constructor()
  {
    super();
    this.state = {
      isLoaded: false,
      user: {},
      userInput: '',
      repos: []
    }
  }
  setUser = (newUser) => {
    this.setState({ user: newUser });
  }

  inputValue = (e) => {
    const { user } = this.state;
    const userInput = e.target.value;
    this.setState({ userInput: userInput}); 
    this.setState({

    })    
    }

  componentDidMount(){
    const { userInput } = this.state;
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState(
          {user: {
            avatarUrl: data.avatar_url,
            name: data.name,
            location: data.location,
            bio: data.bio
          }}
        ) 
              
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  } 
 
  render()
  {
    return (
      <>
      <Form inputValue= {this.inputValue} user={this.state.user}/>
      </>
    )
  }
}