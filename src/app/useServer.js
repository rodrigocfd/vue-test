import {useHistory} from 'react-router-dom';

import ReduxStore from './ReduxStore';

const API_REST = '/siorg-gestao-webapp/api';

function useServer() {
	const history = useHistory();
	const update = ReduxStore.useUpdate();

	// Performs a GET request.
	function get(path, payload) {
		return fetch(API_REST + path, {
			method: 'GET',
			cache: 'no-cache',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(payload)
		})
		.then(resp => {
			if (resp.status === 500) {
				update('auth', false);
				history.push('/404');
			} else {
				resp.json();
			}
		})
	}

	return {
		get
	};
}

export default useServer;
