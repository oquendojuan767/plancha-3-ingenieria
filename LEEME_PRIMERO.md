# Landing Plancha 3 — Facultad de Ingeniería, Pascual Bravo

Esta es una web estática (HTML + CSS + JavaScript), responsive y lista para publicar **gratis** en GitHub Pages. Incluye las fotografías originales de la Plancha 3, las cinco propuestas que trabajamos, espacios para completar las historias y la integración preparada para Google Forms.

## 1. Revísala antes de publicar

Abre `index.html` en Chrome o Edge (doble clic) y revisa el diseño. Si las fotos no aparecen, confirma que la carpeta `assets` está al lado del archivo `index.html`.

**IMPORTANTE:** `Juan José` aparece como primer integrante y el nombre del compañero, las carreras y las historias quedan pendientes. Completa esos campos antes de publicar.

## 2. Personaliza los textos sin saber programación

Abre **`contenido.js`** en Bloc de notas o Visual Studio Code. Cambia únicamente el contenido entre comillas después de estas claves:

- `nombre`, `programa`, `encabezado`, `historia`, `enfoque` de cada integrante.
- `fechaVotacion` si ya se conoce.
- `propuestas` si quieren mejorar los textos, las acciones y los resultados esperados.
- `participacion.googleFormulario` cuando tengas el formulario.

No elimines comillas, comas ni llaves. El diseño y la funcionalidad están en `estilos.css` y `app.js`; normalmente no tienes que modificarlos.

## 3. Crea el formulario gratuito

1. Entra a https://forms.google.com/ con tu cuenta Google y crea un formulario en blanco.
2. Título: **Tu voz en Ingeniería | Plancha 3**.
3. Descripción: **Queremos conocer tus propuestas para mejorar la experiencia estudiantil en la Facultad de Ingeniería. Tu participación es voluntaria. No compartas información sensible.**
4. Preguntas sugeridas:
   - **¿Qué aspecto de la Facultad de Ingeniería debería mejorar?** — Respuesta larga, obligatoria.
   - **¿Qué propuesta concreta te gustaría que lleváramos al Consejo de Facultad?** — Respuesta larga, opcional.
   - **¿A qué programa académico perteneces?** — Respuesta corta, opcional.
   - **¿Quieres dejarnos alguna otra observación?** — Respuesta larga, opcional.
5. En **Configuración**, desactiva "Recopilar direcciones de correo electrónico" y evita restringir el formulario a usuarios de una organización o requerir inicio de sesión, si quieres que pueda responderse anónimamente. Revisa también que no esté activada la limitación a una sola respuesta si esto obliga a iniciar sesión.
6. **Publica** el formulario y asegúrate de que acepta respuestas de cualquier estudiante con el enlace. Prueba desde una ventana de incógnito.
7. Usa la opción **Insertar HTML / Embed** en Google Forms y copia el enlace `src` que aparece dentro del código HTML. Tiene esta forma:

   `https://docs.google.com/forms/d/e/ID_DEL_FORMULARIO/viewform?embedded=true`

8. Pega ese enlace entre las comillas de `googleFormulario` en `contenido.js`:

   `googleFormulario: "https://docs.google.com/forms/d/e/TU_ID/viewform?embedded=true"`

9. Guarda el archivo y vuelve a abrir `index.html` para comprobar que el formulario se muestra. **Las respuestas se almacenan en Google Forms**, no en GitHub; desde la pestaña "Respuestas" puedes abrirlas en Google Sheets.

Si utilizas un enlace corto `forms.gle`, se habilitará un botón externo en vez de un formulario incrustado. Para que aparezca dentro de la landing utiliza la URL de `docs.google.com` del código de inserción.

## 4. Publícala gratis en GitHub Pages (sin tarjeta)

1. Inicia sesión en GitHub: https://github.com/
2. Entra a https://github.com/new y crea un repositorio público de nombre **`plancha-3-ingenieria`** (o el que prefieras). Importante: con la cuenta gratuita, GitHub Pages requiere que el repositorio sea **Public**.
3. En tu nuevo repositorio, selecciona **Add file → Upload files**.
4. **Descomprime el ZIP** que te entregamos. Arrastra los archivos `index.html`, `contenido.js`, `estilos.css`, `app.js`, `LEEME_PRIMERO.md` y la carpeta `assets` completa a la zona de carga; el archivo `index.html` debe quedar en la raíz del repositorio. Si el navegador no admite carpetas, arrastra el contenido del directorio descomprimido o usa GitHub Desktop para mantener la estructura.
5. Pulsa **Commit changes**.
6. Entra a tu repositorio → **Settings → Pages**.
7. En **Build and deployment**, selecciona **Deploy from a branch**. Rama: `main`. Carpeta: `/(root)`. Guarda con **Save**.
8. Al publicarse, el enlace tendrá esta forma:

   `https://TU_USUARIO.github.io/plancha-3-ingenieria/`

La URL real depende del usuario de GitHub y del nombre del repositorio. No la inventes ni imprimas el QR antes de abrir y verificar la web en el teléfono.

## 5. Actualizar después de publicar

En GitHub abre `contenido.js` → icono del lápiz **Edit this file** → modifica los textos → **Commit changes**. GitHub Pages actualizará la página. También puedes sustituir las fotografías manteniendo sus nombres y rutas dentro de `assets`.

## 6. QR para el afiche-empanada

Cuando la web tenga una URL pública definitiva, genera un QR dirigido a esa URL. Añade debajo **"Conoce nuestras propuestas y deja tu idea"**. Imprímelo con al menos 3 cm de lado, alto contraste y margen blanco; pruébalo escaneando el afiche a tamaño real con distintos celulares.

## Seguridad y privacidad

- No hay cuentas, contraseñas ni API keys en este proyecto.
- El código del repositorio público y las fotografías incluidas serán públicos.
- No recopiles números de documento, diagnósticos ni datos sensibles en el formulario.
- Revisa periódicamente las respuestas y define quién de la plancha puede acceder a ellas.
- La web es de candidatura estudiantil; **no es un sitio institucional oficial**.

## Archivos

- `index.html`: estructura de la página.
- `estilos.css`: diseño adaptable a celular.
- `contenido.js`: **el único archivo que necesitas editar**.
- `app.js`: muestra los datos, propuestas y formulario.
- `assets/`: fotos, favicon e imagen de compartir.
