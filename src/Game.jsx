import { GameLayout } from './game-layout';
import { store } from './Redux/store';
import { restartGame as restartGameAction } from './Redux/actions';

export const Game = () => {
	const restartGame = () => {
		store.dispatch(restartGameAction());
	};

	return <GameLayout onRestart={restartGame} />;
};
