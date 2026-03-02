import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHome } from './edit-home';

describe('EditHome', () => {
  let component: EditHome;
  let fixture: ComponentFixture<EditHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
