import {DefaultModel} from "./default.model";
import {UnidadesDeMedidaModel} from "./unidades-de-medida.model";

export interface ProdutosModel extends DefaultModel{
  id?: number,
  name: string,
  description: string,
  image: string,
  unit: UnidadesDeMedidaModel,
  stock: EstoqueModel,
}

export interface EstoqueModel extends DefaultModel{
  id?: number,
  quantity: number | null,
  quantity_min: number | null,
}
