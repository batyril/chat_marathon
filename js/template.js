import {UI_ELEMENTS} from "./UI.js";

export function getTemplateMe(meMessage = 'test',meTime='18:45',meName='Friend'){
    // Клонируем содержимое тега <template>
    const item = UI_ELEMENTS.TEMPLATE_ME.content.cloneNode(true);

    // Находим тег и помещаем текст внутрь
    item.querySelector('.me_text').textContent = meMessage;
    item.querySelector('.me_time').textContent = meTime;
    item.querySelector('.me_name').textContent = meName;
    // Вставляем склонированный контент на страницу
    UI_ELEMENTS.CHAT.prepend(item);
}

export function getTemplateFriend(friendMessage = 'test',friendTime='18:45',friendName='Friend'){
    // Клонируем содержимое тега <template>
    const item = UI_ELEMENTS.TEMPLATE_FRIEND.content.cloneNode(true);
    // Находим тег и помещаем текст внутрь
    item.querySelector('.friend_text').textContent = friendMessage;
    item.querySelector('.friend_name').textContent = friendName;
    item.querySelector('.friend_time').textContent = friendTime;
    // Вставляем склонированный контент на страницу
    UI_ELEMENTS.CHAT.prepend(item);
}