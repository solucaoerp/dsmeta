/*
    Modelo representando os atributos recuperados em "content" na resposta da requisição
*/

export type Sale = {
    id: number;
    sellerName: string;
    date: string;
    visited: number;
    deals: number;
    amount: number;
}