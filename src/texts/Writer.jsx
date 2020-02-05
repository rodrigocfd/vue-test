import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {mapStateToProps, mapDispatchToProps} from '../reduxStore';

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
					onChange={e => props.doUp('phrase', e.target.value)} />
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
	mapStateToProps('texts.phrase'),
	mapDispatchToProps
)(Writer);
