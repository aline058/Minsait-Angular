import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { IUsers } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-update-users',
  templateUrl: './add-update-users.component.html',
  styleUrls: ['./add-update-users.component.css']
})
export class AddUpdateUsersComponent {

      userForm = new FormGroup({
        cpf: new FormControl(0, Validators.required),
        nome: new FormControl('', Validators.required),
        rendimentoMensal: new FormControl(0, Validators.required),
        telefone: new FormControl('', Validators.required),
        endereco: new FormGroup({
          rua: new FormControl('', Validators.required),
          numero: new FormControl(0, Validators.required),
          cep: new FormControl('', Validators.required)
        })
      })

      constructor(private usersService: UsersService, private route: ActivatedRoute){}

      userCpf = 0;

      ngOnInit(){
        this.userCpf = Number(this.route.snapshot.paramMap.get('cpf'));
        if(this.userCpf){
          this.usersService.retornarCliente(this.userCpf).subscribe((user: IUsers) => {
            this.userForm.setValue({
              cpf: user.cpf || 0,
              nome: user.nome || '',
              rendimentoMensal: user.rendimentoMensal || 0,
              telefone: user.telefone || '',
              endereco: {
              rua: user.endereco.rua || '',
              numero: user.endereco.numero || 0,
              cep: user.endereco.cep || ''
              }
            })
        })
        }
      }



      cadastrar(){
        const user: IUsers = this.userForm.value as IUsers;
        this.usersService.cadastrarCliente(user).subscribe(result =>{
          Swal.fire(
            "Cliente cadastrado com sucesso",
            "!",
            "success"
            )
        });

      }
}
