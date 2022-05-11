import Modal from 'react-modal';

import { Container } from './styles';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

interface HowToPlayModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function HowToPlayModal({ isOpen, onRequestClose }: HowToPlayModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <div className="header">
          <h1>COMO JOGAR</h1>
          <button type="button" onClick={onRequestClose}>X</button>
        </div>
        <br />
        <p>
          Descubra a palavra certa em 6 tentativas.
          Depois de cada tentativa, as peças mostram o quão perto você está da solução.
        </p>
        <div>
          <span className="correct">T</span>
          <span>R</span>
          <span>Y</span>
          <span>B</span>
          <span>E</span>
        </div>
        <p>
          A letra
          <span className="correct">T</span>
          faz parte da palavra e está na posição correta.
        </p>
        <div>
          <span>V</span>
          <span>I</span>
          <span className="displaced">O</span>
          <span>L</span>
          <span>A</span>
        </div>
        <p>
          A letra
          <span className="displaced">O</span>
          faz parte da palavra mas em outra posição.
        </p>
        <div>
          <span>P</span>
          <span>U</span>
          <span>L</span>
          <span>G</span>
          <span>A</span>
        </div>
        <p>
          Nesse caso, nenhuma das letras faz parte da palavra.
        </p>
        <br />
        <p>
          As palavras não possuem acentos ou caracteres especiais como por exemplo o &quot;ç&quot;.
        </p>
        <p>
          As palavras podem possuir letras repetidas.
        </p>
      </Container>
    </Modal>
  );
}
