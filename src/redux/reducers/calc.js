const initialState = {
  step: {
    currentId: 1,
    currentHeader: 'Что будем строить?'
  },
  isHouse: true,
  floor: null,
  wallMaterial: null,
  wallLength: {
    x: null,
    y: null
  },
  result: {}
}

const calc = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_CURRENT_STEP': {
      const newItems = {
        currentId: action.payload.id,
        currentHeader: action.payload.header
      }
      return {
        ...state,
        step: newItems
      }
    }
    case 'CHOOSE_WALL': {
      const newItems = {
        x: action.payload.x,
        y: action.payload.y
      }
      return {
        ...state,
        wallLength: newItems
      }
    }
    case 'SET_FLOOR': {
      return {
        ...state,
        floor: action.payload
      }
    }
    case 'SET_MATERIAL': {
      return {
        ...state,
        wallMaterial: action.payload
      }
    }
    case 'SET_RESULT': {
      return {
        ...state,
        result: action.payload
      }
    }
    case 'IS_HOUSE': {
      return {
        ...state,
        isHouse: action.payload
      }
    }
    case 'RESET': {
      return {
        ...state,
        isHouse: true,
        floor: null,
        wallMaterial: null,
        wallLength: {
          x: null,
          y: null
        },
        result: {}
      }
    }
    default:
      return state
  }
}

export default calc
