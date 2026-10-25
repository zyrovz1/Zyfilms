(() => {
  'use strict';

  const STORAGE = {
    favorites: 'zyfilms:favorites:v1',
    history: 'zyfilms:history:v1',
  };
  const GENRES = [
    'Ação',
    'Terror',
    'Comédia',
    'Romance',
    'Ficção científica',
    'Animação',
  ];

  // Catálogo enxuto com licença, ficha e reprodução confirmadas em fontes primárias.
  const CATALOG = [
    {
      id: 'big-buck-bunny',
      title: 'Big Buck Bunny',
      year: 2008,
      genres: ['Comédia', 'Animação'],
      type: 'movie',
      image: '/images/big-buck-bunny-still.jpg',
      imageAlt: 'Big Buck Bunny em um frame oficial do curta da Blender Foundation',
      duration: '10 min 35 s',
      classification: 'Não informada pela fonte',
      rating: null,
      synopsis: 'Um coelho gigante e bem-humorado enfrenta três roedores travessos nesta comédia de animação do projeto aberto Peach, da Blender Foundation.',
      team: 'Blender Foundation. Os créditos finais completos da obra original foram mantidos.',
      credit: '© Blender Foundation | bigbuckbunny.org',
      license: 'Creative Commons Atribuição 3.0; exibição integral com créditos finais completos.',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
      source: 'https://peach.blender.org/about/',
      fileSource: 'https://commons.wikimedia.org/wiki/File:Big_Buck_Bunny_4K.webm',
      watchUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
      videoId: 'aqz-KE-bpKQ',
      playable: true,
    },
    {
      id: 'sintel',
      title: 'Sintel',
      year: 2010,
      genres: ['Fantasia', 'Aventura', 'Animação'],
      type: 'movie',
      image: '/images/sintel-poster.jpg',
      imageAlt: 'Pôster do filme de animação Sintel, do projeto Durian',
      duration: '14 min 48 s',
      classification: 'Não informada pela fonte',
      rating: null,
      synopsis: 'Uma jovem percorre um mundo de fantasia em uma busca que se transforma em uma jornada de coragem, perda e descoberta. Curta-metragem independente do projeto Durian.',
      team: 'Colin Levy (direção), Esther Wouda (roteiro), David Revoy (arte conceitual) e Jan Morgenstern (música).',
      credit: 'Blender Foundation — projeto Durian. Os créditos finais originais são exibidos integralmente.',
      license: 'Creative Commons Atribuição 3.0; obra e materiais do projeto liberados para distribuição.',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
      source: 'https://durian.blender.org/about/',
      fileSource: 'https://durian.blender.org/news/sintel-online-premiere/',
      watchUrl: 'https://www.youtube.com/watch?v=eRsGyueVLvQ',
      videoId: 'eRsGyueVLvQ',
      playable: true,
    },
    {
      id: 'tears-of-steel',
      title: 'Tears of Steel',
      year: 2012,
      genres: ['Ação', 'Ficção científica'],
      type: 'movie',
      image: '/images/tears-of-steel-poster.jpg',
      imageAlt: 'Pôster do filme de ficção científica Tears of Steel, projeto Mango',
      duration: '12 min 14 s',
      classification: '12+',
      rating: null,
      synopsis: 'Em uma Amsterdam futurista, cientistas e guerreiros encenam um acontecimento decisivo do passado para tentar salvar o mundo de robôs destrutivos.',
      team: 'Derek de Lint, Sergio Hasselbaink, Rogier Schippers, Vanja Rukavina, Denise Rebergen, Jody Bhe e Chris Haley. Direção e roteiro: Ian Hubert.',
      credit: '© Blender Foundation | mango.blender.org. Os créditos finais originais são exibidos integralmente.',
      license: 'Creative Commons Atribuição 3.0; exibição integral com os créditos finais.',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
      source: 'https://mango.blender.org/about/',
      fileSource: 'https://commons.wikimedia.org/wiki/File:Tears_of_Steel_1080p.webm',
      watchUrl: 'https://www.youtube.com/watch?v=R6MlUcmOul8',
      videoId: 'R6MlUcmOul8',
      playable: true,
    },
    {
      id: 'sprite-fright',
      title: 'Sprite Fright',
      year: 2021,
      genres: ['Terror', 'Comédia', 'Animação'],
      type: 'movie',
      image: '/images/sprite-fright-poster.webp',
      imageAlt: 'Pôster oficial de Sprite Fright, curta da Blender Studio',
      duration: '10 min 30 s',
      classification: 'Não informada pela fonte',
      rating: null,
      synopsis: 'Um grupo de adolescentes encontra criaturas de cogumelo em uma floresta isolada, numa comédia de terror inspirada nos anos 1980.',
      team: 'Blender Studio e Blender Foundation. Os créditos finais originais são preservados na reprodução oficial.',
      credit: '(CC) Blender Foundation | studio.blender.org',
      license: 'Creative Commons Atribuição 1.0, conforme a página oficial do projeto.',
      licenseUrl: 'https://creativecommons.org/licenses/by/1.0/',
      source: 'https://studio.blender.org/projects/sprite-fright/pages/about/',
      fileSource: 'https://studio.blender.org/projects/sprite-fright/pages/about/',
      watchUrl: 'https://www.youtube.com/watch?v=_cMxraX_5RE',
      videoId: '_cMxraX_5RE',
      playable: true,
    },
    {
      id: 'coffee-run',
      title: 'Coffee Run',
      year: 2020,
      genres: ['Romance', 'Animação'],
      type: 'movie',
      image: '/images/coffee-run-still.webp',
      imageAlt: 'Frame oficial de Coffee Run em uma cafeteria, publicado pela Blender Studio',
      duration: '3 min 5 s',
      classification: 'Não informada pela fonte',
      rating: null,
      synopsis: 'Movida a café, uma jovem atravessa as lembranças doces e amargas de um relacionamento passado.',
      team: 'Direção: Hjalti Hjalmarsson. Produção: Blender Studio.',
      credit: '(CC) Blender Foundation | studio.blender.org',
      license: 'Creative Commons Atribuição 4.0, conforme a página oficial do projeto.',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      source: 'https://studio.blender.org/projects/coffee-run/pages/licensing/',
      fileSource: 'https://studio.blender.org/projects/coffee-run/',
      watchUrl: 'https://www.youtube.com/watch?v=PVGeM40dABA',
      videoId: 'PVGeM40dABA',
      playable: true,
    },
  ];

  const app = document.getElementById('app');
  let playerInstance = null;
  let progressTimer = null;
  let pendingPlayerItem = null;
  let toastTimer = null;
  let youtubeApiPromise = null;

  function safeRead(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }

  function safeWrite(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      showToast('O armazenamento do navegador está indisponível.');
      return false;
    }
  }

  function getFavorites() {
    const value = safeRead(STORAGE.favorites, []);
    return Array.isArray(value) ? value.filter((id) => CATALOG.some((item) => item.id === id)) : [];
  }

  function getHistory() {
    const value = safeRead(STORAGE.history, {});
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  function getTitle(id) {
    return CATALOG.find((item) => item.id === id);
  }

  function escapeHtml(value = '') {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char]);
  }

  function normalizeText(value = '') {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .trim();
  }

  function formatTime(seconds = 0) {
    const value = Math.max(0, Math.floor(Number(seconds) || 0));
    const minutes = Math.floor(value / 60);
    const rest = value % 60;
    return `${minutes}:${String(rest).padStart(2, '0')}`;
  }

  function routePath() {
    const path = decodeURIComponent(window.location.pathname || '/');
    return path.length > 1 ? path.replace(/\/+$/, '') : '/';
  }

  function navigate(path, options = {}) {
    const [pathname, search = ''] = path.split('?');
    if (options.replace) history.replaceState({}, '', path);
    else history.pushState({}, '', path);
    render();
    if (!options.keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    if (search) window.history.replaceState({}, '', `${pathname}?${search}`);
  }

  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  function isCurrent(path) {
    const current = routePath();
    if (path === '/') return current === '/';
    return current === path || current.startsWith(`${path}/`);
  }

  function renderHeader() {
    const nav = [
      ['/', 'Início'],
      ['/filmes', 'Filmes'],
      ['/series', 'Séries'],
      ['/generos', 'Gêneros'],
      ['/minha-lista', 'Minha Lista'],
    ];
    const count = getFavorites().length;
    return `
      <header class="site-header" id="site-header">
        <div class="header-inner">
          <a class="brand" href="/" data-route="/" aria-label="ZyFilms, início">
            <img src="/images/zyfilms-symbol.svg" width="37" height="37" alt="" />
            <span class="brand-word">Zy<span>Films</span></span>
          </a>
          <button class="icon-button mobile-menu-button" type="button" data-action="toggle-menu" aria-label="Abrir menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <nav class="primary-nav" id="primary-nav" aria-label="Navegação principal">
            ${nav.map(([href, label]) => `<a href="${href}" data-route="${href}" class="nav-link ${isCurrent(href) ? 'is-active' : ''}" ${isCurrent(href) ? 'aria-current="page"' : ''}>${label}${href === '/minha-lista' && count ? `<span class="nav-count">${count}</span>` : ''}</a>`).join('')}
          </nav>
          <form class="search-form" id="header-search" role="search" aria-label="Pesquisar no catálogo">
            <label class="sr-only" for="site-search">Pesquisar por título, gênero ou ano</label>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m16 16 4.2 4.2"/></svg>
            <input id="site-search" name="busca" type="search" autocomplete="off" placeholder="Buscar filmes..." aria-label="Buscar por título, gênero ou ano" />
            <button type="submit" aria-label="Pesquisar">Buscar</button>
            <div class="search-suggestions" id="search-suggestions" hidden></div>
          </form>
          <a class="profile-link" href="/login" data-route="/login" aria-label="Entrar ou criar conta">
            <span class="profile-avatar" aria-hidden="true">Z</span><span class="profile-label">Entrar</span>
          </a>
        </div>
      </header>`;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="footer-main">
          <div class="footer-brand-block">
            <a class="brand footer-brand" href="/" data-route="/">
              <img src="/images/zyfilms-symbol.svg" width="34" height="34" alt="" />
              <span class="brand-word">Zy<span>Films</span></span>
            </a>
            <p>Seu próximo universo começa aqui.</p>
            <p class="footer-note">Filmes com fontes verificadas. Quando não há autorização confirmada, não há link de reprodução.</p>
          </div>
          <div class="footer-column"><h2>Explorar</h2><a href="/filmes" data-route="/filmes">Filmes</a><a href="/series" data-route="/series">Séries</a><a href="/generos" data-route="/generos">Gêneros</a><a href="/minha-lista" data-route="/minha-lista">Minha Lista</a></div>
          <div class="footer-column"><h2>Informações</h2><a href="/privacidade" data-route="/privacidade">Política de privacidade</a><a href="/termos" data-route="/termos">Termos de uso</a><span class="contact-note">Contato: canal ainda não configurado.</span></div>
        </div>
        <div class="footer-bottom"><span>© ZyFilms. Catálogo em construção responsável.</span><span class="signature">Zyron Devs (©Zyron 2026)</span></div>
      </footer>`;
  }

  function ratingText(item) {
    return item.rating ? `${item.rating}/10` : 'Sem avaliação verificada';
  }

  function cardMarkup(item) {
    const favorite = getFavorites().includes(item.id);
    const record = getHistory()[item.id];
    const progress = record && !record.completed ? Math.min(100, Math.round(record.progress || 0)) : 0;
    return `
      <article class="title-card" aria-label="${escapeHtml(item.title)}">
        <div class="poster-wrap">
          <a class="poster-link" href="/detalhes/${item.id}" data-route="/detalhes/${item.id}" aria-label="Mais informações sobre ${escapeHtml(item.title)}">
            <img src="${item.image}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async" />
            <span class="poster-shade"></span>
            <span class="poster-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg></span>
            <span class="poster-year">${item.year}</span>
          </a>
          <button class="favorite-button ${favorite ? 'is-favorite' : ''}" type="button" data-action="favorite" data-id="${item.id}" aria-pressed="${favorite}" aria-label="${favorite ? 'Remover de' : 'Adicionar à'} Minha Lista: ${escapeHtml(item.title)}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 8.8c0 4.2-8.4 10-8.4 10S3.6 13 3.6 8.8a4.1 4.1 0 0 1 7.2-2.7 4.1 4.1 0 0 1 7.2 2.7Z"/></svg>
          </button>
          ${progress ? `<span class="card-progress" aria-label="${progress}% assistido"><span style="width:${progress}%"></span></span>` : ''}
        </div>
        <div class="card-copy">
          <a href="/detalhes/${item.id}" data-route="/detalhes/${item.id}" class="card-title">${escapeHtml(item.title)}</a>
          <div class="card-meta"><span>${item.year}</span><i aria-hidden="true"></i><span>${escapeHtml(item.genres[0])}</span></div>
          <div class="card-proof"><span class="proof-age">${escapeHtml(item.classification === 'Não informada pela fonte' ? 'Classificação não informada' : item.classification)}</span><span class="proof-rating">${escapeHtml(ratingText(item))}</span></div>
          <button class="card-watch" type="button" data-action="watch" data-id="${item.id}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg> Assistir</button>
        </div>
      </article>`;
  }

  function emptyMessage(title, message, compact = false) {
    return `<div class="empty-state ${compact ? 'empty-compact' : ''}"><span class="empty-orbit" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg></span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div></div>`;
  }

  function railMarkup(title, items, options = {}) {
    const { subtitle = '', id = '', emptyTitle = 'Nenhum título disponível', emptyMessage: message = 'Ainda não há conteúdo autorizado confirmado nesta seção.', compact = false } = options;
    const safeId = id || `rail-${normalizeText(title).replace(/[^a-z0-9]+/g, '-')}`;
    return `
      <section class="content-section ${compact ? 'content-section-compact' : ''}" aria-labelledby="${safeId}-title">
        <div class="section-heading">
          <div><h2 id="${safeId}-title">${escapeHtml(title)}</h2>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ''}</div>
          ${items.length > 1 ? `<div class="rail-controls"><button type="button" data-action="scroll-rail" data-target="${safeId}" data-direction="left" aria-label="Rolar ${escapeHtml(title)} para a esquerda"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></button><button type="button" data-action="scroll-rail" data-target="${safeId}" data-direction="right" aria-label="Rolar ${escapeHtml(title)} para a direita"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></button></div>` : ''}
        </div>
        ${items.length ? `<div class="title-rail" id="${safeId}">${items.map(cardMarkup).join('')}</div>` : emptyMessage(emptyTitle, message, compact)}
      </section>`;
  }

  function getRecentItems() {
    const history = getHistory();
    return Object.entries(history)
      .filter(([id, entry]) => getTitle(id) && entry && !entry.completed && Number(entry.progress) > 1)
      .sort((a, b) => Number(b[1].updatedAt || 0) - Number(a[1].updatedAt || 0))
      .map(([id]) => getTitle(id));
  }

  function getRecommendedItems() {
    const favorites = getFavorites().map(getTitle).filter(Boolean);
    const recent = getRecentItems();
    const seeds = [...favorites, ...recent];
    if (!seeds.length) return [];
    const seedGenres = new Set(seeds.flatMap((item) => item.genres.map(normalizeText)));
    return CATALOG
      .filter((item) => !seeds.some((seed) => seed.id === item.id))
      .map((item) => ({ item, score: item.genres.filter((genre) => seedGenres.has(normalizeText(genre))).length }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }

  function genreLink(genre) {
    return `/filmes?genero=${encodeURIComponent(genre)}`;
  }

  function renderHome() {
    const hero = getTitle('big-buck-bunny');
    const recent = getRecentItems();
    const recommended = getRecommendedItems();
    const featured = CATALOG;
    const newest = CATALOG.filter((item) => item.year >= 2020).sort((a, b) => b.year - a.year);
    const genreRails = GENRES.map((genre) => {
      const matches = CATALOG.filter((item) => item.genres.some((value) => normalizeText(value) === normalizeText(genre)));
      return railMarkup(`Filmes de ${genre}`, matches, {
        id: `genre-${normalizeText(genre).replace(/[^a-z0-9]+/g, '-')}`,
        subtitle: matches.length ? 'Títulos com licença de reprodução verificada.' : '',
        compact: true,
        emptyTitle: 'Nenhum título autorizado nesta categoria',
        emptyMessage: 'Esta categoria ficará disponível quando encontrarmos uma fonte com permissão de exibição confirmada.',
      });
    }).join('');

    return `
      <section class="hero" aria-label="Destaque ZyFilms">
        <div class="hero-art" role="img" aria-label="Paisagem de ficção científica em preto e vermelho"></div>
        <div class="hero-scrim"></div>
        <div class="hero-content">
          <span class="eyebrow"><span class="live-dot"></span> CINEMA COM FONTES VERIFICADAS</span>
          <div class="hero-wordmark"><span class="hero-logo-mark">Z</span><span>ZYFILMS <i>ORIGINAL EXPERIENCE</i></span></div>
          <h1>Seu próximo<br class="desktop-break" /> universo começa aqui.</h1>
          <p class="hero-description">Curta histórias independentes e clássicos de acesso aberto. Cada reprodução tem origem autorizada — quando não há uma fonte confirmada, a gente avisa.</p>
          <div class="hero-meta"><span>5 curtas autorizados</span><span>2008—2021</span><span class="open-badge"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5 10 5l4 .6-2.9 2.8.7 4L8 10.5 4.2 12.4l.7-4L2 5.6 6 5z"/></svg> Licenças CC BY</span></div>
          <div class="hero-actions"><button class="button button-primary" type="button" data-action="watch" data-id="${hero.id}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg> Assistir agora</button><a class="button button-secondary" href="/detalhes/${hero.id}" data-route="/detalhes/${hero.id}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></svg> Mais informações</a></div>
          <p class="hero-source-note">O botão abre ${escapeHtml(hero.title)} no player oficial · arte original ZyFilms</p>
        </div>
        <div class="hero-index"><span>01</span><i></i><span>01</span></div>
        <div class="hero-bottom-line"><span>HISTÓRIAS LIVRES. CRÉDITOS PRESERVADOS.</span><span>SCROLL PARA DESCOBRIR <b>↓</b></span></div>
      </section>
      <div class="home-content">
        <div class="trust-strip"><span class="trust-icon"><svg viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.4c0 4.6 3.2 7.8 7.5 9.6 4.3-1.8 7.5-5 7.5-9.6V6z"/><path d="m9 12 2 2 4-4"/></svg></span><p><strong>Gratuito e com procedência.</strong> Reproduções incorporadas de fontes autorizadas, sem links improvisados.</p><a href="/termos" data-route="/termos">Como funciona <span aria-hidden="true">↗</span></a></div>
        ${railMarkup('Filmes populares', [], { id: 'popular', compact: true, emptyTitle: 'Popularidade ainda sem métricas verificáveis', emptyMessage: 'Não exibimos rankings nem notas inventados. Explore abaixo os destaques com licença confirmada.' })}
        ${railMarkup('Séries em destaque', [], { id: 'series-featured', compact: true, emptyTitle: 'Nenhuma série autorizada confirmada ainda', emptyMessage: 'A seção será preenchida quando houver uma série com fonte de reprodução e direitos verificados.' })}
        ${railMarkup('Lançamentos recentes', newest, { id: 'recent-releases', subtitle: 'Obras mais recentes desta curadoria aberta.', compact: true, emptyTitle: 'Sem lançamentos recentes verificados', emptyMessage: 'Ainda não há obras recentes com reprodução autorizada nesta curadoria.' })}
        ${railMarkup('Destaques de acesso aberto', featured, { id: 'open-highlights', subtitle: 'Curtas com licença e fonte de reprodução identificadas.' })}
        ${genreRails}
        ${railMarkup('Continue assistindo', recent, { id: 'continue-watching', subtitle: 'Seu histórico permanece somente neste navegador.', compact: true, emptyTitle: 'Sua próxima sessão começa quando você quiser', emptyMessage: 'Ao iniciar um filme, sua posição de reprodução será salva localmente para você continuar depois.' })}
        ${railMarkup('Recomendados para você', recommended, { id: 'recommendations', subtitle: 'Sugestões calculadas no seu dispositivo a partir da sua lista e do histórico.', compact: true, emptyTitle: 'As recomendações começam com a sua lista', emptyMessage: 'Adicione um título à Minha Lista ou assista a um filme. As sugestões serão baseadas apenas nas suas escolhas locais.' })}
      </div>`;
  }

  function filteredCatalog() {
    const query = new URLSearchParams(location.search);
    const term = normalizeText(query.get('busca') || query.get('q') || '');
    const genre = normalizeText(query.get('genero') || '');
    const year = query.get('ano') || '';
    return CATALOG.filter((item) => {
      const matchesText = !term || normalizeText(`${item.title} ${item.genres.join(' ')} ${item.year}`).includes(term);
      const matchesGenre = !genre || item.genres.some((value) => normalizeText(value) === genre);
      const matchesYear = !year || String(item.year) === year;
      return matchesText && matchesGenre && matchesYear;
    });
  }

  function renderCatalogPage() {
    const params = new URLSearchParams(location.search);
    const query = params.get('busca') || params.get('q') || '';
    const genre = params.get('genero') || '';
    const year = params.get('ano') || '';
    const results = filteredCatalog();
    const years = [...new Set(CATALOG.map((item) => item.year))].sort((a, b) => b - a);
    const title = genre ? `Filmes de ${genre}` : query ? `Resultados para “${query}”` : 'Filmes';
    return `
      <section class="page-intro">
        <span class="eyebrow">CATÁLOGO ABERTO</span><h1>${escapeHtml(title)}</h1>
        <p>Obras com informações e fontes verificadas. A disponibilidade pode depender do player oficial.</p>
      </section>
      <section class="catalog-page content-section" aria-label="Catálogo de filmes">
        <form id="catalog-filters" class="filter-bar">
          <label class="filter-search"><span>Buscar</span><input name="busca" type="search" value="${escapeHtml(query)}" placeholder="Título, gênero ou ano" /></label>
          <label><span>Gênero</span><select name="genero"><option value="">Todos</option>${[...new Set(CATALOG.flatMap((item) => item.genres))].sort((a, b) => a.localeCompare(b, 'pt-BR')).map((value) => `<option value="${escapeHtml(value)}" ${normalizeText(value) === normalizeText(genre) ? 'selected' : ''}>${escapeHtml(value)}</option>`).join('')}</select></label>
          <label><span>Ano</span><select name="ano"><option value="">Todos</option>${years.map((value) => `<option value="${value}" ${String(value) === year ? 'selected' : ''}>${value}</option>`).join('')}</select></label>
          <button class="button button-primary filter-submit" type="submit">Aplicar filtros</button>
          ${(query || genre || year) ? '<button class="clear-filters" type="button" data-action="clear-filters">Limpar filtros</button>' : ''}
        </form>
        <div class="result-count">${results.length} ${results.length === 1 ? 'título com fonte autorizada' : 'títulos com fontes autorizadas'}</div>
        ${results.length ? `<div class="catalog-grid">${results.map(cardMarkup).join('')}</div>` : emptyMessage('Nada encontrado com esses filtros', 'Tente outro título, gênero ou ano. Não mostramos conteúdo sem uma fonte autorizada confirmada.')}
      </section>`;
  }

  function renderListPage() {
    const titles = getFavorites().map(getTitle).filter(Boolean);
    return `
      <section class="page-intro page-intro-list"><span class="eyebrow">GUARDADO NESTE DISPOSITIVO</span><h1>Minha Lista</h1><p>Seus favoritos ficam somente no armazenamento local deste navegador.</p></section>
      <section class="content-section list-page">${titles.length ? `<div class="catalog-grid">${titles.map(cardMarkup).join('')}</div>` : emptyMessage('Sua lista começa com um favorito', 'Use o botão de coração em qualquer filme para guardá-lo neste dispositivo.')}</section>`;
  }

  function renderSeriesPage() {
    return `
      <section class="page-intro"><span class="eyebrow">SÉRIES</span><h1>Séries em destaque</h1><p>Somente séries com direitos e fonte de reprodução autorizada entrarão neste catálogo.</p></section>
      <section class="content-section">${emptyMessage('Nenhuma série confirmada para exibição', 'Ainda não há uma série com temporadas, episódios e origem de reprodução verificados. Não usamos títulos fictícios para preencher esta seção.')}</section>`;
  }

  function renderGenresPage() {
    const genreCards = GENRES.map((genre, index) => {
      const count = CATALOG.filter((item) => item.genres.some((value) => normalizeText(value) === normalizeText(genre))).length;
      return `<a class="genre-tile genre-tile-${index + 1}" href="${genreLink(genre)}" data-route="${genreLink(genre)}"><span class="genre-number">0${index + 1}</span><span class="genre-name">${escapeHtml(genre)}</span><span class="genre-count">${count ? `${count} ${count === 1 ? 'título confirmado' : 'títulos confirmados'}` : 'Nenhum título confirmado'}</span><span class="genre-arrow" aria-hidden="true">↗</span></a>`;
    }).join('');
    return `
      <section class="page-intro"><span class="eyebrow">ENCONTRE SEU GÊNERO</span><h1>Uma história para cada clima.</h1><p>As categorias vazias só serão liberadas após confirmação de uma fonte autorizada.</p></section>
      <section class="content-section genres-grid" aria-label="Gêneros do catálogo">${genreCards}</section>`;
  }

  function renderDetailPage(item) {
    const related = CATALOG.filter((candidate) => candidate.id !== item.id && candidate.genres.some((genre) => item.genres.some((itemGenre) => normalizeText(itemGenre) === normalizeText(genre))));
    const favorite = getFavorites().includes(item.id);
    return `
      <section class="detail-page">
        <div class="detail-back"><a href="/filmes" data-route="/filmes"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg> Voltar ao catálogo</a></div>
        <div class="detail-hero">
          <div class="detail-poster"><img src="${item.image}" alt="${escapeHtml(item.imageAlt)}" loading="eager" /></div>
          <div class="detail-copy">
            <span class="eyebrow">${item.type === 'movie' ? 'CURTA-METRAGEM' : 'SÉRIE' } · FONTE VERIFICADA</span>
            <h1>${escapeHtml(item.title)}</h1>
            <div class="detail-meta"><span>${item.year}</span><i></i><span>${escapeHtml(item.duration)}</span><i></i><span>${escapeHtml(item.classification)}</span></div>
            <div class="detail-genres">${item.genres.map((genre) => `<a href="${genreLink(genre)}" data-route="${genreLink(genre)}">${escapeHtml(genre)}</a>`).join('')}</div>
            <p class="detail-synopsis">${escapeHtml(item.synopsis)}</p>
            <div class="detail-rating"><span class="rating-mark">—</span><span><strong>${escapeHtml(ratingText(item))}</strong><small>Não inventamos notas sem avaliações verificáveis.</small></span></div>
            <div class="detail-actions"><button class="button button-primary" type="button" data-action="watch" data-id="${item.id}"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg> Assistir agora</button><button class="button button-secondary" type="button" data-action="favorite" data-id="${item.id}" aria-pressed="${favorite}"><svg viewBox="0 0 24 24"><path d="M20.4 8.8c0 4.2-8.4 10-8.4 10S3.6 13 3.6 8.8a4.1 4.1 0 0 1 7.2-2.7 4.1 4.1 0 0 1 7.2 2.7Z"/></svg> ${favorite ? 'Na Minha Lista' : 'Adicionar à Minha Lista'}</button></div>
            <div class="source-card"><span class="source-check"><svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></span><div><strong>Reprodução autorizada</strong><p>${escapeHtml(item.license)}</p><a href="${item.source}" target="_blank" rel="noopener noreferrer">Ver fonte oficial <span aria-hidden="true">↗</span></a></div></div>
          </div>
        </div>
        <div class="detail-info-grid">
          <section class="info-panel"><span class="info-label">Elenco e equipe</span><p>${escapeHtml(item.team)}</p></section>
          <section class="info-panel"><span class="info-label">Duração</span><p>${escapeHtml(item.duration)} · Filme sem episódios</p></section>
          <section class="info-panel"><span class="info-label">Classificação</span><p>${escapeHtml(item.classification)}</p></section>
          <section class="info-panel"><span class="info-label">Nota dos usuários</span><p>${escapeHtml(ratingText(item))}</p></section>
        </div>
        <section class="attribution-panel"><h2>Créditos e licença</h2><p>${escapeHtml(item.credit)}</p><p>${escapeHtml(item.license)} A reprodução é feita sem cortes pelo player oficial e preserva os créditos da obra.</p><div><a href="${item.fileSource}" target="_blank" rel="noopener noreferrer">Consultar registro da obra <span aria-hidden="true">↗</span></a><a href="${item.licenseUrl}" target="_blank" rel="noopener noreferrer">Ler a licença correspondente <span aria-hidden="true">↗</span></a></div></section>
      </section>
      ${railMarkup('Você também pode descobrir', related, { id: 'related', subtitle: 'Recomendações por gênero dentro do catálogo aberto.' })}`;
  }

  function renderPlayerPage(item) {
    if (!item.playable || !item.videoId) return `<section class="page-intro">${emptyMessage('Vídeo indisponível', 'Não foi encontrada uma fonte autorizada para reprodução.')}</section>`;
    const progress = getHistory()[item.id];
    const resume = progress && !progress.completed && Number(progress.currentTime) > 30;
    return `
      <section class="watch-page">
        <div class="watch-topline"><a href="/detalhes/${item.id}" data-route="/detalhes/${item.id}"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg> Detalhes</a><span class="watch-source"><i></i> FONTE OFICIAL</span></div>
        <div class="watch-heading"><div><span class="eyebrow">${item.year} · ${escapeHtml(item.genres.join(' / '))}</span><h1>${escapeHtml(item.title)}</h1></div><span class="watch-duration">${escapeHtml(item.duration)}</span></div>
        <div class="video-frame"><div id="youtube-player" aria-label="Player oficial de ${escapeHtml(item.title)}"></div><div class="player-overlay-status" id="player-status" role="status"><span class="spinner"></span><span>Conectando ao player oficial…</span></div></div>
        <div class="player-note"><span><svg viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.4c0 4.6 3.2 7.8 7.5 9.6 4.3-1.8 7.5-5 7.5-9.6V6z"/><path d="m9 12 2 2 4-4"/></svg></span><p><strong>Player da fonte autorizada.</strong> Reprodução, volume, tela cheia, progresso, qualidade e legendas são controlados pelo player oficial quando disponíveis. O histórico local registra o seu progresso neste dispositivo.</p></div>
        ${resume ? `<div class="resume-banner"><p>Você parou em <strong>${formatTime(progress.currentTime)}</strong> (${Math.round(progress.progress)}%).</p><button type="button" class="button button-secondary" data-action="resume-play" data-id="${item.id}">Continuar de onde parei</button></div>` : ''}
        <div class="watch-details"><div><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.synopsis)}</p></div><a href="${item.watchUrl}" target="_blank" rel="noopener noreferrer">Abrir no canal oficial <span aria-hidden="true">↗</span></a></div>
        <p class="player-attribution">${escapeHtml(item.credit)} · <a href="${item.source}" target="_blank" rel="noopener noreferrer">Licença e créditos <span aria-hidden="true">↗</span></a></p>
        ${item.type === 'series' ? '<div class="episode-selector">Selecione um episódio</div>' : ''}
      </section>`;
  }

  function renderLoginPage(signup = false) {
    const title = signup ? 'Crie seu espaço.' : 'Volte ao seu universo.';
    const submit = signup ? 'Criar conta' : 'Entrar';
    return `
      <section class="auth-page">
        <div class="auth-art"><img src="/manus-storage/async-images/TS4fXCt5oNp6MAfqbup800/image-1.webp" alt="" /><div class="auth-art-copy"><span class="eyebrow">ZYFILMS</span><h1>Histórias que<br/>começam com um play.</h1><p>Seu próximo universo começa aqui.</p></div></div>
        <div class="auth-form-wrap"><a class="auth-back" href="/" data-route="/"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg> Início</a><div class="auth-form-head"><span class="eyebrow">${signup ? 'NOVO POR AQUI?' : 'BEM-VINDO DE VOLTA'}</span><h2>${title}</h2><p>${signup ? 'Crie uma conta para acompanhar o seu catálogo.' : 'Entre para continuar descobrindo histórias.'}</p></div>
          <form class="auth-form" data-auth-form="${signup ? 'signup' : 'login'}">
            ${signup ? '<label>Seu nome<input name="nome" type="text" autocomplete="name" placeholder="Como podemos chamar você?" minlength="2" required /></label>' : ''}
            <label>E-mail<input name="email" type="email" autocomplete="email" placeholder="voce@email.com" required /></label>
            <label>Senha<input name="senha" type="password" autocomplete="${signup ? 'new-password' : 'current-password'}" minlength="8" placeholder="Mínimo de 8 caracteres" required /></label>
            ${signup ? '<label class="check-label"><input type="checkbox" name="termos" required /><span>Li os <a href="/termos" data-route="/termos">termos de uso</a> e a <a href="/privacidade" data-route="/privacidade">política de privacidade</a>.</span></label>' : '<div class="form-help-row"><label class="check-label"><input type="checkbox" name="lembrar" /><span>Lembrar neste dispositivo</span></label><span>Senha não armazenada</span></div>'}
            <button class="button button-primary auth-submit" type="submit">${submit}<svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button>
            <p class="auth-feedback" role="status" hidden></p>
          </form>
          <p class="auth-switch">${signup ? 'Já tem cadastro?' : 'Ainda não tem cadastro?'} <a href="${signup ? '/login' : '/cadastro'}" data-route="${signup ? '/login' : '/cadastro'}">${signup ? 'Entrar' : 'Criar conta'}</a></p>
          <p class="auth-demo-note"><svg viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.4c0 4.6 3.2 7.8 7.5 9.6 4.3-1.8 7.5-5 7.5-9.6V6z"/><path d="M12 8v4m0 4h.01"/></svg> Demonstração visual. Autenticação real não está configurada; estes campos não enviam nem guardam sua senha.</p>
        </div>
      </section>`;
  }

  function renderInfoPage(kind) {
    if (kind === 'privacidade') {
      return `<section class="text-page"><span class="eyebrow">TRANSPARÊNCIA</span><h1>Política de privacidade</h1><p class="text-lead">Esta versão de demonstração funciona sem conta real e sem servidor de cadastro.</p><section><h2>Dados guardados no navegador</h2><p>Favoritos e posição do histórico ficam no armazenamento local deste dispositivo para alimentar Minha Lista, Continue assistindo e recomendações. Você pode removê-los limpando os dados locais do site no navegador.</p></section><section><h2>Serviços de terceiros</h2><p>Ao iniciar um filme, o vídeo é carregado pelo player oficial do YouTube. Esse serviço pode tratar dados segundo as próprias configurações e políticas. O ZyFilms não recebe nem grava sua senha.</p><p>Fontes: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidade do Google</a>.</p></section><section><h2>Contas e contato</h2><p>Os formulários de login e cadastro são apenas visuais. Nenhum endereço, senha ou cadastro é enviado. Um canal de contato ainda não foi configurado para esta demonstração.</p></section></section>`;
    }
    return `<section class="text-page"><span class="eyebrow">REGRAS DO CATÁLOGO</span><h1>Termos de uso</h1><p class="text-lead">O ZyFilms mostra somente conteúdo com fonte de reprodução e autorização verificadas.</p><section><h2>Licenças e créditos</h2><p>As obras exibidas usam licenças Creative Commons de atribuição. A versão e os créditos específicos aparecem na página de cada título. A reprodução usa o player oficial e preserva a obra integral, inclusive os créditos finais exigidos pelos titulares.</p></section><section><h2>Disponibilidade</h2><p>Um título sem fonte autorizada não recebe link de reprodução. A disponibilidade do player depende do canal que hospeda o vídeo. O ZyFilms não hospeda nem redistribui os arquivos de vídeo.</p></section><section><h2>Recursos e contas</h2><p>Favoritos, histórico e recomendações ficam localmente no navegador. Login e cadastro são demonstrações visuais: não criam uma conta, não transmitem dados e não armazenam senhas.</p></section></section>`;
  }

  function renderNotFound() {
    return `<section class="not-found"><span class="eyebrow">404 · FORA DO CATÁLOGO</span><h1>Este universo ainda não existe.</h1><p>O ZyFilms não inventa páginas nem links de reprodução.</p><a class="button button-primary" href="/" data-route="/">Voltar ao início</a></section>`;
  }

  function routeContent() {
    const path = routePath();
    if (path === '/') return renderHome();
    if (path === '/filmes') return renderCatalogPage();
    if (path === '/series') return renderSeriesPage();
    if (path === '/generos') return renderGenresPage();
    if (path === '/minha-lista') return renderListPage();
    if (path === '/login') return renderLoginPage(false);
    if (path === '/cadastro') return renderLoginPage(true);
    if (path === '/privacidade') return renderInfoPage('privacidade');
    if (path === '/termos') return renderInfoPage('termos');
    const details = path.match(/^\/detalhes\/([a-z0-9-]+)$/i);
    if (details) {
      const item = getTitle(details[1]);
      return item ? renderDetailPage(item) : renderNotFound();
    }
    const watch = path.match(/^\/assistir\/([a-z0-9-]+)$/i);
    if (watch) {
      const item = getTitle(watch[1]);
      pendingPlayerItem = item || null;
      return item ? renderPlayerPage(item) : renderNotFound();
    }
    pendingPlayerItem = null;
    return renderNotFound();
  }

  function render() {
    cleanupPlayer();
    app.innerHTML = `${renderHeader()}<main id="main-content" tabindex="-1">${routeContent()}</main>${renderFooter()}`;
    const titleNode = app.querySelector('.auth-form-head h2') || app.querySelector('main h1');
    const pageTitle = titleNode?.textContent.replace(/\s+/g, ' ').trim();
    if (pageTitle) document.title = `${pageTitle} | ZyFilms`;
    app.setAttribute('aria-busy', 'false');
    wireImages();
    if (routePath().startsWith('/assistir/')) {
      const item = pendingPlayerItem;
      if (item) loadOfficialPlayer(item);
    }
  }

  function wireImages() {
    app.querySelectorAll('img').forEach((image) => {
      image.addEventListener('error', () => {
        image.classList.add('image-unavailable');
        image.alt = 'Imagem indisponível';
      }, { once: true });
    });
  }

  function updateHeaderOnScroll() {
    const header = document.getElementById('site-header');
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 18);
  }

  function toggleFavorite(id) {
    const current = new Set(getFavorites());
    const wasFavorite = current.has(id);
    if (wasFavorite) current.delete(id);
    else current.add(id);
    if (!safeWrite(STORAGE.favorites, [...current])) return;
    const scrollY = window.scrollY;
    render();
    window.scrollTo({ top: scrollY, behavior: 'instant' });
    showToast(wasFavorite ? 'Removido da Minha Lista.' : 'Adicionado à Minha Lista.');
  }

  function clearFilters() {
    navigate('/filmes');
  }

  function scrollRail(button) {
    const rail = document.getElementById(button.dataset.target);
    if (!rail) return;
    const amount = Math.max(rail.clientWidth * 0.8, 260);
    rail.scrollBy({ left: button.dataset.direction === 'left' ? -amount : amount, behavior: 'smooth' });
  }

  function handleClick(event) {
    const routeLink = event.target.closest('[data-route]');
    if (routeLink) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate(routeLink.dataset.route);
      return;
    }

    const button = event.target.closest('[data-action]');
    if (!button) return;
    const { action, id } = button.dataset;

    if (action === 'favorite') {
      event.preventDefault();
      toggleFavorite(id);
    } else if (action === 'watch') {
      event.preventDefault();
      const item = getTitle(id);
      if (item && item.playable) navigate(`/assistir/${id}`);
      else showToast('Não encontramos uma fonte autorizada para este vídeo.');
    } else if (action === 'resume-play') {
      if (playerInstance && typeof playerInstance.seekTo === 'function') {
        const position = Number(getHistory()[id]?.currentTime || 0);
        playerInstance.seekTo(position, true);
        playerInstance.playVideo();
      }
    } else if (action === 'scroll-rail') {
      scrollRail(button);
    } else if (action === 'clear-filters') {
      clearFilters();
    } else if (action === 'toggle-menu') {
      const nav = document.getElementById('primary-nav');
      const open = nav?.classList.toggle('menu-open') || false;
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }
  }

  function handleSubmit(event) {
    const form = event.target;
    if (form.id === 'header-search') {
      event.preventDefault();
      const data = new FormData(form);
      const query = String(data.get('busca') || '').trim();
      navigate(query ? `/filmes?busca=${encodeURIComponent(query)}` : '/filmes');
      return;
    }
    if (form.id === 'catalog-filters') {
      event.preventDefault();
      const data = new FormData(form);
      const params = new URLSearchParams();
      ['busca', 'genero', 'ano'].forEach((field) => {
        const value = String(data.get(field) || '').trim();
        if (value) params.set(field, value);
      });
      navigate(`/filmes${params.size ? `?${params.toString()}` : ''}`);
      return;
    }
    if (form.matches('[data-auth-form]')) {
      event.preventDefault();
      const feedback = form.querySelector('.auth-feedback');
      if (feedback) {
        feedback.hidden = false;
        feedback.textContent = 'Autenticação real não está configurada. Nenhum dado foi enviado ou armazenado.';
      }
      form.querySelector('button[type="submit"]')?.classList.add('is-confirmed');
    }
  }

  function handleInput(event) {
    if (event.target.id === 'site-search') {
      const holder = document.getElementById('search-suggestions');
      if (!holder) return;
      const query = normalizeText(event.target.value);
      if (query.length < 2) {
        holder.hidden = true;
        holder.innerHTML = '';
        return;
      }
      const hits = CATALOG.filter((item) => normalizeText(`${item.title} ${item.genres.join(' ')} ${item.year}`).includes(query)).slice(0, 4);
      holder.innerHTML = hits.length
        ? hits.map((item) => `<a href="/detalhes/${item.id}" data-route="/detalhes/${item.id}"><img src="${item.image}" alt="" loading="lazy" /><span><strong>${escapeHtml(item.title)}</strong><small>${item.year} · ${escapeHtml(item.genres.join(' / '))}</small></span><b>↗</b></a>`).join('')
        : `<p class="suggestion-empty">Nenhum título verificado para essa busca.</p>`;
      holder.hidden = false;
      wireImages();
    }
  }

  function cleanupPlayer() {
    window.clearInterval(progressTimer);
    progressTimer = null;
    if (playerInstance && typeof playerInstance.destroy === 'function') {
      try { playerInstance.destroy(); } catch { /* Player já desmontado. */ }
    }
    playerInstance = null;
  }

  function loadYouTubeApi() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (youtubeApiPromise) return youtubeApiPromise;
    youtubeApiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      const script = document.querySelector('script[data-youtube-iframe-api]') || document.createElement('script');
      let settled = false;
      let timeout = null;
      const finish = (error = null) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeout);
        if (window.onYouTubeIframeAPIReady === handleReady) {
          window.onYouTubeIframeAPIReady = previous || null;
        }
        if (error) {
          script.remove();
          youtubeApiPromise = null;
          reject(error);
          return;
        }
        if (typeof previous === 'function') {
          try { previous(); } catch { /* Callback externo não deve bloquear o player. */ }
        }
        resolve(window.YT);
      };
      const handleReady = () => {
        if (window.YT && window.YT.Player) finish();
        else finish(new Error('A API oficial carregou sem disponibilizar o player.'));
      };
      window.onYouTubeIframeAPIReady = handleReady;
      timeout = window.setTimeout(() => finish(new Error('Tempo esgotado ao carregar o player oficial.')), 12000);
      if (!script.isConnected) {
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        script.dataset.youtubeIframeApi = 'true';
        document.head.appendChild(script);
      }
      script.onerror = () => finish(new Error('Não foi possível carregar o player oficial.'));
    });
    return youtubeApiPromise;
  }

  function setPlayerStatus(message, isError = false) {
    const status = document.getElementById('player-status');
    if (!status) return;
    status.classList.toggle('is-error', isError);
    status.innerHTML = isError
      ? `<span class="player-status-icon">!</span><span>${escapeHtml(message)}</span>`
      : `<span class="spinner"></span><span>${escapeHtml(message)}</span>`;
  }

  function savePlayerProgress(item, player) {
    if (!player || typeof player.getCurrentTime !== 'function') return;
    const duration = Number(player.getDuration?.() || 0);
    const currentTime = Number(player.getCurrentTime?.() || 0);
    if (!duration || !currentTime) return;
    const history = getHistory();
    const progress = Math.max(0, Math.min(100, (currentTime / duration) * 100));
    const completed = progress >= 96;
    history[item.id] = {
      currentTime: Math.floor(currentTime),
      duration: Math.floor(duration),
      progress: Math.round(progress * 10) / 10,
      completed,
      updatedAt: Date.now(),
    };
    safeWrite(STORAGE.history, history);
  }

  async function loadOfficialPlayer(item) {
    setPlayerStatus('Conectando ao player oficial…');
    try {
      const YT = await loadYouTubeApi();
      if (routePath() !== `/assistir/${item.id}`) return;
      const placeholder = document.getElementById('youtube-player');
      if (!placeholder) return;
      const mount = document.createElement('div');
      mount.id = 'youtube-player-frame';
      mount.className = 'youtube-player-frame';
      placeholder.replaceWith(mount);
      playerInstance = new YT.Player(mount.id, {
        host: 'https://www.youtube-nocookie.com',
        videoId: item.videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 0,
          controls: 1,
          enablejsapi: 1,
          fs: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            setPlayerStatus('Player oficial pronto');
            window.setTimeout(() => {
              const status = document.getElementById('player-status');
              if (status && !status.classList.contains('is-error')) status.classList.add('is-ready');
            }, 900);
            const prior = getHistory()[item.id];
            if (prior && !prior.completed && Number(prior.currentTime) > 30) {
              showToast(`Há um progresso salvo em ${formatTime(prior.currentTime)}. Use “Continuar de onde parei” para retomar.`);
            }
            event.target.setVolume(80);
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              setPlayerStatus('');
              document.getElementById('player-status')?.classList.add('is-ready');
              window.clearInterval(progressTimer);
              progressTimer = window.setInterval(() => savePlayerProgress(item, event.target), 1500);
            } else {
              window.clearInterval(progressTimer);
              progressTimer = null;
              if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) savePlayerProgress(item, event.target);
              if (event.data === YT.PlayerState.ENDED) {
                showToast('Filme concluído. Os créditos finais foram exibidos pelo player oficial.');
                render();
              }
            }
          },
          onError: () => {
            setPlayerStatus('Este vídeo está indisponível no player oficial. Você pode conferir a fonte autorizada.', true);
          },
        },
      });
    } catch (error) {
      setPlayerStatus(error.message || 'Não foi possível carregar o player oficial. Confira a fonte autorizada.', true);
    }
  }

  app.addEventListener('click', handleClick);
  app.addEventListener('submit', handleSubmit);
  app.addEventListener('input', handleInput);
  window.addEventListener('popstate', render);
  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const nav = document.getElementById('primary-nav');
      if (!nav?.classList.contains('menu-open')) return;
      nav.classList.remove('menu-open');
      const toggle = document.querySelector('[data-action="toggle-menu"]');
      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.setAttribute('aria-label', 'Abrir menu');
      toggle?.focus();
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && playerInstance && pendingPlayerItem) savePlayerProgress(pendingPlayerItem, playerInstance);
  });

  render();
})();
