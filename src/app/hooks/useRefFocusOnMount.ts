import React from 'react';

/**
 * Wrapper do hook useRef() que seta o foco automaticamente quando o componente
 * é montado.
 * @param initialValue Valor que será passado direto ao useRef(), normalmente null.
 */
function useRefFocusOnMount(initialValue: any) {
	const localRef = React.useRef(initialValue); // cria um ref comum

	React.useEffect(() => {
		localRef?.current && localRef.current.focus();
	}, []);

	return localRef;
}

export default useRefFocusOnMount;
