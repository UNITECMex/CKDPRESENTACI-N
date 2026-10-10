
/*
  PORTAFOLIO GRUPO EMPRESARIAL CKD
  Las imágenes están en la misma carpeta que index.html.
  Cada empresa tiene su nombre, sector e imagen asignada.
*/

const sectors = [
  'Educación',
  'Gastronomía y eventos',
  'Salud y bienestar',
  'Marketing y tecnología',
  'Construcción y diseño',
  'Hospitalidad',
  'Deporte y experiencias',
  'Industria y finanzas'
];

const brands = [
  {
    name: 'Universidad TEC Mexiquense',
    sector: 0,
    image: 'image6.png',
    description: 'Educación superior con presencia regional y una estructura directiva definida.',
    services: ['Educación superior', 'Expansión territorial'],
    location: 'Toluca y Valle de Bravo, Estado de México · Apatzingán, Michoacán · Mérida, Yucatán',
    notes: 'Rectora: Lic. Alejandra Trigos Cornejo. Director general: Lic. Óscar Huerta Téllez.'
  },
  {
    name: 'Universidad UBC',
    sector: 0,
    image: 'image12.png',
    description: 'Una de las marcas de educación superior del grupo, con campus en Zinacantepec.',
    services: ['Formación universitaria'],
    location: 'Zinacantepec, Estado de México',
    notes: 'Dirección general: Arq. César Huerta Téllez. Dirección de plantel: Karla Yaneli Chávez Jiménez.'
  },
  {
    name: 'Gran Cardenal',
    sector: 1,
    image: 'image37.png',
    description: 'Una experiencia gastronómica de buffet en el centro de Toluca.',
    services: ['Buffet', 'Servicio gastronómico'],
    location: 'Centro de Toluca, Estado de México'
  },
  {
    name: 'PUBLIK-T',
    sector: 3,
    image: 'image27.png',
    description: 'Agencia de marketing que fortalece el posicionamiento y la comunicación de las marcas.',
    services: ['Branding y contenidos', 'Comunicación y publicidad', 'Estrategias de captación']
  },
  {
    name: 'Equilibria Médica',
    sector: 2,
    image: 'image35.png',
    description: 'Promueve un estilo de vida físico, mental y espiritual con especialistas en distintas ramas del bienestar y la salud integral.',
    services: ['Salud integral', 'Bienestar físico y mental', 'Bienestar espiritual']
  },
  {
    name: 'UNIDM / UNIDEM',
    sector: 0,
    image: 'image18.png',
    description: 'Marca educativa en proceso de conversión hacia UDITEX como universidad digital.',
    services: ['Educación digital', 'Transformación de la oferta educativa'],
    notes: 'En proceso de conversión hacia UDITEX.'
  },
  {
    name: 'CCEPM',
    sector: 0,
    image: 'image22.png',
    description: 'Corporativo de Centros Educativos Particulares en México, con convenios con más de 60 escuelas.',
    services: ['Convenios institucionales', 'Vinculación educativa'],
    notes: 'Más de 60 escuelas vinculadas.'
  },
  {
    name: 'CUIH',
    sector: 0,
    image: 'image11.jpeg',
    description: 'Centro Universitario Impulsor Humanista. Institución educativa con enfoque humanista y formación profesional.',
    services: ['Formación profesional', 'Educación con enfoque humanista']
  },
  {
    name: 'UNISATEC',
    sector: 0,
    image: 'image8.png',
    description: 'Universidad de la Salud TEC. Forma parte de TEC Mexiquense y concentra carreras del área de la salud.',
    services: ['Enfermería y Fisioterapia', 'Trabajo Social y Psicología', 'Formación en el área de la salud']
  },
  {
    name: 'La Catedral',
    sector: 1,
    image: 'image39.png',
    description: 'Restaurante a la carta que ofrece una experiencia de servicio gastronómico.',
    services: ['Restaurante a la carta', 'Servicio gastronómico']
  },
  {
    name: 'Certifica-TEC',
    sector: 0,
    image: 'image24.png',
    description: 'Conecta al grupo con instituciones de nivel medio superior y genera alianzas académicas.',
    services: ['Vinculación estratégica', 'Alianzas académicas', 'Colaboración con nivel medio superior']
  },
  {
    name: 'M&N Tecnologías',
    sector: 3,
    image: 'image29.png',
    description: 'Soluciones tecnológicas para digitalizar procesos y fortalecer la operación.',
    services: ['Desarrollo de software', 'Programas y sistemas', 'Automatización y soluciones digitales']
  },
  {
    name: 'UDITEC / UDITEX',
    sector: 0,
    image: 'image16.png',
    description: 'Universidad Digital de México. Oferta de carreras a distancia con enfoque flexible y cobertura ampliada.',
    services: ['Carreras a distancia', 'Educación flexible', 'Cobertura digital']
  },
  {
    name: 'Casa NDOMI / Andomi',
    sector: 5,
    image: 'image42.png',
    description: 'División hotelera que conecta hospitalidad y experiencias de estancia.',
    services: ['Hotelería', 'Experiencias de estancia'],
    location: 'Valle de Bravo · Tenancingo · Tepoztlán'
  },
  {
    name: 'Proyecta+',
    sector: 4,
    image: 'image31.png',
    description: 'Capacidades de arquitectura, ingeniería y diseño para materializar proyectos integrales.',
    services: ['Arquitectura e ingeniería', 'Diseño', 'Construcción']
  },
  {
    name: 'TEC Mexiquense KIDS',
    sector: 0,
    image: 'image20.png',
    description: 'Educación básica orientada a una formación integral desde las primeras etapas.',
    services: ['Maternal y preescolar', 'Primaria', 'Secundaria']
  },
  {
    name: 'Plasti Jimmy',
    sector: 7,
    image: 'image46.png',
    description: 'Empresa dedicada a la inyección de plásticos y procesos de manufactura industrial.',
    services: ['Inyección de plásticos', 'Manufactura industrial']
  },
  {
    name: 'León RZR',
    sector: 6,
    image: 'image33.png',
    description: 'Experiencias deportivas y recreativas que promueven movimiento y actividades al aire libre.',
    services: ['Senderismo', 'Ciclismo', 'Actividades recreativas al aire libre']
  },
  {
    name: 'Yo cuento contigo, tú cuentas conmigo',
    sector: 7,
    image: 'image44.png',
    description: 'Marca financiera orientada a soluciones de apoyo y servicios financieros.',
    services: ['Soluciones de apoyo', 'Servicios financieros']
  },
  {
    name: 'Salón de Eventos Gran Cardenal',
    sector: 1,
    image: 'image37.png',
    description: 'Espacio para encuentros empresariales y celebraciones sociales.',
    services: ['Eventos empresariales', 'Eventos sociales'],
    location: 'San Luis, Zinacantepec, Estado de México'
  },
  {
    name: 'Los Toluqueños',
    sector: 1,
    image: 'image41.png',
    description: 'Concepto de restaurante con temática e identidad de Toluca.',
    services: ['Concepto gastronómico', 'Identidad regional'],
    location: 'Toluca, Estado de México',
    notes: 'Proyecto en desarrollo.'
  },
  {
    name: 'UPM',
    sector: 0,
    image: 'image10.png',
    description: 'Universidad Pedagógica Montessori. Especialización en pedagogía, formación educativa y desarrollo docente.',
    services: ['Pedagogía', 'Formación educativa', 'Desarrollo docente']
  },
  {
    name: 'Universidad UNG',
    sector: 0,
    image: null,
    description: 'Universidad Nueva Generación, enfocada en innovación educativa y nuevas oportunidades de formación.',
    services: ['Innovación educativa', 'Formación universitaria']
  }
];

