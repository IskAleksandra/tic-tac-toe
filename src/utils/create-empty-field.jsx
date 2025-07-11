import { PLAYER } from '../constants/player';

export const createEmptyField = () => new Array(9).fill(PLAYER.NOBODY);
