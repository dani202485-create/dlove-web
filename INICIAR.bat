@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules" (
  echo [ERROR] Faltan las dependencias.
  echo Ejecuta primero INSTALAR.bat.
  pause
  exit /b 1
)

echo.
echo Iniciando D'LOVE en http://localhost:3000
echo Para detener el servidor, pulsa Ctrl+C.
echo.

start "" cmd /c "timeout /t 3 /nobreak ^>nul & start http://localhost:3000"
call npm run dev
