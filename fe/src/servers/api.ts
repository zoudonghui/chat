import request from 'umi-request'

export const httpRequest = async p => {
    let headers = {}
    const errorHandler = error => {
        const { response = {}, data = {} } = error
        const { status = 500 } = response
        if (status === 200) {
            return {data}
        } else {
            return {
                errorCode: 1,
                msg: 'unknown error'
            }
        }
    }
    headers = {
        ...p.headers,
    }
    if (p.method !== 'get') {
        return request(p.url, {
            method: p.method,
            data: p.data,
            headers,
            errorHandler,
        })
    }
    return request(p.url, { method: 'get', params: p.data, headers, errorHandler })
}