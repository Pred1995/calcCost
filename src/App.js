import React, {useState} from "react";
import Main from "./components/Main";
import {useDispatch, useSelector} from "react-redux";
import {chooseCurrentStep, resetData} from "./redux/actions/calc";

const App = () => {
  const dispatch = useDispatch()

  const step  = useSelector(({ calc }) => calc.step)
  const isHouse  = useSelector(({ calc }) => calc.isHouse)
  const result  = useSelector(({ calc }) => calc.result)
  let id  = useSelector(({ calc }) => calc.step.currentId)

  const [header] = useState([
    'Что будем строить',
    'Количество этажей (число):',
    'Материал стен:',
    'Длина стен (в метрах):',
    'Успешно'
  ])
  // заголовки

  const onSelectCurrent = React.useCallback((id => {
    dispatch(chooseCurrentStep({id, header: header[id-1]}))
  }), [])
  // переход на указанный экран

  const handleCurrent = () => {
    onSelectCurrent(++id)
  }
  // переход на следующий шаг

  const handleReset = () => {
    onSelectCurrent(1)
    dispatch(resetData())
  }
  // переход на первый шаг и сброс всех данных redux

  return (
    <div className="calc">
      <div className="calc__header">
        <h4>Калькулятор цен</h4>
        <h6>{step.currentId === 5 ? 'Результат рассчёта' :  'Шаг ' + step.currentId}</h6>
      </div>
      <div className="calc__list">
        <Main currentStep={step.currentId} header={step.currentHeader} result={result.result} isHouse={isHouse} onSelectCurrent={onSelectCurrent}/>
        <div className="calc__buttons">
          <button className="calc__button" onClick={handleReset}>{step.currentId !== 5 ? 'Отмена' : 'Новый расчёт'}</button>
          {step.currentId !== 5 ? <button className="calc__button" onClick={handleCurrent}>{step.currentId === 4 ? 'Рассчитать' : 'Далее'}</button> : null}
        </div>
        {/*кнопки отображаются в зависимости от текущего этапа*/}
      </div>
    </div>
  );
}

export default App;
