import { useState } from "react"

export default function QuizApp() {

    const [Question,setQusertion]= useState([
        {
            questionText:"wwhere is the capital of USA?",

            answers:[
                {answerText:"New Youk",isCorrect:false},
                {answerText:"Paris",isCorrect:false},
                {answerText:"LA",isCorrect:false},
                {answerText:"Washington",isCorrect:true},
            ]
        },
        {
            questionText:"which of the following is used for web development?",

            answers:[
                {answerText:"JAva-script",isCorrect:true},
                {answerText:"Go",isCorrect:false},
                {answerText:"Dart",isCorrect:false},
                {answerText:"C++",isCorrect:false},
            ]
        },  {
            questionText:"which of the following is a popular java-script library for user inter face?",

            answers:[
                {answerText:"Angular",isCorrect:false},
                {answerText:"Vue.js",isCorrect:false},
                {answerText:"React",isCorrect:true},
                {answerText:"Ember",isCorrect:false},
            ]
        },  {
            questionText:"what is the chemical symbol for water?",

            answers:[
                {answerText:"CO2",isCorrect:false},
                {answerText:"H2O",isCorrect:true},
                {answerText:"NaCl",isCorrect:false},
                {answerText:"Fe",isCorrect:false},
            ]
        },
    ])

    const [currentQuestion,setCurrentQuestion]=useState(0)
    



  return (
    <div className="shadow-2xl Quiz_app rounded-xl mx-auto mt-24 p-5 w-[430px] h-[220px] bg-blue-900 flex gap-10 justify-center">

    <div className="text-white">
        <p>Question 1/4</p>
        <p className="pt-2 font-bold">where is the capital of USA?</p>
    </div>
    <div className="text-white flex flex-col gap-3 items-center ">
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">Washington</button>
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">san diego</button>
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">sanfransisco</button>
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">LA</button>
 

    </div>

    </div>
  )
}
