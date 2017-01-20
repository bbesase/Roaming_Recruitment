import React, { Component } from 'react';
import {FormControl, Col, ControlLabel} from 'react-bootstrap';


class InputBox extends Component {
    

    handleTextChange(event){
        console.log('Hello');
        console.log('Hello again');
    }

    render() {
        return (
        <div className="Input">
            
            <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                
                    type={this.props.type}
                    label={this.props.label}
                    placeholder={this.props.placeholder}
                    onChange={this.handleTextChange.bind(this)}
                />
                
            
        </div>
        );
    }
}

export default InputBox;
