import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSlackComponent } from './admin-slack.component';

describe('AdminSlackComponent', () => {
  let component: AdminSlackComponent;
  let fixture: ComponentFixture<AdminSlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
