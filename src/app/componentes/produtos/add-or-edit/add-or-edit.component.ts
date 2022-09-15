import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produtos } from 'src/app/models/produtos.model';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css']
})
export class AddOrEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Produtos,
    public dialogRef: MatDialogRef<AddOrEditComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
