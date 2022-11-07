import {DefaultModel} from "./default.model";

export interface UnidadesDeMedidaModel extends DefaultModel{
  id?: number,
  unit: string,
  description: string,
}
