type Route = string;

const ATS_BASE = '/ats';

export const routes = {
  home: (): Route => '/',
  feedback: (): Route => '/feedback',

  ats: {
    root: (): Route => ATS_BASE,
    calls: (): Route => `${ATS_BASE}/calls`,
    gateways: (): Route => `${ATS_BASE}/gateways`,
    abonents: (): Route => `${ATS_BASE}/abonents`,
  },
};
