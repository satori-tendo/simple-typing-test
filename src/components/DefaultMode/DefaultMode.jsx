import React, { useEffect, useRef, useState } from "react";
import s from './DefaultMode.module.css'

const DefaultMode = (props) => {

  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState('');
  const [currWordIndex, setCurrWordIndex] = useState(0);
  // const [currCharIndex, setCurrCharIndex] = useState(0);
  // const [currChar, setCurrChar] = useState('');
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState('');
  const Input = useRef(null);
  
  window.correct = correct;

  const handleKeyDown = (e) => {
    if(e.keyCode === 32) {
      checkMatch();
      setInputValue('')
      setCurrWordIndex(currWordIndex + 1)
    }
  }

  // const wordClassName = (wordId) => {
  //   if(Input.target.value() === props.words[wordId]){
  //     return 'app__wordSuccess'
  //   }
  // }

  const checkMatch = () => {
    let wordToCompare = props.words[currWordIndex];
    let doesItMatch = wordToCompare == inputValue.trim()
    if(doesItMatch){
      setCorrect(+1);
    } else {
      setIncorrect(incorrect + 1)
    }
  }

  const start = () => {
    if (status !== 'start') {
      setStatus('started');
      Input.current.focus();
      let interval = setInterval(() => {
        setTime((time) => {
          if(time == 0) {
            clearInterval(interval)
            setStatus('finished')
            setInputValue('')
            alert('correct words:' + correct, 'incorrect words: ' + incorrect)
            console.log('yoyoyoy')
            return time = 0;
          } else {return time - 1}
        })
      }, 1000)
    }
  }

  return <div className={s.app__writeMode}>
    <div className={s.app__card}>
      {props.words.map((word, i) => (
        <span key={i}>
          <span >{word}</span>
          <span> </span>
        </span>
      ))}
    </div>
    <div className={s.app__time}>{time}</div>
    <form>
      <input className={s.app__input} placeholder='Start typing....' value={inputValue} ref={Input}
        onChange={(e) => {setInputValue(e.target.value); console.log(e.target.value)}} onKeyDown={handleKeyDown}/>
    </form>
    <button onClick={start}>START</button>

  </div>
}

export default DefaultMode;