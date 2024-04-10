export default function ExtraTimeSection({
  extraMainTime, setExtraMainTime,
  extraAdditingTime, setExtraAdditingTime,
  handleFillAllInputs
}) {
  return (
    <section className="extra-time-section">
      <div className="section-top">
        <span className="top-title">Дополнительный контроль времени</span>
        <div className="example">
          <button className="example-button" onClick={handleFillAllInputs}>Показать пример заполнения</button>
          <span className="example-text">20 мин / 40 ходов + 5 секунд на ход + 30 мин + 2 секунды на ход до конца партии</span>
        </div>
      </div>

      <div className="section-form">
        <label htmlFor="extra-main-time">Дополнительное время на партию*</label>
        <input type="number" id="eaxtra-main-time" value={extraMainTime} onChange={e => setExtraMainTime(e.target.value)} />

        <label htmlFor="extra-additing-time">Добавление секунд на ход</label>
        <input type="number" id="extra-additing-time" value={extraAdditingTime} onChange={e => setExtraAdditingTime(e.target.value)} />
      </div>
    </section>
  )
}
