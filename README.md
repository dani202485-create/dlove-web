# D`LOVE — web oficial

Tienda editorial premium construida con **Next.js, React, TypeScript y Tailwind CSS**.

## Requisitos en Windows

Necesitas lo siguiente antes de empezar:

- Windows 10 u 11.
- Conexión a Internet para descargar las dependencias la primera vez.
- [Node.js LTS](https://nodejs.org/) 18.17 o posterior. Recomendamos Node.js 20 LTS.
- El proyecto descargado y descomprimido en una carpeta local.

No necesitas instalar React, Next.js ni Tailwind de forma global: `npm install` se encarga de instalarlos dentro del proyecto.

## Opción rápida: archivos preparados para Windows

1. Instala Node.js LTS desde [nodejs.org](https://nodejs.org/). En el instalador, conserva las opciones predeterminadas.
2. Reinicia cualquier terminal que estuviera abierta después de instalar Node.js.
3. Abre la carpeta del proyecto en el Explorador de archivos.
4. Haz doble clic en **`INSTALAR.bat`**. El archivo comprobará Node.js y ejecutará `npm install`.
5. Cuando aparezca el mensaje `[OK] D'LOVE esta listo`, cierra esa ventana.
6. Haz doble clic en **`INICIAR.bat`**. El navegador se abrirá automáticamente en `http://localhost:3000`.
7. Mantén abierta la ventana del servidor mientras trabajas. Para detenerlo, pulsa `Ctrl + C` y confirma con `S` si Windows lo solicita.

## Opción manual: paso a paso con PowerShell

### 1. Abrir una terminal

Puedes utilizar cualquiera de estas formas:

- Pulsa la tecla **Windows**, escribe **PowerShell** y selecciona **Windows PowerShell**.
- O abre la carpeta del proyecto en el Explorador, haz clic en la barra de dirección, escribe `powershell` y pulsa **Enter**. Esta segunda opción abre la terminal directamente en la carpeta correcta.

### 2. Entrar en la carpeta del proyecto

Si abriste PowerShell desde el menú Inicio, usa `cd` con la ruta donde descomprimiste el proyecto. Por ejemplo:

```powershell
cd "$HOME\Downloads\dlove-web"
```

Si la ruta contiene espacios, es importante mantener las comillas. Comprueba que estás en la carpeta correcta:

```powershell
Get-ChildItem
```

Deberías ver `package.json`, `README.md`, las carpetas `app` y `components`, y los archivos `INSTALAR.bat` e `INICIAR.bat`.

### 3. Comprobar Node.js y npm

```powershell
node --version
npm --version
```

La primera orden debe mostrar `v18.17.0` o una versión superior. Si PowerShell indica que `node` no se reconoce, instala [Node.js LTS](https://nodejs.org/) y abre una terminal nueva.

### 4. Instalar las dependencias

Ejecuta esta orden desde la raíz del proyecto:

```powershell
npm install
```

Solo es necesario repetirla cuando cambie `package.json`. Al terminar aparecerá una carpeta `node_modules`; no debes editarla ni copiarla a otro ordenador.

### 5. Iniciar el servidor de desarrollo

```powershell
npm run dev
```

Espera hasta que la terminal muestre `Ready` y una dirección local parecida a `http://localhost:3000`.

### 6. Abrir la web

Abre Chrome, Edge o Firefox y escribe en la barra de direcciones:

```text
http://localhost:3000
```

Mientras `npm run dev` esté activo, los cambios que guardes en el código se reflejarán automáticamente en el navegador.

### 7. Detener y volver a iniciar

- Para detener el servidor, vuelve a PowerShell y pulsa `Ctrl + C`.
- Para iniciarlo otro día, abre una terminal en esta carpeta y ejecuta otra vez `npm run dev`. No hace falta repetir `npm install`.

## Comprobar la versión de producción

Cuando quieras validar la aplicación como se ejecutaría al publicarla:

```powershell
npm run typecheck
npm run build
npm start
```

Después abre `http://localhost:3000`. Detén el servidor con `Ctrl + C`.

## Solución de problemas frecuentes

### `node` o `npm` no se reconoce

Node.js no está instalado o la terminal se abrió antes de instalarlo. Instala Node.js LTS, cierra todas las terminales y abre PowerShell de nuevo.

### El puerto 3000 está ocupado

Inicia el proyecto en otro puerto:

```powershell
npm run dev -- -p 3001
```

Luego abre `http://localhost:3001`.

### Error de permisos en PowerShell

No hace falta cambiar la política de ejecución de Windows. Usa directamente los archivos `.bat` incluidos o ejecuta `npm.cmd install` y `npm.cmd run dev`.

### Error de red, proxy o registro al ejecutar `npm install`

Comprueba que puedes abrir `https://registry.npmjs.org/` en el navegador. En una red empresarial, consulta al administrador sobre la configuración del proxy. En una red personal que tenga una configuración antigua, puedes restaurar el registro oficial con:

```powershell
npm config set registry https://registry.npmjs.org/
npm cache verify
npm install
```

### La página no se abre

Comprueba que la terminal del servidor sigue abierta y que muestra `Ready`. Usa exactamente `http://localhost:3000` y no cierres la terminal mientras navegas por la web.

## Descargar el proyecto completo desde GitHub

El repositorio contiene todos los archivos necesarios. No necesitas copiar fragmentos de código de este documento.

### Método 1: descargar un archivo ZIP

1. Abre la página del repositorio en GitHub.
2. Comprueba que estás en la rama que contiene la versión más reciente (normalmente `main`).
3. Pulsa el botón verde **Code**.
4. Selecciona **Download ZIP**.
5. Cuando termine la descarga, abre la carpeta `Descargas` de Windows.
6. Haz clic derecho sobre el archivo ZIP y selecciona **Extraer todo**.
7. Entra en la carpeta extraída. Debes ver `package.json`, `app`, `components`, `INSTALAR.bat` e `INICIAR.bat`.
8. Sigue la opción rápida de instalación descrita al principio de este documento.

> GitHub no incluye la carpeta `node_modules` en el ZIP. Es correcto: `INSTALAR.bat` o `npm install` la crearán en tu ordenador.

### Método 2: clonar con Git

Este método resulta más cómodo si vas a actualizar el código con frecuencia:

1. Instala [Git para Windows](https://git-scm.com/download/win).
2. En GitHub, pulsa **Code**, selecciona **HTTPS** y copia la dirección del repositorio.
3. Abre PowerShell en la carpeta donde quieras guardar el proyecto.
4. Ejecuta, reemplazando la URL por la que copiaste:

```powershell
git clone https://github.com/USUARIO/dlove-web.git
cd dlove-web
npm install
npm run dev
```

Para descargar cambios publicados posteriormente:

```powershell
git pull
npm install
```

## Estructura del proyecto

```text
dlove-web/
├── app/                  # Páginas, layout, estilos, SEO y rutas de Next.js
│   ├── coleccion/        # Catálogo de productos
│   ├── contacto/         # Página de contacto
│   ├── historia/         # Historia de la marca
│   ├── producto/[slug]/  # Página dinámica de producto
│   └── salud-mental/     # Compromiso de D`LOVE
├── components/           # Cabecera, footer, carrito y tarjetas de producto
├── lib/                  # Datos de catálogo y utilidades
├── INICIAR.bat           # Inicia el proyecto en Windows
├── INSTALAR.bat          # Instala las dependencias en Windows
├── next.config.mjs       # Configuración de Next.js
├── package.json          # Dependencias y comandos
├── tailwind.config.ts    # Sistema visual de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```
