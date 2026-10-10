
/*
  GRUPO EMPRESARIAL CKD
  PORTAFOLIO CORPORATIVO INTERACTIVO

  25 MARCAS Y UNIDADES
  9 SECTORES

  Todas las imágenes deben estar en la misma
  carpeta que index.html, style.css y app.js.
*/

// ==========================================
// 1. SECTORES EMPRESARIALES
// ==========================================

const sectors = [
  'Educación',
  'Gastronomía y eventos',
  'Salud y bienestar',
  'Marketing y tecnología',
  'Construcción y diseño',
  'Hospitalidad',
  'Deporte y experiencias',
  'Industria y finanzas',
  'Marcas personales'
];

// ==========================================
// 2. MARCAS DEL GRUPO EMPRESARIAL CKD
// ==========================================

const brands = [

  {
    name: 'Universidad TEC Mexiquense',
    sector: 0,
    image: 'image6.png',
    description: 'Educación superior con presencia regional y una estructura directiva definida.',
    services: [
      'Educación superior',
      'Expansión territorial'
    ],
    location: 'Toluca y Valle de Bravo, Estado de México · Apatzingán, Michoacán · Mérida, Yucatán',
    notes: 'Rectora: Lic. Alejandra Trigos Cornejo. Director general y fundador: Lic. Óscar Huerta Téllez.'
  },

  {
    name: 'Universidad UBC',
    sector: 0,
    image: 'image12.png',
    description: 'Una de las marcas de educación superior del grupo, con campus en Zinacantepec.',
    services: [
      'Formación universitaria'
    ],
    location: 'Zinacantepec, Estado de México',
    notes: 'Dirección general: Arq. César Huerta Téllez. Dirección de plantel: Karla Yaneli Chávez Jiménez.'
  },

  {
    name: 'Gran Cardenal',
    sector: 1,
    image: 'image37.png',
    description: 'Una experiencia gastronómica de buffet en el centro de Toluca.',
    services: [
      'Buffet',
      'Servicio gastronómico'
    ],
    location: 'Centro de Toluca, Estado de México'
  },

  {
    name: 'PUBLIK-T',
    sector: 3,
    image: 'image27.png',
    description: 'Agencia de marketing que fortalece el posicionamiento y la comunicación de las marcas.',
    services: [
      'Branding y contenidos',
      'Comunicación y publicidad',
      'Estrategias de captación'
    ]
  },

  {
    name: 'Equilibria Médica',
    sector: 2,
    image: 'image35.png',
    description: 'Promueve un estilo de vida físico, mental y espiritual con especialistas en distintas ramas del bienestar y la salud integral.',
    services: [
      'Salud integral',
      'Bienestar físico y mental',
      'Bienestar espiritual'
    ]
  },

  {
    name: 'CCEPM',
    sector: 0,
    image: 'image22.png',
    description: 'Corporativo de Centros Educativos Particulares en México, con convenios con más de 60 escuelas.',
    services: [
      'Convenios institucionales',
      'Vinculación educativa'
    ],
    notes: 'Más de 60 escuelas vinculadas.'
  },

  {
    name: 'UNISATEC',
    sector: 0,
    image: 'image8.png',
    description: 'Universidad de la Salud TEC. Forma parte de TEC Mexiquense y concentra carreras del área de la salud.',
    services: [
      'Enfermería y Fisioterapia',
      'Trabajo Social y Psicología',
      'Formación en el área de la salud'
    ]
  },

  {
    name: 'La Catedral',
    sector: 1,
    image: 'image39.png',
    description: 'Restaurante a la carta que ofrece una experiencia de servicio gastronómico.',
    services: [
      'Restaurante a la carta',
      'Servicio gastronómico'
    ]
  },

  {
    name: 'Certifica-TEC',
    sector: 0,
    image: 'image24.png',
    description: 'Conecta al grupo con instituciones de nivel medio superior y genera alianzas académicas.',
    services: [
      'Vinculación estratégica',
      'Alianzas académicas',
      'Colaboración con nivel medio superior'
    ]
  },

  {
    name: 'M&N Tecnologías',
    sector: 3,
    image: 'image29.png',
    description: 'Soluciones tecnológicas para digitalizar procesos y fortalecer la operación.',
    services: [
      'Desarrollo de software',
      'Programas y sistemas',
      'Automatización y soluciones digitales'
    ]
  },

  // UDITEX UNIFICADA

  {
    name: 'UDITEX',
    sector: 0,
    image: 'image16.png',
    description: 'Universidad digital orientada a la formación a distancia, la flexibilidad académica y nuevas oportunidades educativas.',
    services: [
      'Carreras a distancia',
      'Educación flexible',
      'Cobertura digital'
    ]
  },

  {
    name: 'Casa NDOMI / Andomi',
    sector: 5,
    image: 'image42.png',
    description: 'División hotelera que conecta hospitalidad y experiencias de estancia.',
    services: [
      'Hotelería',
      'Experiencias de estancia'
    ],
    location: 'Valle de Bravo · Tenancingo · Tepoztlán'
  },

  {
    name: 'Proyecta+',
    sector: 4,
    image: 'image31.png',
    description: 'Capacidades de arquitectura, ingeniería y diseño para materializar proyectos integrales.',
    services: [
      'Arquitectura e ingeniería',
      'Diseño',
      'Construcción'
    ]
  },

  {
    name: 'TEC Mexiquense KIDS',
    sector: 0,
    image: 'image20.png',
    description: 'Educación básica orientada a una formación integral desde las primeras etapas.',
    services: [
      'Maternal y preescolar',
      'Primaria',
      'Secundaria'
    ]
  },

  {
    name: 'Plasti Jimmy',
    sector: 7,
    image: 'image46.png',
    description: 'Empresa dedicada a la inyección de plásticos y procesos de manufactura industrial.',
    services: [
      'Inyección de plásticos',
      'Manufactura industrial'
    ]
  },

  {
    name: 'León RZR',
    sector: 6,
    image: 'image33.png',
    description: 'Experiencias deportivas y recreativas que promueven movimiento y actividades al aire libre.',
    services: [
      'Senderismo',
      'Ciclismo',
      'Actividades recreativas al aire libre'
    ]
  },

  {
    name: 'Yo cuento contigo, tú cuentas conmigo',
    sector: 7,
    image: 'image44.png',
    description: 'Marca financiera orientada a soluciones de apoyo y servicios financieros.',
    services: [
      'Soluciones de apoyo',
      'Servicios financieros'
    ]
  },

  // SALÓN DE EVENTOS GRAN CARDENAL

  {
    name: 'Salón de Eventos Gran Cardenal',
    sector: 1,
    image: 'SALON BLANCO.png',
    description: 'Espacio para encuentros empresariales y celebraciones sociales.',
    services: [
      'Eventos empresariales',
      'Eventos sociales'
    ],
    location: 'San Luis, Zinacantepec, Estado de México'
  },

  // LOS TOLUQUEÑOS - PRÓXIMAMENTE

  {
    name: 'Los Toluqueños',
    sector: 1,
    image: 'image41.png',
    status: 'Próximamente',
    description: 'Próximo concepto de restaurante con temática e identidad de Toluca.',
    services: [
      'Concepto gastronómico',
      'Identidad regional'
    ],
    location: 'Ezequiel Ordóñez, colonia La Merced, Toluca, Estado de México',
    notes: 'Próximamente.'
  },

  {
    name: 'UPM',
    sector: 0,
    image: 'image10.png',
    description: 'Universidad Pedagógica Montessori. Especialización en pedagogía, formación educativa y desarrollo docente.',
    services: [
      'Pedagogía',
      'Formación educativa',
      'Desarrollo docente'
    ]
  },

  {
    name: 'Universidad UNG',
    sector: 0,
    image: null,
    description: 'Universidad Nueva Generación, enfocada en innovación educativa y nuevas oportunidades de formación.',
    services: [
      'Innovación educativa',
      'Formación universitaria'
    ]
  },

  // NUEVA MARCA: EVENTOS INFANTILES

  {
    name: 'Salón de Eventos para Niños',
    sector: 1,
    image: null,
    description: 'Espacio para celebraciones infantiles y experiencias especiales en familia.',
    services: [
      'Celebraciones infantiles',
      'Eventos familiares'
    ]
  },

  // NUEVA MARCA: STARFIT

  {
    name: 'Starfit',
    sector: 6,
    image: null,
    status: 'Próximamente',
    description: 'Nueva marca del ecosistema CKD. Próximamente compartiremos más información.',
    services: [
      'Proyecto en desarrollo'
    ]
  },

  // MARCA PERSONAL: ALE TRIGOS

  {
    name: 'Ale Trigos',
    sector: 8,
    image: 'ALE TRIGOS COLOR.png',
    portrait: 'fotoale.png',
    type: 'person',

    fullName: 'Lic. Alejandra Trigos Cornejo',

    position: 'Rectora de Universidad TEC Mexiquense',

    phone: '7225834073',

    email: 'alejandra.trigos@tecmexiquense.edu.mx',

    quote: 'Liderazgo y compromiso para abrir nuevas oportunidades a través de la educación.',

    description: 'Marca personal vinculada al liderazgo y la gestión educativa.',

    services: [
      'Liderazgo educativo',
      'Gestión institucional'
    ]
  },

  // MARCA PERSONAL: ÓSCAR HUERTA

  {
    name: 'Óscar Huerta',
    sector: 8,
    image: 'oscar.png',
    portrait: 'fotooscar.png',
    type: 'person',

    fullName: 'Lic. Óscar Huerta Téllez',

    position: 'Fundador y director general de Universidad TEC Mexiquense',

    phone: '7221185685',

    email: 'tecmequense@hotmail.com',

    quote: 'Visión y compromiso para impulsar proyectos que transforman la educación.',

    description: 'Marca personal vinculada al desarrollo empresarial y educativo.',

    services: [
      'Dirección general',
      'Fundación y desarrollo institucional'
    ]
  }

];

