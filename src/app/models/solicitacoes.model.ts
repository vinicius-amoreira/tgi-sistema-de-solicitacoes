import {DefaultModel} from "./default.model";
import {UnidadeEscolarModel} from "./escolas.model";
import {AcoesModel} from "./Acoes.model";
import {ProdutosModel} from "./produtos.model";

export interface SolicitacoesModel extends DefaultModel{
  id?: number,
  requestItems: ItensSolicitacoesModel,
  schoolUnit: UnidadeEscolarModel,
  requestAction: AcoesModel,
}

export interface ItensSolicitacoesModel extends DefaultModel{
  id?: number,
  quantity: number,
  material: ProdutosModel,
}
