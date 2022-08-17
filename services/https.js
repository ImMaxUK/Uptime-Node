import ping from 'node-http-ping'

export function http(url) {
    return ping(url)
        .then(time => {
            return {
                latency: time,
                status: 'success'
            }
        })
        .catch(() => {
            return {
                status: 'error'
            }
        })

}