// ==========================================
// 3. CONFIGURACIÓN DE LOGOTIPOS
// ==========================================

const dark = new Set([
  'image37.png',
  'image27.png',
  'image39.png',
  'image31.png',
  'image41.png',
  'SALON BLANCO.png',
  'oscar.png'
]);

// Las imágenes se encuentran junto a index.html.

const imagePath = filename => `./${filename}`;

// PROTECCIÓN DE CONTENIDO HTML

const escapeHTML = value =>
  String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

// ==========================================
// 4. GENERAR LOGOTIPOS
// ==========================================

function logo(brand) {

  const isDark = dark.has(brand.image)
    ? ' dark'
    : '';

  let content;

  if (brand.image) {

    content = `
      <img
        src="${imagePath(brand.image)}"
        alt="Logotipo de ${escapeHTML(brand.name)}"
        loading="lazy"
        decoding="async"
      >
    `;

  } else if (brand.name === 'Universidad UNG') {

    content = `
      <span class="logo-type">
        UNG
        <br>
        <small>Universidad Nueva Generación</small>
      </span>
    `;

  } else {

    content = `
      <span class="logo-type logo-placeholder">
        ${escapeHTML(brand.name)}
      </span>
    `;

  }

  return `
    <div class="logo-box${isDark}">
      ${content}
    </div>
  `;

}

