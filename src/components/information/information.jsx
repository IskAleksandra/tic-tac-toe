import { InformationLayout } from './information-layout';
import { store } from '../../Redux/store';
import { STATUS, PLAYER_SIGN } from '../../constants';
import { useEffect, useState } from 'react';

export const Information = () => {
	const [storeData, setStoreData] = useState(store.getState());

	const { currentPlayer, status } = storeData;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const newStore = store.getState();
			setStoreData(newStore);
		});
		return () => unsubscribe();
	}, []);
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