// LOGOTIPOS CON FONDO OSCURO

const dark = new Set([
  'image37.png',
  'image27.png',
  'image39.png',
  'image31.png',
  'image41.png'
]);

// RUTAS DE IMÁGENES
// Las imágenes están junto a index.html.

const imagePath = filename => `./${filename}`;

// PROTECCIÓN DE TEXTO HTML

function escapeHTML(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]
  );
}

// GENERADOR DE LOGOTIPOS

function logo(brand) {
  const className = dark.has(brand.image) ? ' dark' : '';

  const content = brand.image
    ? `<img
         src="${imagePath(brand.image)}"
         alt="Logotipo de ${escapeHTML(brand.name)}"
         loading="lazy"
         decoding="async"
       >`
    : `<span class="logo-type">
         UNG<br>
         <small>Universidad Nueva Generación</small>
       </span>`;

  return `
    <div class="logo-box${className}">
      ${content}
    </div>
  `;
}

// VARIABLES GENERALES

let filter = -1;
let selected = 0;
let lastFocus;

const cards = document.querySelector('#cards');
const dialog = document.querySelector('dialog');

// TARJETAS DE EMPRESAS

function renderCards() {

  cards.innerHTML = brands.map((brand, index) => {

    if (filter >= 0 && brand.sector !== filter) {
      return '';
    }

    return `
      <button
        class="card"
        data-brand="${index}"
        style="animation-delay:${Math.min(index, 8) * 35}ms"
      >

        ${logo(brand)}

        <small>${sectors[brand.sector]}</small>

        <h3>${escapeHTML(brand.name)}</h3>

        <div class="card-bottom">
          <span>Conocer la marca</span>

          <b>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path d="M5 19 19 5M5 5h14v14"/>
            </svg>
          </b>
        </div>

      </button>
    `;

  }).join('');

  cards.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
      openBrand(Number(button.dataset.brand));
    };
  });

}

