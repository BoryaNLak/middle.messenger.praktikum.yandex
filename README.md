## Проект "ЧатиК"
На данном этапе реализованы следующие роуты: 
- /
- /sign-up
- /messenger
- /settings
- /*

Роуты /messager и /settings - защищены авторизацией.

Для сборки проекта используйте команду:
```sh
npm run build
```

Для поднятия сервера:
```sh
npm run start
```

Ссылка на **Notlify**
*https://gallant-noether-e603a9.netlify.app/*

Тестирование:
```sh
npm run test
```
Перед началом тестирования измените параметры в tsconfig.json
```sh
"noUnusedLocals": false,
"noUnusedParameters": false,
```
Версия для разработки доступна по адресу
```sh
127.0.0.1:1234
```
