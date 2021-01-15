import React from 'react';
import {FirstStep, SecondStep, ThirdStep, FourthStep, FinalStep} from './steps'

const Main = ({currentStep, header, isHouse, onSelectCurrent, result}) => {
  const renderSwitch = currentStep => {
    switch(currentStep) {
      case 1: return <FirstStep onSelectCurrent={onSelectCurrent}/>;

      case 2: return <SecondStep/>;

      case 3: return <ThirdStep isHouse={isHouse} onSelectCurrent={onSelectCurrent}/>;

      case 4: return <FourthStep/>;

      case 5: return <FinalStep/>;

      default: return null;
    }
  }
  return (
    <>
    <div className="calc__list__header">
      <h4>{currentStep === 5 && result === 'ok' ? 'Успешно' : currentStep === 5 && result === "error" ? 'Ошибка' : header}</h4>
    </div>
      {renderSwitch(currentStep)}
    </>
  )

};

export default Main;
