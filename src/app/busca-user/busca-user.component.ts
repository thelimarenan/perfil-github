import { Component, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user/user.service';

@Component({
  selector: 'busca-user',
  templateUrl: './busca-user.component.html',
  styleUrls: ['./busca-user.component.scss']
})
export class BuscaUserComponent {

  inputBusca: string = "";
  @Output() updateInfoUser = new EventEmitter();
  @Output() errorInfoUser = new EventEmitter();

  constructor(private userService: UserService) { }

  buscarUsuario(){
    this.userService.getDataUser(this.inputBusca)
      .subscribe(
        response => {this.updateInfoUser.emit(response)},
        error => {
          switch(error.status){
            case 404:
              this.errorInfoUser.emit({"msg":"User not found"});
              break;
            default:
              this.errorInfoUser.emit({"msg":"Try later"});
              break;
          }
        }
      );
  }

  limpaBusca(){
    this.inputBusca = "";
  }

}
