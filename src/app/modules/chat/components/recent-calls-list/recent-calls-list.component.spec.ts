import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCallsListComponent } from './recent-calls-list.component';

describe('RecentCallsListComponent', () => {
  let component: RecentCallsListComponent;
  let fixture: ComponentFixture<RecentCallsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCallsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
