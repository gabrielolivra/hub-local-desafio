export interface IRpa {
  id: string,
  description: string,
  robotName: IRpaStatus,
  botId: string,
  computerId: string,
  clientId: string
}

export interface IRpaCreate {
  description: string,
  robotName: IRpaStatus,
  botId: string,
  computerId: string,
  clientId: string
}

export enum IRpaStatus {
  ROBOT_IMPRESSAO = 'ROBOT_IMPRESSAO',
  ROBOT_VENDA_GARRAFAS = 'ROBOT_VENDA_GARRAFAS',
  ROBOT_BLOQUEIO_CLIENTES = 'ROBOT_BLOQUEIO_CLIENTES',
  ROBOT_DESBLOQUEIO_CLIENTES = 'ROBOT_DESBLOQUEIO_CLIENTES',
  ROBOT_CONSULTAS_SINTEGRA = 'ROBOT_CONSULTAS_SINTEGRA',
  ROBOT_GERACAO_DARES = 'ROBOT_GERACAO_DARES',
  ROBOT_DEVOLUCAO = 'ROBOT_DEVOLUCAO',
}

export const Robots = [
  {
    label: 'ROBOT_IMPRESSAO',
    value: IRpaStatus.ROBOT_IMPRESSAO
  },
  {
    label: 'ROBOT_VENDA_GARRAFAS',
    value: IRpaStatus.ROBOT_VENDA_GARRAFAS
  },
  {
    label: 'ROBOT_BLOQUEIO_CLIENTES',
    value: IRpaStatus.ROBOT_BLOQUEIO_CLIENTES
  },
  {
    label: 'ROBOT_DESBLOQUEIO_CLIENTES',
    value: IRpaStatus.ROBOT_DESBLOQUEIO_CLIENTES
  },
  {
    label: 'ROBOT_CONSULTAS_SINTEGRA',
    value: IRpaStatus.ROBOT_CONSULTAS_SINTEGRA
  },
  {
    label: 'ROBOT_GERACAO_DARES',
    value: IRpaStatus.ROBOT_GERACAO_DARES
  },
  {
    label: 'ROBOT_DEVOLUCAO',
    value: IRpaStatus.ROBOT_DEVOLUCAO
  },
]