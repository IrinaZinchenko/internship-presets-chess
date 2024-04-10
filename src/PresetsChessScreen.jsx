import React, {useState} from 'react';
import MainTimeSection from './components/MainTimeSection';
import ExtraTimeSection from './components/ExtraTimeSection';

const DEFAULT_MAIN_TIME = 20;
const DEFAULT_ADDITING_TIME = 5;
const DEFAULT_MOVES_COUNT = 40;
const DEFAULT_EXTRA_MAIN_TIME = 30;
const DEFAULT_EXTRA_ADDITING_TIME = 2;


export default function PresetsChessScreen() {
  const [mainTime, setMainTime] = useState('');
  const [additingTime, setAdditingTime] = useState('');
  const [movesCount, setMovesCount] = useState('');
  const [extraMainTime, setExtraMainTime] = useState('');
  const [extraAdditingTime, setExtraAdditingTime] = useState('');


  const handleFillMainInputs = () => {
    setMainTime(DEFAULT_MAIN_TIME);
    setAdditingTime(DEFAULT_ADDITING_TIME);
    setMovesCount(DEFAULT_MOVES_COUNT);
  };

  const handleFillExtraInputs = () => {
    setExtraMainTime(DEFAULT_EXTRA_MAIN_TIME);
    setExtraAdditingTime(DEFAULT_EXTRA_ADDITING_TIME);
  };

  const handleFillAllInputs = () => {
    handleFillMainInputs();
    handleFillExtraInputs();
  }

  return (<>
    <MainTimeSection {...{
      mainTime, setMainTime,
      additingTime, setAdditingTime,
      movesCount, setMovesCount,
      handleFillMainInputs
    }}/>

    <ExtraTimeSection {...{
      extraMainTime, setExtraMainTime,
      extraAdditingTime, setExtraAdditingTime,
      handleFillAllInputs
      }}/>
  </>);
}
