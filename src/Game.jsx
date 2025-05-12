import { useState } from 'react';
import { GameLayout } from './game-layout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		if (checkWinner(newField)) {
			setIsGameEnded(true);
		} else if (newField.every((cell) => cell)) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const checkWinner = (field) => {
		const WIN_PATTERN = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		return WIN_PATTERN.some((pattern) => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	const restartGame = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};
	return (
		<GameLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			onCellClick={handleCellClick}
			onRestart={restartGame}
		/>
	);
};
