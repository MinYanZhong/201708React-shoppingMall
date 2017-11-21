
const HOST ='Http://localhost:3000';
export function get(url) {
    return fetch(HOST+url,{
        method:'get',
        credentials:"include",
        headers:{
            "Accept":"application/json"
        }
    }).then(res=>res.json());
}

export function post(url,data) {
    return fetch(HOST+url,{
        method:"post",
        credentials:"include",
        headers:{
            "Accept":'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>res.json());
}