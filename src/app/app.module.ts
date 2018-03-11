import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { BuscaUserModule } from './busca-user/busca-user.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    BuscaUserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
