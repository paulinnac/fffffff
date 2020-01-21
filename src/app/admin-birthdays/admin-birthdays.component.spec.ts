import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBirthdaysComponent } from './admin-birthdays.component';

describe('AdminBirthdaysComponent', () => {
  let component: AdminBirthdaysComponent;
  let fixture: ComponentFixture<AdminBirthdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBirthdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
