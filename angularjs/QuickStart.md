https://angular.io/docs/ts/latest/quickstart.html 

사이트 보고 따라 했는데 npm start 에서 에러 

```
Error:(7, 20) TS2304: Cannot find name 'Promise'.
Error:(7, 42) TS2304: Cannot find name 'Promise'.
```

사이트 찾아보니 

> npm install --save-dev @types/core-js

오 된다.... 
