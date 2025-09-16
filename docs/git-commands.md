# Comandos Git Esenciales

Este documento explica los comandos Git más utilizados y su funcionamiento.

## `bash`
Es el intérprete de comandos en sistemas Unix/Linux donde se ejecutan los comandos Git.

## `git --version`
Muestra la versión de Git instalada en el sistema.

## `git config --global user.name "Tu Nombre"`
Establece el nombre de usuario que aparecerá en los commits que realices. El `--global` hace que esta configuración se aplique a todos los repositorios en tu sistema.

## `git config --global user.email "tu@email.com"`
Establece el correo electrónico asociado a los commits. También se aplica globalmente a todos los repositorios.

## `git init`
Inicializa un nuevo repositorio Git en el directorio actual. Crea una carpeta `.git` que contiene toda la información necesaria para el control de versiones.

## `git status`
Muestra el estado actual del repositorio: archivos modificados, archivos en el área de preparación y archivos sin seguimiento.

## `git add .`
Añade todos los archivos modificados y nuevos al área de preparación. El punto indica "todos los archivos en el directorio actual".

## `git add archivo.html`
Añade un archivo específico al área de preparación. Se usa cuando solo quieres incluir cambios específicos en el próximo commit.

## `git commit -m "mensaje"`
Crea un nuevo commit con los archivos que están en el área de preparación. El parámetro -m permite añadir un mensaje sobre los cambios realizados.

## `git log`
Muestra el historial de commits del repositorio, incluyendo autor, fecha y mensaje de cada commit.

## `git log --oneline`
Muestra una versión resumida del historial de commits, con una línea por cada commit, mostrando solo el hash abreviado y el mensaje.

## `git clone https://github.com/usuario/repo.git`
Crea una copia local de un repositorio remoto. Descarga todos los archivos y el historial completo del proyecto.

## `git remote -v`
Muestra las URLs de los repositorios remotos configurados para el proyecto actual. El  -v  muestra tanto las URLs paradescarga como para subida.

## `git remote add origin https://github.com/usuario/repo.git`
Añade un repositorio remoto con el nombre "origin" y la URL especificada. Se usa después de git init para conectar un repositorio local con uno remoto.

## `git push origin main`
Envía los commits de la rama local "main" al repositorio remoto "origin". Actualiza el repositorio remoto con tus cambios locales.

## `git pull origin main`
Descarga los cambios del repositorio remoto "origin" en la rama "main" y los integra automáticamente en tu rama local. Combina git fetch y git merge en un solo comando.

## `git branch`
Muestra una lista de todas las ramas locales en el repositorio. La rama actual se marca con un asterisco (*).

## `git branch nueva-rama`
Crea una nueva rama con el nombre especificado, pero no cambia a ella. La nueva rama se crea a partir del commit actual.

## `git checkout main`
Cambia a la rama especificada. Actualiza los archivos en el directorio de trabajo para reflejar el estado de esa rama.

## `git checkout -b nueva-rama`
Crea una nueva rama y cambia a ella inmediatamente. Es un atajo que combina `git branch nueva-rama` y `git checkout nueva-rama`.

## `git merge nombre-rama`
Fusiona los cambios de la rama especificada en la rama actual. Incorpora el historial de commits de la rama especificada.

## `git diff`
Muestra las diferencias entre el directorio de trabajo y el área de preparación (cambios que no han sido añadidos con `git add`).

## `git reset HEAD archivo.html`
Quita el archivo especificado del área de preparación, pero mantiene los cambios en el directorio de trabajo. Útil cuando añadiste un archivo por error con `git add`.

## `git reset --hard commit-hash`
Restablece el repositorio al estado del commit especificado, descartando todos los cambios posteriores. Este comando puede causar pérdida de trabajo no guardado.
