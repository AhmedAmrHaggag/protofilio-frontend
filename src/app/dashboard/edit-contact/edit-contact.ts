import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Icontact } from '../../core/models/icontact';
import { ContactService } from '../../core/services/contact.service/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-contact',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-contact.html',
  styleUrl: './edit-contact.css',
})
export class EditContact implements OnInit {
  constructor(
      private _contactService: ContactService
    ) {}
    form!: FormGroup;
  isEditMode = false;
  contactId!: string;
  ngOnInit(): void {
    this.form =new FormGroup({
        name : new FormControl(''),
      email : new FormControl(''),
      subject : new FormControl(''),
      message : new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl('')
    })
    this.form.disable();
 this.loadData();
  }

 contact?:Icontact
 loadData(){
  this._contactService.getContact().subscribe(res => {
      this.contactId = res._id;
      this.contact = res;
      this.form.patchValue(res);
       console.log(this.contact);
  console.log(res.name);
    });
 }
  enableEdit(){
    this.isEditMode = true;
    this.form.enable();
  }
   save(){

    if(this.form.invalid) return;

    this._contactService.updateContact(this.contactId, this.form.value)
      .subscribe(updated => {

        this.form.patchValue(updated);
        this.form.disable();
        this.isEditMode = false;

      });
  }
}
