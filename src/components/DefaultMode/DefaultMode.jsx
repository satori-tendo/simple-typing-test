import React from "react";
import s from './DefaultMode.module.css'

const DefaultMode = (props) => {
    return <div className={s.app__writeMode}>
    <div className={s.app__card}>
      {props.words.map((word, i) => (
        <span key={i}>
          <span>{word}</span>
          <span> </span>
        </span>
      ))}
    </div>
    <div className={s.app__time}>60</div>
    <form>
      <input className={s.app__input} placeholder='Start typing....'/>
    </form>
  </div>
}

export default DefaultMode;