import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuVert1Label from './MenuVert1Label';
import MenuVert2 from './MenuVert2';

function MenuVert1(props) {
	return (
		<Ul0>
			<li className="title">
				<span>{props.title}</span>
			</li>
			{props.items.map(item =>
				<li key={item.label} className="entry">
					<span>
						<MenuVert1Label {...item} />
					</span>
					{item.menuVert2 &&
						<MenuVert2 items={item.menuVert2} />
					}
				</li>
			)}
		</Ul0>
	);
}

MenuVert1.propTypes = {
	title: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			...MenuVert1Label.propTypes
		})
	).isRequired
};

const Ul0 = styled.ul`
	position: absolute;
	top: -1px; /* relative to parent, because parent LI has "position: relative" */
	width: 284px; /* empirically found */
	margin: 2px;
	padding: 0;
	display: flex;
	flex-direction: column;
	background-color: #f6f7f7;
	border: 1px solid #aaba75;
	border-radius: 3px;
	box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, .1);
	visibility: hidden; /* parent component LI will toggle this */

	> li {
		list-style-type: none;
		position: relative; /* so nested UL can be relatively positioned */
		margin: 0;
		padding: 0;
		text-align: left;
		cursor: pointer;

		> span {
			user-select: none;
			display: block;
			margin: 0 8px;
			padding: 12px 2px 12px 10px;
			border-bottom: 1px dotted #aebc82;

			> span.arrow {
				float: right;
				color: #5393ac;
				font-size: 80%;
			}
		}
	}
	> li.title {
		text-align: center;
		padding-bottom: 1px;
		cursor: auto;
	}
	> li.title, li:last-child {
		> span {
			border-bottom: 0; /* last item won't have bottom border */
		}
	}
	> li.entry:hover {
		background-color: #eee;
	}
	> li.entry:hover > ul, > li.entry > ul:hover {
		visibility: visible; /* toggle UL in child component */
	}
`;

export default MenuVert1;
