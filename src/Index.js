import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './components/question-list';
import QuestionContainer from './components/question-container';

// Class declaration
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            questions: [ {"Question #1" : "What is my middle name?","A":"Aaron","B":"Adam","C":"Garrett","D":"Diego"},{"Question #2" : "What is the capital of California?","A":"San Diego","B":"Los Angeles","C":"Sacremento","D":"San Francisco"},{"Question #3" : "When is this project deadline?","A":"April","B":"May","C":"June","D":"July"},{"Question #4" : "What is my favorite programming language?","A":"Java","B":"JavaScript","C":"C#","D":"VB"},{"Question #5" : "Where do I live currently?","A":"Washington","B":"California","C":"Oregon","D":"Arizona"}]
            ,selected: "Question #1"
        };
    }

    render(){
        return (
            <div className="container">
                <div className="row">

                    {/* List component holding questions.  Contains the question-list-item component */}
                    <QuestionsList 
                    onSelectQuestion = {(selected) => this.setState({selected})} 
                    questions={this.state.questions}
                    selected={this.state.selected} />

                    {/* Contains question */}
                    <QuestionContainer 
                    questions={this.state.questions}
                    selected={this.state.selected} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);