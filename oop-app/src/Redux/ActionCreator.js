import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchUser = (user) => ({
   type: ActionTypes.GET_USER,
   payload: user
});