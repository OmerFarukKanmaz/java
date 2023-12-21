import axios from "axios"


const apiClient= axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean')
}

export const retrieveHelloWorldBeanPathVariable = (name) => apiClient.get(`/hello-world/path-variable/${name}`)

// export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean')f