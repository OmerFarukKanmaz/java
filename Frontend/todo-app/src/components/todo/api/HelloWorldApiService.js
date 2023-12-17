import axios from "axios"

export function retrieveHelloWorldBean(){
    return axios.get('http://localhost:8080/hello-world-bean')

}

export const retrieveHelloWorldBeanPathVariable = (name) => axios.get(`localhost:8080/hello-world/path-variable/${name}`)


// export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean')