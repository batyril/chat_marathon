import {UI_ELEMENTS} from "./UI.js";

import {getCookie} from "./cookie.js";
import {setCookie} from "./cookie.js";
import {deleteCookie} from "./cookie.js";

import {setEmail} from "./API.js";
import {setName} from "./API.js";
import {getName} from "./API.js";
import {getMessageAPI} from "./API.js";

import {getTemplateFriend} from "./template.js";
import {getTemplateMe} from "./template.js";

UI_ELEMENTS.MESSAGE_FORM.addEventListener('submit',getMessage);

//TODO: сделать проверку на пустные сообщения
function getMessage(){
    event.preventDefault();
    const messageText = UI_ELEMENTS.MESSAGE_FORM_TEXT.value;
    UI_ELEMENTS.MESSAGE_FORM.reset();
    getTemplateMe(messageText);
    getMessageAPI();
}


if(!getCookie("token")){
    openPopup('AUTHORIZATION');
}

function closePopup(namePopup){
    switch (namePopup) {
        case 'AUTHORIZATION':
            UI_ELEMENTS.POPUP_AUTHORIZATION.style.opacity="0";
            UI_ELEMENTS.POPUP_AUTHORIZATION.style.visibility="hidden";
            break;
        case 'VALIDATION':
            UI_ELEMENTS.POPUP_VALIDATION.style.opacity="0";
            UI_ELEMENTS.POPUP_VALIDATION.style.visibility="hidden";
            break;
    }
}

function openPopup(namePopup){
    switch (namePopup) {
        case 'AUTHORIZATION':
            UI_ELEMENTS.POPUP_AUTHORIZATION.style.opacity="1";
            UI_ELEMENTS.POPUP_AUTHORIZATION.style.visibility="visible";
            break;
        case 'VALIDATION':
            UI_ELEMENTS.POPUP_VALIDATION.style.opacity="1";
            UI_ELEMENTS.POPUP_VALIDATION.style.visibility="visible";
            break;
    }
}

UI_ELEMENTS.CLOSE_AUTHORIZATION.addEventListener('click',function (){
    closePopup('AUTHORIZATION')
})



UI_ELEMENTS.BUTTON_AUTHORIZATION.addEventListener('click',function (){

    const input_email = UI_ELEMENTS.INPUT_AUTHORIZATION.value;
    closePopup('AUTHORIZATION');
    openPopup('VALIDATION')
    
    const email = {
        email: `${input_email}`
    }

    setEmail(email)
    
})

UI_ELEMENTS.CLOSE_VALIDATION.addEventListener('click',function (){
    closePopup('VALIDATION');
})

UI_ELEMENTS.BUTTON_VALIDATION.addEventListener('click', function (){
    const input_validation_text =  UI_ELEMENTS.INPUT_VALIDATION.value;
    setCookie( "token", input_validation_text);

    closePopup('VALIDATION');
})


UI_ELEMENTS.BUTTON_SETTINGS.addEventListener('click', function (){
    const input_name = UI_ELEMENTS.INPUT_SETTINGS.value;
   
    const name = {
        name: `${input_name}`
    }
    /*setName(name);*/
   getName()
})

UI_ELEMENTS.MESSAGE_SEND_BUTTON.addEventListener('click',function (){

})