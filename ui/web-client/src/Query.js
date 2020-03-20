import React, {Component} from 'react';
import axios from "axios";

export class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        axios.post("http://localhost:3000/api/v1/data", event.target.value)
        event.preventDefault();
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    command :
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Send" />
            </form>
        );
    }
}
