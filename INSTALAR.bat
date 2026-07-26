@echo off
setlocal
cd /d "%~dp0"

echo.
echo ========================================
echo   D'LOVE - Instalacion para Windows
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js no esta instalado.
  echo Descarga la version LTS desde https://nodejs.org/
  echo Despues, cierra esta ventana, abre una nueva y vuelve a intentarlo.
  echo.
  pause
  exit /b 1
)

echo Version de Node.js:
node --version
echo Version de npm:
call npm --version
echo.
echo Instalando dependencias. Esto puede tardar unos minutos...
call npm install

if errorlevel 1 (
  echo.
  echo [ERROR] No se pudieron instalar las dependencias.
  echo Comprueba tu conexion a Internet y revisa README.md.
  pause
  exit /b 1
)

echo.
echo [OK] D'LOVE esta listo.
echo Ahora ejecuta INICIAR.bat.
pause
