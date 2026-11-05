/* Presentación de la landing. NO es necesario editar este archivo. */
(() => {
  const datos = window.CONTENIDO;
  if (!datos) {
    console.error('No se encontró contenido.js');
    return;
  }

  const cambiarTexto = (id, texto) => {
    const nodo = document.getElementById(id);
    if (nodo && typeof texto === 'string') nodo.textContent = texto;
  };
  const crear = (tag, clase, texto) => {
    const n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto !== undefined) n.textContent = texto;
    return n;
  };

  // Textos principales. Titular se convierte en texto plano cuando se edita.
  const titular = document.getElementById('titular');
  if (titular && datos.campana.titular !== 'Que tu voz impulse la ingeniería.') {
    titular.textContent = datos.campana.titular;
  }
  cambiarTexto('descripcion', datos.campana.descripcion);
  const fecha = document.getElementById('fecha-votacion');
  if (fecha && datos.campana.fechaVotacion.trim()) {
    fecha.textContent = '· ' + datos.campana.fechaVotacion;
    fecha.hidden = false;
  }

  // Cinco propuestas con explicación ampliable.
  const listado = document.getElementById('lista-propuestas');
  (datos.propuestas || []).forEach((p) => {
    const tarjeta = crear('article', 'proposal-card');
    const cabecera = crear('div', 'proposal-top');
    cabecera.append(crear('span', 'proposal-number', p.numero), crear('span', 'proposal-tag', p.categoria));
    tarjeta.append(cabecera, crear('h3', '', p.titulo), crear('p', '', p.resumen));
    const detalles = crear('details', 'proposal-detail');
    detalles.append(crear('summary', '', '¿Cómo lo impulsaríamos?'));
    const acciones = crear('ol');
    (p.acciones || []).forEach((accion) => acciones.append(crear('li', '', accion)));
    detalles.append(acciones);
    const resultado = crear('div', 'proposal-result');
    const fuerte = crear('strong', '', 'Qué buscamos lograr: ');
    resultado.append(fuerte, document.createTextNode(p.resultado));
    detalles.append(resultado);
    tarjeta.append(detalles);
    listado.append(tarjeta);
  });

  // Historia de los candidatos.
  const equipo = document.getElementById('lista-integrantes');
  (datos.integrantes || []).forEach((p, i) => {
    const tarjeta = crear('article', 'person');
    const foto = crear('div', 'person-photo');
    const img = document.createElement('img');
    img.src = p.foto;
    img.loading = 'lazy';
    img.alt = 'Fotografía de ' + p.nombre;
    img.width = 570;
    img.height = 750;
    foto.append(img, crear('span', 'person-number', 'INTEGRANTE 0' + (i + 1)));
    const cuerpo = crear('div', 'person-body');
    cuerpo.append(crear('h3', '', p.nombre), crear('p', 'person-program', p.programa), crear('p', 'person-headline', p.encabezado), crear('p', 'person-story', p.historia));
    const enfoque = crear('div', 'person-focus');
    enfoque.append(crear('b', '', 'LO QUE QUIERO APORTAR'), document.createTextNode(p.enfoque));
    cuerpo.append(enfoque);
    tarjeta.append(foto, cuerpo);
    equipo.append(tarjeta);
  });

  // Participación: Google Forms es el servicio gratuito que recibe y guarda las respuestas.
  const participacion = datos.participacion || {};
  cambiarTexto('participacion-titulo', participacion.titulo);
  cambiarTexto('participacion-texto', participacion.texto);
  const contenedor = document.getElementById('formulario-contenedor');
  const cabeceraForm = crear('div', 'form-card-header');
  cabeceraForm.append(crear('h3', '', 'Comparte tu idea'));

  let formulario = null;
  try {
    const cadena = (participacion.googleFormulario || '').trim();
    if (cadena) {
      const u = new URL(cadena);
      if (u.protocol === 'https:' && (u.hostname === 'docs.google.com' || u.hostname === 'forms.gle')) {
        formulario = u;
      }
    }
  } catch (_e) {
    // Si el enlace aún no existe o es inválido, la página no aparenta recoger datos.
  }

  if (formulario) {
    cabeceraForm.append(crear('span', 'form-label', 'PARTICIPA'));
    contenedor.append(cabeceraForm);
    if (formulario.hostname === 'docs.google.com' && formulario.pathname.includes('/forms/')) {
      formulario.searchParams.set('embedded', 'true');
      const frame = document.createElement('iframe');
      frame.src = formulario.toString();
      frame.title = 'Formulario para compartir opiniones y propuestas con la Plancha 3';
      frame.loading = 'lazy';
      contenedor.append(frame);
    }
    const link = crear('a', 'open-form-link', 'Abrir formulario en otra pestaña ↗');
    formulario.searchParams.delete('embedded');
    link.href = formulario.toString();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    contenedor.append(link);
    contenedor.append(crear('p', 'privacy-note', 'El formulario se abre mediante Google Forms y sus respuestas son gestionadas allí.'));
  } else {
    cabeceraForm.append(crear('span', 'form-label', 'EN PREPARACIÓN'));
    const cuerpo = crear('div', 'form-setup');
    cuerpo.append(crear('div', 'form-setup-icon', '✳'), crear('h4', '', 'Aquí vamos a escuchar tus ideas.'), crear('p', '', 'Estamos configurando el formulario de participación. Cuando esté listo, podrás compartir tus propuestas y comentarios en este mismo espacio.'));
    contenedor.append(cabeceraForm, cuerpo);
    contenedor.append(crear('p', 'privacy-note', 'Para activar este espacio, crea un formulario en Google Forms y pega su enlace en contenido.js.'));
  }

  // Navegación móvil accesible.
  const menuBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  menuBtn?.addEventListener('click', () => {
    const abierto = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(abierto));
    menuBtn.setAttribute('aria-label', abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    menuBtn?.setAttribute('aria-label', 'Abrir menú de navegación');
  }));
})();
