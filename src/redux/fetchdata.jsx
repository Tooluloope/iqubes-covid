import { fetchDataPending, fetchDataSuccess, fetchDataError } from "./actions";

function fetchData() {
	return dispatch => {
		dispatch(fetchDataPending());
		fetch("https://covidnigeria.herokuapp.com/api")
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					throw res.error;
				}
				dispatch(fetchDataSuccess(res.data));
				return res.data;
			})
			.catch(error => {
				dispatch(fetchDataError(error));
			});
	};
}

export default fetchData;
