import React, { Component } from 'react';
import QuestionListItem from './question-list-item';

const QuestionsList = (props) => {

    const myArray = props.questions.map((question)=>{

                    return <QuestionListItem 
                            onSelectQuestion={props.onSelectQuestion}
                            question={question}
                            selected={props.selected} 
                            key={Math.random()} />;
                });

        return (
            <ul className="col-md-3 list-group list-unstyled">
                {myArray}
            </ul>
        );
}

export default QuestionsList;