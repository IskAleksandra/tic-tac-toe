import styles from './game.module.css';
import { Field, Information } from './components';

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
