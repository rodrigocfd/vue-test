import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

function Writer(props) {
	const phraseRef = useRef(null);

	useEffect(() => {
		phraseRef.current.focus();
	}, []);

	function phraseChange(ev) {
		props.dispatch({
			type: 'setPhrase',
			payload: {
				phrase: ev.target.value
			}
		});
	}

	return (
		<Div0>
			<h1>Writer</h1>
			<div>
				<input type="text" ref={phraseRef}
					value={props.phrase} onChange={phraseChange} />
			</div>
		</Div0>
	);
}

const Div0 = styled.div`
	& > h1 {
		color: darkslateblue;
	}
`;

export default connect(
	({phrase}) => ({phrase})
)(Writer);
