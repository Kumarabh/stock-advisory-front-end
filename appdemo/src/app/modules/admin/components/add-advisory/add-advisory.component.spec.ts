import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvisoryComponent } from './add-advisory.component';

describe('AddAdvisoryComponent', () => {
  let component: AddAdvisoryComponent;
  let fixture: ComponentFixture<AddAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
