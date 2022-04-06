import { createContext } from 'react';
import { TryWordContext } from '../utils/types';

const tryWordContext = createContext<TryWordContext>({} as TryWordContext);

export default tryWordContext;
