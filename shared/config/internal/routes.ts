type Route = string;

const ATS_BASE = '/ats';
const MTS_BASE = '/mts';

export const routes = {
  home: (): Route => '/',
  feedback: (): Route => '/feedback',

  ats: {
    root: (): Route => ATS_BASE,
    calls: (): Route => `${ATS_BASE}/calls`,
    gateways: (): Route => `${ATS_BASE}/gateways`,
    abonents: (): Route => `${ATS_BASE}/abonents`,
  },

  mts: {
    root: (): Route => MTS_BASE,
    abonents: (): Route => `${MTS_BASE}/abonents`,
  },
};
