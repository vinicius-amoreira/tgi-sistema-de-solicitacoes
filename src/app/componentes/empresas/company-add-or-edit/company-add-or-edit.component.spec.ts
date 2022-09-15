import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddOrEditComponent } from './company-add-or-edit.component';

describe('CompanyAddOrEditComponent', () => {
  let component: CompanyAddOrEditComponent;
  let fixture: ComponentFixture<CompanyAddOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAddOrEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
