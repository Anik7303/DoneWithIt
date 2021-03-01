import client from "./client"

const login = (email, password) => client.post("/login", { email, password })

const register = (name, email, password) =>
    client.post("/register", { name, email, password })

export default { login, register }
