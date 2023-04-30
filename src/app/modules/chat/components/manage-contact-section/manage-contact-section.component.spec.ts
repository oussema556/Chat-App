import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactSectionComponent } from './manage-contact-section.component';

describe('ManageContactSectionComponent', () => {
  let component: ManageContactSectionComponent;
  let fixture: ComponentFixture<ManageContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContactSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
