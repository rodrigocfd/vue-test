import React from 'react';

/**
 * Custom hook, wrapper to React.useRef() that sets focus automatically on
 * component mount.
 */
function useRefFocusOnMount(refVal: any) {
	const localRef = React.useRef(refVal); // create ordinary ref

	React.useEffect(() => { // set focus on component mount
		localRef?.current && localRef.current.focus();
	}, []);

	return localRef;
}

export default useRefFocusOnMount;
