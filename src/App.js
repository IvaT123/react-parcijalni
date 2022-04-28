
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
       if(data.name !== undefined){
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
       } else {
         this.setState(
           {repos:[], user :{
             avatarUrl: undefined,
             name: "User not found!",
             location: "error",
             bio: "error"
           }}
         )
       }
                  
         
                      
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
  removeData = () => {
    const { user, repos } = this.state;
    if(user !== {} && repos !== []){
       this.setState({user: {}, repos: []})
    }
}
  inputValue = (e) => {   
    this.setState({ userInput: e.target.value});       
  }

 
  render()
  {
    return (
      <>
      <Form inputValue= {this.inputValue} user={this.state.user} userInput={this.state.userInput} repos={this.state.repos} apiData={this.fetchApi} removeData = {this.removeData}/>
      </>
    )
  }
}