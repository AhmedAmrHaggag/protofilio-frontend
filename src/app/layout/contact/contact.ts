import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service/contact.service';
import { Icontact } from '../../core/models/icontact';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact  implements OnInit{
  constructor (private _contactService : ContactService,
  private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getContact()
  }

 contact?:Icontact;
  getContact(){
    this._contactService.getContact().subscribe(res=>{
      this.contact=res;
      this.cdr.detectChanges();
        console.log(this.contact);
  console.log(res.name);
    })
  }

}
