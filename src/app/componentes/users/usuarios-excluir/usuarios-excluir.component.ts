import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios-excluir',
  templateUrl: './usuarios-excluir.component.html',
  styleUrls: ['./usuarios-excluir.component.css']
})
export class UsuariosExcluirComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Users,
    public dialogRef: MatDialogRef<UsuariosExcluirComponent>,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  deleteSchool(payload: Users): void {
    this.userService.delete(payload.id!).subscribe(() => {
      this.showMessage("Sucesso!")
    }, () => {
      this.showMessage("Erro!", true)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
