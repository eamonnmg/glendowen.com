import VueLazyLoad from 'vue-lazyload';
require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData // site metadata
                }) => {

    Vue.use(VueLazyLoad);
}
