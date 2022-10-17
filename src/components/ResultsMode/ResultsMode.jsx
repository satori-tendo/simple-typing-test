import React from "react";
import s from './ResultsMode.module.css'

const ResultsMode = (props) => {
    return <div className={s.app__results}>
    <div className={s.results__results}>
      <div className={s.results__wpm}>
        <span className={s.wpm__title}>wpm</span>
        <span className={s.wpm__number}>{50}</span>
      </div>
      <div className={s.results__acc}>
        <span className={s.acc__title}>acc</span>
        <span className={s.acc__number}>{50}%</span>
      </div>
    </div>
    <button className={s.results__button}>RESET</button>
  </div>
}

export default ResultsMode;