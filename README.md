# Пробный урок по React

Для запуска проекта выполни следующие шаги:

*   `git clone git@github.com:Lectrum/react-trial-lesson.git`
*   `cd react-trial-lesson`
*   `yarn` или `npm i`
*   `yarn start` или `npm start`

#### Чтобы задеплоить приложение на github pages:

*   Запуши репозиторий с приложением на github
*   В файле `package.json`, в скрипте `build:prod-github` — укажи значение переменной окружения `REPOSITORY_NAME` в виде имени своего репозитория на github
*   Затем — `yarn deploy` или `npm run deploy`

> Пример скрипта с именем твоего репозитория:

```json
"build:prod-github": "cross-env-shell NODE_ENV=production BUILD_ENV=production REPOSITORY_NAME=`имя-твоего-репозитория` npm run build:config
```

###### Заметка: после деплоя, приложение будет доступно по адресу:

> `https://имя-твоего-пользователя-гитхаб.github.io/имя-твоего-репозитория-с-приложением`

#### Чтобы сбилдить приложение без github pages:

*   `yarn build:prod` или `npm run build:prod`
