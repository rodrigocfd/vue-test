import React from 'react';

/**
 * Wrapper to React.useRef() with optional automations.
 * @example
 * const txtRef = useRefOpt(null, {focusOnMount: true});
 */
function useRefOpt(refVal, {focusOnMount = false, forwardRef = null}) {
	const localRef = React.useRef(refVal); // ordinary ref

	React.useEffect(() => { // set focus on component mount
		if (focusOnMount && localRef && localRef.current) {
			localRef.current.focus();
		}
	}, [focusOnMount]);

	React.useImperativeHandle(forwardRef, () => {
		if (forwardRef) {
			return {
				focus: () => localRef.current.focus(), // add focus() method to forwarded ref
				select: () => localRef.current.select()
			};
		}
	}, [forwardRef]);

	return localRef;
}

export default useRefOpt;
