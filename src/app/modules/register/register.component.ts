import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
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
    repassword: string = "";
    checkErrArr: any = [];
    register: boolean = false;
    form: FormGroup;

    constructor(private router: Router, private registerService: RegisterService) {
        this.form = new FormGroup({
            
            username: new FormControl('', CustomValidators.range([6, 20])),
            password: new FormControl('', CustomValidators.number),
            repassword: new FormControl('', CustomValidators.number),
            // age: new FormControl('', CustomValidators.number),
            // sex: new FormControl('', Validators.required),
            // position: new FormControl('', CustomValidators.range([2, 20])),
            // habby: new FormControl('', CustomValidators.range([2, 50])),
            // phone: new FormControl('', CustomValidators.phone("zh-CN")),
            email: new FormControl('', CustomValidators.email),
            // url: new FormControl('', CustomValidators.url)
        });
    }

    ngOnInit() {
        $('body').addClass('login');
    }

    // 登录事件
    onSubmit(e) {
        console.log(this.newUser);
        console.log(e);
        this.registerService.sendUser(this.newUser).subscribe(
            data => {
                this.checkErrArr = [];
                this.register = true;
                this.newUser = new User();
                this.router.navigate(['/home']);
            }, error => {
                console.log(error);
                this.checkErrArr.push(error);
            }
        )
    }

    onBlur(e) {
        // this.onTouched();
        console.log(e);
    }

    ngOnDestroy() {
        $('body').removeClass('login');
    }
}