import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm, FormControl, FormsModule   } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';

function passwordMatcher(c: AbstractControl) {
    const passwordControl = c.get('password');
    const confirmControl = c.get('confirmPassword');

    if (passwordControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
 }

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
user: User= new User();
userForm: FormGroup;
 model: any = {};

  constructor(
              private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private alertService: AlertService ) {
  }


    save() {
        console.log(this.userForm);
        console.log('Saved: ' + JSON.stringify(this.userForm.value));
    }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      pp: ['', [Validators]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, {validator: passwordMatcher})

    });
  }

  register() {

        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);

                });
                  console.log(this.model);
    }


}
