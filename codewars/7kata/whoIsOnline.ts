type User = {
    username: string,
    status: string,
    lastActivity: number
}

type WhoIsOnlineOutput = {
    [key in string]: string[]
}

const whoIsOnline = (friends: User[]) => {
    return Object.fromEntries(Object.entries(friends.reduce((result: WhoIsOnlineOutput, current: User) => {
        if(current.status === 'offline') {
            result['offline'].push(current.username)
            return result
        }

        if(current.status === 'online' && current.lastActivity >= 10) {
            result['away'].push(current.username)
            return result
        } else if(current.status === 'online') {
            result['online'].push(current.username)
        }

        return result

    }, {
        'online': [],
        'offline': [],
        'away': []
    } as WhoIsOnlineOutput)).filter(([key, value]) => value.length))
}

const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 9
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 9
}]

console.log('911 | 🚑', whoIsOnline(friends))
