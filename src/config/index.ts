import { envVariables } from './envVariables';

export const domain = '{YOUR_DOMAIN}';

export const appUrl = `https://${domain}`;

export const getPageUrl = (pageRoute: string) => {
  return `${appUrl}${pageRoute}`;
};

export const getApiEndpoint = (apiPath: string) => {
  return `${envVariables.API_BASE_URL}${apiPath}`;
};
