import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empresas } from 'src/app/models/empresas.model';

@Component({
  selector: 'app-company-add-or-edit',
  templateUrl: './company-add-or-edit.component.html',
  styleUrls: ['./company-add-or-edit.component.css']
})
export class CompanyAddOrEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Empresas,
    public dialogRef: MatDialogRef<CompanyAddOrEditComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
