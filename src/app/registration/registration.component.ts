import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Informations } from '../informations';
// import Swal from 'sweetalert2'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public informations: Informations;

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  // public index: Number = 0;
  public showRegistration: boolean = true;
  public showRegistered: boolean = false;

  public encryptedPassword: string;

  public show : boolean = false;

  constructor() {
    this.informations = new Informations();
  }

  ngOnInit() {
  }

  public registeredInformation: Informations[] = []

  onSubmit(sampleForm) {

    // Encrypt password
    // this.encryptedPassword = CryptoJS.AES.encrypt(this.password.trim(), this.password.trim()).toString();
    // this.encryptedPassword = CryptoJS.AES.encrypt(this.password.trim()).toString();


    this.informations = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
    }
    this.registeredInformation.push(this.informations)
    console.log(this.registeredInformation)
    // this.firstName = "";
    // this.lastName = "";
    // this.email = "";
    // this.password = "";
    
    this.show = true;
    sampleForm.form.reset();
    // Swal.fire({
    //   title: 'Successully added',
    //   icon: 'success',
    //   confirmButtonText: 'Back'
    // })
  }

  toEdit(info) {
// encryption / decryption
    // https://stackblitz.com/edit/encrypt-decrypt-app?file=app%2Fapp.component.ts

    // empty ang decrypted password

  

    if (this.firstName === null && this.lastName === null && this.email === null && this.password === null) {

      this.firstName = info.firstname,
        this.lastName = info.lastname,
        this.email = info.email,
        this.password = info.password,

        this.registeredInformation = this.registeredInformation.filter(item => {
          if (item != info) {
            return item;
          }
        })
    } else {
      alert('error')
      // Swal.fire({
      //   title: 'Error!',
      //   text: 'You can not edit another information while still editing the other',
      //   icon: 'error',
      //   confirmButtonText: 'Back'
      // })
      // console.log(info)
    }
  }

}