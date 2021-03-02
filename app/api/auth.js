import client from "./client"

const login = (email, password) => client.post("/auth", { email, password })

const register = (name, email, password) =>
    client.post("/user", { name, email, password })

export default { login, register }
