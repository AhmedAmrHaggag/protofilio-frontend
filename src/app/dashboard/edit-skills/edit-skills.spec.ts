import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkills } from './edit-skills';

describe('EditSkills', () => {
  let component: EditSkills;
  let fixture: ComponentFixture<EditSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
