import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'node:url'
import { DEFAULT_HEADER } from './util/util.js'
import { routes } from './routes/heroRoute.js'
import { generateInstance } from './factories/heroFactory.js'

const currentDir = dirname(
    fileURLToPath(
        import.meta.url
    )
)

const filePath = join(currentDir, './../database', 'data.json')

const heroService = generateInstance({
    filepath
})
const heroRoutes = routes({
    heroService: {}
})

const allroutes = {
    ...heroRoutes,
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
