import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudstudentsComponent } from './crudstudents.component';

describe('CrudstudentsComponent', () => {
  let component: CrudstudentsComponent;
  let fixture: ComponentFixture<CrudstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
