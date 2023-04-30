import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSectionHeaderComponent } from './side-section-header.component';

describe('SideSectionHeaderComponent', () => {
  let component: SideSectionHeaderComponent;
  let fixture: ComponentFixture<SideSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideSectionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
