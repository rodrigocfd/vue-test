import React from 'react';
import PropTypes from 'prop-types';

import c from './Loading.module.scss';

// An animated loading throbber with text.
function Loading({text, size, speed}) {
	return (
		<div className={c.wrap}>
			<span className={c.text}>{text}</span>
			<svg xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className={c.svg}
				width={size}
				height={size}
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid">
				<g transform="translate(50 50)">
					<g transform="scale(1)">
						<g transform="translate(-50 -50)">
							<g>
								<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
									values="0 50 50;360 50 50" keyTimes="0;1" dur={(speed / 4) + 's'}></animateTransform>
								<path fillOpacity="0.8" fill="#295273" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>
							</g>
							<g>
								<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
									values="0 50 50;360 50 50" keyTimes="0;1" dur={(speed / 3) + 's'}></animateTransform>
								<path fillOpacity="0.8" fill="#ffcf2b" d="M50 50L50 0A50 50 0 0 1 100 50Z"
									transform="rotate(90 50 50)"></path>
							</g>
							<g>
								<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
									values="0 50 50;360 50 50" keyTimes="0;1" dur={(speed / 2) + 's'}></animateTransform>
								<path fillOpacity="0.8" fill="#286944" d="M50 50L50 0A50 50 0 0 1 100 50Z"
									transform="rotate(180 50 50)"></path>
							</g>
							<g>
								<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
									values="0 50 50;360 50 50" keyTimes="0;1" dur={speed + 's'}></animateTransform>
								<path fillOpacity="0.8" fill="#e2e2e2" d="M50 50L50 0A50 50 0 0 1 100 50Z"
									transform="rotate(270 50 50)"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
}

Loading.propTypes = {
	text: PropTypes.string,
	size: PropTypes.string,
	speed: PropTypes.number
};

Loading.defaultProps = {
	text: '',
	size: '18px',
	speed: 1.6
};

export default Loading;
