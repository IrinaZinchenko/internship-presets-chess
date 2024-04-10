export default function MainTimeSection({
  mainTime, setMainTime,
  additingTime, setAdditingTime,
  movesCount, setMovesCount,
  handleFillMainInputs
}) {
  return (<>
    <section className="main-time-section">
      <div className="section-top">
        <span className="top-title">Контроль времени</span>
        <div className="example">
          <button className="example-button" onClick={handleFillMainInputs}>Показать пример заполнения</button>
          <span className="example-text">20 мин / 40 ходов + 5 секунд на ход до конца партии</span>
        </div>
      </div>

      <div className="section-form">
        <label htmlFor="main-time">Время на партию*</label>
        <input type="number" id="main-time" value={mainTime} onChange={e => setMainTime(e.target.value)} />

        <label htmlFor="additing-time">Добавление секунд на ход</label>
        <input type="number" id="additing-time" value={additingTime} onChange={e => setAdditingTime(e.target.value)} />

        <label htmlFor="moves-count">Количество ходов</label>
        <input type="number" id="moves-count" value={movesCount} onChange={e => setMovesCount(e.target.value)} />
      </div>
    </section>
    </>);
}
