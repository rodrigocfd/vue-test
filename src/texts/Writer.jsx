import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import {useReduxAction, useReduxSelector} from '../app/reduxStore';

function Writer() {
	const phraseRef = useRef(null);

	const phrase = useReduxSelector(state => state.texts.phrase);
	const reduxAction = useReduxAction();

	useEffect(() => {
		phraseRef.current.focus();
	}, []);

	return (
		<Div0>
			<h1>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={phrase}
					onChange={e => reduxAction('setPhrase', e.target.value)} />
			</div>
		</Div0>
	);
}

const Div0 = styled.div`
	& > h1 {
		color: darkslateblue;
	}
`;

export default Writer;
