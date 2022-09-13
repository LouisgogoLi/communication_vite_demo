export const oBaseUrl = {
  herokuappBaseUrl: {
    DEV: '/api',
    PROD: import.meta.env.VITE_APP_AXIOS_BASEURL,
  },
};
