import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaUserComponent } from './busca-user.component';

describe('BuscaUserComponent', () => {
  let component: BuscaUserComponent;
  let fixture: ComponentFixture<BuscaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
