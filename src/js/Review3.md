## Итог

- класс Api реализован согласно поставленной задаче 
- информация о пользователе  (имя, подпись и аватар) подгружаются с сервера (GET запрос)
- имя и о себе можно отредактировать (отправляется PATCH запрос, новые данные)
- карточки подгружаются с сервера (GET запрос)
- обязательный функционал работает без багов
- корректная работа с асинхронным кодом
- DOM изменяется только после того, как запрос успешно выполнен
- ошибки сервера обрабатываются

Работа принята, не забывайте оставлять отзывы о спринте.

## Можно лучше

Большое количество параметров лучше передвать в метод или в конструктор через деструктуризацию.

Например в коде:
~~~
const newClass = new Class({ windowOne, userForm, popupObj })
~~~
А внутри класса:
~~~
constructor ({ userForm, popupObj, windowOne }) {...}
~~~
И тогда порядок переменных будет неважен, это удобно
