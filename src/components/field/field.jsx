import { FieldLayout } from './field-layout';

export const Field = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};
