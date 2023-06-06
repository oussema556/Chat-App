import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMessagesWidgetComponent } from './recent-messages-widget.component';

describe('RecentMessagesWidgetComponent', () => {
  let component: RecentMessagesWidgetComponent;
  let fixture: ComponentFixture<RecentMessagesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMessagesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentMessagesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
