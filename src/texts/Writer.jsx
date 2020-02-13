import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import Redux from '../app/reduxStore';

function Writer() {
	const phraseRef = useRef(null);

	const phrase = Redux.useValue(state => state.phrase);
	const reduxAction = Redux.useAction();

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
	> h1 {
		color: darkslateblue;
	}
`;

export default Writer;
