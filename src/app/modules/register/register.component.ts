import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { User } from '../../models/user';
import { RegisterService } from '../../service/register.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
    newUser: User = new User();
    repassword:string = "";
    checkErrArr: any = [];
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
                this.checkErrArr = [];
                this.register = true;
                this.newUser = new User();
                this.router.navigate(['/home']);
            },error=>{
                console.log(error);
                this.checkErrArr.push(error);
            }
        )
    }

    ngOnDestroy() {
        $('body').removeClass('login');
    }
}