// ==========================================
// 5. VARIABLES GENERALES
// ==========================================

let filter = -1;
let selected = 0;
let lastFocus = null;

const cards = document.querySelector('#cards');
const filters = document.querySelector('#filters');
const dialog = document.querySelector('#brand-dialog');

const portfolioContent =
  document.querySelector('#portfolio-content');

const enterButton =
  document.querySelector('#reveal');

const secondReveal =
  document.querySelector('#second-reveal');

const reduceMotion = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches;

// ==========================================
// 6. GENERAR TARJETAS DEL PORTAFOLIO
// ==========================================

function renderCards() {

  cards.innerHTML = brands.map((brand, index) => {

    if (filter !== -1 && brand.sector !== filter) {
      return '';
    }

    return `
      <button
        class="card"
        type="button"
        data-brand="${index}"
        style="animation-delay:${Math.min(index, 8) * 35}ms"
      >

        ${logo(brand)}

        <small>
          ${escapeHTML(sectors[brand.sector])}
        </small>

        ${brand.status
          ? `<span class="status-tag">
               ${escapeHTML(brand.status)}
             </span>`
          : ''
        }

        <h3>
          ${escapeHTML(brand.name)}
        </h3>

        <div class="card-bottom">

          <span>
            ${brand.type === 'person'
              ? 'Ver tarjeta digital'
              : 'Conocer la marca'
            }
          </span>

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

}

// CLIC EN LAS TARJETAS

cards.addEventListener('click', event => {

  const card = event.target.closest('[data-brand]');

  if (card) {
    openBrand(Number(card.dataset.brand));
  }

});

// ==========================================
// 7. FILTROS POR SECTOR
// ==========================================

filters.innerHTML = [
  'Todo el portafolio',
  ...sectors
].map((name, index) => `

  <button
    type="button"
    data-filter="${index - 1}"
    class="${index === 0 ? 'active' : ''}"
    aria-pressed="${index === 0}"
  >
    ${escapeHTML(name)}
  </button>

`).join('');

filters.addEventListener('click', event => {

  const button = event.target.closest('[data-filter]');

  if (!button) return;

  filter = Number(button.dataset.filter);

  filters.querySelectorAll('[data-filter]').forEach(item => {

    const active = item === button;

    item.classList.toggle('active', active);

    item.setAttribute(
      'aria-pressed',
      String(active)
    );

  });

  renderCards();

});

// ==========================================
// 8. PORTADA: CLIC EN EL LOGOTIPO CKD
// ==========================================

function reveal(event) {

  event?.preventDefault();

  // Ocultar el estado de portada inicial.

  document.body.classList.remove('landing-only');

  // Mostrar las marcas.

  portfolioContent.hidden = false;

  // Ocultar el botón secundario.

  secondReveal.hidden = true;

  // Actualizar estado del logotipo.

  enterButton.setAttribute(
    'aria-expanded',
    'true'
  );

  // Ir directamente a las marcas.

  requestAnimationFrame(() => {

    portfolioContent.scrollIntoView({

      behavior: reduceMotion()
        ? 'auto'
        : 'smooth',

      block: 'start'

    });

  });

}

// ACTIVAR CLIC EN EL LOGOTIPO

enterButton.addEventListener('click', reveal);

// BOTÓN SECUNDARIO

secondReveal.addEventListener('click', reveal);

// ENLACES DEL MENÚ

document.querySelectorAll('[data-open]').forEach(link => {

  link.addEventListener('click', reveal);

});

// ==========================================
// 9. VOLVER A LA PORTADA PRINCIPAL
// ==========================================

function returnHome(event) {

  event.preventDefault();

  // Ocultar marcas.

  portfolioContent.hidden = true;

  // Restaurar botón secundario.

  secondReveal.hidden = false;

  // Actualizar el estado.

  enterButton.setAttribute(
    'aria-expanded',
    'false'
  );

  // Mostrar únicamente el logotipo CKD.

  document.body.classList.add('landing-only');

  // Regresar al inicio.

  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

}

// ENLACES PARA REGRESAR AL INICIO

document.querySelectorAll('a[href="#inicio"]').forEach(link => {

  link.addEventListener('click', returnHome);

});

// ==========================================
// 10. TARJETA DIGITAL DE LOS DIRECTIVOS
// ==========================================

function digitalCard(brand) {

  const fullName = escapeHTML(brand.fullName);
  const phone = escapeHTML(brand.phone);
  const email = escapeHTML(brand.email);

  return `

    <div class="personal-profile">

      <!-- FOTOGRAFÍA PROFESIONAL -->

      <img
        class="personal-photo"
        src="${imagePath(brand.portrait)}"
        alt="Fotografía de ${fullName}"
      >

      <div class="personal-info">

        <!-- LOGOTIPO PERSONAL -->

        ${logo(brand)}

        <p class="eyebrow">
          MARCA PERSONAL / GRUPO CKD
        </p>

        <h2 id="brand-title">
          ${fullName}
        </h2>

        <p class="personal-position">
          ${escapeHTML(brand.position)}
        </p>

        <!-- FRASE PROFESIONAL -->

        <blockquote>
          ${escapeHTML(brand.quote)}
        </blockquote>

        <!-- TARJETA DIGITAL -->

        <div class="digital-contact">

          <h3>Tarjeta digital</h3>

          <a href="tel:+52${phone}">
            Tel.
            ${phone.replace(
              /^(\d{3})(\d{3})(\d{4})$/,
              '$1 $2 $3'
            )}
          </a>

          <a href="mailto:${email}">
            ${email}
          </a>

          <button
            class="outline contact-save"
            type="button"
            data-save-contact
          >
            Guardar contacto
          </button>

        </div>

      </div>

    </div>
  `;

}

// ==========================================
// 11. INFORMACIÓN DETALLADA DE CADA MARCA
// ==========================================

function detail() {

  const brand = brands[selected];

  const detailBox =
    document.querySelector('#brand-detail');

  // DIFERENCIAR MARCAS PERSONALES

  if (brand.type === 'person') {

    detailBox.innerHTML = digitalCard(brand);

  } else {

    detailBox.innerHTML = `

      <div class="detail-top">

        ${logo(brand)}

        <div>

          <p class="eyebrow">
            ${escapeHTML(sectors[brand.sector])}
            / PORTAFOLIO CKD
          </p>

          <h2 id="brand-title">
            ${escapeHTML(brand.name)}
          </h2>

          ${brand.status
            ? `<p class="detail-status">
                 ${escapeHTML(brand.status)}
               </p>`
            : ''
          }

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
              <li>
                ${escapeHTML(service)}
              </li>
            `).join('')}

          </ul>

        </div>

        <div>

          <h3>
            ${brand.location
              ? 'Presencia'
              : 'Dentro del grupo'
            }
          </h3>

          <p>
            ${escapeHTML(
              brand.location ||
              'Una marca del ecosistema empresarial gestionado por Grupo Empresarial CKD.'
            )}
          </p>

          ${brand.notes
            ? `<p>
                 ${escapeHTML(brand.notes)}
               </p>`
            : ''
          }

        </div>

      </div>
    `;

  }

  // CONTADOR DE EMPRESAS

  document.querySelector('#position').textContent =
    `${String(selected + 1).padStart(2, '0')} / ${brands.length}`;

  dialog.scrollTop = 0;

}

// ==========================================
// 12. GUARDAR CONTACTO DIGITAL
// ==========================================

function saveContact(brand) {

  if (brand.type !== 'person') return;

  const clean = value =>
    String(value)
      .replace(/[\\;,\n\r]/g, ' ')
      .trim();

  // CREAR TARJETA DE CONTACTO VCF

  const vcf = [

    'BEGIN:VCARD',

    'VERSION:3.0',

    `FN:${clean(brand.fullName)}`,

    `ORG:${clean('Universidad TEC Mexiquense')}`,

    `TITLE:${clean(brand.position)}`,

    `TEL;TYPE=CELL:+52${brand.phone}`,

    `EMAIL;TYPE=INTERNET:${brand.email}`,

    'END:VCARD'

  ].join('\r\n');

  // GENERAR ARCHIVO DESCARGABLE

  const url = URL.createObjectURL(
    new Blob(
      [vcf],
      {
        type: 'text/vcard;charset=utf-8'
      }
    )
  );

  const link = document.createElement('a');

  link.href = url;

  link.download =
    brand.name === 'Ale Trigos'
      ? 'Ale-Trigos.vcf'
      : 'Oscar-Huerta.vcf';

  document.body.appendChild(link);

  link.click();

  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

}

// ==========================================
// 13. INTERACCIONES DE LA VENTANA
// ==========================================

dialog.addEventListener('click', event => {

  // GUARDAR CONTACTO

  if (event.target.closest('[data-save-contact]')) {

    saveContact(brands[selected]);

    return;

  }

  // CERRAR AL HACER CLIC FUERA

  if (event.target === dialog) {

    const rect = dialog.getBoundingClientRect();

    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (outside) {
      dialog.close();
    }

  }

});

// ==========================================
// 14. ABRIR VENTANA DE EMPRESA
// ==========================================

function openBrand(index) {

  selected = index;

  lastFocus = document.activeElement;

  detail();

  dialog.showModal();

  document.body.style.overflow = 'hidden';

}

// ==========================================
// 15. CERRAR VENTANA
// ==========================================

document.querySelector('.close').addEventListener(
  'click',
  () => dialog.close()
);

dialog.addEventListener('close', () => {

  document.body.style.overflow = '';

  lastFocus?.focus();

});

// ==========================================
// 16. NAVEGACIÓN ENTRE MARCAS
// ==========================================

function step(direction) {

  selected = (
    selected + direction + brands.length
  ) % brands.length;

  detail();

}

// BOTÓN ANTERIOR

document.querySelector('#prev').addEventListener(
  'click',
  () => step(-1)
);

// BOTÓN SIGUIENTE

document.querySelector('#next').addEventListener(
  'click',
  () => step(1)
);

// NAVEGACIÓN CON FLECHAS DEL TECLADO

document.addEventListener('keydown', event => {

  if (!dialog.open) return;

  if (event.key === 'ArrowRight') {
    step(1);
  }

  if (event.key === 'ArrowLeft') {
    step(-1);
  }

});

// ==========================================
// 17. MODO PRESENTACIÓN
// ==========================================

const fullscreenButton =
  document.querySelector('#fullscreen');

fullscreenButton.addEventListener('click', async () => {

  try {

    if (document.fullscreenElement) {

      await document.exitFullscreen();

    } else {

      await document.documentElement.requestFullscreen();

    }

  } catch {

    fullscreenButton.textContent =
      'Pantalla completa no disponible';

  }

});

// ACTUALIZAR BOTÓN DE PRESENTACIÓN

document.addEventListener('fullscreenchange', () => {

  fullscreenButton.innerHTML =
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

// ==========================================
// 18. UBICACIONES DEL GRUPO CKD
// ==========================================

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

// ==========================================
// 19. MOSTRAR UBICACIONES
// ==========================================

document.querySelector('#locations').innerHTML =

  locations.map(item => `

    <article class="location">

      <small>
        ${escapeHTML(item[1].toUpperCase())}
      </small>

      <h3>
        ${escapeHTML(item[0])}
      </h3>

      <p>
        ${escapeHTML(item[2])}
      </p>

    </article>

  `).join('');

// ==========================================
// 20. ACTUALIZAR CONTADORES
// ==========================================

// NÚMERO DE MARCAS

document.querySelector('#brand-count').textContent =
  String(brands.length);

// NÚMERO DE SECTORES

document.querySelector('#sector-count').textContent =
  String(sectors.length).padStart(2, '0');

// BOTÓN DE DESCUBRIR MARCAS

secondReveal.querySelector('.reveal-count').textContent =
  String(brands.length);

// ==========================================
// 21. INICIAR PORTAFOLIO
// ==========================================

renderCards();
