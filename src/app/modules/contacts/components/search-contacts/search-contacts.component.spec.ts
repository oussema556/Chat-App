import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContactsComponent } from './search-contacts.component';

describe('SearchContactsComponent', () => {
  let component: SearchContactsComponent;
  let fixture: ComponentFixture<SearchContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
