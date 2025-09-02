![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Cucumber](https://img.shields.io/badge/cucumber-v11.3.0-blue)
![Versión](https://img.shields.io/badge/version-Septiembre_2025-yellowgreen)

# 🥒 Cucumber – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos y ejemplos utilizados en los vídeos del canal [TheQAHub](https://www.youtube.com/@theqahub_es) sobre **Cucumber** con **WebdriverIO**, una combinación poderosa para pruebas automatizadas BDD en aplicaciones web.

---

## 📁 Estructura del Proyecto

```bash
/api-server/
├── data/
│   └── inventory.json
├── package.json
├── package-lock.json
└── server.js

/features/
├── login.feature
├── inventory.feature
└── hooks.feature

/hooks.steps.js
/inventory.steps.js
/login.steps.js
/support/
└── hooks.js
/utils/
└── apiHelper.js

/wdio.conf.js
/package.json
/package-lock.json
```

---

## 📌 Contenido de los Ejemplos

### 📂 `login.feature` – **Pruebas de inicio de sesión**
Escenarios que validan:
- Login exitoso.
- Campos vacíos (username/password).
- Usuario bloqueado.

Definiciones en `login.steps.js`.

---

### 📂 `inventory.feature` – **Validación de la pantalla de inventario**
Escenarios que verifican:
- Acceso correcto al dashboard tras login.
- Renderizado de los elementos esperados.

Definiciones en `inventory.steps.js`.

---

### 📂 `hooks.feature` – **Uso de Hooks en Cucumber**
Escenarios que muestran cómo inicializar y limpiar estado en pruebas.

Definiciones en `hooks.steps.js` y `support/hooks.js`.

---

### 📂 `api-server` – **Mock API para pruebas**
Servidor Express con un endpoint `/inventory` para simular datos de inventario en pruebas de API.

---

## 🧪 Requisitos

- Tener **Node.js** instalado.
- WebdriverIO, Cucumber y dependencias configuradas.

Instalación:

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
- Integrar pruebas de UI y API en un mismo proyecto.
- Escribir escenarios comprensibles y mantenibles.

---

## 📚 Licencia

MIT – Libre para usar, compartir y mejorar.  
Si reutilizas este contenido, menciona o enlaza a TheQAHub como fuente.

---

## 💬 Autor

Creado por Diego – [TheQAHub](https://www.theqahub.es/)  
Encuéntrame en Instagram, YouTube y más, compartiendo contenido sobre Testing y QA.  
