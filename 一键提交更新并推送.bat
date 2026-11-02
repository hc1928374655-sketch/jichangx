@echo off
chcp 65001 >nul
title 自动提交并推送到 GitHub
echo ========================================================
echo    正在检测本地修改并自动推送到 GitHub 远程仓库...
echo ========================================================
echo.

"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "update: auto commit %date% %time%"
"C:\Program Files\Git\cmd\git.exe" push origin main

echo.
echo ========================================================
echo [√] 推送完成！Cloudflare Pages 将在数十秒内自动同步最新内容。
echo ========================================================
pause
