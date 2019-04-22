import Vue2TouchEvents from 'vue2-touch-events'


export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData // site metadata
                }) => {
    Vue.use(Vue2TouchEvents);
}