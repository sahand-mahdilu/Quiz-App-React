import { useState } from "react"

export default function QuizApp() {

    const [Question,setQusertion]= useState([
        {
            questionText:"where is the capital of USA?",
            id:1,

            answers:[
                {answerText:"New Youk",isCorrect:false ,id:1},
                {answerText:"Paris",isCorrect:false ,id:2},
                {answerText:"LA",isCorrect:false ,id:3},
                {answerText:"Washington",isCorrect:true ,id:4},
            ]
        },
        {
            questionText:"which of the following is used for web development?",
            id:2,

            answers:[
                {answerText:"JAva-script",isCorrect:true ,id:5},
                {answerText:"Go",isCorrect:false ,id:6},
                {answerText:"Dart",isCorrect:false ,id:7},
                {answerText:"C++",isCorrect:false ,id:8} ,
            ]
        },  {
            questionText:"which of the following is a popular java-script library for user inter face?",
            id:3,

            answers:[
                {answerText:"Angular",isCorrect:false ,id:9},
                {answerText:"Vue.js",isCorrect:false ,id:10},
                {answerText:"React",isCorrect:true ,id:11},
                {answerText:"Ember",isCorrect:false ,id:12},
            ]
        },  {
            questionText:"what is the chemical symbol for water?",
            id:4,

            answers:[
                {answerText:"CO2",isCorrect:false, id:13},
                {answerText:"H2O",isCorrect:true, id:14},
                {answerText:"NaCl",isCorrect:false, id:15},
                {answerText:"Fe",isCorrect:false, id:16},
            ]
        },
    ])

    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [showScore,setShowScore]=useState(false)
    const [score,setScore]=useState(0)


    const clickHandler=(iscurrect)=>{

        console.log(iscurrect);

        if(iscurrect){
            setScore(prev=>{
                return prev +1
            })
        }

        setCurrentQuestion(prev=>{
            return prev+1
        })

    }




  return (
    <div className="shadow-2xl Quiz_app rounded-xl mx-auto mt-24 p-5 w-[430px] h-[220px] bg-blue-900 flex gap-10 justify-center">

    <div className="text-white">
        <p>Question {currentQuestion+1}/4</p>
        <p className="pt-2 font-bold">{Question[currentQuestion].questionText}</p>
    </div>
    <div className="text-white flex flex-col gap-3 items-center ">

    {Question[currentQuestion].answers.map(answer=>{

        
    return <button key={answer.id} onClick={()=>{clickHandler(answer.isCorrect)}} className="hover:bg-blue-700 p-1 border rounded-md w-36">{answer.answerText}</button>
    })}
       
 

    </div>

    </div>
  )
}
