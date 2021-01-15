import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addMaterial} from "../../redux/actions/calc";

const ThirdStep = ({ isHouse, onSelectCurrent}) => {
  const dispatch = useDispatch()
  const [houseType] = useState(['Кирпич', 'Шлакоблок', 'Деревянный брус']);
  const [garageType] = useState(['Шлакоблок', 'Металл', 'Сендвич-панели']);

  const handleSelect = (e) => {
    dispatch(addMaterial(e.target.innerText))
    onSelectCurrent(4)
  }
  return (
    <>
      {
        isHouse ? houseType.map((el, idx) => (
          <div key={idx} onClick={handleSelect} className={`calc__list-item ${idx === 0 ? 'calc__list-item--selected' : ''}`}>
            <p>{el}</p>
          </div>
        )) : garageType.map((el, idx) => (
          <div key={idx} onClick={handleSelect} className={`calc__list-item ${idx === 0 ? 'calc__list-item--selected' : ''}`}>
            <p>{el}</p>
          </div>
        ))
      }

    </>
  );
};

export default ThirdStep;
