<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      
=======
import s from './App.module.css'
import { useEffect, useState } from 'react';
import randomWords from 'random-words'; 
import DefaultMode from './components/DefaultMode/DefaultMode';
import ResultsMode from './components/ResultsMode/ResultsMode';

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
        ? <DefaultMode words={words}/>
        : <ResultsMode />
        }
      </div>
>>>>>>> 85129ec (build the UI)
    </div>
  );
}

export default App;
