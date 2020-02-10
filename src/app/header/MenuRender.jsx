import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MenuRender(props) {
	return (
		<UlHorzMenu>
			{props.items.map(item =>
				<li key={item.label} className="horzMenu">
					<span className="horzTitle">{item.label}</span>
					{item.vertMenu1 &&
						<ul className="vertMenu1">
							{item.vertMenu1.map(item =>
								<li key={item.label} className="vertMenu1">
									<span>{item.label}</span>
								</li>
							)}
						</ul>
					}
				</li>
			)}
		</UlHorzMenu>
	);
}

MenuRender.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({ // each li of horzMenu
			label: PropTypes.string,
			vertMenu1: PropTypes.arrayOf(
				PropTypes.shape({ // each li of vertMenu1
					label: PropTypes.string
				})
			)
		})
	).isRequired
};

const UlHorzMenu = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;

	> li.horzMenu {
		list-style-type: none;
		flex-basis: 0;
		flex-grow: 1;
		text-align: center;
		line-height: 1.5em;
		margin-top: 8px;

		> span.horzTitle {
			display: inline-block;
			width: 100%;
			border-right: 1px solid #ccc;
		}
		> ul.vertMenu1 {
			margin: 2px;
			padding: 0 8px;
			display: flex;
			flex-direction: column;
			background-color: #f6f7f7;
			border: 1px solid #aaba75;
			border-radius: 3px;

			> li.vertMenu1 {
				list-style-type: none;
				padding: 10px;
				text-align: left;
				border-bottom: 1px dotted #aebc82;
			}
			> li.vertMenu1:last-child {
				border-bottom: 0;
			}
		}
	}
	> li.horzMenu:last-child {
		span.horzTitle {
			border-right: 0;
		}
	}
`;

export default MenuRender;
