import s from './App.module.css'
import { useEffect, useState } from 'react';
import randomWords from 'random-words'; 
import DefaultMode from './components/DefaultMode/DefaultMode';

const NUMB_OF_WORDS = 100;


function App() {

  const [words, setWords] = useState([]);
  const [mode, setMode] = useState('write')

  useEffect(() => {
    mode === 'write' && setWords(generateWords())
  }, [mode])

  const getMode = (value) => {
    setMode(value)
  }
  const generateWords = () => {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
  }
  
  return (
    <div className={s.app}>
      <div className={s.app__container}>
        <DefaultMode words={words} getMode={getMode}/>
      </div>
    </div>
  );
}

export default App;
