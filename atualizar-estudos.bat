@echo off
cd "C:\Users\Leonardo\Desktop\Curso Desenvolvimento Web(Udemy)"

echo ================================
echo Atualizando repositório Git...
echo ================================

git add .
git commit -m "Atualização automática %date% %time%"
git push

IF %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Feito com sucesso!
) ELSE (
    echo.
    echo ❌ Ocorreu um erro ao enviar para o GitHub.
)

echo.
pause