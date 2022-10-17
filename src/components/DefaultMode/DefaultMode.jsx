import React, { useEffect, useState } from "react";
import s from './DefaultMode.module.css'

const DefaultMode = (props) => {

  const [time, setTime] = useState(60);
  const [isCounting, setIsCounting] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && 
        setTime((time) => (time >= 1? time - 1 : 0))
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [isCounting])

  const handleClick = () => {
    setIsCounting(!isCounting)
  }

  return <div className={s.app__writeMode}>
    <div className={s.app__card}>
      {props.words.map((word, i) => (
        <span key={i}>
          <span>{word}</span>
          <span> </span>
        </span>
      ))}
    </div>
    <div className={s.app__time}>{time}</div>
    <form>
      <input className={s.app__input} placeholder='Start typing....' />
    </form>
    <button onClick={() => handleClick()}>YOYOYOYOYOYOYOYO</button>

  </div>
}

export default DefaultMode;