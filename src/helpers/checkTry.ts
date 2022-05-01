import { IGameObject } from '../utils/types';

export const checkCurrentTry = (solution: string, currentTry: string[], gameInfo?: IGameObject) => {
  const solutionArray = solution.split('');

  const wrongLetters = [...gameInfo?.wrongLetters || []];

  const newTry = currentTry.map((letter, index) => {
    const feedbackReturn = { letter, state: '' };
    const letterUp = letter.toUpperCase();

    if (letterUp === solutionArray[index]) {
      feedbackReturn.state = 'right';
    } else if (solutionArray.includes(letterUp)) {
      feedbackReturn.state = 'displaced';
    } else {
      feedbackReturn.state = 'wrong';
      wrongLetters.push(letter);
    }
    return feedbackReturn;
  });

  return { newTry, wrongLetters };
};
