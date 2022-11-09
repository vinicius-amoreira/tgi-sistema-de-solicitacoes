import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirProdutoComponent } from './unidades-de-medida-excluir.component';

describe('DeleteComponent', () => {
  let component: ExcluirProdutoComponent;
  let fixture: ComponentFixture<ExcluirProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
