import test from 'node:test'
import assert from 'node:assert'

import {
    routes
} from 'src/routes/heroRoute.js'
import { DEFAULT_HEADER } from '../../src/util/util.js'

test('Hero routes - endpoints test suite', async (t) => {
    await t.test('it should call /heroes:get route', async () => {
        const stubResult = [{
            "id": "133a8f7a-e7eb-11ec-8fea-0242ac120002",
            "name": "Batman",
            "age": 50,
            "power": "rich"
        }]

        const heroServiceMock = {
            find: async () => stubResult
        }

        const endpoints = routes({
            heroService: heroServiceMock
        })

        const endpoint = '/heroes:get'
        const request = {}
        const response = {}
        await endpoints()
    })
    await t.todo('it should call /heroes:post route')
})
