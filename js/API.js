
import {getCookie} from "./cookie.js";

import {getTemplateFriend} from "./template.js";
import {getTemplateMe} from "./template.js";

//TODO: Написать обьект для url

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


export function getMessageAPI(){
    const url = 'https://chat1-341409.oa.r.appspot.com/api/messages/';
    const token = getCookie("token");
    
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
        .then(response => response.json())
        .then( e => e.messages[e.messages.length-133])
        .then( e => getTemplateFriend(e.text,e.createdAt,e.user.name))
        .catch(()=> alert('ошибка') )
}
