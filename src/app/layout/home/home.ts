import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Ihome } from '../../core/models/ihome';
import { HomeService } from '../../core/services/home.service/home.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor (private _homeService : HomeService,
  private cdr: ChangeDetectorRef){};
  ngOnInit(): void {
    this.gethome()
  }
home?:Ihome;
  gethome(){
    this._homeService.getHome().subscribe(res=>{
      this.home=res;
      this.cdr.detectChanges();
        console.log(this.home);
  console.log(res.name);
    })
  }
 






// isDark = true;

//   toggleDarkMode() {
//     this.isDark = !this.isDark;
//     document.documentElement.classList.toggle('dark');
//   }

//   saveChanges() {
//     console.log('Changes Saved');
//     alert('Changes Saved Successfully ');
//   }

//   discardChanges() {
//     console.log('Changes Discarded');
//     alert('Changes Discarded ');
//   }

}
