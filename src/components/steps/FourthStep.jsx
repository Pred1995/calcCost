import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addWall} from "../../redux/actions/calc";

const FourthStep = () => {
  const dispatch = useDispatch()
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [sizeTimeout, setSizeTimeout] = useState(false)

  useEffect(() => {
    if (x !== 0 && y !== 0) {
        if (sizeTimeout !== false) {
          clearTimeout(sizeTimeout)
        }
        const obj = {x, y}
        setSizeTimeout(setTimeout((value) => {
            dispatch(addWall(value))
          }, 500, obj))
    }

  }, [x, y])

  const setSizeX = (e) => {
    setX(e.target.value)
  }
  const setSizeY = (e) => {
    setY(e.target.value)
  }

  return (
    <div className="calc__list-input">
      <input onChange={setSizeX} value={x} type="number" min={0}/>
      <input onChange={setSizeY}  value={y} type="number" min={0}/>
    </div>
  );
};

export default FourthStep;
