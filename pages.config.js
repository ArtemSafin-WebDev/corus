import home from "./pages-data/home";
import services from "./pages-data/services";
import serviceDetail from "./pages-data/service-detail";
import catalog from "./pages-data/catalog";
import mediaCenter from "./pages-data/media-center";
import experienceDetail from "./pages-data/experience-detail";
import pressRelease from "./pages-data/press-release";
import article from "./pages-data/article";
import platforms from "./pages-data/platforms";
import platform from "./pages-data/platform";
import clients from "./pages-data/clients";

const pagesConfig = {
  ...home,
  ...services,
  ...serviceDetail,
  ...catalog,
  ...mediaCenter,
  ...experienceDetail,
  ...pressRelease,
  ...article,
  ...platforms,
  ...platform,
  ...clients,
};

export default pagesConfig;
