import React from 'react';
import {useDispatch} from "react-redux";
import {setHouse} from "../../redux/actions/calc";

const FirstStep = ({onSelectCurrent}) => {
  const dispatch = useDispatch()

  const handleSelect = (e) => {
    dispatch(setHouse(e.target.innerText === 'Жилой дом'))
    onSelectCurrent(e.target.innerText === 'Жилой дом' ? 2 : 3)
  }
  return (
    <>
    <div onClick={handleSelect} className="calc__list-item calc__list-item--selected">
      <p>Жилой дом</p>
    </div>
    <div onClick={handleSelect} className="calc__list-item">
      <p>Гараж</p>
    </div>
    </>
  );
};

export default FirstStep;
