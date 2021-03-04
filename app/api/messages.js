import client from "./client"

const getMessages = () => client.get("/messages")

const sendMessage = (messageInfo) => client.post("/messages", messageInfo)

export default {
    getMessages,
    sendMessage,
}
