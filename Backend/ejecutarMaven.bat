@echo off
if "%~1"=="" (
  echo Debes indicar el nombre del paquete y el nombre de la clase a ejecutar.
  echo ejemplo: ejecuta-maven mx.uv.App
) else (
  mvn exec:java -Dexec.mainClass=%1
)