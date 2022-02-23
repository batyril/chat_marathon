import {UI_ELEMENTS} from "./UI.js";

import {getCookie} from "./cookie.js ";
import {setCookie} from "./cookie.js ";
import {deleteCookie} from "./cookie.js";

import {setEmail} from "./API.js";
import {setName} from "./API.js";
import {getName} from "./API.js";

UI_ELEMENTS.MESSAGE_FORM.addEventListener('submit',getMessage);

function getMessage(){
    event.preventDefault();
    const messageText = UI_ELEMENTS.MESSAGE_FORM_TEXT.value;
    console.log(messageText)
    UI_ELEMENTS.MESSAGE_FORM.reset();

    getTemplate(messageText)


}

function getTemplate(valueText){
     // Клонируем содержимое тега <template>
    const item = UI_ELEMENTS.TEMPLATE.content.cloneNode(true);

    // Находим тег и помещаем текст внутрь
    item.querySelector('.message-text').textContent = valueText;

    // Вставляем склонированный контент на страницу
    UI_ELEMENTS.CHAT.prepend(item);
}
//TODO: поменять название функции
function sayHi() {
    UI_ELEMENTS.POPUP_AUTHORIZATION.style.opacity="1";
    UI_ELEMENTS.POPUP_AUTHORIZATION.style.visibility="visible";
}

//TODO: Доделать запуск  по кукам
setTimeout(sayHi, 1000);

//TODO: Скрыть закрытые формы в отдельную функцию
UI_ELEMENTS.CLOSE_AUTHORIZATION.addEventListener('click',function (){
    UI_ELEMENTS.POPUP_AUTHORIZATION.style.opacity="0";
    UI_ELEMENTS.POPUP_AUTHORIZATION.style.visibility="hidden";
})

//TODO: чтоб название почта бралась из формы
//TODO: Скрыть закрытые формы в отдельную функцию
UI_ELEMENTS.BUTTON_AUTHORIZATION.addEventListener('click',function (){
    UI_ELEMENTS.POPUP_AUTHORIZATION.style.opacity="0";
    UI_ELEMENTS.POPUP_AUTHORIZATION.style.visibility="hidden";
    UI_ELEMENTS.POPUP_VALIDATION.style.opacity="1";
    UI_ELEMENTS.POPUP_VALIDATION.style.visibility="visible";

    

    const url = 'https://chat1-341409.oa.r.appspot.com/api/user'
    const email = {
        email: '237x237@gmail.com'
    }

    /*setEmail(email)*/
    
})
//TODO: Скрыть закрытые формы в отдельную функцию вынести в отдельную функцию
UI_ELEMENTS.CLOSE_VALIDATION.addEventListener('click',function (){
    UI_ELEMENTS.POPUP_VALIDATION.style.opacity="0";
    UI_ELEMENTS.POPUP_VALIDATION.style.visibility="hidden";
})
//TODO: Скрыть закрытые формы в отдельную функцию и вынести в отдельную функцию
UI_ELEMENTS.BUTTON_VALIDATION.addEventListener('click', function (){
    const input_validation_text =  UI_ELEMENTS.INPUT_VALIDATION.value;
    setCookie( "token", input_validation_text);
    UI_ELEMENTS.POPUP_VALIDATION.style.opacity="0";
    UI_ELEMENTS.POPUP_VALIDATION.style.visibility="hidden";
})
//TODO: Вынести в отдельную функцию
UI_ELEMENTS.BUTTON_SETTINGS.addEventListener('click', function (){
    const input_name = UI_ELEMENTS.INPUT_SETTINGS.value;
    console.log(input_name);
    const name = {
        name: `${input_name}`
    }
    setName(name);
   /* getName()*/
})