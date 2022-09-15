import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAdicionarOuEditarComponent } from './produto-adicionar-ou-editar.component';

describe('ProdutoAdicionarOuEditarComponentComponent', () => {
  let component: ProdutoAdicionarOuEditarComponent;
  let fixture: ComponentFixture<ProdutoAdicionarOuEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAdicionarOuEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoAdicionarOuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
