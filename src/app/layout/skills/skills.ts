import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Iskills } from '../../core/models/iskills';
import { SkillsService } from '../../core/services/skills.service/skills.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {


  constructor(private _skillsService: SkillsService,
     private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
   
    this.getSkills()
  }
  skills: Iskills[] = [];
  getSkills(){
 this._skillsService.getSkills().subscribe((res: Iskills[]) => {
      this.skills = res;
      this.cdr.detectChanges();
       console.log(this.skills);
    });
  }

  
}
