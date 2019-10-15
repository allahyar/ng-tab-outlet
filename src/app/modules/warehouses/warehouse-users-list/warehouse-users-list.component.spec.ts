import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseUsersListComponent } from './warehouse-users-list.component';

describe('WarehouseUsersListComponent', () => {
  let component: WarehouseUsersListComponent;
  let fixture: ComponentFixture<WarehouseUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
