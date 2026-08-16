/* ============================================================
   个人主页 · 渲染与语言切换逻辑
   ------------------------------------------------------------
   - 页面内容全部来自 content.js 中的 SITE 数据。
   - render(lang) 根据 en/zh 生成整个页面，切换语言时重新渲染。
   - 语言偏好保存在浏览器 localStorage 中。
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'panpanji_lang';
  const stored = (function () {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  })();
  /* URL 参数 ?lang=zh / ?lang=en 优先于本地存储，便于分享指定语言版本 */
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  let lang = (urlLang === 'zh' || urlLang === 'en')
    ? urlLang
    : (stored === 'en' || stored === 'zh') ? stored : 'en';

  /* ---------- 通用转义（内容来自自己的配置文件） ---------- */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- 取当前语言下的内容块 ---------- */
  function L() {
    return {
      nav: SITE.nav[lang],
      profile: SITE.profile[lang],
      about: SITE.about[lang],
      education: SITE.education[lang],
      projectsMeta: SITE.projectsMeta[lang],
      publications: SITE.publications[lang],
      skills: SITE.skills[lang],
      trajectory: SITE.trajectory[lang],
      field: SITE.field[lang],
      footer: SITE.footer[lang]
    };
  }

  function setLang(newLang) {
    lang = newLang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
    document.title = (lang === 'zh') ? '冀盼盼（Panpan Ji）| 学术主页' : 'Panpan Ji | Academic Homepage';
    document.body.classList.toggle('zh', lang === 'zh');
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  /* ---------- 渲染函数：从 SITE 数据生成整个页面 ---------- */
  function render() {
    const C = L();

    const header = `
      <header class="site-header" id="top">
        <div class="lang-switch" role="group" aria-label="Language / 语言">
          <button type="button" data-lang-btn="en" class="lang-btn">EN</button>
          <button type="button" data-lang-btn="zh" class="lang-btn">CN</button>
        </div>
        <div class="hero">
          <div class="avatar-wrap">
            <img class="avatar" src="avatar.jpg" alt="Panpan Ji" width="480" height="480">
          </div>
          <div class="hero-text">
            <div class="hero-eyebrow">${esc(C.profile.eyebrow)}</div>
            <h1 class="hero-name">Panpan Ji <span class="hero-zhname">${esc(C.profile.zhName)}</span></h1>
            <div class="hero-contact">
              <span class="contact-item">
                <span class="contact-label">${esc(C.profile.email)}</span>
                <a href="mailto:panpan_ji@outlook.com">panpan_ji@outlook.com</a>
              </span>
              <span class="contact-item">
                <span class="contact-label">${esc(C.profile.location)}</span>
                <span>${esc(C.profile.locationValue)}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="spectral-bar" aria-hidden="true"></div>
      </header>`;

    const nav = `
      <nav class="site-nav" aria-label="Main navigation">
        ${C.nav.map(function (item, i) {
          const ids = ['#about', '#education', '#publications', '#skills', '#trajectory', '#projects', '#field'];
          return `<a href="${ids[i]}">${esc(item)}</a>`;
        }).join('')}
      </nav>`;

    const about = `
      <section class="section" id="about">
        <h2>${esc(C.about.heading)}</h2>
        <p>${esc(C.about.text)}</p>
        <div class="tags">
          ${C.about.profile.map(function (item) { return `<span class="tag">${esc(item)}</span>`; }).join('')}
        </div>
      </section>`;

    const education = `
      <section class="section" id="education">
        <h2>${esc(C.education.heading)}</h2>
        <div class="card">
          ${C.education.entries.map(function (e) {
            return `
            <div class="entry">
              <div class="entry-row">
                <span class="entry-title">${esc(e.degree)}</span>
                <span class="entry-period mono">${esc(e.period)}</span>
              </div>
              <div class="entry-meta mono">${esc(e.school)} · ${esc(e.place)}</div>
            </div>`;
          }).join('')}
        </div>
      </section>`;

    /* 项目卡片：科研 / 课程项目共用模板 */
    function projCard(proj, badge) {
      const T = proj[lang];
      const isCourse = proj.type === 'coursework';
      return `
        <article class="project ${isCourse ? 'course' : ''}" id="${proj.id}">
          <div class="proj-head">
            <span class="proj-type mono">${esc(badge)}</span>
            <h3>${esc(T.title)}</h3>
            <div class="proj-meta mono">
              <span>${esc(proj.period)}</span><span class="sep">·</span><span>${esc(proj.role)}</span><span class="sep">·</span><span>${esc(proj.site)}</span>
            </div>
            <div class="proj-supervisor">${esc(proj.supervisor)}</div>
          </div>
          <dl class="proj-fields">
            <div class="field"><dt>${esc(C.projectsMeta.keywordsLabel)}</dt><dd class="tags">
              ${T.keywords.map(function (k) { return `<span class="tag">${esc(k)}</span>`; }).join('')}
            </dd></div>
            <div class="field"><dt>${esc(C.projectsMeta.problemLabel)}</dt><dd>${esc(T.problem)}</dd></div>
            <div class="field"><dt>${esc(C.projectsMeta.approachLabel)}</dt><dd>${esc(T.approach)}</dd></div>
            <div class="field"><dt>${esc(C.projectsMeta.resultsLabel)}</dt><dd>${esc(T.results)}</dd></div>
            ${isCourse ? '' : `<div class="field"><dt>${esc(C.projectsMeta.outputLabel)}</dt><dd>${esc(T.output)}</dd></div>`}
            <div class="field"><dt>${esc(C.projectsMeta.skillsLabel)}</dt><dd>${esc(T.skills)}</dd></div>
          </dl>
        </article>`;
    }

    const researchProjects = SITE.projects
      .filter(function (p) { return p.type !== 'coursework'; })
      .map(function (p) { return projCard(p, C.projectsMeta.researchBadge); })
      .join('');
    const courseProjects = SITE.projects
      .filter(function (p) { return p.type === 'coursework'; })
      .map(function (p) { return projCard(p, C.projectsMeta.courseBadge); })
      .join('');

    const projects = `
      <section class="section" id="projects">
        <h2>${esc(C.projectsMeta.researchHeading)}</h2>
        ${researchProjects}
        <h2 class="h2-course">${esc(C.projectsMeta.courseHeading)}</h2>
        ${courseProjects}
      </section>`;

    const publications = `
      <section class="section" id="publications">
        <h2>${esc(C.publications.heading)}</h2>
        <h3 class="subhead2">${esc(C.publications.peerLabel)}</h3>
        <div class="card">
          ${C.publications.peerItems.map(function (p) {
            return `
            <div class="pub">
              <span class="pub-authors">${p.authors}</span> ${esc(p.year)}
              <span class="pub-title">${esc(p.title)}</span>
              <span class="pub-journal">${esc(p.journal)}</span>
              <a class="pub-doi" href="${esc(p.doiUrl)}" target="_blank" rel="noopener">${esc(p.doi)}</a>
            </div>`;
          }).join('')}
        </div>
        <h3 class="subhead2">${esc(C.publications.msLabel)}</h3>
        <div class="card">
          <ul class="dot-list">
            ${C.publications.msItems.map(function (m) { return `<li>${m.text}</li>`; }).join('')}
          </ul>
        </div>
      </section>`;

    const skills = `
      <section class="section" id="skills">
        <h2>${esc(C.skills.heading)}</h2>
        <div class="skill-grid">
          ${C.skills.groups.map(function (g) {
            return `
            <div class="skill-card">
              <h3>${esc(g.name)}</h3>
              <ul class="dot-list">
                ${g.items.map(function (item) { return `<li>${esc(item)}</li>`; }).join('')}
              </ul>
            </div>`;
          }).join('')}
        </div>
      </section>`;

    /* 研究轨迹（科研发展地图：项目=区间条，主题低饱和色，方法/尺度灰度演化） */
    const trajectory = `
      <section class="section trajectory-section" id="trajectory">
        <h2>${esc(C.trajectory.heading)}</h2>
        <p class="traj-subtitle">${esc(C.trajectory.subtitle)}</p>
        <p class="traj-note">${esc(C.trajectory.note)}</p>

        <div class="traj-axis">
          <div class="traj-col-label"></div>
          <div class="traj-axis-track">
            ${C.trajectory.years.map(function (y, i) {
              return `<span class="traj-tick" style="left:${i * 20}%">${esc(y)}</span>`;
            }).join('')}
          </div>
        </div>

        ${C.trajectory.projects.map(function (pr) {
          return `
          <div class="traj-project">
            <div class="traj-col-label">
              <a class="traj-proj-link" href="#${esc(pr.id)}">${esc(pr.name)}</a>
            </div>
            <div class="traj-proj-track">
              <a class="traj-proj-bar" href="#${esc(pr.id)}" style="left:${pr.start * 20}%;width:${(pr.end - pr.start) * 20}%;background:linear-gradient(90deg, ${esc(pr.color)}, ${esc(pr.color2)})"></a>
            </div>
          </div>`;
        }).join('')}

        <div class="traj-strip">
          <div class="traj-strip-label">${esc(C.trajectory.scaleMethodsLabel)}</div>
          <div class="traj-strip-right">
            <span class="traj-strip-bar" style="background:linear-gradient(90deg, #E05D5D, #8E44AD)"></span>
            <div class="traj-strip-tags">
              ${C.trajectory.scaleMethods.map(function (sm) {
                return `<span class="traj-strip-tag">${esc(sm)}</span>`;
              }).join('')}
            </div>
          </div>
        </div>
      </section>`;

    const field = `
      <section class="section" id="field">
        <h2>${esc(C.field.heading)}</h2>
        <div class="card">
          <ul class="dot-list">
            ${C.field.items.map(function (item) { return `<li>${esc(item)}</li>`; }).join('')}
          </ul>
        </div>
      </section>`;

    const footer = `
      <footer class="site-footer">
        <div>${esc(C.footer.line)}</div>
        <a class="back-top" href="#top">${esc(C.footer.backToTop)} ↑</a>
      </footer>`;

    document.getElementById('app').innerHTML =
      header + nav + `<main>` + about + education + publications + skills + trajectory + projects + field + `</main>` + footer;

    setLang(lang);

    /* 语言切换事件 */
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const next = btn.getAttribute('data-lang-btn');
        if (next !== lang) { setLang(next); render(); }
      });
    });

    /* 平滑滚动（尊重 prefers-reduced-motion） */
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          const id = a.getAttribute('href');
          if (id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    }

    /* 轨迹悬停：高亮对应项目卡片（研究地图效果） */
    document.querySelectorAll('a.traj-proj-bar, a.traj-proj-link').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        const t = document.querySelector(el.getAttribute('href'));
        if (t) { t.classList.add('traj-target'); }
      });
      el.addEventListener('mouseleave', function () {
        const t = document.querySelector(el.getAttribute('href'));
        if (t) { t.classList.remove('traj-target'); }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', render);
})();
