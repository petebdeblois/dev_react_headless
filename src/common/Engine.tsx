import {buildSearchEngine} from '@coveo/headless';
import {PlatformEnvironment} from '../utils/url-utils';

const getEndpointToLocalServer = () => {
  if (!process.env.REACT_APP_SERVER_PORT) {
    throw new Error('Undefined "REACT_APP_SERVER_PORT" environment variable');
  }
  const port = process.env.REACT_APP_SERVER_PORT;
  const pathname = '/token';
  return `http://localhost:${port}${pathname}`;
};

const getTokenEndpoint = () => {
  return process.env.REACT_APP_TOKEN_ENDPOINT || getEndpointToLocalServer();
};

export async function getSearchToken() {
  const res = await fetch(getTokenEndpoint());
  const {token} = await res.json();
  return token;
}
/**
 * Returns the unique endpoint(s) for a given organization identifier.
 * @param orgId The organization identifier.
 * @param env Optional. The environment (prod, hipaa, staging, dev) that the organization belongs to. Defaults to `prod`.
 * @returns
 */
export function getOrganizationEndpoints(
  orgId: string,
  env: PlatformEnvironment = 'prod'
) {
  const envSuffix = env === 'prod' ? '' : env;

  const platform = `https://${orgId}.org${envSuffix}.coveo.com`;
  const analytics = `https://${orgId}.analytics.org${envSuffix}.coveo.com`;
  const search = `${platform}/rest/search/v2`;
  const admin = `https://${orgId}.admin.org${envSuffix}.coveo.com`;

  return {platform, analytics, search, admin};
}
export async function initializeHeadlessEngine() {
  return buildSearchEngine({
    configuration: {
      organizationEndpoints: getOrganizationEndpoints(process.env.REACT_APP_ORGANIZATION_ID),
      organizationId: process.env.REACT_APP_ORGANIZATION_ID,
      accessToken: await getSearchToken(),
      renewAccessToken: getSearchToken,
      analytics: {
        originLevel3: "https://localhost:3000"
      }
    },
  });
}
