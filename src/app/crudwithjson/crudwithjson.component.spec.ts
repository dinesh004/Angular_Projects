import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudwithjsonComponent } from './crudwithjson.component';

describe('CrudwithjsonComponent', () => {
  let component: CrudwithjsonComponent;
  let fixture: ComponentFixture<CrudwithjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudwithjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudwithjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
