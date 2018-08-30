import Sockette from 'sockette';


// const sock = new SockJS('ws://api.parops.io/wsapi/v1');
// ws://localhost:8081/echo/websocket

// TODO:: consider when this gets init
let ws: any;
export const openWebsocket = () => {
    ws = new Sockette("wss://echo.websocket.org", {
        timeout: 5e3,
        maxAttempts: 10, // the max # of attemps to reconnect. use -1 to disable
        onopen: (event: any) => onOpen(event),
        onclose: (event: any) => onClose(event),
        onmessage: (event: any) => onMessage(event),
        onreconnect: (event: any) => onReconnect(event),
        onmaximum: (event: any) => onMaximum(event)
    })
}

const onOpen = (event: any) => {
    console.log('parawidget websocket connected', event)
}

const onClose = (event: any) => {
    console.log('parawidget websocket closed', event)
}

const onMessage = (event: any) => {
    console.log('received new message', event);
}

const onReconnect = (event: any) => {
    console.log('reestablishing parawidget websocket connection....', event)
}

const onMaximum = (event: any) => {
    console.log('parawidget maximum number of ws reconnect attempts reached', event)
}

export const closeTickerFeed = () => {
    ws.close(); // graceful shutdown
}

export const subscribeToParadexTickerFeed = () => {
    ws.json('sup dawg');
}