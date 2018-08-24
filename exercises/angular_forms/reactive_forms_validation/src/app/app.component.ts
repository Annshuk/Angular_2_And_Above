import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+$')
    ]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    }),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^(91|0)?[6-9][0-9]{9}$')
    ]),
    gender: new FormControl('', [Validators.required]),
    hobbies: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),

  })

  messages = {
    'firstname': [
      { type: 'required', message: 'firstname should not be empty' },
      { type: 'maxlength', message: '<= 10' }
    ],
    'lastname': [
      { type: 'required', message: 'last name should not be empty' },
      { type: 'maxlength', message: 'must be less than 10 in length' }
    ],
    'email': [
      { type: 'required', message: 'mail id is required' },
      { type: 'pattern', message: 'invalid mail' }
    ],
    'phone': [
      { type: 'required', message: 'mobile number is required' },
      { type: 'pattern', message: 'invalid phone' },

    ],
    'state': [
      { type: 'required', message: 'select a state' }
    ],
    'gender': [
      { type: 'required', message: 'select a gender' }
    ],
    'hobbies': [
      { type: 'required', message: 'select hobbie' },
      { type: 'minlength', message: 'atleast one favourite' }
    ]
  }
  validate() {
    alert("valid")
  }




  states = {
    'telangana': ['Hyderabad', 'Warangal', 'Suryapet', 'Nalgonda', 'Kodad'],
    'andhra': ['Amaravathi', 'Vijayawada', 'Vizag', 'Guntur', 'Nellore'],
    'tamilnadu': ['Chennai', 'Madurai', 'Coimbatore', 'Kanchipuram']
  }





}
