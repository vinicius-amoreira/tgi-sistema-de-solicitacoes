import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAdicionarOuEditarComponent } from './usuarios-adicionar-ou-editar.component';

describe('UsuariosAdicionarOuEditarComponent', () => {
  let component: UsuariosAdicionarOuEditarComponent;
  let fixture: ComponentFixture<UsuariosAdicionarOuEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosAdicionarOuEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosAdicionarOuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
