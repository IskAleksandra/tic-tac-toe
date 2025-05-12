import styles from './game.module.css';
import { Field, Information } from './components';
import PropTypes from 'prop-types';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	isGameEnded,
	isDraw,
	onCellClick,
	onRestart,
}) => (
	<div className={styles.game}>
		<Information
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
		<Field field={field} setField={setField} onCellClick={onCellClick} />
		<button className={styles.restartButton} onClick={onRestart}>
			Начать заново
		</button>
	</div>
);
GameLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	onCellClick: PropTypes.func,
	onRestart: PropTypes.func,
};
