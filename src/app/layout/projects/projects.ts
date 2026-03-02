import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../core/services/projects.service/projects.service';
import { Iprojects } from '../../core/models/iprojects';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects  implements OnInit {
  constructor (private _projectsService : ProjectsService,
  private cdr: ChangeDetectorRef){};
  ngOnInit(): void {
  this.getProjects()
  }
  projects?:Iprojects[]=[]
    getProjects(){
      this._projectsService.getProjects().subscribe((res:Iprojects[])=>{
        this.projects=res;
        this.cdr.detectChanges();
          console.log(this.projects);
    // console.log(res.name);
      })

}
}
