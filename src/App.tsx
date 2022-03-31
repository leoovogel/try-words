import EventListener from './components/EventListener/EventListener';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <EventListener>
      <GlobalStyle />
      <Home />
    </EventListener>
  );
}
