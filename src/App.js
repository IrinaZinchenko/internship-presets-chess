import React, {useState} from 'react';

export default function App() {
  const [mainTime, setMainTime] = useState('');
  const [extraTime, setExtraTime] = useState('');
  const [movesCount, setMovesCount] = useState('');

  const handleFillInputs = () => {
    setMainTime(20);
    setExtraTime(5);
    setMovesCount(40);
  };

  return (<>
  <section>
    <div className="section-top">
      <span className="top-title">Контроль времени</span>
      <div className="example">
        <button className="example-button" onClick={handleFillInputs}>Показать пример заполнения</button>
        <span className="example-text">20 мин / 40 ходов + 5 секунд на ход до конца партии</span>
      </div>
    </div>

    <label htmlFor="main-time">Время на партию*</label>
    <input type="number" id="main-time" value={mainTime} onChange={e => setMainTime(e.target.value)} />

    <label htmlFor="extra-time">Добавление секунд на ход</label>
    <input type="number" id="extra-time" value={extraTime} onChange={e => setExtraTime(e.target.value)} />

    <label htmlFor="moves-count">Количество ходов</label>
    <input type="number" id="moves-count" value={movesCount} onChange={e => setMovesCount(e.target.value)} />
  </section>

  </>);
}
