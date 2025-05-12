import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	let message;
	if (isDraw) {
		message = 'Ничья';
	} else if (isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	} else {
		message = `Ходит: ${currentPlayer}`;
	}
	return <div className={styles.inform}>{message}</div>;
};
InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
