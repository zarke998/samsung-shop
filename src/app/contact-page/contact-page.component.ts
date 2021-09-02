import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm : FormGroup = new FormGroup({});

  constructor(){

  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      subject : new FormControl(null, Validators.required),
      message : new FormControl(null, [Validators.required, this.validateMessageLength])
    });
  }

  get email(){
    return this.contactForm.get("email");
  }

  get subject(){
    return this.contactForm.get("subject");
  }

  get message(){
    return this.contactForm.get("message");
  }

  validateMessageLength(control : FormControl){
  if(control.value != null && control.value.length > 100){
    console.log(control.value);
    return {
      'messageTooLong' : true
    }
  }
  return null;
}

  contactSubmit(){
    if(this.contactForm.valid){
      alert("Thank you for contacting us! We'll reach out to you as soon as possible");
    }
    else{
      alert("Please fill in all fields.");
    }
  }
}
