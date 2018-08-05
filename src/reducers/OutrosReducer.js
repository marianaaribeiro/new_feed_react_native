import {MODIFICA_TITULO} from '../actions/types';
import OutrasAction from '../actions/OutrasAction';

const INITIAL_STATE ={
    titulo: '',
};

export default (state = INITIAL_STATE, action) =>{
    switch(action){
        case MODIFICA_TITULO:
            return {...state, MODIFICA_TITULO: action.payload}

            default:
                return state;
    }
}