const express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');
;

app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());
app.use(cookieSession({ secret: "I'm a secret" }));


    app.get('/', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/index.html`);

    peticion.session.visitas || (peticion.session.visitas = 0);
    let n = peticion.session.visitas++;
    console.log(`Visita # ${n}`);
})
app.get('/experiencia.html', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/experiencia.html`);
})
app.get('/educacion.html', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/educacion.html`);
})
app.get('/aptitudes.html', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
})
app.get('/hobbies.html', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/hobbies.html`);
})
app.listen(8080);
console.log('Conecto')