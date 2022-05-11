import React, { useContext, useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../../components/Header';
import tryWordContext from '../../context/tryWordContext';
import GameResultModal from '../../components/GameResultModal';
import Keyboard from '../../components/Keyboard';
import { Container, Main } from './styles';
import { WordLine } from '../../components/WordLine';
import { ILineList, TryWordContext } from '../../utils/types';
import HowToPlayModal from '../../components/HowToPlayModal';

export default function Home() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isHowToPlayOpen, setIsHowToPlayModalOpen] = useState(true);
  const {
    gameInfo, setRandomSolution, setCurrentTry, storageSolution,
  } = useContext<TryWordContext>(tryWordContext);
  const { width, height } = useWindowSize();
  const [word, setWord] = useState(['', '', '', '', '']);
  const [currentFocus, setCurrentFocus] = useState(-1);

  useEffect(() => setWord(['', '', '', '', '']), [gameInfo.lineList]);

  useEffect(() => {
    if (storageSolution === '') setRandomSolution();
  }, []);

  useEffect(() => {
    if (gameInfo.gameResult === 'win') setIsResultModalOpen(true);
    if (gameInfo.gameResult === 'lose') setIsResultModalOpen(true);
  }, [gameInfo.gameResult]);

  const handleCloseResultModal = () => setIsResultModalOpen(false);

  const handleCloseHowToPlayModal = () => setIsHowToPlayModalOpen(false);

  const handleOpenHowToPlayModal = () => setIsHowToPlayModalOpen(true);

  const handleKeyboardClick = ({ target }: React.MouseEvent) => {
    const newWord = [...word];
    if ((target as HTMLDivElement).innerText === '<-') {
      newWord[currentFocus - 1] = '';
    } else {
      newWord[currentFocus] = (target as HTMLDivElement).innerText;
    }

    setCurrentTry(newWord);
    setWord(newWord);
  };

  return (
    <>
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onRequestClose={handleCloseHowToPlayModal}
      />
      <Main>
        <Header openHowToPlayModal={handleOpenHowToPlayModal} />
        <Container>
          {gameInfo.lineList.map((line: ILineList) => (
            <WordLine
              key={line.id}
              isActive={line.isActive}
              line={line.id}
              word={line.isActive ? word : ['', '', '', '', '']}
              setWord={setWord}
              currentFocus={currentFocus}
              setCurrentFocus={setCurrentFocus}
            />
          ))}
        </Container>
        <Keyboard onKeyboardClick={handleKeyboardClick} />
        <ToastContainer position="top-center" />
        <GameResultModal
          isOpen={isResultModalOpen}
          onRequestClose={handleCloseResultModal}
        />
        { gameInfo.gameResult === 'win' && (
          <Confetti
            width={width}
            height={height}
          />
        )}
      </Main>
    </>
  );
}
