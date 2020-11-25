import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchUserAction = ()=>{

    return (dispatch)=>{
 
 
 
     axios.get('/api/current_user')
 
     .then((res)=>{
 
        dispatch({type: ActionTypes.GET_USER, payload:res.data})
 
     })
 
 
 
    }
 
 }