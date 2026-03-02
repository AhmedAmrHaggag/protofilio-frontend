import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about.service/about.service';
import { Iabout } from '../../core/models/iabout';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
constructor (private _aboutService : AboutService,
  private cdr: ChangeDetectorRef){};
  ngOnInit(): void {
   this.getAbout();
  }
  about?:Iabout;
  getAbout(){
    this._aboutService.getAbout().subscribe(res=>{
      this.about=res;
      this.cdr.detectChanges();
        console.log(this.about);
  console.log(res.name);
    })
  }

}
