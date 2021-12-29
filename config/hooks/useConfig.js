import localConfig from "../config.local.json";
import devConfig from "../config.dev.json";
import qaConfig from "../config.qa.json";
import prodConfig from "../config.prod.json";

const isEnv = (prefix) => {
  const hostname = window.location.hostname;
  return hostname.indexOf(prefix) > -1;
};

const useConfig = () => {
  // TODO: Update these to match your hostnames
  const isLocalhost = isEnv("localhost");
  const isDev = isEnv("dev");
  const isQa = isEnv("qa");
  const isProd = isEnv("contoso.com");

  if (isLocalhost) {
    return localConfig;
  } else if (isDev) {
    return devConfig;
  } else if (isQa) {
    return qaConfig;
  } else if (isProd) {
    return prodConfig;
  }
};

export default useConfig;
