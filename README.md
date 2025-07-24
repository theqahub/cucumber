![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Cucumber](https://img.shields.io/badge/cucumber-v11.3.0-blue)
![Versión](https://img.shields.io/badge/version-Julio_2025-yellowgreen)
![WebdriverIO](https://img.shields.io/badge/webdriverio-v9.15.0-red)
![Express](https://img.shields.io/badge/express-v5.1.0-lightgrey)

# 🥒 Cucumber – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos y ejemplos utilizados en los vídeos del canal [TheQAHub](https://www.youtube.com/@theqahub_es) sobre **Cucumber** con **WebdriverIO**, una combinación poderosa para pruebas automatizadas BDD en aplicaciones web.

---

## 📁 Estructura del Proyecto

```bash
/features/
├── login.feature
├── inventory.feature
└── step-definitions/
    ├── login.steps.js
    └── inventory.steps.js

/api-server/
└── server.js

/wdio.conf.js
/package.json
```

---

## 📌 Contenido de los Ejemplos

### 📂 `login.feature` – **Pruebas de inicio de sesión**

Escenarios que validan:
- Login exitoso.
- Campos vacíos (username/password).
- Usuario bloqueado.

Los mensajes de error se validan mediante los steps definidos en `login.steps.js`.

### 📂 `inventory.feature` – **Validación de la pantalla de inventario**

Escenarios que verifican:
- Que el usuario acceda correctamente al dashboard tras hacer login.
- Que se rendericen los elementos esperados.
- Validación de datos consumidos desde una API mock creada con Express.

---

## 🧪 Requisitos

- Tener **Node.js** instalado.
- WebdriverIO, Cucumber y sus dependencias configuradas.
- API mock habilitada con **Express** y soporte para CORS y peticiones HTTP con **Axios**.

Instalación de dependencias:

```bash
npm install
```

---

## 🚀 Cómo ejecutar los tests

Ejecutar la API mock + tests de forma paralela:

```bash
npm run dev
```

También puedes ejecutarlos por separado:

- Solo API:

  ```bash
  npm run start:api
  ```

- Solo tests:

  ```bash
  npm run test
  ```

---

## 📦 Dependencias destacadas

- `@wdio/cli` v9.15.0
- `@wdio/cucumber-framework` v9.15.0
- `@cucumber/cucumber` v11.3.0
- `express` v5.1.0
- `axios` v1.10.0
- `cors` v2.8.5
- `concurrently` v9.2.0

---

## 🎬 Videos del Curso

Cada archivo `.feature` está vinculado a un video del canal [TheQAHub](https://www.youtube.com/@theqahub_es), donde explicamos cómo escribir escenarios BDD y conectar definiciones de pasos con WebdriverIO.

Suscríbete y activa la campanita 🔔 para no perderte nuevas lecciones.

---

## 🎯 Objetivo del Curso

- Aprender Cucumber desde cero.
- Entender el enfoque BDD (Behavior Driven Development).
- Automatizar pruebas de interfaz usando WebdriverIO.
- Integrar validaciones de UI con consumo de datos vía API.
- Escribir escenarios comprensibles y mantenibles.

---

## 📚 Licencia

MIT – Libre para usar, compartir y mejorar. Si reutilizas este contenido, menciona o enlaza a TheQAHub como fuente.

---

## 💬 Autor

Creado por Diego – [TheQAHub](https://www.theqahub.es/)  
Encuéntrame en Instagram, YouTube y más, compartiendo contenido sobre Testing y QA.
