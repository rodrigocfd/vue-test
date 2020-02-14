import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import * as Store from '../app/reduxStore';

function Writer() {
	const phraseRef = useRef(null);

	const phrase = Store.useValue(state => state.phrase);
	const doAction = Store.useAction();

	useEffect(() => {
		phraseRef.current.focus();
	}, []);

	return (
		<Div0>
			<h1>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={phrase}
					onChange={e => doAction('setPhrase', e.target.value)} />
			</div>
		</Div0>
	);
}

const Div0 = styled.div`
	> h1 {
		color: darkslateblue;
	}
`;

export default Writer;
