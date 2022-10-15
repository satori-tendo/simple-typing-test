<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      
=======
import s from './App.module.css'
import { useEffect, useState } from 'react';
import randomWords from 'random-words'; 


const NUMB_OF_WORDS = 100;
const SECONDS = 60;


function App() {

  const [words, setWords] = useState([]);
  const [writeMode, setWriteMode] = useState(true)


  useEffect(() => {
    setWords(generateWords())
  }, [])

  const generateWords = () => {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
  }

  return (
    <div className={s.app}>
      <div className={s.app__container}>
        {writeMode 
        ? <div className={s.app__writeMode}>
          <div className={s.app__card}>
            {words.map((word, i) => (
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
        : <div className={s.app__results}>
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
      </div>
>>>>>>> 85129ec (build the UI)
    </div>
  );
}

export default App;
