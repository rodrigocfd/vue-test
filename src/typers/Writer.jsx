import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

function Writer(props) {
	const phraseRef = useRef(null);

	useEffect(() => {
		phraseRef.current.focus();
	}, []);

	return (
		<Div0>
			<h1>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={props.phrase}
					onChange={e => props.setPhrase(e.target.value)} />
			</div>
		</Div0>
	);
}

const Div0 = styled.div`
	& > h1 {
		color: darkslateblue;
	}
`;

function mapDispatchToProps(dispatch) {
	return {
		setPhrase: function(val) {
			dispatch({
				type: 'setPhrase',
				payload: {
					phrase: val
				}
			})
		}
	};
}

export default connect(
	({phrase}) => ({phrase}), mapDispatchToProps
)(Writer);
