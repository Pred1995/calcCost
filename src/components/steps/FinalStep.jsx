import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCost} from "../../redux/actions/calc";

const FinalStep = () => {
  const dispatch = useDispatch()
  const isHouse  = useSelector(({ calc }) => calc.isHouse)
  const wallMaterial  = useSelector(({ calc }) => calc.wallMaterial)
  const wallLength  = useSelector(({ calc }) => calc.wallLength)
  const floor  = useSelector(({ calc }) => calc.floor)
  const result  = useSelector(({ calc }) => calc.result)

  useEffect(() => {
    dispatch(getCost(isHouse ? 1 : 2, typeof floor === "null" ? floor : 1,
      wallMaterial === 'Кирпич' ? 1 : wallMaterial === 'Шлакоблок' ? 2 : wallMaterial === 'Деревянный брус' ? 3 : wallMaterial === 'Металл' ? 4 : wallMaterial === 'Сендвич-панели' ? 5 : 1,
      wallLength.x, wallLength.y
    ))
  }, [])
  return (
    <div className="calc__list-text">
      <p>{result.message}</p>
    </div>
  );
};

export default FinalStep;
