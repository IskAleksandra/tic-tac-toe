import { FieldLayout } from './field-layout';
import PropTypes from 'prop-types';

export const Field = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onCellClick: PropTypes.func,
};
