import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Iprojects } from '../../core/models/iprojects';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../../core/services/projects.service/projects.service';

@Component({
  selector: 'app-edit-projects',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-projects.html',
  styleUrl: './edit-projects.css',
})
export class EditProjects implements OnInit {
  
  form!: FormGroup;
  projects: Iprojects[] = [];

  isEditMode = false;
  isAddMode = false;
  selectedProjectId!: string;

  constructor(
  private _ProjectsService: ProjectsService) {}
  ngOnInit(): void {
     this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      title: new FormControl('', Validators.required),
      heroDescription: new FormControl('', Validators.required),
    });
this.getProjects()  
}
  // projects?:Iprojects
  getProjects(){
  this._ProjectsService.getProjects().subscribe((res:Iprojects[])=>{
    this.projects = res;
     console.log(this.projects);
  // console.log(res.name);
  });
}
addProject(): void {
    this.isAddMode = true;
    this.isEditMode = false;
    this.form.reset();
  }
    editProject(project: Iprojects): void {
      this.isEditMode = true;
      this.isAddMode = false;
      this.selectedProjectId = project._id
      this.form.patchValue(project);
      
    }
    save(): void {
    
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          return;
        }
    
        const formData = this.form.value;
    
        if (this.isAddMode) {
    
          this._ProjectsService.addProject(formData)
            .subscribe((newProject: Iprojects) => {
    
              this.projects = [...this.projects, newProject];
    
              this.form.reset();
              this.isAddMode = false;
            });
        }
    
        else if (this.isEditMode) {
    
          this._ProjectsService.updateProjects(this.selectedProjectId, formData)
            .subscribe((updateProject: Iprojects) => {
    
              const index = this.projects.findIndex(p => p._id === this.selectedProjectId);
    
              if (index !== -1) {
                this.projects[index] = updateProject;
              }
    
              this.form.reset();
              this.isEditMode = false;
            });
        }
      }

      deleteProject(id: string): void {

    const confirmDelete = confirm('Are you sure you want to delete this skill?');
    if (!confirmDelete) return;

    this._ProjectsService.deleteProject(id)
      .subscribe(() => {

        this.projects = this.projects.filter(project => project._id !== id);

      });
  }


}
