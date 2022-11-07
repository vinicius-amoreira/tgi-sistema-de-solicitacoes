import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDeMedidaAdicionarOuEditarComponent } from './unidades-de-medida-adicionar-ou-editar.component';

describe('ProdutoAdicionarOuEditarComponentComponent', () => {
  let component: UnidadesDeMedidaAdicionarOuEditarComponent;
  let fixture: ComponentFixture<UnidadesDeMedidaAdicionarOuEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesDeMedidaAdicionarOuEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesDeMedidaAdicionarOuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
