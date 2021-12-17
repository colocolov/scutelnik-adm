# Gulp - сборка Stas Colocolov

> Используется Gulp 4

## Начало работы

Создайте папку и задайте ей название под ваш проект.
Для работы с данной сборкой в новом проекте, склонируйте содержимое репозитория <br>
`git clone <this repo>`
Запустите консоль, находясь в корне проекта и введите команду `npm i`, которая установит все находящиеся в package.json зависимости.

После этого вы можете использовать любую из предложенных ниже команд сборки (итоговые файлы попадают в папку **app** корневой директории): <br>
`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp done` - команда для продакшн-сборки проекта. Файлы сжаты, минифицированны и оптимизированы для выкладки на хостинг.

## Структура папок и файлов

```
├── #src/                         # Исходники
│   ├── js                        # Скрипты
│   │   └── scripts               # Папка для хранения js-компоненты
│   │   ├── main.js               # Главный скрипт
│   │   ├── vendor                # Папка для загрузки локальных версий библиотек
│   ├── sass                      # Стили сайта (препроцессор sass в scss-синтаксисе)
│   │   └── style.sass            # Главный файл стилей
│   │   └── reset.scss            # Файл с глобальными cбросами
│   │   └── settings.scss         # Файл с глобальными настройками проекта
│   │   └── _fonts.scss           # Файл для подключения шрифтов (можно использовать миксин)
│   │   └── _mixins.scss          # Файл, содержащий набор миксинов
│   │   └── _variables.scss       # Файл для написания css- или sass-переменных
│   │   └── _media.scss           # Файл для подключения media-стилей различных брейкпоитов
│   │   ├── components            # sass-компоненты
│   │   │   └── _
│   │   │   └── _
│   │   │   └── _
│   │   ├── media                 # media-файлы
│   │   │   └── _
│   │   │   └── _
│   │   │   └── _
│   │   │   └── _
│   ├── css                       # Папка для хранения локальных css-стилей библиотек
│   ├── html                      # Папка для хранения html-частей страницы
│   ├── imgages                   # Папка для хранения картинок
│   │   ├── bg                    # Папка для хранения фоновых изображений
│   │   ├── icons                 # Специальная папка для преобразования svg в спрайт
│   ├── resources                 # Папка для хранения иных ассетов - php, видео-файлы, favicon и т.д.
│   ├── fonts                     # Папка для хранения шрифтов в формате woff2
│   └── index.html                # Главный html-файл
└── gulpfile.js                   # файл с настройками Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .stylelintrc.json             # файл с настройками stylelint
└── .gitignore                    # Файл с настройками git
└── README.md                     # Документация сборки
```
