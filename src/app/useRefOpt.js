import React from 'react';

/**
 * @typedef {Object} UseRefOptions
 * @property {boolean} focusOnMount Control will receive focus on component mount.
 * @property {Object} forwardRef React ref passed by React.forwardRef().
 */
/**
 * Wrapper to React.useRef() with optional automations.
 *
 * @param {Object} refVal Ordinary React ref object.
 * @param {UseRefOptions} options Options.
 * @returns {Object} Ordinary React ref object.
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
