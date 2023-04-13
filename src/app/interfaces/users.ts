export interface IUsers {
  cpf: number;
  nome: string;
  rendimentoMensal: number;
  telefone: string;
  endereco: {
    rua: string;
    numero: number;
    cep: string
  }
}
