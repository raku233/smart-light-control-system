const DEFAULT_CONFIG = {
    key: null,
    v: 1.3,
    protocol: window.location.protocol || 'https:',
    hostname: 'webapi.amap.com/maps',
    plugin: [],
    callback: 'mapInitCallback'
};

const lazyLoadMapApi = (config = DEFAULT_CONFIG) => {
    const _config = { ...DEFAULT_CONFIG, ...config };
    const getScriptSrc = cfg => `${cfg.protocol}//${cfg.hostname}?v=${cfg.v}&key=${cfg.key}&callback=${cfg.callback}`;

    if(window.AMap) return Promise.resolve();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = getScriptSrc(_config);

    const scriptLoadingPromise = new Promise((resolve, reject) => {
        window[_config.callback] = () => {
            return resolve();
        };
        script.onerror = error => reject(error);
    });

    document.head.appendChild(script);
    return scriptLoadingPromise;
};

export default lazyLoadMapApi;