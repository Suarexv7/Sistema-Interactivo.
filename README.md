# Sistema Interactivo

Un mini formulario en HTML, CSS y JavaScript que pide nombre y edad, valida datos y muestra mensajes según tu edad.

---

## 🛠️ Requisitos

- Un navegador moderno (Chrome, Firefox, Edge).
- Un editor de código como **VS Code**.
- No necesitas servidor ni instalación extra.

---

## 🚀 Cómo usarlo

1. Abre la carpeta del proyecto en VS Code.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa tu nombre y edad.
4. Haz clic en **Agregar**.
5. Verás una alerta con el resultado y se muestra tu info en la consola.

---

## ✅ Qué hace el código

- Verifica que el **nombre no esté vacío** y tenga solo letras.  
- Verifica que la **edad sea un número** y no esté vacía.  
- Muestra un mensaje diferente si ya eres mayor de 18 o menor de edad.  
- Limpia los campos después de enviar.

---

## 👨‍💻 Estructura de archivos

/
├─ index.html
├─ styles.css
└─ sistema_interactivo.js

## 📝 Validaciones

- **Nombre**: obligatorio, solo letras.  
- **Edad**: obligatoria, debe ser un número entero.  
- Se gestionan errores avisando en pantalla y enfocando el campo con error.

---

## 🧰 Consejos

- Usa la consola de su navegador de preferencia (F12 > Consola) para ver los datos que muestra `console.log`.
- Puedes mejorar el estilo editando `styles.css`.
- Para proyectos más grandes, separa lógica o usa frameworks.

---

## 📚 Buenas prácticas

- Usa (`captura`, `namecoder`, etc.).  
- Limpia campos y enfoca después de procesar.  
- Divide el código en secciones: obteniendo datos, validación, respuesta, limpieza.

---

## ✏️ Configuración VS Code

1. Abre el proyecto.
2. Instala extensiones útiles si quieres (opcional):
   - *Live Server* para ver cambios automáticos.
   - *Prettier* para el formato del HTML/CSS/JS.
