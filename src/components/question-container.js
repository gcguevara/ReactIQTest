import React, { Component } from 'react';
import Question from './question';


export default class QuestionContainer extends Component {
    constructor(props){
        super(props);

        this.state = {

            // Holds the answers for submission
            answers: []
        };
    }
    render(){
        return (
                <div className="col-md-9 text-center">
                    <h1>IQ Test</h1>
                    <ul>
                        <Question />
                    </ul>
                </div>
            );

    }
}