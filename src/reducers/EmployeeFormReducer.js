import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_RESET
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }
      return {...state, [action.payload.prop]: action.payload.value };
      //[action.payload.prop]: === name: /shift: /phone: zmiennej 'stanu'
    case EMPLOYEE_CREATE:
        return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
        return INITIAL_STATE;
    case EMPLOYEE_RESET:
        return INITIAL_STATE;
    default:
    return state;
  }
};
