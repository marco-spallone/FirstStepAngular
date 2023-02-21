import {MyHeaders, MyOrder, MyPagination, MySearch, MyTableActionsEnum, MyTableConfig} from "../my-table.component";

export const carTableConfig:MyTableConfig={
  headers:[
    new MyHeaders('Marca', 'marca'),
    new MyHeaders('Modello', 'modello'),
    new MyHeaders('Anno', 'anno'),
    new MyHeaders('Cilindrata', 'cilindrata'),
    new MyHeaders('Cavalli', 'cavalli'),
  ],
  order:new MyOrder('anno', 'desc'),
  search:new MySearch(['marca', 'modello', 'anno']),
  pagination:new MyPagination(10, [3,5,10]),
  actions:[MyTableActionsEnum.NEW_ROW, MyTableActionsEnum.EDIT, MyTableActionsEnum.DELETE]
}
