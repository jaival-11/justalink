/**
 * JustALink - Zero-Database Hash Bio Link Builder
 * Frontend Logic & Hash Routing
 */

(function () {
  'use strict';

  // --- Available Flat Color Themes ---
  const THEMES = [
    { id: 'slate', name: 'Slate Dark', bg: 'bg-slate-900', text: 'text-slate-100', border: 'border-slate-700', accent: 'bg-slate-500' },
    { id: 'light', name: 'Minimal Light', bg: 'bg-white', text: 'text-slate-900', border: 'border-slate-300', accent: 'bg-slate-900' },
    { id: 'cyber', name: 'Cyber High-Contrast', bg: 'bg-black', text: 'text-yellow-400', border: 'border-yellow-400', accent: 'bg-yellow-400' },
    { id: 'emerald', name: 'Emerald Solid', bg: 'bg-emerald-900', text: 'text-emerald-100', border: 'border-emerald-600', accent: 'bg-emerald-500' },
    { id: 'berry', name: 'Berry Violet', bg: 'bg-purple-900', text: 'text-purple-100', border: 'border-purple-600', accent: 'bg-purple-600' },
    { id: 'neo', name: 'Neo Punch', bg: 'bg-amber-50', text: 'text-stone-900', border: 'border-stone-900', accent: 'bg-orange-600' },
  ];

  // --- Clean Inline SVG Icons ---
  const ICONS = {
    sun: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    up: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-400 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    bolt: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-yellow-400 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7v8l10-12h-7V2z"/></svg>`,
    link: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  };

  // --- Initial Default App State ---
  const defaultState = {
    tag: 'v1.0',
    name: '',
    avatar: '',
    bio: '',
    message: '',
    theme: 'slate',
    socials: [],
    links: []
  };

  let appState = JSON.parse(JSON.stringify(defaultState));

  // --- DOM Elements ---
  const mainHeader = document.getElementById('main-header');
  const btnRestoreUrl = document.getElementById('btn-restore-url');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const themeToggleText = document.getElementById('theme-toggle-text');

  // Restore Modal Elements
  const restoreModal = document.getElementById('restore-modal');
  const inputRestoreUrl = document.getElementById('input-restore-url');
  const restoreError = document.getElementById('restore-error');
  const restoreErrorText = document.getElementById('restore-error-text');
  const btnCloseRestoreModal = document.getElementById('btn-close-restore-modal');
  const btnCancelRestore = document.getElementById('btn-cancel-restore');
  const btnSubmitRestore = document.getElementById('btn-submit-restore');

  const builderModeSec = document.getElementById('builder-mode');
  const viewModeSec = document.getElementById('view-mode');
  
  const inputName = document.getElementById('input-name');
  const inputAvatar = document.getElementById('input-avatar');
  const inputBio = document.getElementById('input-bio');
  const inputMessage = document.getElementById('input-message');
  const themeOptionsContainer = document.getElementById('theme-options');
  const socialsContainer = document.getElementById('socials-container');
  const btnAddSocial = document.getElementById('btn-add-social');
  const linksContainer = document.getElementById('links-container');
  const btnAddLink = document.getElementById('btn-add-link');
  const btnLoadPreset = document.getElementById('btn-load-preset');
  
  const outputShareUrl = document.getElementById('output-share-url');
  const btnCopyUrl = document.getElementById('btn-copy-url');
  const copyBtnText = document.getElementById('copy-btn-text');
  const btnOpenPreview = document.getElementById('btn-open-preview');

  // Preview elements (Builder mode)
  const previewFrame = document.getElementById('preview-card-frame');
  const previewAvatarImg = document.getElementById('preview-avatar-img');
  const previewAvatarFallback = document.getElementById('preview-avatar-fallback');
  const previewName = document.getElementById('preview-name');
  const previewBio = document.getElementById('preview-bio');
  const previewSocialsList = document.getElementById('preview-socials-list');
  const previewMessageWrap = document.getElementById('preview-message-wrap');
  const previewMessage = document.getElementById('preview-message');
  const previewLinksList = document.getElementById('preview-links-list');
  const watermarkLink = document.getElementById('watermark-link');

  // View mode elements
  const viewCardContainer = document.getElementById('view-card-container');
  const viewAvatarImg = document.getElementById('view-avatar-img');
  const viewAvatarFallback = document.getElementById('view-avatar-fallback');
  const viewName = document.getElementById('view-name');
  const viewBio = document.getElementById('view-bio');
  const viewSocialsList = document.getElementById('view-socials-list');
  const viewMessageWrap = document.getElementById('view-message-wrap');
  const viewMessage = document.getElementById('view-message');
  const viewLinksList = document.getElementById('view-links-list');
  const viewWatermarkLink = document.getElementById('view-watermark-link');

  // Helper for Simple Icons slug formatting
  function getSimpleIconSlug(rawInput) {
    if (!rawInput) return '';
    return rawInput
      .trim()
      .toLowerCase()
      .replace(/\+/g, 'plus')
      .replace(/\./g, 'dot')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]/g, '');
  }

  // Toast
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastMessage = document.getElementById('toast-message');

  // --- Homepage Light/Dark Theme Switcher State ---
  let builderTheme = localStorage.getItem('justalink_builder_theme') || 'light';

  function applyBuilderTheme(theme) {
    builderTheme = theme;
    localStorage.setItem('justalink_builder_theme', theme);
    if (theme === 'light') {
      document.body.classList.remove('builder-dark');
      document.body.classList.add('builder-light');
      themeToggleIcon.innerHTML = ICONS.moon;
      themeToggleText.textContent = 'Dark Mode';
    } else {
      document.body.classList.remove('builder-light');
      document.body.classList.add('builder-dark');
      themeToggleIcon.innerHTML = ICONS.sun;
      themeToggleText.textContent = 'Light Mode';
    }
  }

  // --- Utilities: Base64 UTF-8 Encoding & Decoding ---
  function encodeData(dataObj) {
    try {
      const payload = Object.assign({ tag: 'v1.0' }, dataObj);
      const jsonStr = JSON.stringify(payload);
      const bytes = new TextEncoder().encode(jsonStr);
      let binString = '';
      for (let i = 0; i < bytes.length; i++) {
        binString += String.fromCharCode(bytes[i]);
      }
      return btoa(binString);
    } catch (err) {
      console.error('Encoding error:', err);
      return '';
    }
  }

  function decodeData(base64Str) {
    try {
      const binString = atob(base64Str);
      const bytes = Uint8Array.from(binString, c => c.charCodeAt(0));
      const jsonStr = new TextDecoder().decode(bytes);
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        if (!parsed.tag) {
          parsed.tag = 'v1.0';
        }
      }
      return parsed;
    } catch (err) {
      console.error('Decoding error:', err);
      return null;
    }
  }

  // --- Markdown Parser (Supports bold, italics, underline, strikethrough, code, links) ---
  function parseMarkdown(text, allowLinks = true) {
    if (!text) return '';

    // HTML escape to prevent XSS vulnerabilities
    let html = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    // Inline Code: `code`
    html = html.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded text-[0.85em] font-mono bg-current/15">$1</code>');

    // Bold & Italic: ***text*** or ___text___
    html = html.replace(/(\*\*\*|___)(.*?)\1/g, '<strong><em>$2</em></strong>');

    // Bold: **text** or __text__
    html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

    // Italics: *text* or _text_
    html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

    // Strikethrough: ~~text~~ or ~text~
    html = html.replace(/(~~|~)(.*?)\1/g, '<del>$2</del>');

    // Underline: ++text++ or <u>text</u> or <ins>text</ins>
    html = html.replace(/(\+\+|&lt;u&gt;|&lt;ins&gt;)(.*?)(?:\+\+|&lt;\/u&gt;|&lt;\/ins&gt;)/gi, '<u>$2</u>');

    // Markdown Links: [text](url)
    if (allowLinks) {
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
        const safeUrl = sanitizeUrl(url.replace(/&amp;/g, '&'));
        return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="underline hover:opacity-80">${linkText}</a>`;
      });
    } else {
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="underline">$1</span>');
    }

    // Preserve line breaks
    html = html.replace(/\n/g, '<br>');

    return html;
  }

  function ensureRestoreModal() {
    let modal = document.getElementById('restore-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'restore-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 hidden';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
      modal.innerHTML = `
        <div class="builder-card border rounded-xl max-w-md w-full p-6 space-y-4 relative">
          <div class="flex items-center justify-between border-b pb-3 border-zinc-700/40">
            <h3 class="text-lg font-extrabold flex items-center gap-2">
              <span>Restore Profile</span>
            </h3>
            <button id="btn-close-restore-modal" type="button" class="builder-subtext hover:text-current p-1 rounded transition-colors cursor-pointer" aria-label="Close dialog">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <div>
            <label for="input-restore-url" class="block text-xs font-semibold builder-subtext uppercase tracking-wider mb-1.5">
              JustALink URL or Hash
            </label>
            <input 
              type="text" 
              id="input-restore-url" 
              placeholder="https://jaival-11.github.io/justalink/#data=..." 
              class="w-full builder-input border rounded-lg px-3 py-2 text-xs font-mono focus:outline-none"
            />
            <div id="restore-error" class="hidden mt-2.5 p-2.5 rounded border border-red-500/40 bg-red-950/20 text-red-400 text-xs font-semibold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span id="restore-error-text">Invalid URL or corrupted link data.</span>
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2 border-t border-zinc-700/40">
            <button id="btn-cancel-restore" type="button" class="builder-muted-btn text-xs font-bold px-4 py-2 rounded border transition-colors cursor-pointer">
              Cancel
            </button>
            <button id="btn-submit-restore" type="button" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded transition-colors cursor-pointer">
              Restore Profile
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    return modal;
  }

  function openRestoreModal() {
    const modal = ensureRestoreModal();
    const input = document.getElementById('input-restore-url');
    if (input) input.value = '';
    hideRestoreError();
    modal.classList.remove('hidden');
    setTimeout(() => {
      if (input) input.focus();
    }, 50);
  }

  function closeRestoreModal() {
    const modal = document.getElementById('restore-modal');
    const input = document.getElementById('input-restore-url');
    if (modal) modal.classList.add('hidden');
    if (input) input.value = '';
    hideRestoreError();
  }

  function showRestoreError(msg) {
    const errBox = document.getElementById('restore-error');
    const errText = document.getElementById('restore-error-text');
    if (errBox && errText) {
      errText.textContent = msg;
      errBox.classList.remove('hidden');
    }
  }

  function hideRestoreError() {
    const errBox = document.getElementById('restore-error');
    if (errBox) {
      errBox.classList.add('hidden');
    }
  }

  function processRestoreInput(inputUrl) {
    if (!inputUrl || !inputUrl.trim()) {
      return { success: false, error: 'Please enter a URL or hash payload.' };
    }

    let rawStr = inputUrl.trim();

    if (rawStr.startsWith('http://') || rawStr.startsWith('https://')) {
      try {
        const parsedUrl = new URL(rawStr);
        if (!parsedUrl.hash || (!parsedUrl.hash.includes('data=') && !parsedUrl.search.includes('data='))) {
          return { success: false, error: 'URL does not contain JustALink profile data (#data=...).' };
        }
      } catch (e) {
        return { success: false, error: 'Invalid URL format.' };
      }
    }

    let base64Str = '';
    if (rawStr.includes('#data=')) {
      base64Str = rawStr.split('#data=')[1];
    } else if (rawStr.includes('data=')) {
      base64Str = rawStr.split('data=')[1];
    } else if (rawStr.startsWith('#')) {
      base64Str = rawStr.substring(1);
    } else {
      base64Str = rawStr;
    }

    if (base64Str.includes('&')) {
      base64Str = base64Str.split('&')[0];
    }

    const decoded = decodeData(base64Str);
    if (decoded && typeof decoded === 'object') {
      appState = {
        tag: decoded.tag || 'v1.0',
        name: decoded.name || '',
        avatar: decoded.avatar || '',
        bio: decoded.bio || '',
        message: decoded.message || decoded.shortMessage || '',
        theme: decoded.theme || 'slate',
        socials: Array.isArray(decoded.socials) ? decoded.socials : [],
        links: Array.isArray(decoded.links) ? decoded.links.map(l => ({
          id: l.id || ('link_' + Math.random().toString(36).substring(2, 9)),
          title: l.title || '',
          url: l.url || '',
          description: l.description || ''
        })) : []
      };
      populateBuilderInputs();
      return { success: true };
    } else {
      return { success: false, error: 'Could not decode profile details. Invalid or corrupted payload.' };
    }
  }

  function sanitizeUrl(rawUrl) {
    if (!rawUrl) return '#';
    let url = rawUrl.trim();
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:')) {
      return url;
    }
    return 'https://' + url;
  }

  function showToast(msg, iconKey = 'info') {
    toastIcon.innerHTML = ICONS[iconKey] || ICONS.info;
    toastMessage.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
  }

  // --- Helper to handle image fallback ---
  function setupAvatarFallback(imgEl, fallbackEl, nameText) {
    const initials = nameText ? nameText.trim().charAt(0).toUpperCase() : '?';
    fallbackEl.querySelector('span').textContent = initials;

    imgEl.onload = function () {
      imgEl.classList.remove('hidden');
      fallbackEl.classList.add('hidden');
    };

    imgEl.onerror = function () {
      imgEl.classList.add('hidden');
      fallbackEl.classList.remove('hidden');
    };
  }

  // --- Render Functions ---

  function renderThemeSelector() {
    themeOptionsContainer.innerHTML = '';
    THEMES.forEach(t => {
      const isSelected = appState.theme === t.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `p-3 rounded-lg border text-left flex flex-col justify-between transition-all ${t.bg} ${t.text} ${
        isSelected ? 'ring-2 ring-emerald-500 border-emerald-500 font-bold' : 'border-zinc-700/60 opacity-80 hover:opacity-100'
      }`;
      btn.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold">${t.name}</span>
          ${isSelected ? `<span class="text-emerald-400 text-xs">${ICONS.check}</span>` : ''}
        </div>
        <div class="flex gap-1.5">
          <span class="w-3 h-3 rounded-full ${t.accent}"></span>
          <span class="w-3 h-3 rounded-full border ${t.border}"></span>
        </div>
      `;
      btn.addEventListener('click', () => {
        appState.theme = t.id;
        renderThemeSelector();
        updatePreview();
        updateShareUrl();
      });
      themeOptionsContainer.appendChild(btn);
    });
  }

  function renderSocialInputs() {
    if (!socialsContainer) return;
    socialsContainer.innerHTML = '';

    if (!appState.socials || appState.socials.length === 0) {
      socialsContainer.innerHTML = `
        <div class="text-center py-6 border border-dashed border-zinc-700 rounded-lg builder-subtext text-xs">
          No social icons added yet. Click "+ Add Icon" to add your social profiles.
        </div>
      `;
      return;
    }

    appState.socials.forEach((social, index) => {
      const item = document.createElement('div');
      item.className = 'builder-input border rounded-lg p-3 space-y-2 relative group';

      const slug = getSimpleIconSlug(social.icon);
      const iconMarkup = slug
        ? `<span class="social-icon-mask" style="-webkit-mask-image: url('https://cdn.simpleicons.org/${slug}'); mask-image: url('https://cdn.simpleicons.org/${slug}');"></span>`
        : ICONS.link;

      item.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold builder-subtext">#${index + 1}</span>
            <div class="w-6 h-6 rounded border border-zinc-700/60 flex items-center justify-center text-current overflow-hidden shrink-0">
              ${iconMarkup}
            </div>
          </div>
          <div class="flex items-center gap-1">
            <button type="button" class="btn-move-up-social p-1 text-xs builder-subtext hover:text-current flex items-center justify-center" title="Move Up" ${index === 0 ? 'disabled class="opacity-30 cursor-not-allowed p-1 text-xs flex items-center justify-center"' : ''}>${ICONS.up}</button>
            <button type="button" class="btn-move-down-social p-1 text-xs builder-subtext hover:text-current flex items-center justify-center" title="Move Down" ${index === appState.socials.length - 1 ? 'disabled class="opacity-30 cursor-not-allowed p-1 text-xs flex items-center justify-center"' : ''}>${ICONS.down}</button>
            <button type="button" class="btn-delete-social p-1 text-xs text-red-500 hover:text-red-400 ml-1 flex items-center justify-center" title="Delete Icon">${ICONS.close}</button>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input 
            type="text" 
            placeholder="Simple Icon Name (e.g. github, twitter, linkedin)" 
            value="${social.icon || ''}" 
            class="input-social-icon builder-input border rounded px-2.5 py-1.5 text-xs focus:outline-none"
          />
          <input 
            type="url" 
            placeholder="URL (e.g. https://github.com/username)" 
            value="${social.url || ''}" 
            class="input-social-url builder-input border rounded px-2.5 py-1.5 text-xs focus:outline-none"
          />
        </div>
      `;

      const inputIcon = item.querySelector('.input-social-icon');
      const inputUrl = item.querySelector('.input-social-url');
      const btnUp = item.querySelector('.btn-move-up-social');
      const btnDown = item.querySelector('.btn-move-down-social');
      const btnDelete = item.querySelector('.btn-delete-social');

      inputIcon.addEventListener('input', (e) => {
        appState.socials[index].icon = e.target.value;
        const newSlug = getSimpleIconSlug(e.target.value);
        const previewBadge = item.querySelector('.w-6.h-6');
        if (previewBadge) {
          previewBadge.innerHTML = newSlug
            ? `<span class="social-icon-mask" style="-webkit-mask-image: url('https://cdn.simpleicons.org/${newSlug}'); mask-image: url('https://cdn.simpleicons.org/${newSlug}');"></span>`
            : ICONS.link;
        }
        updatePreview();
        updateShareUrl();
      });

      inputUrl.addEventListener('input', (e) => {
        appState.socials[index].url = e.target.value;
        updatePreview();
        updateShareUrl();
      });

      if (btnUp && !btnUp.disabled) {
        btnUp.addEventListener('click', () => {
          const temp = appState.socials[index];
          appState.socials[index] = appState.socials[index - 1];
          appState.socials[index - 1] = temp;
          renderSocialInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      if (btnDown && !btnDown.disabled) {
        btnDown.addEventListener('click', () => {
          const temp = appState.socials[index];
          appState.socials[index] = appState.socials[index + 1];
          appState.socials[index + 1] = temp;
          renderSocialInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      btnDelete.addEventListener('click', () => {
        appState.socials.splice(index, 1);
        renderSocialInputs();
        updatePreview();
        updateShareUrl();
      });

      socialsContainer.appendChild(item);
    });
  }

  function renderLinkInputs() {
    linksContainer.innerHTML = '';
    
    if (appState.links.length === 0) {
      linksContainer.innerHTML = `
        <div class="text-center py-6 border border-dashed border-zinc-700 rounded-lg builder-subtext text-xs">
          No links added yet. Click "+ Add Link" to create one.
        </div>
      `;
      return;
    }

    appState.links.forEach((link, index) => {
      const item = document.createElement('div');
      item.className = 'builder-input border rounded-lg p-3 space-y-2 relative group';
      item.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-mono font-bold builder-subtext">#${index + 1}</span>
          <div class="flex items-center gap-1">
            <button type="button" class="btn-move-up p-1 text-xs builder-subtext hover:text-current flex items-center justify-center" title="Move Up" ${index === 0 ? 'disabled class="opacity-30 cursor-not-allowed p-1 text-xs flex items-center justify-center"' : ''}>${ICONS.up}</button>
            <button type="button" class="btn-move-down p-1 text-xs builder-subtext hover:text-current flex items-center justify-center" title="Move Down" ${index === appState.links.length - 1 ? 'disabled class="opacity-30 cursor-not-allowed p-1 text-xs flex items-center justify-center"' : ''}>${ICONS.down}</button>
            <button type="button" class="btn-delete-link p-1 text-xs text-red-500 hover:text-red-400 ml-1 flex items-center justify-center" title="Delete Link">${ICONS.close}</button>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input 
            type="text" 
            placeholder="Link Title (e.g. **My Website**)" 
            value="${link.title || ''}" 
            class="input-link-title builder-input border rounded px-2.5 py-1.5 text-xs focus:outline-none"
          />
          <input 
            type="url" 
            placeholder="URL (e.g. https://...)" 
            value="${link.url || ''}" 
            class="input-link-url builder-input border rounded px-2.5 py-1.5 text-xs focus:outline-none"
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Description (e.g. Check out *my portfolio* & <u>projects</u>)" 
            value="${link.description || ''}" 
            class="input-link-description w-full builder-input border rounded px-2.5 py-1.5 text-xs focus:outline-none"
          />
        </div>
      `;

      // Event Listeners for Link Inputs
      const inputTitle = item.querySelector('.input-link-title');
      const inputUrl = item.querySelector('.input-link-url');
      const inputDesc = item.querySelector('.input-link-description');
      const btnUp = item.querySelector('.btn-move-up');
      const btnDown = item.querySelector('.btn-move-down');
      const btnDelete = item.querySelector('.btn-delete-link');

      inputTitle.addEventListener('input', (e) => {
        appState.links[index].title = e.target.value;
        updatePreview();
        updateShareUrl();
      });

      inputUrl.addEventListener('input', (e) => {
        appState.links[index].url = e.target.value;
        updatePreview();
        updateShareUrl();
      });

      inputDesc.addEventListener('input', (e) => {
        appState.links[index].description = e.target.value;
        updatePreview();
        updateShareUrl();
      });

      if (btnUp && !btnUp.disabled) {
        btnUp.addEventListener('click', () => {
          const temp = appState.links[index];
          appState.links[index] = appState.links[index - 1];
          appState.links[index - 1] = temp;
          renderLinkInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      if (btnDown && !btnDown.disabled) {
        btnDown.addEventListener('click', () => {
          const temp = appState.links[index];
          appState.links[index] = appState.links[index + 1];
          appState.links[index + 1] = temp;
          renderLinkInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      btnDelete.addEventListener('click', () => {
        appState.links.splice(index, 1);
        renderLinkInputs();
        updatePreview();
        updateShareUrl();
      });

      linksContainer.appendChild(item);
    });
  }

  function updatePreview() {
    // Theme class on preview frame
    previewFrame.className = `w-full max-w-sm mx-auto p-5 sm:p-6 rounded-xl border transition-all duration-300 theme-${appState.theme}`;
    
    // Name & Bio
    previewName.innerHTML = parseMarkdown(appState.name || 'Your Name', true);
    previewBio.innerHTML = parseMarkdown(appState.bio || 'Your bio details will be displayed here.', true);

    // Avatar
    if (appState.avatar) {
      previewAvatarImg.src = appState.avatar;
      setupAvatarFallback(previewAvatarImg, previewAvatarFallback, appState.name);
    } else {
      previewAvatarImg.classList.add('hidden');
      previewAvatarFallback.classList.remove('hidden');
      previewAvatarFallback.querySelector('span').textContent = appState.name ? appState.name.trim().charAt(0).toUpperCase() : '?';
    }

    // Social Icons Line after Bio
    if (previewSocialsList) {
      previewSocialsList.innerHTML = '';
      if (appState.socials && appState.socials.length > 0) {
        previewSocialsList.classList.remove('hidden');
        appState.socials.forEach(s => {
          const slug = getSimpleIconSlug(s.icon);
          const socialBtn = document.createElement('a');
          socialBtn.href = sanitizeUrl(s.url);
          socialBtn.target = '_blank';
          socialBtn.rel = 'noopener noreferrer';
          socialBtn.title = s.icon || 'Social';
          socialBtn.className = 'social-icon-btn inline-flex items-center justify-center p-1.5 rounded text-current opacity-85 hover:opacity-100 transition-opacity cursor-pointer';
          
          if (slug) {
            socialBtn.innerHTML = `<span class="social-icon-mask" style="-webkit-mask-image: url('https://cdn.simpleicons.org/${slug}'); mask-image: url('https://cdn.simpleicons.org/${slug}');"></span>`;
          } else {
            socialBtn.innerHTML = ICONS.link;
          }
          previewSocialsList.appendChild(socialBtn);
        });
      } else {
        previewSocialsList.classList.add('hidden');
      }
    }

    // Short Message after Social Icons and before Links
    if (previewMessage && previewMessageWrap) {
      if (appState.message && appState.message.trim()) {
        previewMessage.innerHTML = parseMarkdown(appState.message.trim(), true);
        previewMessageWrap.classList.remove('hidden');
      } else {
        previewMessageWrap.classList.add('hidden');
      }
    }

    // Links
    previewLinksList.innerHTML = '';
    if (appState.links.length === 0) {
      previewLinksList.innerHTML = '<div class="text-center text-xs opacity-60 italic py-2">No links created yet</div>';
    } else {
      appState.links.forEach(l => {
        const linkBtn = document.createElement('a');
        linkBtn.href = sanitizeUrl(l.url);
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.className = 'link-btn block w-full py-2.5 px-4 rounded-lg text-center cursor-pointer transition-colors';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'block font-semibold text-xs leading-snug';
        titleSpan.innerHTML = parseMarkdown(l.title || 'Untitled Link', false);
        linkBtn.appendChild(titleSpan);

        if (l.description && l.description.trim()) {
          const descSpan = document.createElement('span');
          descSpan.className = 'block text-[11px] opacity-80 font-normal mt-0.5 leading-snug';
          descSpan.innerHTML = parseMarkdown(l.description.trim(), false);
          linkBtn.appendChild(descSpan);
        }

        previewLinksList.appendChild(linkBtn);
      });
    }

    // Watermark link target
    watermarkLink.href = window.location.origin + window.location.pathname;
    watermarkLink.target = '_blank';
    watermarkLink.rel = 'noopener noreferrer';
  }

  function updateShareUrl() {
    const encoded = encodeData(appState);
    const baseUrl = window.location.origin + window.location.pathname;
    const fullShareUrl = `${baseUrl}#data=${encoded}`;
    
    outputShareUrl.value = fullShareUrl;
    btnOpenPreview.href = fullShareUrl;
  }

  function populateBuilderInputs() {
    inputName.value = appState.name || '';
    inputAvatar.value = appState.avatar || '';
    inputBio.value = appState.bio || '';
    if (inputMessage) inputMessage.value = appState.message || '';
    renderThemeSelector();
    renderSocialInputs();
    renderLinkInputs();
    updatePreview();
    updateShareUrl();
  }

  function renderViewMode(data) {
    const themeClass = `theme-${data.theme || 'slate'}`;
    const pageThemeClass = `page-theme-${data.theme || 'slate'}`;

    // Apply background theme to View Section container
    viewModeSec.className = `min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 ${pageThemeClass}`;
    viewCardContainer.className = `w-full max-w-md p-6 sm:p-8 rounded-2xl border transition-colors my-auto ${themeClass}`;

    // Name & Bio
    viewName.innerHTML = parseMarkdown(data.name || 'Anonymous', true);
    viewBio.innerHTML = parseMarkdown(data.bio || '', true);

    // Avatar
    if (data.avatar) {
      viewAvatarImg.src = data.avatar;
      setupAvatarFallback(viewAvatarImg, viewAvatarFallback, data.name);
    } else {
      viewAvatarImg.classList.add('hidden');
      viewAvatarFallback.classList.remove('hidden');
      viewAvatarFallback.querySelector('span').textContent = data.name ? data.name.trim().charAt(0).toUpperCase() : '?';
    }

    // Social Icons Line in View Mode
    if (viewSocialsList) {
      viewSocialsList.innerHTML = '';
      const socialsArr = data.socials || [];
      if (socialsArr.length > 0) {
        viewSocialsList.classList.remove('hidden');
        socialsArr.forEach(s => {
          const slug = getSimpleIconSlug(s.icon);
          const socialBtn = document.createElement('a');
          socialBtn.href = sanitizeUrl(s.url);
          socialBtn.target = '_blank';
          socialBtn.rel = 'noopener noreferrer';
          socialBtn.title = s.icon || 'Social';
          socialBtn.className = 'social-icon-btn inline-flex items-center justify-center p-2 rounded text-current opacity-85 hover:opacity-100 transition-opacity cursor-pointer';
          
          if (slug) {
            socialBtn.innerHTML = `<span class="social-icon-mask" style="-webkit-mask-image: url('https://cdn.simpleicons.org/${slug}'); mask-image: url('https://cdn.simpleicons.org/${slug}');"></span>`;
          } else {
            socialBtn.innerHTML = ICONS.link;
          }
          viewSocialsList.appendChild(socialBtn);
        });
      } else {
        viewSocialsList.classList.add('hidden');
      }
    }

    // Short Message after Social Icons and before Links
    if (viewMessage && viewMessageWrap) {
      if (data.message && data.message.trim()) {
        viewMessage.innerHTML = parseMarkdown(data.message.trim(), true);
        viewMessageWrap.classList.remove('hidden');
      } else {
        viewMessageWrap.classList.add('hidden');
      }
    }

    // Links
    viewLinksList.innerHTML = '';
    if (data.links && Array.isArray(data.links) && data.links.length > 0) {
      data.links.forEach(l => {
        const linkBtn = document.createElement('a');
        linkBtn.href = sanitizeUrl(l.url);
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.className = 'link-btn block w-full py-3 px-5 rounded-xl text-center cursor-pointer transition-colors';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'block font-semibold text-sm leading-snug';
        titleSpan.innerHTML = parseMarkdown(l.title || 'Link', false);
        linkBtn.appendChild(titleSpan);

        if (l.description && l.description.trim()) {
          const descSpan = document.createElement('span');
          descSpan.className = 'block text-xs opacity-80 font-normal mt-1 leading-snug';
          descSpan.innerHTML = parseMarkdown(l.description.trim(), false);
          linkBtn.appendChild(descSpan);
        }

        viewLinksList.appendChild(linkBtn);
      });
    } else {
      viewLinksList.innerHTML = '<div class="text-center text-xs opacity-60 italic py-4">No active links</div>';
    }

    // Watermark
    viewWatermarkLink.href = window.location.origin + window.location.pathname;
    viewWatermarkLink.target = '_blank';
    viewWatermarkLink.rel = 'noopener noreferrer';
  }

  // --- Accordion Logic for Builder Cards (1 to 6) ---
  function toggleCard(targetCard) {
    if (!targetCard) return;
    const wrapper = targetCard.querySelector('.builder-card-body-wrapper');
    if (!wrapper) return;

    const isCurrentlyOpen = wrapper.classList.contains('is-open');

    // Auto collapse all accordion cards with smooth transition
    document.querySelectorAll('.builder-accordion-card').forEach(card => {
      const cardWrapper = card.querySelector('.builder-card-body-wrapper');
      const chevron = card.querySelector('.chevron-icon');
      if (cardWrapper) cardWrapper.classList.remove('is-open');
      if (chevron) chevron.classList.remove('rotate-180');
    });

    // If target card was closed, expand it smoothly
    if (!isCurrentlyOpen) {
      wrapper.classList.add('is-open');
      const chevron = targetCard.querySelector('.chevron-icon');
      if (chevron) chevron.classList.add('rotate-180');
    }
  }

  function openCard(cardId) {
    const targetCard = document.querySelector(`.builder-accordion-card[data-card-id="${cardId}"]`);
    if (targetCard) {
      const wrapper = targetCard.querySelector('.builder-card-body-wrapper');
      if (wrapper && !wrapper.classList.contains('is-open')) {
        toggleCard(targetCard);
      }
    }
  }

  function initAccordionCards() {
    const cards = document.querySelectorAll('.builder-accordion-card');
    cards.forEach(card => {
      const header = card.querySelector('.builder-card-header');
      if (header) {
        header.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
            return;
          }
          toggleCard(card);
        });
      }
    });
  }

  // --- Router Logic ---
  function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith('#data=')) {
      const base64Str = hash.substring(6);
      const decodedData = decodeData(base64Str);

      if (decodedData) {
        const tag = decodedData.tag || 'v1.0';
        // Show View Mode: Hide Header Banner completely per user requirement
        if (mainHeader) mainHeader.classList.add('hidden');
        builderModeSec.classList.add('hidden');
        viewModeSec.classList.remove('hidden');
        renderViewMode(decodedData);
        document.title = `${decodedData.name || 'Profile'} | JustALink`;
        return;
      } else {
        showToast('Invalid or corrupted link. Loading Builder Mode.', 'warning');
        window.location.hash = '';
      }
    }

    // Default: Show Builder Mode & Top Header Banner
    if (mainHeader) mainHeader.classList.remove('hidden');
    viewModeSec.classList.add('hidden');
    builderModeSec.classList.remove('hidden');
    document.title = 'JustALink - Zero-Database Hash Bio Link Builder';
    populateBuilderInputs();
  }

  // --- Event Listeners Initialization ---

  function initEvents() {
    // Delegated click listener for Restore button (header)
    document.addEventListener('click', (e) => {
      const btnRestore = e.target.closest('#btn-restore-url');
      if (btnRestore) {
        e.preventDefault();
        openRestoreModal();
        return;
      }

      const btnClose = e.target.closest('#btn-close-restore-modal');
      if (btnClose) {
        e.preventDefault();
        closeRestoreModal();
        return;
      }

      const btnCancel = e.target.closest('#btn-cancel-restore');
      if (btnCancel) {
        e.preventDefault();
        closeRestoreModal();
        return;
      }

      const btnSubmit = e.target.closest('#btn-submit-restore');
      if (btnSubmit) {
        e.preventDefault();
        handleRestoreSubmit();
        return;
      }

      const modal = document.getElementById('restore-modal');
      if (modal && e.target === modal) {
        closeRestoreModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('restore-modal');
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeRestoreModal();
      }
    });

    function handleRestoreSubmit() {
      hideRestoreError();
      const input = document.getElementById('input-restore-url');
      const val = input ? input.value : '';
      const result = processRestoreInput(val);
      if (result.success) {
        closeRestoreModal();
        showToast('Profile restored successfully!', 'check');
      } else {
        showRestoreError(result.error);
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const input = document.getElementById('input-restore-url');
        const modal = document.getElementById('restore-modal');
        if (input && document.activeElement === input && modal && !modal.classList.contains('hidden')) {
          e.preventDefault();
          handleRestoreSubmit();
        }
      }
    });

    // Theme Mode Toggle (Light / Dark)
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const newTheme = builderTheme === 'dark' ? 'light' : 'dark';
        applyBuilderTheme(newTheme);
        showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} Mode`, newTheme === 'light' ? 'sun' : 'moon');
      });
    }

    // Form Inputs
    inputName.addEventListener('input', (e) => {
      appState.name = e.target.value;
      updatePreview();
      updateShareUrl();
    });

    inputAvatar.addEventListener('input', (e) => {
      appState.avatar = e.target.value;
      updatePreview();
      updateShareUrl();
    });

    inputBio.addEventListener('input', (e) => {
      appState.bio = e.target.value;
      updatePreview();
      updateShareUrl();
    });

    // Accordion initialization
    initAccordionCards();

    if (inputMessage) {
      inputMessage.addEventListener('input', (e) => {
        appState.message = e.target.value;
        updatePreview();
        updateShareUrl();
      });
    }

    // Add Social Icon Button
    if (btnAddSocial) {
      btnAddSocial.addEventListener('click', () => {
        openCard('3');
        if (!appState.socials) appState.socials = [];
        appState.socials.push({
          id: 'social_' + Date.now(),
          icon: '',
          url: ''
        });
        renderSocialInputs();
        updatePreview();
        updateShareUrl();
      });
    }

    // Add Link Button
    if (btnAddLink) {
      btnAddLink.addEventListener('click', () => {
        openCard('5');
        appState.links.push({
          id: 'link_' + Date.now(),
          title: '',
          url: '',
          description: ''
        });
        renderLinkInputs();
        updatePreview();
        updateShareUrl();
      });
    }

    // Load Sample Preset Button
    if (btnLoadPreset) {
      btnLoadPreset.addEventListener('click', () => {
        appState = JSON.parse(JSON.stringify(defaultState));
        populateBuilderInputs();
        showToast('Form reset to default!', 'bolt');
      });
    }

    // Copy URL Button
    btnCopyUrl.addEventListener('click', () => {
      const shareUrl = outputShareUrl.value;
      if (!shareUrl) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          copyBtnText.textContent = 'Copied!';
          showToast('Link copied to clipboard!', 'check');
          setTimeout(() => { copyBtnText.textContent = 'Copy Link'; }, 2000);
        }).catch(() => {
          fallbackCopyText(shareUrl);
        });
      } else {
        fallbackCopyText(shareUrl);
      }
    });

    function fallbackCopyText(text) {
      outputShareUrl.select();
      document.execCommand('copy');
      copyBtnText.textContent = 'Copied!';
      showToast('Link copied to clipboard!', 'check');
      setTimeout(() => { copyBtnText.textContent = 'Copy Link'; }, 2000);
    }

    // Listen to hash route changes
    window.addEventListener('hashchange', handleRoute);
  }

  // --- App Entry Point ---
  document.addEventListener('DOMContentLoaded', () => {
    applyBuilderTheme(builderTheme);
    initEvents();
    handleRoute();
  });

})();
