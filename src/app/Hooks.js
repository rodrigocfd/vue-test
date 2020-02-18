import React from 'react';

function useFocusOnMountRef() {
	const myRef = React.useRef(null);

	React.useEffect(() => { // set focus on component mount
		myRef.current.focus();
	}, []);

	return myRef; // return ordinary ref to element
}

export default {useFocusOnMountRef};
