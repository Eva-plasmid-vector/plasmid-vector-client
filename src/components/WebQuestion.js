import React, {useState, useRef} from 'react';
import Axios from 'axios';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const WebQuestion = () => {
    // const [userInput, setUserInput] = useState('');
    const webQuestionRef = useRef(null);

    const [wordLength, setWordLength] = useState(0);
    const [generalFeedback, setGeneralFeedback] = useState('');

    const submitFeedback = () =>{
        Axios.post("https://plasmid-vector.herokuapp.com/api/insert", 
        {generalFeedback: generalFeedback}).then(()=>{
            alert("successful insert");
            // console.log(generalFeedback)
        });
    };

    const userGetBack = ()=>{
        // console.log('The user ask: '+ webQuestionRef.current.value)
        console.log('attempted submit');
        submitFeedback();

        // alert('Thanks for telling us! We appreciate your effort to help us improve!')           
    };
    const wordSecureCount = ()=>{
        const wordInput = webQuestionRef.current.value.length;
        if (wordInput === 0){
            // wordInput <= 500 && wordInput !== ''
            alert("Sorry. You can't submit with nothing. Give us some advice!");
        }
        else if (wordInput > 500){
            alert('Too many words!')
            console.log('The user attempted but inputted too many words. Alert for false input. Word count: ' + wordInput)
        }
        else{
            userGetBack();
            webQuestionRef.current.value = '';
            setWordLength(0);
        }
        
    }


  return (
    <div className='web-question'>
 
        <div className="title">
            <div className="icon">
                <QuestionAnswerIcon/>       
            </div>
            <h2>Tell Us Your Question</h2>
        </div>
        <div className='web-question-display'>
           
                <textarea name="generalFeedback" id="general-question-textarea" cols="30" rows="10" placeholder="Enter your questions, suggestions, comments about this website…"
                ref={webQuestionRef}
                onChange={(event)=>{
                    setWordLength(event.target.value.length)
                    setGeneralFeedback( webQuestionRef.current.value)
                }}
                
                ></textarea>

                <div className="web-content-display-bottom">
                {
                    wordLength !== 0 &&
                    <p>{wordLength}/500</p>
                }
                <input type="submit" name="feedback-submit" value="submit" id="general-question-submit" 
                
                onClick={(event)=>{
                    //PREVENT JUMP
                    event.preventDefault();
                    //SECURITY CHECK
                    wordSecureCount();
                    
                    }}
                />
            {/* <form action=""> 
           
            </form>           */}
                    
                </div>
            
        </div>

    </div>
  )
}

export default WebQuestion