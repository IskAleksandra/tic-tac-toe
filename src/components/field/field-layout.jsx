import styles from './field.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button key={index} onClick={() => onCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onCellClick: PropTypes.func,
};
