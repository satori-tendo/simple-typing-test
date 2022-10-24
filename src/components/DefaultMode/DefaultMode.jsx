import React, { useEffect, useRef, useState } from "react";
import s from './DefaultMode.module.css'
import '../../index.css'
import ResultsMode from '../ResultsMode/ResultsMode'

const DefaultMode = (props) => {

  const [time, setTime] = useState(60);
  const [inputValue, setInputValue] = useState('');
  const [currWordIndex, setCurrWordIndex] = useState(0);
  // const [currCharIndex, setCurrCharIndex] = useState(0);
  // const [currChar, setCurrChar] = useState('');
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState('');
  const [mode, setMode] = useState('write')
  const Input = useRef(null);


  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      checkMatch();
      setInputValue('');
      setCurrWordIndex(currWordIndex + 1);
    }
  }

  const wordClassName = (word, wordId) => {
    if (wordId === currWordIndex) {
      return 'app__currentWord'
    }
  }

  const checkMatch = () => {
    let wordToCompare = props.words[currWordIndex];
    let doesItMatch = wordToCompare == inputValue.trim()
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1)
    }
  }

  window.status = status;
  window.mode = mode;

  const start = () => {
    if (status !== 'started') {
      Input.current.focus();
      setStatus('started');
      let interval = setInterval(() => {
        setTime((time) => {
          if (time == 0) {
            clearInterval(interval)
            setInputValue('')
            setStatus('finished')
            setMode('results')
          } else { return time - 1 }
        })
      }, 1000)
    } else if (status === 'finished') {
      setTime(60);
      setInputValue('');
      setCurrWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
    }
  }

  props.getMode(mode)

  const handleResetClick = () => {
    setTime(60)
    setCurrWordIndex(0)
    setCorrect(0)
    setIncorrect(0)
    setMode('write')
  }

  return (<>
    {status === 'ready' || mode === 'write' && (<div className={s.app__writeMode}>
      <div className={s.app__card}>
        {props.words.map((word, i) => (
          <span key={i}>
            <span className={wordClassName(word, i)}>{word}</span>
            <span> </span>
          </span>
        ))}
      </div>
      <div className={s.app__time}>{time}</div>
      <form>
        <input className={s.app__input} placeholder='Start typing....' value={inputValue} ref={Input} disabled={status !== 'started'}
          onChange={(e) => { setInputValue(e.target.value) }} onKeyDown={handleKeyDown} />
      </form>
      <button onClick={start}>START</button>

    </div>)}
    {status === 'finished' && mode === 'results' && (<ResultsMode correct={correct} incorrect={incorrect} 
        setStatus={setStatus} handleResetClick={handleResetClick}/>)}
  </>
  )
}

export default DefaultMode;