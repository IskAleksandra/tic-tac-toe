import styles from './game.module.css';
import { Field, Information } from './components';
import PropTypes from 'prop-types';

export const GameLayout = ({ onRestart }) => (
	<div className={styles.game}>
		<Information />
		<Field />
		<button className={styles.restartButton} onClick={onRestart}>
			Начать заново
		</button>
	</div>
);

GameLayout.propTypes = {
	onRestart: PropTypes.func,
};
