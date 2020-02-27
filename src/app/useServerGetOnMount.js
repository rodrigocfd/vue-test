import React from 'react';

import useServerGet from './useServerGet';

// Custom useEffect() hook to load data from server on component mount.
function useServerGetOnMount(path) {
	const server = useServerGet();
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		server.doGet(path)
			.then(d => setData(d))
			.catch(() => {}); // ignore exception
	}, [path, server]);

	return data;
}

export default useServerGetOnMount;
