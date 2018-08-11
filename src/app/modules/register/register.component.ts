import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/service/register.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
    newUser: User = new User();
    register: boolean = false;

    constructor(private router: Router, private registerService:RegisterService) {
    }

    ngOnInit() {
        $('body').addClass('login');
    }

    // 登录事件
    onSubmit() {
        console.log(this.newUser);
        this.registerService.sendUser(this.newUser).subscribe(
            data=>{
                this.register = true;
                this.newUser = new User();
            },error=>{
                console.log(error);
            }
        )
        this.router.navigate(['/home']);
    }

    ngOnDestroy() {
        $('body').removeClass('login');
    }
}