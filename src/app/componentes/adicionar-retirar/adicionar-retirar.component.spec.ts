import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarRetirarComponent } from './adicionar-retirar.component';

describe('AdicionarRetirarComponent', () => {
  let component: AdicionarRetirarComponent;
  let fixture: ComponentFixture<AdicionarRetirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarRetirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarRetirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
