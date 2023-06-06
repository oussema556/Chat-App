import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCallsWidgetComponent } from './recent-calls-widget.component';

describe('RecentCallsWidgetComponent', () => {
  let component: RecentCallsWidgetComponent;
  let fixture: ComponentFixture<RecentCallsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCallsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCallsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
