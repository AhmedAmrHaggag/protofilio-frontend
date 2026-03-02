import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home.service/home.service';
import { Ihome } from '../../core/models/ihome';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-home',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './edit-home.html',
  styleUrl: './edit-home.css',
})
export class EditHome implements OnInit {
constructor(
  private _homeService: HomeService,
) {}
  form!: FormGroup;
  isEditMode = false;
  homeId!: string;

  ngOnInit(): void {
     this.form = new FormGroup({
      name : new FormControl(''),
      message: new FormControl('')
    })

    this.form.disable();   
    this.loadData();
  }
home?:Ihome
loadData(){
  this._homeService.getHome().subscribe(res=>{
    this.homeId = res._id;
      this.form.patchValue(res);
     console.log(res);
  });
}

enableEdit(){
    this.isEditMode = true;
    this.form.enable();
  }

  save(){

    if(this.form.invalid) return;

    this._homeService.updateHome(this.homeId, this.form.value)
      .subscribe(updated => {

        this.form.patchValue(updated);
        this.form.disable();
        this.isEditMode = false;

      });
  }
}