// FILTROS POR SECTOR

const filters = document.querySelector('#filters');

filters.innerHTML = [
  'Todo el portafolio',
  ...sectors
].map((sector, index) => `
  <button
    data-filter="${index - 1}"
    class="${index === 0 ? 'active' : ''}"
    aria-pressed="${index === 0}"
  >
    ${sector}
  </button>
`).join('');

filters.querySelectorAll('button').forEach(button => {

  button.onclick = () => {

    filter = Number(button.dataset.filter);

    filters.querySelectorAll('button').forEach(other => {

      other.classList.toggle(
        'active',
        other === button
      );

      other.setAttribute(
        'aria-pressed',
        other === button
      );

    });

    renderCards();

  };

});

// MOSTRAR PORTAFOLIO

function reveal() {

  document.querySelector('#portfolio-content').hidden = false;

  document.querySelector('#second-reveal').hidden = true;

  document.querySelector('#reveal').setAttribute(
    'aria-expanded',
    'true'
  );

  document.querySelector('#portafolio').scrollIntoView({
    behavior: matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches ? 'instant' : 'smooth'
  });

}

document.querySelector('#reveal').onclick = reveal;

document.querySelector('#second-reveal').onclick = reveal;

document.querySelectorAll('[data-open]').forEach(link => {
  link.onclick = reveal;
});

// INFORMACIÓN DETALLADA DE CADA EMPRESA

