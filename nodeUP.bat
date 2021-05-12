@echo off
cd C:\superHeros\SuperHero


:main
 node index.js
 call :handler
 
 :handler
 if %errorlevel% == 0 (
    echo Success.
) else (
    echo FAILURE.
	 call :main
	
)