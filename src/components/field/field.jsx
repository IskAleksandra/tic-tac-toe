import { useSelector, useDispatch } from 'react-redux';
import { selectField } from '../../selectors';
import { FieldLayout } from './field-layout';
import { PLAYER_SIGN } from '../../constants';
import { setField } from '../../Redux/actions';

export const Field = () => {
	const field = useSelector(selectField);
	const dispatch = useDispatch();

	const handleCellClick = (index) => {
		dispatch(setField(index));
	};

	return (
		<FieldLayout
			field={field.map((cell) => PLAYER_SIGN[cell])}
			onCellClick={handleCellClick}
		/>
	);
};