function detail() {

  const brand = brands[selected];

  document.querySelector('#brand-detail').innerHTML = `

    <div class="detail-top">

      ${logo(brand)}

      <div>

        <p class="eyebrow">
          ${sectors[brand.sector]} / PORTAFOLIO CKD
        </p>

        <h2 id="brand-title">
          ${escapeHTML(brand.name)}
        </h2>

      </div>

    </div>

    <p class="detail-description">
      ${escapeHTML(brand.description)}
    </p>

    <div class="detail-grid">

      <div>

        <h3>Enfoque y servicios</h3>

        <ul>
          ${brand.services.map(service => `
            <li>${escapeHTML(service)}</li>
          `).join('')}
        </ul>

      </div>

      <div>

        <h3>
          ${brand.location ? 'Presencia' : 'Dentro del grupo'}
        </h3>

        <p>
          ${escapeHTML(
            brand.location ||
            'Una marca del ecosistema empresarial gestionado por Grupo Empresarial CKD.'
          )}
        </p>

        ${brand.notes
          ? `<p>${escapeHTML(brand.notes)}</p>`
          : ''
        }

      </div>

    </div>

  `;

  document.querySelector('#position').textContent =
    `${String(selected + 1).padStart(2, '0')} / ${brands.length}`;

  dialog.scrollTop = 0;

}

// ABRIR VENTANA DE EMPRESA

function openBrand(index) {

  selected = index;

  lastFocus = document.activeElement;

  detail();

  dialog.showModal();

  document.body.style.overflow = 'hidden';

}

// CERRAR VENTANA

function close() {
  dialog.close();
}

document.querySelector('.close').onclick = close;

dialog.addEventListener('close', () => {

  document.body.style.overflow = '';

  lastFocus?.focus();

});

// CERRAR AL HACER CLIC FUERA

dialog.addEventListener('click', event => {

  if (event.target !== dialog) return;

  const rect = dialog.getBoundingClientRect();

  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    close();
  }

});

// NAVEGACIÓN ENTRE EMPRESAS

function step(direction) {

  selected = (
    selected + direction + brands.length
  ) % brands.length;

  detail();

}

document.querySelector('#prev').onclick = () => step(-1);

document.querySelector('#next').onclick = () => step(1);

// NAVEGACIÓN CON TECLADO

document.addEventListener('keydown', event => {

  if (dialog.open && event.key === 'ArrowRight') {
    step(1);
  }

  if (dialog.open && event.key === 'ArrowLeft') {
    step(-1);
  }

});

// MODO PRESENTACIÓN

document.querySelector('#fullscreen').onclick = async () => {

  try {

    if (!document.fullscreenElement) {

      await document.documentElement.requestFullscreen();

    } else {

      await document.exitFullscreen();

    }

  } catch {

    document.querySelector('#fullscreen').textContent =
      'Pantalla completa no disponible';

  }

};

// ACTUALIZAR BOTÓN DE PRESENTACIÓN

document.addEventListener('fullscreenchange', () => {

  document.querySelector('#fullscreen').innerHTML =
    document.fullscreenElement
      ? 'Salir de presentación ↙'
      : `Modo presentación
         <span>
           <svg
             width="14"
             height="14"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.5"
             aria-hidden="true"
           >
             <path d="M5 19 19 5M5 5h14v14"/>
           </svg>
         </span>`;

});

// UBICACIONES DEL GRUPO EMPRESARIAL

const locations = [

  [
    'Toluca',
    'Estado de México',
    'Educación, gastronomía y servicios corporativos'
  ],

  [
    'Zinacantepec',
    'Estado de México',
    'Universidad UBC y Salón de Eventos Gran Cardenal'
  ],

  [
    'Valle de Bravo',
    'Estado de México',
    'TEC Mexiquense y Casa NDOMI'
  ],

  [
    'Apatzingán',
    'Michoacán',
    'Plantel TEC Mexiquense'
  ],

  [
    'Mérida',
    'Yucatán',
    'Plantel TEC Mexiquense'
  ],

  [
    'Tenancingo',
    'Estado de México',
    'Casa NDOMI'
  ],

  [
    'Tepoztlán',
    'Morelos',
    'Casa NDOMI'
  ]

];

// MOSTRAR UBICACIONES

document.querySelector('#locations').innerHTML = locations.map(location => `

  <article class="location">

    <small>
      ${location[1].toUpperCase()}
    </small>

    <h3>${location[0]}</h3>

    <p>${location[2]}</p>

  </article>

`).join('');

// INICIAR PORTAFOLIO

renderCards();
