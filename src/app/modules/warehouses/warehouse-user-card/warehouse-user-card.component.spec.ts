import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseUserCardComponent } from './warehouse-user-card.component';

describe('WarehouseUserCardComponent', () => {
  let component: WarehouseUserCardComponent;
  let fixture: ComponentFixture<WarehouseUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
