import axios from 'axios';
import { Dispatch } from 'redux';
import { BASE_URL } from '../../constants/api';
import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from './types';

export interface toDo {
	id: number;
	title: string;
	completed: boolean;
}

export interface fetchActionType{
	type:string,
	payload:toDo[]
}

export const fetchToDos = () => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: FETCHING, payload: [] });
		const response= await axios.get<toDo[]>(`${BASE_URL}todos`);
		dispatch<fetchActionType>({
			type: FETCH_SUCCESS,
			payload: response.data
		});
		if (!response.data) {
			dispatch({ type: FETCH_ERROR, isError: 'Failed to fetch' });
		}
	};
};
