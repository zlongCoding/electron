# novel

> 桌面应用程序

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


```
---
```
src 源代码

├─main                    //server
│  └─server
│      ├─controller
│      ├─crawler
│      ├─database
│      ├─middleware
│      │  └─logger
│      ├─router
│      ├─tasks
│      └─utils
└─renderer             //client
    ├─assets
    ├─components
    │  └─LandingPage
    ├─css
    ├─pages
    ├─router
    └─store
        └─modules
```


