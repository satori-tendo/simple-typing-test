import React from "react";
import s from './ResultsMode.module.css'

const ResultsMode = (props) => {

  const handleClick = () => {
    props.handleResetClick()
  }

  return <div className={s.app__results}>
    <div className={s.results__results}>
      <div className={s.results__wpm}>
        <span className={s.wpm__title}>wpm</span>
        <span className={s.wpm__number}>{props.correct}</span>
      </div>
      <div className={s.results__acc}>
        <span className={s.acc__title}>acc</span>
        <span className={s.acc__number}>{Math.round(props.correct / (props.correct + props.incorrect) * 100)}%</span>
      </div>
    </div>
    <button className={s.results__button} onClick={handleClick}>RESET</button>
  </div>
}

export default ResultsMode;