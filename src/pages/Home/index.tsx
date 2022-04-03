import { useContext, useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WordTable from '../../components/WordTable';
import { Header } from '../../components/Header';
import tryWordContext from '../../context/tryWordContext';
import GameResultModal from '../../components/GameResultModal';
import Keyboard from '../../components/Keyboard';
import { Main } from './styles';

export default function Home() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const { gameInfo } = useContext<any>(tryWordContext);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (gameInfo.gameResult === 'win') setIsResultModalOpen(true);
    if (gameInfo.gameResult === 'lose') setIsResultModalOpen(true);
  }, [gameInfo.gameResult]);

  const handleCloseModal = () => {
    setIsResultModalOpen(false);
  };

  return (
    <Main>
      <Header />
      <WordTable />
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
