import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/user.model';
import { UsuariosAdicionarOuEditarComponent } from './usuarios-adicionar-ou-editar/usuarios-adicionar-ou-editar.component';
import { UsuariosExcluirComponent } from './usuarios-excluir/usuarios-excluir.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['nome', 'email', 'nivel'];
  users: Users[] = [];
  dataSource!: MatTableDataSource<Users[]>

  constructor(
    public dialog: MatDialog,
    public userService: UsersService
    ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.userService.read().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource(data) as unknown as MatTableDataSource<any>;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addUser(): void {
    const dialogRef = this.dialog.open(UsuariosAdicionarOuEditarComponent, {
      width: '70%',
    });

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.listUsers();
      }, 1000)
    });
  }

  editUser(users: Users): void {
    const dialogRef = this.dialog.open(UsuariosAdicionarOuEditarComponent, {
      width: '70%',
      data: users,
    });

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.listUsers();
      }, 1000)
    });
  }

  deleteUser(users: Users): void {
    const dialogRef = this.dialog.open(UsuariosExcluirComponent, {
      width: '30%',
      data: users,
    });

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.listUsers();
      }, 1000)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
