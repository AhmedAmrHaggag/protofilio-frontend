import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutService } from '../../core/services/about.service/about.service';
import { Iabout } from '../../core/models/iabout';

@Component({
  selector: 'app-edit-about',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-about.html',
  styleUrl: './edit-about.css',
})
export class EditAbout implements OnInit {
  constructor(
  private _aboutService: AboutService) {}
form! : FormGroup;
isEditMode = false;
aboutId!: string ;

  ngOnInit(): void {
    this.form =new FormGroup({
        name : new FormControl(''),
      portfolioImage : new FormControl(''),
      message : new FormControl(''),
      yearsExperience : new FormControl(''),
      projectsDone : new FormControl('')
    })
    this.form.disable();
  this.getAbout()
  }
  about?:Iabout
  getAbout(){
  this._aboutService.getAbout().subscribe(res=>{
        this.aboutId = res._id
    this.about = res;
    this.form.patchValue(res);
     console.log(this.about);
  console.log(res.name);
  });
}
enableEdit(){
  this.isEditMode = true;
  this.form.enable();
}

save(){
  if(this.form.invalid) return;

  this._aboutService.updateAbout(this.aboutId,this.form.value)
  .subscribe(updated=>{
    this.form.patchValue(updated);
    this.form.disable();
    this.isEditMode = false;
  })
}

}
