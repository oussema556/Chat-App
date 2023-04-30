import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSectionBodyComponent } from './side-section-body.component';

describe('SideSectionBodyComponent', () => {
  let component: SideSectionBodyComponent;
  let fixture: ComponentFixture<SideSectionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideSectionBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
