import styles from './field.module.css';
import React from 'react';

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
