import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IUsers } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    api = environment.api;
    endpoint = 'clientes';


  constructor(private http: HttpClient) { }

  retornaTodosClientes(){
      return this.http.get<IUsers[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarCliente(user: IUsers){
    return this.http.post(`${this.api}/${this.endpoint}`, user);
  }

  retornarCliente(cpf: number){
    return this.http.get<IUsers>(`${this.api}/${this.endpoint}/${cpf}`);
}

alterarCliente(user: IUsers){
  return this.http.put(`${this.api}/${this.endpoint}`, user.cpf);
}

  deletarCliente(user: IUsers){
  return this.http.delete<IUsers>(`${this.api}/${this.endpoint}/${user.cpf}`);
}

}
