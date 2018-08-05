import types, {MODIFICA_TITULO} from './types';

export const modificaTitulo = texto =>(
    {
        type: MODIFICA_TITULO,
        payload: texto
    }
)