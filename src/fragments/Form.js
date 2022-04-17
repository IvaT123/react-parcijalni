import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default class Form extends React.Component {
constructor()
{
    super();
    this.state = {
        user: {}
    }
}
    onClick = () => {
    /* const { user } = this.props.state;
    this.setState( {user: user} ) */
    }

    render()
    {
        return(
            <form>
            <Input
            type="text"
            name="tekst"
            id="tekst"
            placeholder="Upišite neki tekst"
            changeText={this.props.inputValue}
            /> <br/>
            <Button type="button" onClick= {this.onClick}>
                Go!
            </Button>
            </form>
        )
    }
}