import axios from 'axios'

export function Request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/v1',
        timeout: 3000
    })

    return instance(config)
}