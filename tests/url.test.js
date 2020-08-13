const url_parser = require("../url_parser")

describe("URL PARSER", ()=>{
    const ok = [
        ['/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10',{ sort: 'desc', limit: '10', version: '6', collection: 'listings', id: '3'}],
        ['/:version/api/:collection/:id', '/6/api/listings/3',{ version: '6', collection: 'listings', id: '3'}],
        ['/aaaa/:version/:collection/:id', '/aaaa/6/listings/3',{ version: '6', collection: 'listings', id: '3'}],
        ['/a/b/c/d', '/a/b/c/d',{}],
        
    ];

    describe.each(ok)('url_parser(%s, %s)', (pattern, url, expected) => {
        test("parser", ()=> { expect(url_parser(pattern,url)).toMatchObject(expected) })
    })
})