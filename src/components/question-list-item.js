import React from 'react';

const QuestionListItem = (props) => {

    const questionName = Object.keys(props.question)[0];

        if(props.selected === questionName){
            return (
                <li className="list-group-item selected">
                    {questionName}
                </li>
            );
        }else {
            return (
                <li onClick={() => props.onSelectQuestion(questionName)} className="list-group-item">
                    {questionName}
                </li>
            );
        }
}

export default QuestionListItem;