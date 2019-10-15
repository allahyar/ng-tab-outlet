import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWarehousesComponent } from './new-warehouses.component';

describe('NewWarehousesComponent', () => {
  let component: NewWarehousesComponent;
  let fixture: ComponentFixture<NewWarehousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWarehousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
