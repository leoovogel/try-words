import { useContext } from 'react';
import Modal from 'react-modal';

import tryWordContext from '../../context/tryWordContext';
import { TryWordContext } from '../../utils/types';
import { Container } from './styles';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');
// Modal.setAppElement('#root');

interface GameResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const GIF_WIN = 'https://c.tenor.com/rO6Fh2KNm3sAAAAd/baby-yes.gif';
const GIF_LOSE = 'https://c.tenor.com/58rVrcSfwCcAAAAM/panda-oh-no.gif';

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
        <h1>Estatísticas</h1>
        <div>
          <div>
            <p>Jogos</p>
            <p>{ storageStatistics.games }</p>
          </div>
          <div>
            <p>Vitórias</p>
            <p>{ storageStatistics.wins }</p>
          </div>
          <div>
            <p>Sequência</p>
            <p>{ storageStatistics.winStreak }</p>
          </div>
          <div>
            <p>Melhor sequência</p>
            <p>{ storageStatistics.bestWinStreak }</p>
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
