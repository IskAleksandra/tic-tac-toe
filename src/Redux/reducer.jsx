import { ACTION_TYPE } from './actions';
import { PLAYER, STATUS } from '../constants';
import { checkWinner } from '../utils/checkWinner';
import { createEmptyField } from '../utils/create-empty-field';

const initialState = {
	field: createEmptyField(),
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_FIELD: {
			const field = [...state.field];

			if (state.status !== STATUS.TURN) return state;

			field[payload] = state.currentPlayer;
			const isWin = checkWinner(field, state.currentPlayer);
			const isDraw =
				!isWin && field.every((cellPlayer) => cellPlayer !== PLAYER.NOBODY);

			return {
				...state,
				field,
				status: isWin ? STATUS.WIN : isDraw ? STATUS.DRAW : STATUS.TURN,
				currentPlayer:
					isWin || isDraw
						? state.currentPlayer
						: state.currentPlayer === PLAYER.CROSS
							? PLAYER.NOUGHT
							: PLAYER.CROSS,
			};
		}
		case ACTION_TYPE.RESTART_GAME:
			return {
				...initialState,
				field: createEmptyField(),
			};
		default:
			return state;
	}
};
