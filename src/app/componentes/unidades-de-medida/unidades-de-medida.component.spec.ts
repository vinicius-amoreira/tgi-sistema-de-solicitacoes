import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDeMedidaComponent } from './unidades-de-medida.component';

describe('ProdutosComponent', () => {
  let component: UnidadesDeMedidaComponent;
  let fixture: ComponentFixture<UnidadesDeMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesDeMedidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesDeMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
