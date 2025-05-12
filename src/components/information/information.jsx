import { InformationLayout } from './information-layout';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};
