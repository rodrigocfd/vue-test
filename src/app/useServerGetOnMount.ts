import React from 'react';

import useServerGet from './useServerGet';

/**
 * Custom useEffect() hook to load data from server on component mount.
 * @example
 * const myData = userServerGetOnMount('/myData');
 */
function useServerGetOnMount(path: string): any {
	const server = useServerGet();
	const [data, setData] = React.useState(null); // data is initially null

	React.useEffect(() => {
		server.doGet(path)
			.then(d => setData(d))
			.catch(() => {}); // ignore exception
	}, [path, server]);

	return data;
}

export default useServerGetOnMount;
