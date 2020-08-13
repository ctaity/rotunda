const url = require("url");

const REGEX_ROUTE_SPLIT = /[:\w-]+(?=[/\r\n?]|$)/g;
const START_CHARACTER = ':';

const routeMatch = (route) => [...route.matchAll(REGEX_ROUTE_SPLIT)].map(e => e[0]);

function url_parser(spec, route) {
    const route_info =  url.parse(route, true);
    const spec_matches = routeMatch(spec);    
    const url_matches = routeMatch(route_info.path);    
    const route_params = {}

    spec_matches.forEach( (route_part,index) => {
        if(route_part.startsWith(START_CHARACTER)) route_params[route_part.slice(1)] = url_matches[index];
    })

    return {...route_info.query, ...route_params};
}

module.exports = url_parser;