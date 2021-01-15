import axios from 'axios'

export const chooseCurrentStep = calcObj => ({
  type: 'CHOOSE_CURRENT_STEP',
  payload: calcObj
})
export const addWall = size => ({
  type: 'CHOOSE_WALL',
  payload: size
})
export const addFloor = floor => ({
  type: 'SET_FLOOR',
  payload: floor
})
export const addMaterial = material => ({
  type: 'SET_MATERIAL',
  payload: material
})
export const setHouse = el => ({
  type: 'IS_HOUSE',
  payload: el
})
export const setResult = el => ({
  type: 'SET_RESULT',
  payload: el
})
export const resetData = () => ({
  type: 'RESET'
})

export const getCost = (building, height, material, sizex, sizey) => {
  return async dispatch => {
    try {
      const response = await axios.post(`https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`, {building, height, material, sizex, sizey})
      dispatch(setResult(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}
