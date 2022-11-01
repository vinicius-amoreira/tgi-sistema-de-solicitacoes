import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeEscolarExcluirComponent } from './unidade-escolar-excluir.component';

describe('UnidadeEscolarExcluirComponent', () => {
  let component: UnidadeEscolarExcluirComponent;
  let fixture: ComponentFixture<UnidadeEscolarExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeEscolarExcluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeEscolarExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
