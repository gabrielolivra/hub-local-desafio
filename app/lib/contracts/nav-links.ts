'use client';
import {
  ArrowTrendingDownIcon,
  BanknotesIcon,
  CogIcon,
  HandRaisedIcon,
  HomeIcon,
  TruckIcon,
  ArrowPathIcon,
  ClockIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

interface SubLinkProps {
  name: string;
  href: string;
}

export interface NavLinkProps {
  name: string;
  href: string;
  icon: React.ElementType;
  subLinks?: SubLinkProps[];
}

export const linksLayout: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  { name: 'Comercial', href: '/auth/comercial', icon: BanknotesIcon },
  { name: 'Logistica', href: '/auth/logistica', icon: TruckIcon },
];

export const linksLogistica: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  { name: 'Logística', href: '/auth/logistica', icon: TruckIcon },
  {
    name: 'Cargas',
    href: '',
    icon: TruckIcon,

    subLinks: [
      {
        name: 'Importar cargas',
        href: '/auth/logistica/import-loads',
      },
      {
        name: 'Cargas Agendadas',
        href: '/auth/logistica/loads'
      },

    ],
  },
  {
    name: 'Faturamento', href: '/auth/logistica/', icon: BanknotesIcon,
    subLinks: [
      {
        name: 'Emissão de dares',
        href: '/auth/logistica/dares',
      },
      {
        name: 'Processo de dares',
        href: '/auth/logistica/process-dares',
      },
    ],
  }
];

export const linksComercial: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/', icon: HomeIcon },
  {
    name: 'Carregamentos',
    href: '',
    icon: TruckIcon,
    subLinks: [
      {
        name: 'Lista carregamentos',
        href: '/auth/comercial/truckload',
      },
      {
        name: 'Cadastrar carregamentos',
        href: '/auth/comercial/truckload/create',
      },
    ],
  },
];

export const linksPortaria: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/', icon: HomeIcon },
  {
    name: 'Portaria',
    href: '',
    icon: HandRaisedIcon,
    subLinks: [
      {
        name: 'Listar agendamentos',
        href: '/auth/lobby',
      },
      {
        name: 'Cadastrar agendamentos',
        href: '/auth/lobby/create',
      },
    ],
  },
];

export const linksProducao: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  { name: 'Produção', href: '/auth/producao', icon: CogIcon },
  {
    name: 'Perdas',
    href: '',
    icon: ArrowTrendingDownIcon,
    subLinks: [
      {
        name: 'Lista perdas',
        href: '/auth/producao/losses',
      },
      {
        name: 'Apontar perda',
        href: '/auth/producao/losses/create',
      },
      {
        name: 'Cadastrar descrição de perdas',
        href: '/auth/producao/description-losses/create',
      },
    ],
  },
];

export const linksRH: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  { name: 'Integração gupy', href: '/auth/rh', icon: ArrowPathIcon },
];

export const linksAdmin: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  { name: 'Crons', href: '/auth/settings/crons', icon: ClockIcon },
  {
    name: 'Robôs',
    href: '/auth/settings/rpa',
    icon: PuzzlePieceIcon,

  },
  {
    name: 'Usuarios',
    href: '',
    icon: ArrowPathIcon,
    subLinks: [
      { name: 'Papéis', href: '/auth/settings/roles' },
      { name: 'Usuários', href: '/auth/settings' },
    ],
  },
];

export const linksUtilities: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  {
    name: 'Patrimônios',
    href: '/auth/utilities/patrimony',
    icon: CogIcon,
    subLinks: [
      { name: 'Patrimônio', href: '/auth/utilities/patrimony' },
      { name: 'Local de estoque', href: '/auth/utilities/local-stock' },
    ],
  },
];

export const linksFinancial: NavLinkProps[] = [
  { name: 'Tela inicial', href: '/auth', icon: HomeIcon },
  {
    name: 'Clientes',
    href: '',
    icon: BanknotesIcon,
    subLinks: [
      { name: 'Bloqueio de clientes', href: '/auth/financial/block-customers' },
      { name: 'Desbloqueio de clientes', href: '/auth/financial/unblock-customers' },
      { name: 'Controle de clientes', href: '/auth/financial/customers' }
    ]
  }
]
