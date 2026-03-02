

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../core/services/skills.service/skills.service';
import { Iskills } from '../../core/models/iskills';

@Component({
  selector: 'app-edit-skills',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-skills.html',
  styleUrls: ['./edit-skills.css'],
})
export class EditSkills implements OnInit {

  form!: FormGroup;
  skills: Iskills[] = [];

  isEditMode = false;
  isAddMode = false;
  selectedSkillId!: string;

  constructor(private _skillsService: SkillsService) {}

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imageURL: new FormControl('', Validators.required),
      tools: new FormControl('', Validators.required),
      yearsExperience: new FormControl('', Validators.required),
      projectsDone: new FormControl('', Validators.required),
      languages: new FormControl('', Validators.required),
      awards: new FormControl('', Validators.required),
    });

    this.loadSkills();
  }

  loadSkills(): void {
    this._skillsService.getSkills().subscribe((res: Iskills[]) => {
      this.skills = res;
      console.log(res);
      
    });
  }

  addSkill(): void {
    this.isAddMode = true;
    this.isEditMode = false;
    this.form.reset();
  }

  editSkill(skill: Iskills): void {
    this.isEditMode = true;
    this.isAddMode = false;
    this.selectedSkillId = skill._id;
    this.form.patchValue(skill);
  }

  save(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = this.form.value;

    if (this.isAddMode) {

      this._skillsService.addSkill(formData)
        .subscribe((newSkill: Iskills) => {

          this.skills = [...this.skills, newSkill];

          this.form.reset();
          this.isAddMode = false;
        });
    }

    else if (this.isEditMode) {

      this._skillsService.updateSkills(this.selectedSkillId, formData)
        .subscribe((updatedSkill: Iskills) => {

          const index = this.skills.findIndex(s => s._id === this.selectedSkillId);

          if (index !== -1) {
            this.skills[index] = updatedSkill;
          }

          this.form.reset();
          this.isEditMode = false;
        });
    }
  }

  deleteSkill(id: string): void {

    const confirmDelete = confirm('Are you sure you want to delete this skill?');
    if (!confirmDelete) return;

    this._skillsService.deleteSkill(id)
      .subscribe(() => {
   if (!confirm('Delete this skill?')) return;
        this.skills = this.skills.filter(skill => skill._id !== id);

      });
  }

}


