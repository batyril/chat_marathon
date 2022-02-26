
import {getCookie} from "./cookie.js ";


export function setEmail(email){
    const url = 'https://chat1-341409.oa.r.appspot.com/api/user'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(email)
    })
        .then(response => console.log(response.json()))
        .catch(()=> alert('ошибка') )
    }


export function setName(name){
    const url = 'https://chat1-341409.oa.r.appspot.com/api/user'
    const token = getCookie("token")
    fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(name)
    })
        .then(response => console.log(response.json()))
        .catch(()=> alert('ошибка') )
}

export function getName(){
    const url = 'https://chat1-341409.oa.r.appspot.com/api/user/me'
    const token = getCookie("token")
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => console.log(response.json()))
        .catch(()=> alert('ошибка') )
}

/*
export function setMessage(email){
    const url = 'https://chat1-341409.oa.r.appspot.com/api/messages/'
    const token = getCookie("token")
    fetch(url, {
        method: 'GET',
        headers: {
             Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(email)
    })
        .then(response => console.log(response.json()))
        .catch(()=> alert('ошибка') )
}*/
