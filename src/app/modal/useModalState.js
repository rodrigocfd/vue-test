import React from 'react';

// Custom hook control the show/hide of a modal component.
function useModalState() {
	const [isOpen, setOpen] = React.useState(false);

	function render(jsxContent) { return isOpen && jsxContent; } // renders nothing if not open
	function open() { setOpen(true); }
	function close() { setOpen(false); }

	return {render, open, close}; // call render() on parent-most component
}

export default useModalState;
