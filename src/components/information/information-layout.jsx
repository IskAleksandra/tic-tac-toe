import styles from './information.module.css';

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
