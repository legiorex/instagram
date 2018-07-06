# Пробный урок по React

<img src="./static/logos/react.png" alt="react-logo" width="190px" height="200pxt">

### Для запуска проекта выполни следующие шаги:

1.  [Скачай и установи](https://nodejs.org/en/) последнюю LTS-версию Node.js.
2.  Выполни в консоли `node -v` — убедись, что установлена последняя версия Node.js не старее `v8.11.3`.
3.  Введи в консоли `npm -v` — убедись, что установлена последняя версия npm не старее `6.1.0`.
4.  [Скачай и установи Git](https://github.com/Lectrum/react-trial-lesson), если его нет на компьютере.
5.  Введи `git --version` — проверь версию установленного Git, должно быть не ниже `2.16.3`.
6.  Склонируй и запусти этот проект: `git clone git@github.com:Lectrum/react-trial-lesson.git`
7.  После клонирования выполни команду `cd react-trial-lesson`
8.  Выполни команду `npm install`.
9.  Самое время выполнить `npm start`.
10. Перейди в браузер и открой страничку [http://localhost:3000](http://localhost:3000/). Когда страничка загрузится, ты увидишь сообщение:
    > «Добро пожаловать на урок по React.».
11. Открой Chrome Dev Tools и перейди на вкладку Console, там не должно быть каких-либо ошибок.

### Чтобы задеплоить приложение на github pages:

-   Запуши репозиторий с приложением на github
-   В файле `package.json`, в скрипте `build:prod-github` — укажи значение переменной окружения `REPOSITORY_NAME` в виде имени своего репозитория на github
-   Затем — `yarn deploy` или `npm run deploy`

> Пример скрипта с именем твоего репозитория:

```json
"build:prod-github": "cross-env-shell NODE_ENV=production BUILD_ENV=production REPOSITORY_NAME=`имя-твоего-репозитория` npm run build:config
```

###### Заметка: после деплоя, приложение будет доступно по адресу:

> `https://имя-твоего-пользователя-гитхаб.github.io/имя-твоего-репозитория-с-приложением`

### Чтобы сбилдить приложение без github pages:

-   `yarn build:prod` или `npm run build:prod`
