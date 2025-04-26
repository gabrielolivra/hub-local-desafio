import {
  SchedulingStatus,
  SchedulingStatusCompany,
  TypeTruck,
} from '../contracts/api/lobby/appointments.contract';

export const statusHelpers = {
  formatStatus: (status: SchedulingStatus): string => {
    const statusDescription = {
      SCHEDULING: 'AGENDADO',
      IN_PARKING: 'ESTACIONAMENTO',
      INTO_COMPANY: 'NA EMPRESA',
      OUT_COMPANY: 'FINALIZADO',
      FINISHED: 'FINALIZADO',
    };

    return statusDescription[status];
  },
  formatTypeTruck: (typeTruck: TypeTruck): string => {
    const truck = {
      COMPANY_TRUCK: 'CAMINHÃO DA EMPRESA',
      OTHERS_TRUCK: 'CAMINHÃO DE TERCEIROS',
    };
    return truck[typeTruck];
  },
  truck: (truckType: string): boolean => {
    return truckType === TypeTruck.COMPANY_TRUCK;
  },
  formatStatusCompany: (status: SchedulingStatusCompany): string => {
    const statusDescription = {
      SCHEDULING: 'AGUARDANDO SAÍDA',
      OUT_COMPANY: 'AGUARDANDO RETORNO',
      FINISHED: 'FINALIZADO',
    };

    return statusDescription[status];
  },
};
