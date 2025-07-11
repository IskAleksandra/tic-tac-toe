import { WIN_PATTERN } from '../constants/win-patterns';

export const checkWinner = (field, currentPlayer) =>
	WIN_PATTERN.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === currentPlayer),
	);
