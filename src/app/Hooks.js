import React from 'react';

function useFocusOnMountRef() {
	const myRef = React.useRef(null);

	React.useEffect(() => { // set focus on component mount
		myRef && myRef.current && myRef.current.focus();
	}, []);

	return myRef; // return ordinary ref to element
}

function useFwdFocusRef(fwdRef) { // to be used with forwardRef()
	const ourRef = useFocusOnMountRef();

	React.useImperativeHandle(fwdRef, () => ({
		focus: () => ourRef.current.focus(), // add focus() method to forwarded ref
		select: () => ourRef.current.select()
	}), [ourRef]);

	return ourRef;
}

export default {
	useFocusOnMountRef,
	useFwdFocusRef
};
