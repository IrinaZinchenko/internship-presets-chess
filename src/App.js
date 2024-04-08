export default function App() {
  return (<>
  <section>
    <div className="section-top">
      <span className="top-title">Контроль времени</span>
      <div className="example">
        <button className="example-button">Показать пример заполнения</button>
        <span className="example-text">20 мин / 40 ходов + 5 секунд на ход до конца партии</span>
      </div>
    </div>

    <label>Время на партию*</label>
    <input type="number"/>

    <label>Добавление секунд на ход</label>
    <input type="number"></input>

    <label>Количество ходов</label>
    <input type="number"></input>
  </section>

  </>);
}
