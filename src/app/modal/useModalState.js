import React from 'react';

// Custom hook to keep modal "isOpen" state.
function useModalState() {
	const [isOpen, setOpen] = React.useState(false);

	function open() { setOpen(true); }
	function close() { setOpen(false); }
	function render(jsxContent) { return isOpen && jsxContent; } // renders nothing if not open

	return {render, open, close}; // call render() on parent-most component
}

export default useModalState;
