import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @Input() userInfo = {};

  onUpdateUserInfo(userInfo){
    this.userInfo = userInfo;
  }

  onErrorUserInfo(msg){
    this.userInfo = {};
    
  }
}
