'use strict';

const routeHandlerGenerator = paths => {
    const
        [common_api_path, ...other_api_path] = paths,
        common_api = require(common_api_path);
    let other_api = [];
    for(const path of other_api_path) {
        other_api = [...other_api, ...require(path)];
    }

    const rootURL = common_api.rootURL;

    return method => {
        switch(method) {
            case 'GET':
                return async (ctx, next) => {

                };
            case 'POST':
                return async (ctx, next) => {

                };
        }
    }
}