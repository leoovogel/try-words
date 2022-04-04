import { useContext, useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../../components/Header';
import tryWordContext from '../../context/tryWordContext';
import GameResultModal from '../../components/GameResultModal';
import Keyboard from '../../components/Keyboard';
import { Main } from './styles';
import { WordLine } from '../../components/WordLine';
import { ILineList } from '../../utils/types';

export default function Home() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const { gameInfo, setRandomSolution } = useContext<any>(tryWordContext);
  const { width, height } = useWindowSize();
  const [word, setWord] = useState(['', '', '', '', '']);

  useEffect(() => {
    setWord(['', '', '', '', '']);
  }, [gameInfo.lineList]);

  useEffect(() => {
    if (gameInfo.gameResult === 'win') setIsResultModalOpen(true);
    if (gameInfo.gameResult === 'lose') setIsResultModalOpen(true);
  }, [gameInfo.gameResult]);

  const handleCloseModal = () => {
    setIsResultModalOpen(false);
  };

  useEffect(() => setRandomSolution(), []);

  return (
    <Main>
      <Header />

      {gameInfo.lineList.map((line: ILineList) => (
        <WordLine
          isActive={line.isActive}
          key={line.id}
          line={line.id}
          word={line.isActive ? word : ['', '', '', '', '']}
          setWord={setWord}
        />
      ))}
      <Keyboard />
      <ToastContainer position="top-center" />
      <GameResultModal
        isOpen={isResultModalOpen}
        onRequestClose={handleCloseModal}
      />
      { gameInfo.gameResult === 'win' && (
        <Confetti
          width={width}
          height={height}
        />
      )}
    </Main>
  );
}
