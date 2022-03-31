import Modal from 'react-modal';
import { Container } from './styles';

Modal.setAppElement('#root');

interface GameResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const GIF_WIN = 'https://c.tenor.com/rO6Fh2KNm3sAAAAd/baby-yes.gif';
// const GIF_LOSE = 'https://c.tenor.com/58rVrcSfwCcAAAAM/panda-oh-no.gif';

export default function GameResultModal({ isOpen, onRequestClose }: GameResultModalProps) {
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
            <p>03</p>
          </div>
          <div>
            <p>Vitórias</p>
            <p>02</p>
          </div>
          <div>
            <p>Sequência</p>
            <p>02</p>
          </div>
          <div>
            <p>Melhor sequência</p>
            <p>02</p>
          </div>
        </div>
        <img src={GIF_WIN} alt="win" />
      </Container>
    </Modal>
  );
}
