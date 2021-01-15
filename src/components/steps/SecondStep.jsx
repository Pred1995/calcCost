import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addFloor} from "../../redux/actions/calc";

const SecondStep = () => {
  const dispatch = useDispatch()
  const [floor, setFloor] = useState(1)
  const [floorTimeout, setFloorTimeout] = useState(false)

  const setFloorHandler = (e) => {
    setFloor(e.target.value)
    if (floorTimeout !== false) {
      clearTimeout(floorTimeout)
    }
    if (e.target.value !== '') {
      setFloorTimeout(setTimeout((value) => {
        dispatch(addFloor(value))
      }, 500, e.target.value))
    }
  }

  return (
    <div className="calc__list-input">
      <input type="number" value={floor} onChange={setFloorHandler} min={0}/>
    </div>
  );
};

export default SecondStep;
