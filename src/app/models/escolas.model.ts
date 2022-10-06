import {DefaultModel} from "./default.model";

export interface EscolasModel extends DefaultModel{
  id?: number,
  name: string,
}

export interface UnidadeEscolarModel extends DefaultModel{
  id?: number,
  name: string,
  address: string,
  school: EscolasModel,
  phone: TelefonesModel[],
}

export interface TelefonesModel {
  id?: number,
  phone: string,
  description: string,
}
