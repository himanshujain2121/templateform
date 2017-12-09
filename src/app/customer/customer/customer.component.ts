import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customerForm:FormGroup;
  constructor(private fb:FormBuilder ) { }
//addr1 addr2 city pin 
  ngOnInit() {
    this.customerForm = this.fb.group({
      id:new FormControl("",[]),
      name:new FormControl("",[]),
      email:new FormControl("",[]),
      dob:new FormControl("",[]),
      cards: this.fb.group({
        cardNumber:new FormControl('',[]),
        expMonth:new FormControl('',[]),
        expYear:new FormControl('',[]),
        cvv:new FormControl('',[]),
      }),
      address:this.fb.array(
        [
          this.fb.group({
            addr1: new FormControl('', []),
            addr2: new FormControl('', []),
            city: new FormControl('', []),
            pin: new FormControl('', [])
          })
        ]
      )
    })
  }

  addCard(){
    let address = this.customerForm.controls['address'] as FormArray;

    address.push(this.fb.group({
      addr1: new FormControl('', []),
      addr2: new FormControl('', []),
      city: new FormControl('', []),
      pin: new FormControl('', [])
    }))
  }

  save(){
    alert(this.customerForm);
  }

}
