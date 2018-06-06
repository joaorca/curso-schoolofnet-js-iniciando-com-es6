# Curso de ES6

## Iniciando cada projeto
```bash
npm init
mkdir js
mkdir src
touch src/app.js
```

## Configurando o Babel em cada projeto
```bash
npm install babel-cli babel-preset-es2015 --save-dev
echo '{ "presets": ["es2015"] }' > .babelrc
```

```json
"scripts": {
    "babel": "babel src --out-file js/main.js -w"
  },
```

## Executando cada projeto
```bash
npm run babel
node js/main.js
```