import { useEffect, useState } from 'react';
import { FieldLayout } from './field-layout';
import { store } from '../../Redux/store';
import { PLAYER_SIGN } from '../../constants';
import { setField } from '../../Redux/actions';

export const Field = () => {
	const { field } = store.getState();
	const [cells, setCells] = useState(field);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const newField = store.getState().field;
			setCells(newField);
		});
		return () => unsubscribe();
	}, []);

	const handleCellClick = (index) => {
		store.dispatch(setField(index));
	};

	return (
		<FieldLayout
			field={cells.map((cell) => PLAYER_SIGN[cell])}
			onCellClick={handleCellClick}
		/>
	);
};
