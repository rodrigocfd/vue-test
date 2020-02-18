import React from 'react';
import PropTypes from 'prop-types';

// Custom hook to keep modal "isOpen" state.
function useModal() {
	const [isOpen, setOpen] = React.useState(false);

	function open() { setOpen(true); }
	function close() { setOpen(false); }

	return {isOpen, open, close};
}

useModal.props = PropTypes.shape({
	isOpen: PropTypes.bool.isRequired,
	open: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired
});

export default useModal;
