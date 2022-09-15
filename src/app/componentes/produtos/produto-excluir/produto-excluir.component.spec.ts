import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExculirProdutoComponent } from './produto-excluir.component';

describe('DeleteComponent', () => {
  let component: ExculirProdutoComponent;
  let fixture: ComponentFixture<ExculirProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExculirProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExculirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
