import { InformationLayout } from './information-layout';
import { STATUS, PLAYER_SIGN } from '../../constants';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectStatus } from '../../selectors';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const status = useSelector(selectStatus);
	let message;
	if (status === STATUS.DRAW) {
		message = 'Ничья';
	} else if (status === STATUS.WIN) {
		message = `Победа: ${PLAYER_SIGN[currentPlayer]}`;
	} else {
		message = `Ходит: ${PLAYER_SIGN[currentPlayer]}`;
	}
	return <InformationLayout message={message} />;
};
