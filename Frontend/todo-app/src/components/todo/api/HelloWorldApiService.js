import axios from "axios"


const apiClient= axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean')
}

// esponse to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//No 'Access-Control-Allow-Origin' header is present on the requested resource.
export const retrieveHelloWorldBeanPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`, {
    headers:{
        Authorization: 'Basic YXNkOmFzZGFzZA=='
    }
})

// export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean')f