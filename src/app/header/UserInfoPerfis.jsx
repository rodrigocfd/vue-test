import React from 'react';
import PropTypes from 'prop-types';

import c from './UserInfoPerfis.module.scss';

function UserInfoPerfis({perfis}) {
	return (
		<div className={c.wrap}>Perfis +
			<ul className={c.ul}>
				{perfis.map(perfil => (
					<li key={perfil} className={c.li}>{perfil}</li>
				))}
			</ul>
		</div>
	);
}

UserInfoPerfis.propTypes = {
	perfis: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default UserInfoPerfis;
