import { useContext } from 'react';
import Modal from 'react-modal';

import tryWordContext from '../../context/tryWordContext';
import { GIF_LOSE, GIF_WIN } from '../../utils/constants';
import { TryWordContext } from '../../utils/types';
import { Container } from './styles';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

interface GameResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function GameResultModal({ isOpen, onRequestClose }: GameResultModalProps) {
  const {
    gameInfo, storageStatistics, setRandomSolution,
  } = useContext<TryWordContext>(tryWordContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>
          {gameInfo.gameResult === 'win' ? 'Parabéns, você acertou :D' : 'Tente novamente :/'}
        </h1>
        <div>
          <div>
            <p>{ storageStatistics.games }</p>
            <p>Jogos</p>
          </div>
          <div>
            <p>{ storageStatistics.wins }</p>
            <p>Vitórias</p>
          </div>
          <div>
            <p>{ storageStatistics.winStreak }</p>
            <p>Sequência</p>
          </div>
          <div>
            <p>{ storageStatistics.bestWinStreak }</p>
            <p>Melhor sequência</p>
          </div>
        </div>
        <img
          src={gameInfo.gameResult === 'win' ? GIF_WIN : GIF_LOSE}
          alt={gameInfo.gameResult === 'win' ? 'win' : 'lose'}
        />
        <button
          type="button"
          onClick={() => {
            setRandomSolution();
            window.location.reload();
          }}
        >
          Novo jogo

        </button>
      </Container>
    </Modal>
  );
}
