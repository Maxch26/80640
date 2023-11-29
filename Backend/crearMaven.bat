@echo off
if "%~1"=="" (
  echo Debes indicar el nombre para el paquete y el nombre del proyecto a crear
  echo Ejemplo: crear-maven mx.uv practicaXX
  exit /b
) else (
  setlocal enabledelayedexpansion
  mvn archetype:generate ^
    -DgroupId=%1% ^
    -DartifactId=%2% ^
    -DarchetypeArtifactId=maven-archetype-quickstart ^
    -DarchetypeVersion=1.4 ^
    -DinteractiveMode=false
  endlocal
)