import React, { Fragment } from 'react';
import './Quiz.css'
import Buttons from './Buttons';

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: 'What is the capital of France?',
                    answerOptions: [
                        { answerText: 'New York', isCorrect: false },
                        { answerText: 'London', isCorrect: false },
                        { answerText: 'Paris', isCorrect: true },
                        { answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { answerText: 'Jeff Bezos', isCorrect: false },
                        { answerText: 'Elon Musk', isCorrect: true },
                        { answerText: 'Bill Gates', isCorrect: false },
                        { answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { answerText: 'Apple', isCorrect: true },
                        { answerText: 'Intel', isCorrect: false },
                        { answerText: 'Amazon', isCorrect: false },
                        { answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { answerText: '1', isCorrect: false },
                        { answerText: '4', isCorrect: false },
                        { answerText: '6', isCorrect: false },
                        { answerText: '7', isCorrect: true },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(isCorrect) {
        isCorrect && this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        })

        this.state.currentQuestion === 3 ? this.setState({ showScore: true }) :
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })



    }

    render() {
        return (
            <div className='app'>
                {/* next div is for showing user score */}

                {this.state.showScore && (
                    <div className='score-section'>
                        You scored {this.state.score} out of {this.state.questions.length}
                    </div>
                )}

                {!this.state.showScore && (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {this.state.currentQuestion + 1}</span>/ {this.state.questions.length}
                            </div>
                            <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                        </div>

                        <div className='answer-section'>
                            {this.state.questions[this.state.currentQuestion].answerOptions.map(answer => (
                                <Buttons onClick={this.clickHandler.bind(this, answer.isCorrect)} key={answer.answerText} answerText={answer.answerText}>Shiraz</Buttons>
                            ))}
                        </div>
                    </>
                )}



            </div>
        )
    }
}
