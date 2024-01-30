## Запуск проєкту

```
npm install - встановлюємо залежності
npm run start або npm run star:webpack - запуск frontend проєкту
```

----

## Скрипти

- `npm run start` - Запуск frontend прєкта на vite
- `npm run star:webpack` - Запуск frontend проєкта на webpack dev server
- `npm run build:prod` - Сбірка у prod режимі
- `npm run build:dev` - Сбірка і dev режимі (не мінімизировано)
- `npm run lint:ts` - Перевірка ts файлів линтером
- `npm run lint:ts:fix` - Виправлення ts файлів линтером
- `npm run lint:scss` - Перевірка scss файлів style линтером
- `npm run lint:scss:fix` - Виправлення scss файлів style линтером
- `npm run unit` - Запуск unit тестів з jest
- `npm run pret` - Формотування файлів prettier

----

## Архітектура проєкту

Проєкт написано у відповідності до методології Feature sliced design

Посилання на документацію - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Тести

У проєкте неведено приклад використання тестів:
1) Звичайні unit тесты на jest - `npm run test:unit`

----

## Линтинг

У проєкті використовується eslint для перевірки typescript коду та stylelint для перевірки файлів зі стилями.

Для більш гнучкого контролю додані додаткові правила. Eslint має підключення з prettier.

##### Запуск линтеров

- `npm run lint:ts` - Перевірка ts файлів линтером
- `npm run lint:ts:fix` - Виправлення ts файлів линтером
- `npm run lint:scss` - Перевірка scss файлів style линтером
- `npm run lint:scss:fix` - Виправлення scss файлів style линтером

----

## Конфигурація проєкту

Для девелопингу проєкт містить 2 конфіга:
1. Webpack - ./config/build
2. vite - vite.config.ts

Обидва збірщика адаптовано під основні фічи проєкту.

Уся конфігурація зберігається у /config
- /config/babel - babel
- /config/build - webpack
- /config/jest - конфігурация тестовой середи

----

## CI pipeline и pre commit хуки

Конфігурация github actions знаходиться у /.github/workflows.
В ci прогоняються усі типу линтингу, тести, сбірка проєкту.

У прекоммит хуках перевіряємо проєкт линтерами, конфіг в /.husky

----

### Робота с даними

Взаємодія з даними відбувається за допомогою [Redux toolkit](https://redux-toolkit.js.org/)

Запити на сервер відправляються за допомогою [RTK query](https://redux-toolkit.js.org/rtk-query/overview)

----

## Сутності (entities)

- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Profile](/src/entities/Profile)
- [User](/src/entities/User)

## Фічи (features)

- [AuthByUsername](/src/features/AuthByUsername)
- [DragAndDrop](/src/features/DragAndDrop)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [TextEditor](/src/features/TextEditor)

----

### Оптимізація

Для прикладу виконане леніве завантаження модалки

Використано леніве завантаження бібліотеки, наприкладі 'react-toastify'

----
