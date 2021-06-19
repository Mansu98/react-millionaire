import React,{useState,useEffect} from 'react';
import useSound from "use-sound";
import play from "../components/play.mp3";
import correct from "../components/correct.mp3";
import wrong from "../components/wrong.mp3";


export default function Trivia({data,setStop,setQuestionNumber,questionNumber}) 
{
const [question, setQuestion]=useState(null);
const [selectedAns, setSelectedAns]=useState(null);
const [className, setClassName]=useState("answer");
const [Play]= useSound(play);
const [Correct]= useSound(correct);
const [Wrong]= useSound(wrong);

useEffect(()=>{
    Play();
},[Play]);

useEffect(()=>{
    setQuestion(data[questionNumber-1]);
},[data,questionNumber]); 
const delay=(duration,callback)=>{
    setTimeout(()=>{
        callback();
    }, duration);
};
 
const handleClick=(a)=>{
    setSelectedAns(a);
    setClassName("answer active");
    delay(1000,()=>
        setClassName(a.correct ? "answer correct": "answer wrong")
  );
  delay(5000,()=>{
      if(a.correct){
          Correct();
          delay(2000,()=>{
          setQuestionNumber((prev)=>prev +1);
          setSelectedAns(null);
          });
        }
      else{
          Wrong();
        delay(2000,()=>{
          setStop(true);
      })
      }
  });
};
    
    return (
        <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
        {question?.answers.map((a)=>(
        <div className={selectedAns === a ? className:"answer"} onClick={()=>handleClick(a)}>
        {a.text}</div>
        ))}
        </div>
    </div>
     );
        }
        
 
