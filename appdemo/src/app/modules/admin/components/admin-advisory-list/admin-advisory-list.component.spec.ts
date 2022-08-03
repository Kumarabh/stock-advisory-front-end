import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdvisoryListComponent } from './admin-advisory-list.component';

describe('AdminAdvisoryListComponent', () => {
  let component: AdminAdvisoryListComponent;
  let fixture: ComponentFixture<AdminAdvisoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdvisoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdvisoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
