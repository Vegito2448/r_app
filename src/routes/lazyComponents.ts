
const lazyPage1 = (() => import("../lazyLoad/pages/lazyPage1"));
const lazyPage2 = (() => import("../lazyLoad/pages/lazyPage2"));
const lazyPage3 = (() => import("../lazyLoad/pages/lazyPage3"));

export { lazyPage1, lazyPage2, lazyPage3 };

