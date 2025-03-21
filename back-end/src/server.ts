import { WebSocketServer } from "ws";

const App = new WebSocketServer({port: 3000, host: "0.0.0.0"})

App.on("connection", (ws) =>
{
    ws.on("message", (msg) =>
    {
        console.log(msg.toString())
        App.clients.forEach
        (
            (client) =>
            {
                if(client.readyState === 1)
                {
                    client.send(msg.toString());
                }
            }
        );
    })
})

App.on("close", () => {})