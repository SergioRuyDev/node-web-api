import { parse } from 'node:url'
import { DEFAULT_HEADER } from '/src/util/util.js'

const allroutes = {
    '/heroes:get': async (request, response) => {
        throw new Error('tessst')
        response.write('GET')
        response.end()
    },
    // 404 routes
    default: (request, response) => {
        response.write('ooops, not found!')
        response.writeHead(404, DEFAULT_HEADER)
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

    return Promise.resolve(chosen(request, response))
        .catch(handlerError(response))
}

function handlerError(response) {
    return error => {
        console.log('Something bad has happened', error.stack)
        response.writeHead(500, DEFAULT_HEADER)
        response.write(JSON.stringify({
            error: 'Internal server error!'
        }))

        return response.end
    }
}

export default handler
