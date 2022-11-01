import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeEscolarAdicionarOuEditarComponent } from './unidade-escolar-adicionar-ou-editar.component';

describe('UnidadeEscolarAdicionarOuEditarComponent', () => {
  let component: UnidadeEscolarAdicionarOuEditarComponent;
  let fixture: ComponentFixture<UnidadeEscolarAdicionarOuEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeEscolarAdicionarOuEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeEscolarAdicionarOuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
