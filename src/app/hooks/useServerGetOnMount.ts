import React from 'react';

import useServerGet from './useServerGet';

/**
 * Wrapper do hook useEffect() que traz dados do servidor automaticamente quando
 * o componente é montado. Guarda o objeto com useState().
 * @example
 * const myData = userServerGetOnMount('/myData') as MyData;
 */
function useServerGetOnMount(path: string): any {
	const server = useServerGet();
	const [data, setData] = React.useState(null); // data é inicialmente null

	React.useEffect(() => {
		server.doGet(path)
			.then(d => setData(d))
			.catch(() => {}); // não faz nada em caso de exceção
	}, [path, server]);

	return data;
}

export default useServerGetOnMount;
