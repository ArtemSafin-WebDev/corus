import home from "./pages-data/home";
import services from "./pages-data/services";
import serviceDetail from "./pages-data/service-detail";
import catalog from "./pages-data/catalog";
import mediaCenter from "./pages-data/media-center";

const pagesConfig = {
  ...home,
  ...services,
  ...serviceDetail,
  ...catalog,
  ...mediaCenter,
};

export default pagesConfig;
