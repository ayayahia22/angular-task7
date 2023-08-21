import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  // title = 'ToDoApp';
  // panelOpenState = false;
  login: NgForm | undefined ;
  form!: NgForm  ;

  constructor(private loginService:LoginService,private router:Router){

  }



userName:string='';
password:string='';
 async onSignIn() {

  console.log(this.userName ,"1", this.password);


 await this.loginService.getUser()
    .subscribe(
      (data: User[]) => {
        console.log(2, this.userName, this.password);
        const user = data.find((user) => user.username === this.userName );
        console.log(3,user, 'user');
        console.log(5,this.userName,typeof this.password);
        const token = btoa(this.userName + ':' + this.password);
        console.log('token',token)
if (user){
  console.log('user found')
  this.router.navigate(['/pac'], {
    queryParams: { userName: this.userName, password: this.password },
    state: { user: user }
  });
} else{
  console.log("User not found");
}
          // Assuming successful login


      },
      (error: any) => {
        console.log(error)},
      () => {
        console.log(4,'done');
      }

    );





}


}

