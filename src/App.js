
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
  
  fetchApi = () => {
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
          },
          isLoaded: true
        }
        )              
      },
      );
      fetch(`https://api.github.com/users/${userInput}/repos`)
      .then(res => res.json())
      .then(
        (repos) => {
          
          this.setState(
            {repos: 
              repos.map((rep) => 
                [
                rep.name,
                 rep.id
                ]
              )
            }
          )
        }
      )
  }
  inputValue = (e) => {
    
    this.setState({ userInput: e.target.value}, this.fetchApi);
        
    }

 
  render()
  {
    return (
      <>
      <Form inputValue= {this.inputValue} user={this.state.user} userInput={this.state.userInput} repos={this.state.repos}/>
      </>
    )
  }
}