import {MatPaginatorIntl} from "@angular/material/paginator";

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.firstPageLabel = "Primeira página";
  customPaginatorIntl.lastPageLabel = "Última página";
  customPaginatorIntl.itemsPerPageLabel = "Itens por página";
  customPaginatorIntl.nextPageLabel = "Próxima página";
  customPaginatorIntl.previousPageLabel = "Página anterior";

  return customPaginatorIntl;
}
