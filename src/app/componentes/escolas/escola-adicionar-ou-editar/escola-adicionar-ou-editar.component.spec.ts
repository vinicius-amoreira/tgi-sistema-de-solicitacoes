import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaAdicionarOuEditarComponent } from './escola-adicionar-ou-editar.component';

describe('EscolaAdicionarOuEditarComponent', () => {
  let component: EscolaAdicionarOuEditarComponent;
  let fixture: ComponentFixture<EscolaAdicionarOuEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaAdicionarOuEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolaAdicionarOuEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
