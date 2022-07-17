/*
    Arquivo de configuração para a rota base de requisição aos Endpoints
*/

const BASE_URL_TEST = "http://localhost:8080"
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? BASE_URL_TEST;

/*
    
    Definição da variável de ambiente: VITE_BACKEND_URL
    import.meta.env.VITE_BACKEND_URL
    --
    IMPORTANTE! Pega o valor definido na veriável de ambiente no ambiente de deploy, ou pega o valor após
    o operador de coalescencia ??
    --
    Ler:
    https://definirtec.com/operador-de-coalescencia-nula/

*/