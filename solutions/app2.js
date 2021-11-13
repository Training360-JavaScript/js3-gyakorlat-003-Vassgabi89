    const cookieHandler = {
        getAll() {
            const cookieObj = {}
            const cookie = document.cookie.split('; ')
            for (let i = 0; i < cookie.length; i++) {
                let cookiePair = cookie[i].split('=')
                cookieObj[cookiePair[0]]=cookiePair[1]
                }
        return cookieObj
        },
        toSessionStorage() {
            const Obj = cookieHandler.getAll()
            for (const key in Obj) {
                sessionStorage.setItem(key, Obj[key]);
            }
        },
        flush() {
            const cookie = document.cookie.split('; ')
            for (let i = 0; i < cookie.length; i++) {
                let cookiePair = cookie[i].split('=')
                document.cookie=`${cookiePair[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
                }
        }
    }

export { cookieHandler };
