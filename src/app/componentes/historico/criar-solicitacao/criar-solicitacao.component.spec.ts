import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSolicitacaoComponent } from './criar-solicitacao.component';

describe('CriarSolicitacaoComponent', () => {
  let component: CriarSolicitacaoComponent;
  let fixture: ComponentFixture<CriarSolicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarSolicitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
