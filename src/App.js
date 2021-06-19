import './App.css';
import {useState, useEffect, useMemo} from "react";
import Trivia from "../src/components/Trivia";
import Timer from "../src/components/Timer";
import Start from "../src/components/Start";


function App() {
  const [username, setUsername]= useState(null);
  const [questionNumber, setQuestionNumber]= useState(1);
  const [earned, setEarned]= useState("$ 0");
  const data=[
    {
      id:1,
      question : "Which state in the United States is largest by area?",
      answers : [
          { 
            text:"Alaska",
            correct:true
          },
          { 
            text:"California",
            correct:false
          },
          { 
            text:"Texas",
            correct:false
          },
          { 
            text:"Hawaii",
            correct:false
          },
      ],
  },
  {
    id:2,
    question : "What does the \"F\" stand for in FBI?",
    answers : [
        { 
          text:"Foreign",
          correct:false
        },
        { 
          text:"Federal",
          correct:true
        },
        { 
          text:"Flappy",
          correct:false
        },
        { 
          text:"Face",
          correct:false
        },
    ],
}, 
{
  id:3,
  question : "The US declared war on which country after the bombing of Pearl Harbor?",
  answers : [
      { 
        text:"Japan",
        correct:true
      },
      { 
        text:"Russia",
        correct:false
      },
      { 
        text:"Germany",
        correct:false
      },
      { 
        text:"China",
        correct:false
      },
    ],
},
{
  id:4,
  question : "The ozone layer restricts",
  answers : [
      { 
        text:"Visible light",
        correct:false
      },
      { 
        text:"Infrared radiation",
        correct:false
      },
      { 
        text:"X-rays and gamma ray",
        correct:false
      },
      { 
        text:"Ultraviolet radiation",
        correct:true
      },
  ],
}, {
  id:5,
  question : "What was the first university in the United States?",
  answers : [
      { 
        text:"Harvard",
        correct:true
      },
      { 
        text:"University of Washington",
        correct:false
      },
      { 
        text:"Yale",
        correct:false
      },
      { 
        text:"Oxford",
        correct:false
      },
  ],
}, {
  id:6,
  question : "The escape velocity of a rocket fired from the earth towards the moon is the velocity required to overcome",
  answers : [
      { 
        text:"Moon's gravitational pull",
        correct:false
      },
      { 
        text:"Earth's gravitational pull",
        correct:true
      },
      { 
        text: "Centripetal force due to the earth's rotation",
        correct:false
      },
      { 
        text:   "Pressure of the atmosphere",
        correct:false
      },
  ],
}, {
  id:7,
  question : "Lal Bahadur Shastri is also known as",
  answers : [
      { 
        text:   "Guruji",
        correct:false
      },
      { 
        text: "Man of Peace",
        correct:true
      },
      { 
        text: "Punjab Kesari",
         correct:false
      },
      { 
        text: "Mahamana",
        correct:false
      },
  ],
}, {
  id:8,
  question : "Which of the following consumer goods is the Gerber Products Co. best known for?",
  answers : [
      { 
        text:"Potato chips",
        correct:false
      },
      { 
        text:"Fine wines",
        correct:false
      },
      { 
        text:"Baby Food",
        correct:true
      },
      { 
        text:"Chewing gum",
        correct:false
      },
  ],
}, {
  id:9,
  question : "In aviation, what does UFO stand for?",
  answers : [
      { 
        text:   "Unified Flying Object",
        correct:false
      },
      { 
        text:"Unitary Flinging Obsession",
         correct:false
      },
      { 
        text:  "United Flag Opposition",
        correct:false
      },
      { 
        text:"Unidentified Flying Object",
        correct:true
      },
  ],
}, {
  id:10,
  question : "Numismatics is the study of",
  answers : [
      { 
        text:"coins",
        correct:true
      },
      { 
        text:  "numbers",
        correct:false
      },
      { 
        text:"stamps",
        correct:false
      },
      { 
        text:"space",
        correct:false
      },
  ],
}, {
  id:11,
  question : "Which of these African countries is situated south of the equator?",
  answers : [
      { 
        text: "Ethiopia",
        correct:false
      },
      { 
        text:"Nigeria",
        correct:false
      },
      { 
        text: "Zambia",
        correct:true
      },
      { 
        text:"Chad",
        correct:false
      },
  ],
}, {
  id:12,
  question : "Which of these brands was chiefly associated with the manufacture of household locks?",
  answers : [
      { 
        text:"Phillips",
        correct:false
      },
      { 
        text:"Flymo",
        correct:false
      },
      { 
        text:"Chubb",
        correct:true
      },
      { 
        text:"Ronseal",
        correct:false
      },
  ],
}, {
  id:13,
  question : "When did China test their first atomic device?",
  answers : [
      { 
        text:"1962",
        correct:false
      },
      { 
        text:"1963",
        correct:false
      },
      { 
        text:"1964",
        correct:true
      },
      { 
        text:"1965",
        correct:false
      },
  ],
}, {
  id:14,
  question : "Construction of which of these famous landmarks was completed first?",
  answers : [
      { 
        text:" Empire State Building ",
        correct:false
      },
      { 
        text:"Royal Albert Hall",
        correct:false
      },
      { 
        text:"Eiffel Tower",
        correct:false
      },
      { 
        text:"Big Ben Clock Tower",
        correct:true
      },
  ],
}, {
  id:15,
  question : "In 1718, which pirate died in battle off the coast of what is now North Carolina?",
  answers : [
      { 
        text:"Calico Jack",
        correct:false
      },
      { 
        text:"Blackbeard",
        correct:true
      },
      { 
        text:"Bartholomew Roberts",
        correct:false
      },
      { 
        text:"Captain Kidd",
        correct:false
      },
  ],
},
  ]


  const [stop, setStop]=useState(false);

  const moneyPyramid= useMemo(()=>
    [
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 300"},
    {id:4,amount:"$ 500"},
    {id:5,amount:"$ 1000"},
    {id:6,amount:"$ 4000"},
    {id:7,amount:"$ 10000"},
    {id:8,amount:"$ 20000"},
    {id:9,amount:"$ 32000"},
    {id:10,amount:"$ 64000"},
    {id:11,amount:"$ 125000"},
    {id:12,amount:"$ 250000"},
    {id:13,amount:"$ 500000"},
    {id:14,amount:"$ 1000000"},
    {id:15,amount:"$ 5000000"}

  ].reverse(),
 []);
  useEffect(()=>{
    questionNumber>1 &&
    setEarned(moneyPyramid.find((m)=>m.id === questionNumber-1).amount);

  }, [moneyPyramid,questionNumber]);

  return (
    <div className="app">
    {username ? (
      <>
      <div className="main">
    {stop ? ( 
      <h1 className="endtext">You earned : {earned} </h1>
     ) : (
       <>
       <div className="top">
      <div className="timer">
      <Timer setStop={setStop} 
      questionNumber={questionNumber}/>
      </div>
    </div>
    <div className="bottom">
    <Trivia 
    data={data}
      setStop={setStop}
      setQuestionNumber={setQuestionNumber}
      questionNumber={questionNumber}
    /></div>
  </>
  ) }
   
    </div>

    <div className="pyramid">
      <ul className="moneyList">
      {moneyPyramid.map((m)=>(
      <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{m.id}</span>
      <span className="moneyListItemAmount">{m.amount}</span>
      </li>
      ))}
      </ul>
      </div>
      </>
    ): <Start setUsername={setUsername}/>}
    
    </div>
  );
}

export default App;
