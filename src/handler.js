import { parse } from 'node:url'

const allroutes = {
    'heroes:get': (request, response) => {
        response.write('GET')
        response.end()
    },
    // 404 routes
    default: (request, response) => {
        response.write('Hello')
        response.end
    }
}
function handler (request, response) {
    const {
        url,
        method
    } = request

    const {
        pathname
    } = parse(url, true)

    const key = `${pathname}:${method.toLowerCase()}`
    const chosen = allroutes
    response.end('Hello World')
}

export default handler
