import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private signin: SigninService,
    private snackbar: MatSnackBar
  ) {}
  @ViewChild('email') email: ElementRef | undefined;
  @ViewChild('name') name: ElementRef | undefined;
  @ViewChild('password') password: ElementRef | undefined;

  ngOnInit(): void {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  signUp() {
    console.log(
      this.name.nativeElement.value,
      this.email.nativeElement.value,
      this.password.nativeElement.value
    );
    let obj = {
      email: this.email.nativeElement.value,
      name: this.name.nativeElement.value,
      password: this.password.nativeElement.value,
    };
    this.signin.register(obj).subscribe(
      (data) => {
        console.log(data, 'data');
        this.snackbar.open('Signup Successfully', 'X', {
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          duration: 4000,
          panelClass: ['info-snackbar'],
        });
        this.router.navigate(['/login']);
      },
      (eror) => {
        this.snackbar.open('Something Went Wrong In Signup', 'X', {
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          duration: 4000,
          panelClass: ['info-snackbar'],
        });
      }
    );
  }

  SubmitButton: string = 'SignUp';

  email_val = '';
  email_valid: boolean = true;
  initial_state_email: boolean = true;
  email_feedback: string = '';

  name_val = '';
  name_feedback: string = '';
  name_valid: boolean = true;
  initial_state_name: boolean = true;

  password_val = '';
  password_feedback: string = '';
  password_valid: boolean = true;
  initial_state_password: boolean = true;

  goToSignupPage() {
    this.router.navigate(['/signup']);
  }

  ValidateEmail(value: any) {
    this.initial_state_email = false;
    this.email_val = value;
    this.validateResourceEmail(value);
  }

  ValidateName(value: any) {
    this.initial_state_name = false;
    this.name_val = value;
    this.validateResourceName(value);
  }

  ValidatePassword(value: any) {
    this.initial_state_password = false;
    this.password_val = value;
    this.ValidateResourcePassword(value);
  }

  validateResourceEmail(input: string) {
    if (input.length === 0) {
      this.email_valid = false;
      this.email_feedback = 'Email is Required!';
      return;
    }
    var pattern = new RegExp(
      '^[a-zA-Z0-9]{2,}(?:[.-]{1}[a-zA-Z0-9]+){0,2}@[a-zA-Z]{2,20}[.]{1}[a-zA-Z]{2,4}(?:[.]{1}[a-zA-Z]+){0,1}$'
    );
    if (!pattern.test(input)) {
      this.email_valid = false;
      this.email_feedback = 'Invalid Email';
    } else {
      this.email_valid = true;
      this.email_feedback = '';
    }
  }

  validateResourceName(input: string) {
    if (input.length === 0) {
      this.name_valid = false;
      this.name_feedback = 'Name is Required!';
      return;
    }
    var pattern = new RegExp('^[a-zA-Z][a-zA-Z. ]*$');
    if (!pattern.test(input)) {
      this.name_valid = false;
      this.name_feedback = 'Invalid Name!';
    } else {
      this.name_valid = true;
      this.name_feedback = '';
    }
  }

  ValidateResourcePassword(input: string) {
    if (input.length === 0) {
      this.password_valid = false;
      this.password_feedback = 'Password is Required!';
    } else if (input.length < 8) {
      this.password_valid = false;
      this.password_feedback = 'Password must be 8 characters long!';
    } else {
      this.password_valid = true;
      this.password_feedback = '';
    }
  }

  submit() {
    this.validateResourceEmail(this.email?.nativeElement.value);
    this.ValidateResourcePassword(this.password?.nativeElement.value);
    this.validateResourceName(this.name?.nativeElement.value);
    if (this.password_valid && this.email_valid && this.name_valid) {
      this.SubmitButton = 'SigninUp..';

      let obj = {
        email: this.email.nativeElement.value,
        name: this.name.nativeElement.value,
        password: this.password.nativeElement.value,
      };
      this.signin.register(obj).subscribe(
        (data) => {
          this.SubmitButton = 'SignUp';
          this.email_feedback = '';
          this.name_feedback = '';
          this.name_valid = true;
          this.email_valid = true;
          this.name_val = '';
          this.email_val = '';
          this.initial_state_name = true;
          this.initial_state_email = true;
          this.password_val = '';
          this.password_feedback = '';
          this.password_valid = true;
          this.initial_state_password = true;
          this.snackbar.open('Signup Successfully', 'X', {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 4000,
            panelClass: ['info-snackbar'],
          });
          this.router.navigate(['/login']);
        },
        (error) => {
          this.SubmitButton = 'SignUp';
          this.snackbar.open('Something Went Wrong In Signup', 'X', {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 4000,
            panelClass: ['info-snackbar'],
          });
        }
      );
    }
  }
}
