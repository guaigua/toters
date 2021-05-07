import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcursosComponent } from './crudcursos.component';

describe('CrudcursosComponent', () => {
  let component: CrudcursosComponent;
  let fixture: ComponentFixture<CrudcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
