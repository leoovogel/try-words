import EventListener from './components/EventListener/EventListener';
import { TryWordProvider } from './context/TryWordProvider';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <TryWordProvider>
      <EventListener>
        <GlobalStyle />
        <Home />
      </EventListener>
    </TryWordProvider>
  );
}
