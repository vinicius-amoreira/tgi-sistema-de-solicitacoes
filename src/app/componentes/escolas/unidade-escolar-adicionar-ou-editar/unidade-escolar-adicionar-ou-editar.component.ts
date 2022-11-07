import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EscolasModel, TelefonesModel, UnidadeEscolarModel} from "../../../models/escolas.model";
import {UnidadesEscolaresService} from "../../../services/unidadesEscolares.service";
import {EscolasService} from "../../../services/escolas.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-unidade-escolar-adicionar-ou-editar',
  templateUrl: './unidade-escolar-adicionar-ou-editar.component.html',
  styleUrls: ['./unidade-escolar-adicionar-ou-editar.component.css']
})
export class UnidadeEscolarAdicionarOuEditarComponent implements OnInit {
  editMode: boolean = false;
  escolas: EscolasModel[] = [];
  schoolUnitForm: FormGroup = this.fb.group({
    school: this.fb.group({
      id: [null, Validators.required],
    }),
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: this.fb.array([this.createPhones()])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: UnidadeEscolarModel,
    public dialogRef: MatDialogRef<UnidadeEscolarAdicionarOuEditarComponent>,
    private unidadesEscolaresService: UnidadesEscolaresService,
    private escolasService: EscolasService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.listSchools();
    this.editMode = !!this.data.id;
    if (this.editMode) {
      this.schoolUnitForm.patchValue({
        school: {
          id: this.data.school.id
        },
        name: this.data.name,
        address: this.data.address,
      })
      this.schoolUnitForm.setControl('phone', this.setExistingPhones(this.data.phone))
    }
  }

  setExistingPhones(phones: TelefonesModel[]): FormArray {
    const formArray = new FormArray([]) as unknown as FormArray;
    phones.forEach(phone => {
      formArray.push(this.fb.group({
        phone: phone.phone,
        description: phone.description,
      }))
    })

    return formArray
  }

  createPhones(): FormGroup {
    return this.fb.group({
      phone: [''],
      description: [''],
    })
  }

  get phone() {
    return <FormArray>this.schoolUnitForm.get('phone')
  }

  addPhones() {
    this.phone.push(this.createPhones())
  }

  removeOrClearPhone(i: number): void {
    if(this.phone.length > 1) {
      this.phone.removeAt(i);
    } else {
      this.phone.reset();
    }
  }

  listSchools(): void {
    this.escolasService.read().subscribe((data) => {
      this.escolas = data;
    })
  }

  saveSchoolUnit(): void {
    if (this.editMode) {
      this.unidadesEscolaresService.update(this.schoolUnitForm.value, this.data.id!).subscribe({
        next: () => {
          this.schoolUnitForm.reset();
        }
      })
    }
    else {
      this.unidadesEscolaresService.create(this.schoolUnitForm.value).subscribe()
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
