import { parse } from 'node:url'

const allroutes = {
    '/heroes:get': (request, response) => {
        response.write('GET')
        response.end()
    },
    // 404 routes
    default: (request, response) => {
        response.write('ooops, not found!')
        response.writeHead(404)
        response.end()
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
    const chosen = allroutes[key] || allroutes.default
    return chosen(request, response)
}

export default handler
