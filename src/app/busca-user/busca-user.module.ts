import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BuscaUserComponent } from './busca-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BuscaUserComponent
  ],
  exports:[
    BuscaUserComponent
  ]
})
export class BuscaUserModule { }
