import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import List from "./List";


export default class Form extends React.Component {
constructor()
{
    super();
    this.state = {
        showCom:false
    }
}
      onClick = (e) => {
        e.preventDefault();

        if(!this.state.showCom){
            setTimeout(() => {this.setState({showCom:true}, this.props.apiData )}, 1000)

        } else this.setState({showCom: false})
     ;
    }  


    render()
    {
        return(
            <>
            {!this.state.showCom &&
                <form className="w-50 p-3 border border-secondary m-auto">
            <div  className="mb-3">
            <Label forEl= "tekst" className= "form-label"> GitHub username:</Label> <br/>
            <Input
            className="form-control"
            type="text"
            name="tekst"
            id="tekst"
            placeholder="e.g.facebook"
            changeText={this.props.inputValue}
            value={this.props.userInput}
            /> <br/>
            </div>
            <div className="d-grid gap-2">
            <Button type="submit" onClick= {this.onClick} className="btn btn-secondary" >
                Go!
            </Button>
            </div>
            </form>}
            {this.state.showCom &&     
            <List data = {this.props.user} repos = {this.props.repos} onClick= {this.onClick}/>
            
            }
            </>
            
        )
    }
}