import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaExcluirComponent } from './escola-excluir.component';

describe('EscolaExcluirComponent', () => {
  let component: EscolaExcluirComponent;
  let fixture: ComponentFixture<EscolaExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaExcluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolaExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
