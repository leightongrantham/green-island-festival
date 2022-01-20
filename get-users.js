const request = require('request');
const { environment } = require("./src/environments/environment");

const options = {
    method: 'GET',
    url: 'https://api.flotiq.com/api/v1/content/user',
    qs: {
        page: '1',
        limit: '20',
        order_by: 'internal.createdAt',
        order_direction: 'asc',
        hydrate: '0',
        filters: '{}',
        'ids[]': 'SOME_ARRAY_VALUE'
    },
    headers: {'X-AUTH-TOKEN': environment.flotiqApiKey }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});