import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios-adicionar-ou-editar',
  templateUrl: './usuarios-adicionar-ou-editar.component.html',
  styleUrls: ['./usuarios-adicionar-ou-editar.component.css']
})
export class UsuariosAdicionarOuEditarComponent implements OnInit {
  editMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Users,
    public dialogRef: MatDialogRef<UsuariosAdicionarOuEditarComponent>,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.editMode = !!this.data.id;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  createOrEditProduct(payload: Users): void {
    const formattedPayload = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      password: payload.password,
      level: payload.level
    } as unknown as Users
    if(this.editMode) {
      this.userService.update(formattedPayload).subscribe(() => {
        this.showMessage("Sucesso!")
      }, () => {
        this.showMessage("Erro!", true)
      })
    } else {
      this.userService.create(formattedPayload).subscribe(() => {
        this.showMessage("Sucesso!")
      }, () => {
        this.showMessage("Erro!", true)
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
