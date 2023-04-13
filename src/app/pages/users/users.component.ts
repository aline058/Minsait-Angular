import { IUsers } from 'src/app/interfaces/users';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    users: IUsers[] = [];
    constructor(private UsersService: UsersService){

    }

    ngOnInit(){
      this.UsersService.retornaTodosClientes().subscribe((result: IUsers[]) =>{
        this.users = result;
      })
    }

    deletarCliente(user: IUsers){
     if(confirm("Deseja apagar o cliente?"))
      this.UsersService.deletarCliente(user).subscribe((result)=>{
        this.users.splice(this.users.indexOf(user), 1);
      })
    }
}
