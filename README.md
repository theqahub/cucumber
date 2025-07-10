![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Cucumber](https://img.shields.io/badge/cucumber-v11.3.0-blue)
![Versión](https://img.shields.io/badge/version-Julio_2025-yellowgreen)

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

---

## 🧪 Requisitos

- Tener **Node.js** instalado.
- WebdriverIO, Cucumber y sus dependencias configuradas.

Instalación (si ya no están instaladas):

```bash
npm install
```

---

## 🚀 Cómo ejecutar los tests

Desde la raíz del proyecto:

```bash
npx wdio run wdio.conf.js
```

---

## 🎬 Videos del Curso

Cada archivo `.feature` está vinculado a un video del canal [TheQAHub](https://www.youtube.com/@theqahub_es), donde explicamos cómo escribir escenarios BDD y conectar definiciones de pasos con WebdriverIO.

Suscríbete y activa la campanita 🔔 para no perderte nuevas lecciones.

---

## 🎯 Objetivo del Curso

- Aprender Cucumber desde cero.
- Entender el enfoque BDD (Behavior Driven Development).
- Automatizar pruebas de interfaz usando WebdriverIO.
- Escribir escenarios comprensibles y mantenibles.

---

## 📚 Licencia

MIT – Libre para usar, compartir y mejorar. Si reutilizas este contenido, menciona o enlaza a TheQAHub como fuente.

---

## 💬 Autor

Creado por Diego – [TheQAHub](https://www.theqahub.es/)  
Encuéntrame en Instagram, YouTube y más, compartiendo contenido sobre Testing y QA.