// © 2026 Jaival Patel

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
    check: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    up: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-400 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    bolt: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-yellow-400 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7v8l10-12h-7V2z"/></svg>`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-500 fill-red-500 inline-block" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    link: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  };

  // --- Initial Default App State ---
  const defaultState = {
    tag: 'v1.0',
    name: '',
    avatar: '',
    banner: '',
    bio: '',
    message: '',
    theme: 'slate',
    customBg: '#0f172a',
    customAccent: '#d4845a',
    customFooter: '',
    footerUrl: '',
    disableFooter: false,
    disableFooterLink: false,
    githubUsername: localStorage.getItem('justalink_github_username') || '',
    socials: [],
    links: []
  };

  let appState = JSON.parse(JSON.stringify(defaultState));

  // --- Analytics Event Queue & Safe Dispatcher ---
  window.umamiQueue = window.umamiQueue || [];

  function dispatchUmami(eventName, eventData) {
    if (!window.umami || typeof window.umami.track !== 'function') return;
    if (eventName === 'pageview') {
      const url = (eventData && eventData.url) || '/';
      const title = (eventData && eventData.title) || document.title;
      window.umami.track((props) => ({ ...props, url, title }));
    } else if (eventName) {
      window.umami.track(eventName, eventData);
    } else {
      window.umami.track((props) => ({ ...props, url: '/', title: document.title }));
    }
  }

  function trackUmamiEvent(eventName, eventData) {
    if (window.umami && typeof window.umami.track === 'function') {
      while (window.umamiQueue.length > 0) {
        const queued = window.umamiQueue.shift();
        dispatchUmami(queued.name, queued.data);
      }
      dispatchUmami(eventName, eventData);
    } else {
      window.umamiQueue.push({ name: eventName, data: eventData });
    }
  }

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('load', () => {
      if (window.umami && window.umamiQueue && window.umamiQueue.length > 0) {
        while (window.umamiQueue.length > 0) {
          const queued = window.umamiQueue.shift();
          dispatchUmami(queued.name, queued.data);
        }
      }
    });
  }

  window.trackUmamiEvent = trackUmamiEvent;

  // --- Verification System Toggle Flag ---
  // Set to false to disable the entire verification system (locks features, follow/star checks, auto-revocation)
  const ENABLE_VERIFICATION_SYSTEM = false;

  // --- Custom Theme & Sub-Card Unlock Feature State ---
  let isCustomUnlocked = true;
  let isSubcardUnlocked = !ENABLE_VERIFICATION_SYSTEM || (localStorage.getItem('justalink_subcard_unlocked') === 'true');
  let isSubcard2Unlocked = !ENABLE_VERIFICATION_SYSTEM || (localStorage.getItem('justalink_subcard2_unlocked') === 'true');
  let isSupportDevDismissed = localStorage.getItem('justalink_support_dev_dismissed') === 'true';
  let unlockState = {
    xOpened: localStorage.getItem('justalink_link_x_opened') === 'true',
    telegramOpened: localStorage.getItem('justalink_link_telegram_opened') === 'true'
  };

  function canUseCustomColors() {
    return true;
  }

  function getContrastTextColor(hexColor) {
    if (!hexColor) return '#ffffff';
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (hex.length !== 6) return '#ffffff';
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#0f172a' : '#ffffff';
  }

  function getFaintedOuterColor(hexColor) {
    if (!hexColor) return '#020617';
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (hex.length !== 6) return '#020617';

    let r = (parseInt(hex.substring(0, 2), 16) || 0) / 255;
    let g = (parseInt(hex.substring(2, 4), 16) || 0) / 255;
    let b = (parseInt(hex.substring(4, 6), 16) || 0) / 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    s = Math.max(0, s * 0.5);
    if (l < 0.5) {
      l = Math.min(0.85, l + 0.15);
    } else {
      l = Math.min(0.97, l + 0.04);
    }

    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const rOut = Math.round(hue2rgb(p, q, h + 1/3) * 255).toString(16).padStart(2, '0');
    const gOut = Math.round(hue2rgb(p, q, h) * 255).toString(16).padStart(2, '0');
    const bOut = Math.round(hue2rgb(p, q, h - 1/3) * 255).toString(16).padStart(2, '0');

    return `#${rOut}${gOut}${bOut}`;
  }

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
  const previewBannerContainer = document.getElementById('preview-banner-container');
  const previewBannerImg = document.getElementById('preview-banner-img');
  const previewAvatarContainer = document.getElementById('preview-avatar-container');
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
  const viewBannerContainer = document.getElementById('view-banner-container');
  const viewBannerImg = document.getElementById('view-banner-img');
  const viewAvatarContainer = document.getElementById('view-avatar-container');
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
  function getPreferredBuilderTheme() {
    const savedTheme = localStorage.getItem('justalink_builder_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  let builderTheme = getPreferredBuilderTheme();

  function applyBuilderTheme(theme, saveUserPreference = false) {
    builderTheme = theme;
    if (saveUserPreference) {
      localStorage.setItem('justalink_builder_theme', theme);
    }
    if (document.body) {
      if (theme === 'light') {
        document.body.classList.remove('builder-dark');
        document.body.classList.add('builder-light');
      } else {
        document.body.classList.remove('builder-light');
        document.body.classList.add('builder-dark');
      }
    }
    if (themeToggleIcon && themeToggleText) {
      if (theme === 'light') {
        themeToggleIcon.innerHTML = ICONS.moon;
        themeToggleText.textContent = 'Dark Mode';
      } else {
        themeToggleIcon.innerHTML = ICONS.sun;
        themeToggleText.textContent = 'Light Mode';
      }
    }
  }

  function initSystemThemeListener() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e) => {
        if (!localStorage.getItem('justalink_builder_theme')) {
          applyBuilderTheme(e.matches ? 'dark' : 'light', false);
        }
      };
      if (darkMedia.addEventListener) {
        darkMedia.addEventListener('change', handleSystemThemeChange);
      } else if (darkMedia.addListener) {
        darkMedia.addListener(handleSystemThemeChange);
      }
    }
  }

  // --- Utilities: Base64 UTF-8 Encoding & Decoding ---
  function encodeData(dataObj) {
    try {
      const payload = Object.assign({ tag: 'v1.0' }, dataObj);
      if (!ENABLE_VERIFICATION_SYSTEM) {
        delete payload.githubUsername;
        delete payload.githubUser;
        delete payload.unlockedBy;
      } else if (!payload.githubUsername) {
        const storedUser = localStorage.getItem('justalink_github_username');
        if (storedUser) {
          payload.githubUsername = storedUser;
        }
      }

      if (!isSubcardUnlocked) {
        delete payload.customFooter;
        delete payload.disableFooter;
        delete payload.disableFooterLink;
        delete payload.footerDisabled;
        delete payload.footerLinkDisabled;
      }

      if (!isSubcard2Unlocked) {
        delete payload.banner;
        delete payload.bannerImage;
        delete payload.footerUrl;
        delete payload.customFooterUrl;
      }

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
        if (!parsed.githubUsername && (parsed.githubUser || parsed.unlockedBy)) {
          parsed.githubUsername = parsed.githubUser || parsed.unlockedBy;
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
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
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
          <div class="flex items-center justify-between border-b pb-3 modal-divider">
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
            <div id="restore-error" class="hidden mt-2.5 p-2.5 rounded border restore-error-box text-xs font-semibold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span id="restore-error-text">Invalid URL or corrupted link data.</span>
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2 border-t modal-divider">
            <button id="btn-cancel-restore" type="button" class="builder-muted-btn text-xs font-bold px-4 py-2 rounded border transition-colors cursor-pointer">
              Cancel
            </button>
            <button id="btn-submit-restore" type="button" class="bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-4 py-2 rounded transition-colors cursor-pointer">
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

  let verifyingState = {
    x: false,
    telegram: false
  };

  function openUnlockModal() {
    const modal = document.getElementById('unlock-colors-modal');
    if (modal) {
      updateUnlockModalTicks();
      modal.classList.remove('hidden');
    }
  }

  function closeUnlockModal() {
    const modal = document.getElementById('unlock-colors-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  let pendingRestoredState = null;

  function openRestoreSubcardModal(options) {
    const modal = document.getElementById('restore-subcard-modal');
    if (!modal) return;
    const titleEl = document.getElementById('restore-subcard-title');
    const messageEl = document.getElementById('restore-subcard-message');
    const unlockBtn = document.getElementById('btn-unlock-restore-subcard');

    if (titleEl && options.title) titleEl.innerHTML = `<span>${options.title}</span>`;
    if (messageEl && options.message) messageEl.innerHTML = options.message;
    if (unlockBtn && options.unlockBtnText) unlockBtn.textContent = options.unlockBtnText;

    modal._onUnlock = options.onUnlock;
    modal._onContinue = options.onContinue;

    modal.classList.remove('hidden');
  }

  function closeRestoreSubcardModal() {
    const modal = document.getElementById('restore-subcard-modal');
    if (modal) modal.classList.add('hidden');
  }

  function applyRestoredWithoutSubcard1() {
    if (pendingRestoredState) {
      pendingRestoredState.customFooter = '';
      pendingRestoredState.disableFooter = false;
      pendingRestoredState.disableFooterLink = false;
      appState = pendingRestoredState;
      pendingRestoredState = null;
    } else {
      appState.customFooter = '';
      appState.disableFooter = false;
      appState.disableFooterLink = false;
    }
    isSubcardUnlocked = true;
    localStorage.setItem('justalink_subcard_unlocked', 'true');
    populateBuilderInputs();
    renderSubCardPanel();
    renderSubCardPanel2();
    updatePreview();
    updateShareUrl();
    showToast('Profile restored', 'info');
  }

  function openSupportDevModal() {
    const modal = document.getElementById('support-dev-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  function closeSupportDevModal() {
    const modal = document.getElementById('support-dev-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  function handleContinueSupportDev() {
    isSupportDevDismissed = true;
    localStorage.setItem('justalink_support_dev_dismissed', 'true');
    closeSupportDevModal();
    renderSubCardPanel();
    renderSubCardPanel2();
    showToast('Thank you for supporting me', 'heart');
  }

  function openStarModal() {
    const modal = document.getElementById('star-repo-modal');
    if (modal) {
      const statusDiv = document.getElementById('star-verify-status');
      if (statusDiv) {
        statusDiv.className = 'hidden p-3 rounded-lg border text-xs font-mono whitespace-pre-wrap verify-status-box';
        statusDiv.textContent = '';
      }
      modal.classList.remove('hidden');
      const usernameInput = document.getElementById('input-star-username');
      if (usernameInput) {
        if (!usernameInput.value) {
          usernameInput.value = localStorage.getItem('justalink_github_username') || '';
        }
        usernameInput.focus();
      }
    }
  }

  function closeStarModal() {
    const modal = document.getElementById('star-repo-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
    const usernameInput = document.getElementById('input-star-username');
    if (usernameInput) {
      usernameInput.value = '';
    }
    const statusDiv = document.getElementById('star-verify-status');
    if (statusDiv) {
      statusDiv.className = 'hidden p-3 rounded-lg border text-xs font-mono whitespace-pre-wrap verify-status-box';
      statusDiv.textContent = '';
    }
    if (pendingRestoredState && !isSubcardUnlocked) {
      applyRestoredWithoutSubcard1();
    }
  }

  async function handleVerifyStar() {
    const usernameInput = document.getElementById('input-star-username');
    const verifyBtn = document.getElementById('btn-verify-star');
    const statusDiv = document.getElementById('star-verify-status');

    const username = usernameInput ? usernameInput.value.trim() : '';
    if (!username) {
      if (statusDiv) {
        statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
        statusDiv.textContent = 'Please enter your GitHub username.';
      }
      return;
    }

    if (verifyBtn) verifyBtn.disabled = true;
    if (statusDiv) {
      statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-loading';
      statusDiv.textContent = `Checking stargazers list for "${username}"...`;
    }

    try {
      const hasStarred = await checkIfUserStarred(username);
      if (hasStarred) {
        const cleanUser = validateGitHubUsername(username);
        isSubcardUnlocked = true;
        localStorage.setItem('justalink_subcard_unlocked', 'true');
        localStorage.setItem('justalink_github_username', cleanUser);
        saveLastVerifiedTime();
        clearSavedFailedAttempt();
        if (pendingRestoredState) {
          pendingRestoredState.githubUsername = cleanUser;
          appState = pendingRestoredState;
          pendingRestoredState = null;
        } else {
          appState.githubUsername = cleanUser;
        }
        populateBuilderInputs();
        updateShareUrl();

        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-success';
          statusDiv.textContent = `Star verified! footer customisation features unlocked for user "${cleanUser}".`;
        }

        showToast('Footer customisation unlocked!', 'check');
        renderSubCardPanel();
        renderSubCardPanel2();
        updatePreview();

        setTimeout(() => {
          closeStarModal();
        }, 1500);
      } else {
        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
          statusDiv.textContent = `Star not found for user "${username}".\nPlease make sure you have starred jaival-11/justalink on GitHub and try again.`;
        }
      }
    } catch (err) {
      let userForAttempt = username;
      try { userForAttempt = validateGitHubUsername(username); } catch (e) {}

      if (err.isRateLimit) {
        saveFailedAttempt({
          username: userForAttempt,
          type: 'rate_limit',
          failedTime: Date.now(),
          resetTime: err.resetTime,
          minutesLeft: err.minutesLeft
        });
        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
          statusDiv.innerHTML = `API requests reached. Please try again in ${err.minutesLeft} minute${err.minutesLeft === 1 ? '' : 's'}.`;
        }
      } else if (err.isApiDown) {
        isSubcardUnlocked = true;
        localStorage.setItem('justalink_subcard_unlocked', 'true');
        if (userForAttempt) {
          localStorage.setItem('justalink_github_username', userForAttempt);
          appState.githubUsername = userForAttempt;
        }

        saveFailedAttempt({
          username: userForAttempt,
          type: 'api_down_temp_access',
          targetCard: 'subcard1',
          failedTime: Date.now(),
          resetTime: Date.now() + 30 * 60 * 1000,
          retryAfterMinutes: 30
        });

        populateBuilderInputs();
        renderSubCardPanel();
        renderSubCardPanel2();
        updatePreview();
        updateShareUrl();

        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-warning';
          statusDiv.innerHTML = `GitHub API is currently down. Temporary 30-minute access granted to footer customisation features!\nPlease check status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.`;
        }

        showToast('GitHub API down: Temporary 30-min access granted to footer customisation!', 'bolt');

        setTimeout(() => {
          closeStarModal();
        }, 2500);
      } else {
        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
          statusDiv.textContent = `Error: ${err.message}`;
        }
      }
    } finally {
      if (verifyBtn) verifyBtn.disabled = false;
    }
  }

  function applyRestoredWithoutSubcard2() {
    if (pendingRestoredState) {
      pendingRestoredState.banner = '';
      pendingRestoredState.footerUrl = '';
      if (!isSubcardUnlocked) {
        pendingRestoredState.customFooter = '';
        pendingRestoredState.disableFooter = false;
        pendingRestoredState.disableFooterLink = false;
      }
      appState = pendingRestoredState;
      pendingRestoredState = null;
    } else {
      appState.banner = '';
      appState.footerUrl = '';
      if (!isSubcardUnlocked) {
        appState.customFooter = '';
        appState.disableFooter = false;
        appState.disableFooterLink = false;
      }
    }
    isSubcard2Unlocked = true;
    localStorage.setItem('justalink_subcard2_unlocked', 'true');
    populateBuilderInputs();
    renderSubCardPanel();
    renderSubCardPanel2();
    updatePreview();
    updateShareUrl();
    showToast('Profile restored', 'info');
  }

  function openStarFollowModal(userStatus) {
    const modal = document.getElementById('star-follow-repo-modal');
    if (modal) {
      const statusDiv = document.getElementById('star-follow-verify-status');
      if (statusDiv) {
        statusDiv.className = 'hidden p-3 rounded-lg border text-xs font-mono whitespace-pre-wrap verify-status-box';
        statusDiv.textContent = '';
      }

      const titleEl = document.getElementById('star-follow-modal-title');
      const descEl = document.getElementById('star-follow-modal-desc');
      const step1LabelEl = document.getElementById('star-follow-modal-step1-label');
      const starBtn = document.getElementById('star-follow-modal-star-btn');
      const followBtn = document.getElementById('star-follow-modal-follow-btn');
      const buttonsContainer = document.getElementById('star-follow-modal-buttons');

      if (userStatus && userStatus.hasStarred && !userStatus.isFollowing) {
        if (titleEl) titleEl.innerHTML = '<span>Follow @jaival-11 to Unlock Additional customisation</span>';
        if (descEl) descEl.textContent = 'You have starred the repo! Now follow @jaival-11 on GitHub to additional customisation.';
        if (step1LabelEl) step1LabelEl.innerHTML = '1. Follow <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">@jaival-11</code> on GitHub:';
        if (starBtn) starBtn.classList.add('hidden');
        if (followBtn) followBtn.classList.remove('hidden');
        if (buttonsContainer) {
          buttonsContainer.classList.remove('sm:grid-cols-2');
          buttonsContainer.classList.add('grid-cols-1');
        }
      } else if (userStatus && !userStatus.hasStarred && userStatus.isFollowing) {
        if (titleEl) titleEl.innerHTML = '<span>Star Repo to Unlock Additional customisation</span>';
        if (descEl) descEl.textContent = 'You are following @jaival-11! Now star jaival-11/justalink on GitHub to unlock additional customisation.';
        if (step1LabelEl) step1LabelEl.innerHTML = '1. Star <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">jaival-11/justalink</code> on GitHub:';
        if (starBtn) starBtn.classList.remove('hidden');
        if (followBtn) followBtn.classList.add('hidden');
        if (buttonsContainer) {
          buttonsContainer.classList.remove('sm:grid-cols-2');
          buttonsContainer.classList.add('grid-cols-1');
        }
      } else if (isSubcardUnlocked && (!userStatus || (!userStatus.hasStarred && !userStatus.isFollowing))) {
        if (titleEl) titleEl.innerHTML = '<span>Also Follow to Unlock Additional customisation</span>';
        if (descEl) descEl.textContent = 'Also follow @jaival-11 on GitHub to unlock additional customisation.';
        if (step1LabelEl) step1LabelEl.innerHTML = '1. Also follow <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">@jaival-11</code> on GitHub:';
        if (starBtn) starBtn.classList.add('hidden');
        if (followBtn) followBtn.classList.remove('hidden');
        if (buttonsContainer) {
          buttonsContainer.classList.remove('sm:grid-cols-2');
          buttonsContainer.classList.add('grid-cols-1');
        }
      } else {
        if (titleEl) titleEl.innerHTML = '<span>Star & Follow to Unlock Additional customisation</span>';
        if (descEl) descEl.textContent = 'Follow @jaival-11 and star the repository on GitHub to unlock additional customisation.';
        if (step1LabelEl) step1LabelEl.innerHTML = '1. Star <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">jaival-11/justalink</code> & Follow <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">@jaival-11</code>:';
        if (starBtn) starBtn.classList.remove('hidden');
        if (followBtn) followBtn.classList.remove('hidden');
        if (buttonsContainer) {
          buttonsContainer.classList.remove('grid-cols-1');
          buttonsContainer.classList.add('sm:grid-cols-2');
        }
      }

      modal.classList.remove('hidden');
      const usernameInput = document.getElementById('input-star-follow-username');
      if (usernameInput) {
        if (!usernameInput.value) {
          usernameInput.value = localStorage.getItem('justalink_github_username') || '';
        }
        usernameInput.focus();
      }
    }
  }

  function closeStarFollowModal() {
    const modal = document.getElementById('star-follow-repo-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
    const usernameInput = document.getElementById('input-star-follow-username');
    if (usernameInput) {
      usernameInput.value = '';
    }
    const statusDiv = document.getElementById('star-follow-verify-status');
    if (statusDiv) {
      statusDiv.className = 'hidden p-3 rounded-lg border text-xs font-mono whitespace-pre-wrap verify-status-box';
      statusDiv.textContent = '';
    }
    if (pendingRestoredState && !isSubcard2Unlocked) {
      applyRestoredWithoutSubcard2();
    }
  }

  async function handleVerifyStarFollow() {
    const usernameInput = document.getElementById('input-star-follow-username');
    const verifyBtn = document.getElementById('btn-verify-star-follow');
    const statusDiv = document.getElementById('star-follow-verify-status');

    const username = usernameInput ? usernameInput.value.trim() : '';
    if (!username) {
      if (statusDiv) {
        statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
        statusDiv.textContent = 'Please enter your GitHub username.';
      }
      return;
    }

    if (verifyBtn) verifyBtn.disabled = true;
    if (statusDiv) {
      statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-loading';
      statusDiv.textContent = `Checking GitHub star and follow status for "${username}"...`;
    }

    try {
      const result = await checkIfUserStarredAndFollowed(username);
      const cleanUser = validateGitHubUsername(username);

      localStorage.setItem('justalink_github_username', cleanUser);
      appState.githubUsername = cleanUser;

      if (result.hasDoneBoth) {
        isSubcard2Unlocked = true;
        localStorage.setItem('justalink_subcard2_unlocked', 'true');
        isSubcardUnlocked = true;
        localStorage.setItem('justalink_subcard_unlocked', 'true');
        saveLastVerifiedTime();
        clearSavedFailedAttempt();

        if (pendingRestoredState) {
          pendingRestoredState.githubUsername = cleanUser;
          appState = pendingRestoredState;
          pendingRestoredState = null;
        }

        populateBuilderInputs();
        updateShareUrl();
        renderSubCardPanel();
        renderSubCardPanel2();
        updatePreview();

        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-success';
          statusDiv.textContent = `Verified! You starred jaival-11/justalink AND followed @jaival-11.\nAdditional customisation features unlocked for user "${cleanUser}".`;
        }

        showToast('Additional customisation features unlocked!', 'check');

        setTimeout(() => {
          closeStarFollowModal();
        }, 1500);
      } else {
        isSubcard2Unlocked = false;
        localStorage.setItem('justalink_subcard2_unlocked', 'false');

        if (result.hasStarred) {
          isSubcardUnlocked = true;
          localStorage.setItem('justalink_subcard_unlocked', 'true');
          saveLastVerifiedTime();
        } else {
          isSubcardUnlocked = false;
          localStorage.setItem('justalink_subcard_unlocked', 'false');
        }

        if (pendingRestoredState) {
          if (result.hasStarred) {
            // Apply subcard 1 restored features, but lock subcard 2
            applyRestoredWithoutSubcard2();
          } else {
            applyRestoredWithoutSubcard2();
          }
        } else {
          appState.banner = '';
          appState.footerUrl = '';
          populateBuilderInputs();
          renderSubCardPanel();
          renderSubCardPanel2();
          updatePreview();
          updateShareUrl();
        }
        updatePreview();

        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-warning';
          if (result.hasStarred && !result.isFollowing) {
            statusDiv.textContent = `Star verified! Footer customisation features unlocked for "${username}".\nPlease also follow @jaival-11 on GitHub to unlock additional customisation.`;
            showToast('Footer customisations unlocked! Follow @jaival-11 to additional customisation.', 'info');
          } else if (!result.hasStarred && result.isFollowing) {
            statusDiv.textContent = `Follow detected, but star is required1.\nPlease star jaival-11/justalink on GitHub.`;
          } else {
            statusDiv.textContent = `Verification incomplete for user "${username}". Please star jaival-11/justalink and follow @jaival-11.`;
          }
        }
      }
    } catch (err) {
      let userForAttempt = username;
      try { userForAttempt = validateGitHubUsername(username); } catch (e) {}

      if (err.isRateLimit) {
        saveFailedAttempt({
          username: userForAttempt,
          type: 'rate_limit',
          failedTime: Date.now(),
          resetTime: err.resetTime,
          minutesLeft: err.minutesLeft
        });
        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
          statusDiv.innerHTML = `API requests reached. Please try again in ${err.minutesLeft} minute${err.minutesLeft === 1 ? '' : 's'}.`;
        }
      } else if (err.isApiDown) {
        isSubcardUnlocked = true;
        localStorage.setItem('justalink_subcard_unlocked', 'true');
        isSubcard2Unlocked = true;
        localStorage.setItem('justalink_subcard2_unlocked', 'true');
        if (userForAttempt) {
          localStorage.setItem('justalink_github_username', userForAttempt);
          appState.githubUsername = userForAttempt;
        }

        saveFailedAttempt({
          username: userForAttempt,
          type: 'api_down_temp_access',
          targetCard: 'subcard2',
          failedTime: Date.now(),
          resetTime: Date.now() + 30 * 60 * 1000,
          retryAfterMinutes: 30
        });

        populateBuilderInputs();
        renderSubCardPanel();
        renderSubCardPanel2();
        updatePreview();
        updateShareUrl();

        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-warning';
          statusDiv.innerHTML = `GitHub API is currently down. Temporary 30-minute access granted to all features!\nPlease check status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.`;
        }

        showToast('GitHub API down: Temporary 30-min access granted to all features!', 'bolt');

        setTimeout(() => {
          closeStarFollowModal();
        }, 2500);
      } else {
        if (statusDiv) {
          statusDiv.className = 'p-3 rounded-lg border text-xs font-mono verify-status-box verify-status-error';
          statusDiv.textContent = `Error: ${err.message}`;
        }
      }
    } finally {
      if (verifyBtn) verifyBtn.disabled = false;
    }
  }

  function updateUnlockModalTicks() {
    const tickX = document.getElementById('unlock-tick-x');
    const tickTelegram = document.getElementById('unlock-tick-telegram');
    const linkX = document.getElementById('unlock-link-x');
    const linkTelegram = document.getElementById('unlock-link-telegram');

    const greenTickHTML = `<span class="w-5 h-5 rounded-full bg-brand-500 text-black font-extrabold inline-flex items-center justify-center text-xs shadow-none">✓</span>`;
    const verifyingHTML = `<span class="px-2 py-0.5 rounded text-[11px] font-semibold unlock-verifying-badge flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> Verifying...</span>`;

    if (tickX) {
      if (unlockState.xOpened) {
        tickX.innerHTML = greenTickHTML;
      } else if (verifyingState.x) {
        tickX.innerHTML = verifyingHTML;
      } else {
        tickX.innerHTML = `<span class="w-5 h-5 rounded-full border border-zinc-500 inline-flex items-center justify-center text-[10px] builder-subtext font-mono">1</span>`;
      }
    }

    if (tickTelegram) {
      if (unlockState.telegramOpened) {
        tickTelegram.innerHTML = greenTickHTML;
      } else if (verifyingState.telegram) {
        tickTelegram.innerHTML = verifyingHTML;
      } else {
        tickTelegram.innerHTML = `<span class="w-5 h-5 rounded-full border border-zinc-500 inline-flex items-center justify-center text-[10px] builder-subtext font-mono">2</span>`;
      }
    }

    if (linkX) {
      linkX.classList.remove('opacity-60', 'opacity-50', 'pointer-events-none');
    }

    if (linkTelegram) {
      linkTelegram.classList.remove('opacity-60', 'opacity-50', 'pointer-events-none');
    }

    const successMsg = document.getElementById('unlock-success-msg');
    if (successMsg) {
      if (unlockState.xOpened && unlockState.telegramOpened) {
        successMsg.classList.remove('hidden');
      } else {
        successMsg.classList.add('hidden');
      }
    }
  }

  function checkUnlockConditions() {
    if (unlockState.xOpened && unlockState.telegramOpened) {
      if (!isCustomUnlocked) {
        isCustomUnlocked = true;
        localStorage.setItem('justalink_custom_colors_unlocked', 'true');
        showToast('Custom colors feature unlocked!', 'check');
      }
      renderThemeSelector();
      updatePreview();
    }
  }

  async function processRestoreInput(inputUrl) {
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
      const bannerVal = decoded.banner || decoded.bannerImage || '';
      const footerUrlVal = decoded.footerUrl || decoded.customFooterUrl || '';
      const isFooterLinkDisabled = decoded.disableFooterLink !== undefined 
        ? !!decoded.disableFooterLink 
        : (decoded.enableFooterLink !== undefined ? !decoded.enableFooterLink : !!decoded.footerLinkDisabled);
      
      const hasCustomFooterText = !!(decoded.customFooter && String(decoded.customFooter).trim());
      const isFooterDisabled = !!(decoded.disableFooter || decoded.footerDisabled);
      const hasSubcard1Features = hasCustomFooterText || isFooterDisabled || isFooterLinkDisabled;

      if ((bannerVal && String(bannerVal).trim()) || (footerUrlVal && String(footerUrlVal).trim())) {
        isSubcard2Unlocked = true;
        localStorage.setItem('justalink_subcard2_unlocked', 'true');
      }

      const hasSubcard2Features = !!(bannerVal && String(bannerVal).trim()) || !!(footerUrlVal && String(footerUrlVal).trim());

      // Rule 5: If the username in restored is different from saved one, use the saved one for verification and include that only in the payload. Discard the one which was in restored url.
      const savedUser = localStorage.getItem('justalink_github_username') || '';

      const candidateState = {
        tag: decoded.tag || 'v1.0',
        name: decoded.name || '',
        avatar: decoded.avatar || '',
        banner: bannerVal,
        bio: decoded.bio || '',
        message: decoded.message || decoded.shortMessage || '',
        theme: decoded.theme || 'slate',
        customBg: decoded.customBg || '#0f172a',
        customAccent: decoded.customAccent || '#d4845a',
        customFooter: decoded.customFooter || '',
        footerUrl: footerUrlVal,
        disableFooter: isFooterDisabled,
        disableFooterLink: isFooterLinkDisabled,
        githubUsername: savedUser,
        socials: Array.isArray(decoded.socials) ? decoded.socials : [],
        links: Array.isArray(decoded.links) ? decoded.links.map(l => ({
          id: l.id || ('link_' + Math.random().toString(36).substring(2, 9)),
          title: l.title || '',
          url: l.url || '',
          description: l.description || ''
        })) : []
      };

      if (!ENABLE_VERIFICATION_SYSTEM) {
        isSubcardUnlocked = true;
        isSubcard2Unlocked = true;
        appState = candidateState;
        populateBuilderInputs();
        renderSubCardPanel();
        renderSubCardPanel2();
        updatePreview();
        updateShareUrl();
        closeRestoreModal();
        return { success: true };
      }

      if (hasSubcard2Features) {
        if (savedUser) {
          let checkResult = { hasStarred: false, isFollowing: false, hasDoneBoth: false };
          try {
            checkResult = await checkIfUserStarredAndFollowed(savedUser);
          } catch (err) {
            console.warn('Error checking star & follow status for saved user:', err);
          }

          if (checkResult.hasDoneBoth) {
            isSubcard2Unlocked = true;
            localStorage.setItem('justalink_subcard2_unlocked', 'true');
            isSubcardUnlocked = true;
            localStorage.setItem('justalink_subcard_unlocked', 'true');
            saveLastVerifiedTime();
            appState = candidateState;
            populateBuilderInputs();
            renderSubCardPanel();
            renderSubCardPanel2();
            updatePreview();
            updateShareUrl();
            closeRestoreModal();
            return { success: true };
          } else {
            pendingRestoredState = candidateState;
            closeRestoreModal();

            let titleStr = '';
            let msgStr = '';
            let btnText = '';

            if (checkResult.hasStarred && !checkResult.isFollowing) {
              titleStr = '👤 Follow Required for Sub-Card 2';
              msgStr = `The restored profile contains Customization Sub-Card 2 features (banner image / custom footer link). You have starred the repository, but you need to follow <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">@jaival-11</code> on GitHub to keep these features.`;
              btnText = 'Follow & Verify';
            } else if (!checkResult.hasStarred && checkResult.isFollowing) {
              titleStr = '⭐ Star Required for Sub-Card 2';
              msgStr = `The restored profile contains Customization Sub-Card 2 features (banner image / custom footer link). You are following @jaival-11, but you need to star <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">jaival-11/justalink</code> on GitHub to keep these features.`;
              btnText = 'Star Repo & Verify';
            } else {
              titleStr = '⭐👤 Star & Follow Required for Sub-Card 2';
              msgStr = `The restored profile contains Customization Sub-Card 2 features (banner image / custom footer link), but your saved GitHub username (<code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">${savedUser}</code>) has not starred the repo and followed @jaival-11 yet.<br><br>Please star and follow to keep these features, or continue without them.`;
              btnText = 'Star & Follow to Verify';
            }

            openRestoreSubcardModal({
              title: titleStr,
              message: msgStr,
              unlockBtnText: btnText,
              onUnlock: () => {
                openStarFollowModal(checkResult);
                const input = document.getElementById('input-star-follow-username');
                if (input) input.value = savedUser;
              },
              onContinue: () => {
                applyRestoredWithoutSubcard2();
              }
            });
            return { success: true, pendingModal: true };
          }
        } else {
          pendingRestoredState = candidateState;
          closeRestoreModal();
          openRestoreSubcardModal({
            title: '🔒 Locked Feature Detected (Sub-Card 2)',
            message: `This restored profile uses Customization Sub-Card 2 features (banner image / custom footer link), but no verified GitHub username was found in your local storage.<br><br>Would you like to unlock this feature by starring the repo and following on GitHub, or continue without it?`,
            unlockBtnText: 'Unlock Feature',
            onUnlock: () => {
              openStarFollowModal();
            },
            onContinue: () => {
              applyRestoredWithoutSubcard2();
            }
          });
          return { success: true, pendingModal: true };
        }
      } else if (hasSubcard1Features) {
        if (savedUser) {
          let hasStarred = false;
          try {
            hasStarred = await checkIfUserStarred(savedUser);
          } catch (err) {
            console.warn('Error checking star status for saved user:', err);
            hasStarred = false;
          }

          if (hasStarred) {
            isSubcardUnlocked = true;
            localStorage.setItem('justalink_subcard_unlocked', 'true');
            saveLastVerifiedTime();
            appState = candidateState;
            populateBuilderInputs();
            renderSubCardPanel();
            renderSubCardPanel2();
            updatePreview();
            updateShareUrl();
            closeRestoreModal();
            return { success: true };
          } else {
            pendingRestoredState = candidateState;
            closeRestoreModal();
            openRestoreSubcardModal({
              title: '⭐ Star Repo Required',
              message: `The restored profile contains Customization Sub-Card 1 features, but your saved GitHub username (<code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">${savedUser}</code>) has not starred the repository yet.<br><br>Please star the repository to keep these features, or continue without them.`,
              unlockBtnText: 'Star Repo & Verify',
              onUnlock: () => {
                openStarModal();
                const input = document.getElementById('input-star-username');
                if (input) input.value = savedUser;
              },
              onContinue: () => {
                applyRestoredWithoutSubcard1();
              }
            });
            return { success: true, pendingModal: true };
          }
        } else {
          pendingRestoredState = candidateState;
          closeRestoreModal();
          openRestoreSubcardModal({
            title: '🔒 Locked Feature Detected',
            message: `This restored profile uses Customization Sub-Card 1 features (custom footer / branding), but no verified GitHub username was found in your local storage.<br><br>Would you like to unlock this feature by starring the repository, or continue without it?`,
            unlockBtnText: 'Unlock Feature',
            onUnlock: () => {
              openStarModal();
            },
            onContinue: () => {
              applyRestoredWithoutSubcard1();
            }
          });
          return { success: true, pendingModal: true };
        }
      } else {
        appState = candidateState;
        populateBuilderInputs();
        renderSubCardPanel();
        renderSubCardPanel2();
        updatePreview();
        updateShareUrl();
        closeRestoreModal();
        return { success: true };
      }
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
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
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

  // --- Helper to handle banner image fallback & avatar overlap ---
  function setupBannerImage(bannerUrl, containerEl, imgEl, avatarWrapEl, defaultAvatarClass, overlapAvatarClass) {
    if (!containerEl || !imgEl || !avatarWrapEl) return;
    if (!bannerUrl || !bannerUrl.trim()) {
      containerEl.classList.add('hidden');
      imgEl.src = '';
      avatarWrapEl.className = defaultAvatarClass;
      return;
    }

    const cleanUrl = bannerUrl.trim();
    imgEl.onload = function () {
      containerEl.classList.remove('hidden');
      avatarWrapEl.className = overlapAvatarClass;
    };
    imgEl.onerror = function () {
      containerEl.classList.add('hidden');
      avatarWrapEl.className = defaultAvatarClass;
    };
    imgEl.src = cleanUrl;
  }

  // --- Render Functions ---

  function renderThemeSelector() {
    themeOptionsContainer.innerHTML = '';
    THEMES.forEach(t => {
      const isSelected = appState.theme === t.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `p-3 rounded-lg border text-left flex flex-col justify-between transition-all ${t.bg} ${t.text} ${
        isSelected ? 'ring-2 ring-inset ring-brand-500 border-brand-500 font-bold' : 'border-zinc-700/60 opacity-80 hover:opacity-100'
      }`;
      btn.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold">${t.name}</span>
          ${isSelected ? `<span class="text-brand-400 text-xs">${ICONS.check}</span>` : ''}
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

    renderCustomThemeControls();
    renderSubCardPanel();
    renderSubCardPanel2();
  }

  function renderCustomThemeControls() {
    let customPanel = document.getElementById('custom-theme-panel');
    if (!customPanel) return;

    const isCustomSelected = appState.theme === 'custom';
    const bgVal = appState.customBg || '#0f172a';
    const accentVal = appState.customAccent || '#d4845a';

    // Active custom theme controls (unlocked by default)
    customPanel.className = `mt-4 p-3.5 rounded-lg border transition-all ${
      isCustomSelected ? 'ring-2 ring-inset ring-brand-500 border-brand-500 builder-card' : 'border-zinc-700/60 builder-card'
    }`;
    customPanel.onclick = null;
    customPanel.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold">Custom Theme</span>
        </div>
        <button type="button" id="btn-select-custom-theme" class="text-xs font-bold px-2.5 py-1 rounded transition-colors ${
          isCustomSelected ? 'bg-brand-600 text-white' : 'builder-muted-btn'
        }">
          ${isCustomSelected ? 'Active' : 'Use Custom Theme'}
        </button>
      </div>
        <p class="text-[11px] builder-subtext mb-3">Select your custom background color and accent color.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label for="input-custom-bg-picker" class="block text-[10px] uppercase font-bold builder-subtext mb-1">Background Color</label>
            <div class="flex items-center gap-2">
              <input type="color" id="input-custom-bg-picker" value="${bgVal}" class="w-8 h-8 rounded border border-zinc-600 p-0 cursor-pointer bg-transparent" />
              <input type="text" id="input-custom-bg-text" value="${bgVal}" class="w-full builder-input border rounded px-2.5 py-1 text-xs font-mono focus:outline-none" placeholder="#0f172a" />
            </div>
          </div>
          <div>
            <label for="input-custom-accent-picker" class="block text-[10px] uppercase font-bold builder-subtext mb-1">Accent Color</label>
            <div class="flex items-center gap-2">
              <input type="color" id="input-custom-accent-picker" value="${accentVal}" class="w-8 h-8 rounded border border-zinc-600 p-0 cursor-pointer bg-transparent" />
              <input type="text" id="input-custom-accent-text" value="${accentVal}" class="w-full builder-input border rounded px-2.5 py-1 text-xs font-mono focus:outline-none" placeholder="#d4845a" />
            </div>
          </div>
        </div>
      `;

      const btnSelectCustom = customPanel.querySelector('#btn-select-custom-theme');
      if (btnSelectCustom) {
        btnSelectCustom.addEventListener('click', (e) => {
          e.stopPropagation();
          appState.theme = 'custom';
          renderThemeSelector();
          updatePreview();
          updateShareUrl();
        });
      }

      const pickerBg = customPanel.querySelector('#input-custom-bg-picker');
      const textBg = customPanel.querySelector('#input-custom-bg-text');
      const pickerAccent = customPanel.querySelector('#input-custom-accent-picker');
      const textAccent = customPanel.querySelector('#input-custom-accent-text');

      if (pickerBg && textBg) {
        pickerBg.addEventListener('input', (e) => {
          appState.customBg = e.target.value;
          textBg.value = e.target.value;
          appState.theme = 'custom';
          renderThemeSelector();
          updatePreview();
          updateShareUrl();
        });
        textBg.addEventListener('input', (e) => {
          let val = e.target.value.trim();
          if (val && !val.startsWith('#')) val = '#' + val;
          appState.customBg = val;
          if (/^#[0-9A-F]{6}$/i.test(val)) {
            pickerBg.value = val;
          }
          appState.theme = 'custom';
          renderThemeSelector();
          updatePreview();
          updateShareUrl();
        });
      }

      if (pickerAccent && textAccent) {
        pickerAccent.addEventListener('input', (e) => {
          appState.customAccent = e.target.value;
          textAccent.value = e.target.value;
          appState.theme = 'custom';
          renderThemeSelector();
          updatePreview();
          updateShareUrl();
        });
        textAccent.addEventListener('input', (e) => {
          let val = e.target.value.trim();
          if (val && !val.startsWith('#')) val = '#' + val;
          appState.customAccent = val;
          if (/^#[0-9A-F]{6}$/i.test(val)) {
            pickerAccent.value = val;
          }
          appState.theme = 'custom';
          renderThemeSelector();
          updateShareUrl();
        });
      }
    }

  function renderSubCardPanel() {
    let subCardPanel = document.getElementById('sub-card-panel');
    if (!subCardPanel) return;

    const footerVal = appState.customFooter || '';
    const isFooterDisabled = !!appState.disableFooter;
    const isFooterLinkDisabled = !!appState.disableFooterLink;

    if (ENABLE_VERIFICATION_SYSTEM && !isSubcardUnlocked) {
      // Locked state: disabled & greyed out with high contrast
      subCardPanel.className = 'mt-4 p-3.5 rounded-lg border border-dashed custom-theme-locked-bg cursor-pointer transition-all hover:opacity-90 relative select-none';
      subCardPanel.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold">Footer Customisation</span>
            <span class="badge-locked">
              <span>Locked</span>
            </span>
          </div>
          <span class="text-[11px] unlock-link-text font-semibold underline">Click here to unlock</span>
        </div>
        <p class="text-[11px] builder-subtext mb-3">Enable/disable card footer or replace default "Built with JustALink" footer with your custom branding.</p>
        <div class="pointer-events-none opacity-60 space-y-3">
          <div>
            <label class="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold">
              <input type="checkbox" disabled ${!isFooterDisabled ? 'checked' : ''} class="rounded border-zinc-700 accent-brand-500 w-4 h-4 cursor-pointer" />
              <span>Enable Footer</span>
            </label>
          </div>
          <div class="${isFooterDisabled ? 'opacity-40 pointer-events-none' : ''} space-y-3">
            <div>
              <label class="block text-[10px] uppercase font-bold builder-subtext mb-1">Custom Footer Text</label>
              <input 
                type="text" 
                disabled 
                value="${footerVal.replace(/"/g, '&quot;')}" 
                placeholder="e.g. Built with ❤" 
                class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none" 
              />
            </div>
            <div>
              <label class="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold">
                <input type="checkbox" disabled ${!isFooterLinkDisabled ? 'checked' : ''} class="rounded border-zinc-700 accent-brand-500 w-4 h-4 cursor-pointer" />
                <span>Enable Footer Link</span>
              </label>
            </div>
          </div>
        </div>
      `;
      subCardPanel.onclick = (e) => {
        e.preventDefault();
        openStarModal();
      };
    } else if (!ENABLE_VERIFICATION_SYSTEM && !isSupportDevDismissed) {
      // Disabled at first but NOT greyed out
      subCardPanel.className = 'mt-4 p-3.5 rounded-lg border border-zinc-700/60 builder-card transition-all relative cursor-pointer';
      subCardPanel.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold">Footer Customisation</span>
          </div>
        </div>
        <p class="text-[11px] builder-subtext mb-3">Enable/disable card footer or custom branding. Markdown supported.</p>
        
        <div class="mb-3">
          <label class="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold builder-subtext text-current">
            <input 
              type="checkbox" 
              ${!isFooterDisabled ? 'checked' : ''} 
              class="rounded border-zinc-700 accent-brand-500 w-4 h-4 cursor-pointer" 
            />
            <span>Enable Footer</span>
          </label>
        </div>

        <div id="custom-footer-container" class="space-y-3 transition-all ${isFooterDisabled ? 'opacity-40' : ''}">
          <div>
            <label class="block text-[10px] uppercase font-bold builder-subtext mb-1">Custom Footer Text</label>
            <input 
              type="text" 
              readonly
              value="${footerVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. Built with ❤" 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none cursor-pointer" 
            />
          </div>

          <div>
            <label class="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold builder-subtext text-current">
              <input 
                type="checkbox" 
                ${!isFooterLinkDisabled ? 'checked' : ''} 
                class="rounded border-zinc-700 accent-brand-500 w-4 h-4 cursor-pointer" 
              />
              <span>Enable Footer Link</span>
            </label>
          </div>
        </div>
      `;
      subCardPanel.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openSupportDevModal();
      };
    } else {
      // Unlocked state: active sub-card controls
      subCardPanel.className = 'mt-4 p-3.5 rounded-lg border border-zinc-700/60 builder-card transition-all relative';
      subCardPanel.onclick = null;
      subCardPanel.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold">Footer Customisation</span>
            ${ENABLE_VERIFICATION_SYSTEM ? `
            <span class="badge-unlocked">
              <span>Unlocked</span>
            </span>` : ''}
          </div>
        </div>
        <p class="text-[11px] builder-subtext mb-3">Enable/disable card footer or custom branding. Markdown supported.</p>
        
        <div class="mb-3">
          <label class="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold builder-subtext text-current">
            <input 
              type="checkbox" 
              id="checkbox-enable-footer" 
              ${!isFooterDisabled ? 'checked' : ''} 
              class="rounded border-zinc-700 accent-brand-500 w-4 h-4 cursor-pointer" 
            />
            <span>Enable Footer</span>
          </label>
        </div>

        <div id="custom-footer-container" class="space-y-3 transition-all ${isFooterDisabled ? 'opacity-40 pointer-events-none' : ''}">
          <div>
            <label for="input-custom-footer" class="block text-[10px] uppercase font-bold builder-subtext mb-1">Custom Footer Text</label>
            <input 
              type="text" 
              id="input-custom-footer" 
              ${isFooterDisabled ? 'disabled' : ''}
              value="${footerVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. Built with ❤" 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none" 
            />
          </div>

          <div>
            <label class="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold builder-subtext text-current">
              <input 
                type="checkbox" 
                id="checkbox-enable-footer-link" 
                ${!isFooterLinkDisabled ? 'checked' : ''} 
                ${isFooterDisabled ? 'disabled' : ''}
                class="rounded border-zinc-700 accent-brand-500 w-4 h-4 cursor-pointer" 
              />
              <span>Enable Footer Link</span>
            </label>
          </div>
        </div>
      `;

      const checkboxEnableFooter = document.getElementById('checkbox-enable-footer');
      if (checkboxEnableFooter) {
        checkboxEnableFooter.addEventListener('change', (e) => {
          appState.disableFooter = !e.target.checked;
          renderSubCardPanel();
          renderSubCardPanel2();
          updatePreview();
          updateShareUrl();
        });
      }

      const inputFooter = document.getElementById('input-custom-footer');
      if (inputFooter) {
        inputFooter.addEventListener('input', (e) => {
          appState.customFooter = e.target.value;
          updatePreview();
          updateShareUrl();
        });
      }

      const checkboxEnableFooterLink = document.getElementById('checkbox-enable-footer-link');
      if (checkboxEnableFooterLink) {
        checkboxEnableFooterLink.addEventListener('change', (e) => {
          appState.disableFooterLink = !e.target.checked;
          renderSubCardPanel2();
          updatePreview();
          updateShareUrl();
        });
      }
    }
  }

  function renderSubCardPanel2() {
    let subCardPanel2 = document.getElementById('sub-card-panel-2');
    if (!subCardPanel2) return;

    const bannerVal = appState.banner || '';
    const footerUrlVal = appState.footerUrl || '';
    const isFooterLinkOff = !!appState.disableFooterLink || !!appState.disableFooter;

    if (ENABLE_VERIFICATION_SYSTEM && !isSubcard2Unlocked) {
      // Locked state: disabled & greyed out with high contrast
      subCardPanel2.className = 'mt-3 p-3.5 rounded-lg border border-dashed custom-theme-locked-bg cursor-pointer transition-all hover:opacity-90 relative select-none';
      subCardPanel2.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold">Additional Customisation</span>
            <span class="badge-locked">
              <span>Locked</span>
            </span>
          </div>
          <span class="text-[11px] unlock-link-text font-semibold underline">${isSubcardUnlocked ? 'Also follow to unlock' : 'Click here to unlock'}</span>
        </div>
        <p class="text-[11px] builder-subtext mb-3">Add a custom banner image and custom footer link URL to your profile.</p>
        <div class="pointer-events-none opacity-60 space-y-3">
          <div>
            <label class="block text-[10px] uppercase font-bold builder-subtext mb-1">Banner Image Link</label>
            <input 
              type="text" 
              disabled 
              value="${bannerVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. https://images.unsplash.com/photo-..." 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none" 
            />
          </div>
          <div class="${isFooterLinkOff ? 'opacity-40 pointer-events-none' : ''}">
            <label class="block text-[10px] uppercase font-bold builder-subtext mb-1">Footer URL</label>
            <input 
              type="text" 
              disabled 
              value="${footerUrlVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. https://yourwebsite.com" 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none" 
            />
          </div>
        </div>
      `;
      subCardPanel2.onclick = (e) => {
        e.preventDefault();
        openStarFollowModal();
      };
    } else if (!ENABLE_VERIFICATION_SYSTEM && !isSupportDevDismissed) {
      // Disabled at first but NOT greyed out
      subCardPanel2.className = 'mt-3 p-3.5 rounded-lg border border-zinc-700/60 builder-card transition-all relative cursor-pointer';
      subCardPanel2.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold">Additional Customisation</span>
          </div>
        </div>
        <p class="text-[11px] builder-subtext mb-3">Add a banner image URL and custom footer link URL for your profile card. Recommended aspect ratio for banner is 3:1 (or 16:5)</p>
        
        <div class="space-y-3">
          <div>
            <label class="block text-[10px] uppercase font-bold builder-subtext mb-1">Banner Image Link</label>
            <input 
              type="text" 
              readonly 
              value="${bannerVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. https://images.unsplash.com/photo-..." 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none cursor-pointer" 
            />
          </div>
          <div class="${isFooterLinkOff ? 'opacity-40' : ''}">
            <label class="block text-[10px] uppercase font-bold builder-subtext mb-1">Footer URL</label>
            <input 
              type="text" 
              readonly 
              value="${footerUrlVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. https://yourwebsite.com" 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none cursor-pointer" 
            />
          </div>
        </div>
      `;
      subCardPanel2.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openSupportDevModal();
      };
    } else {
      // Unlocked state: active sub-card controls
      subCardPanel2.className = 'mt-3 p-3.5 rounded-lg border border-zinc-700/60 builder-card transition-all relative';
      subCardPanel2.onclick = null;
      subCardPanel2.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold">Additional Customisation</span>
            ${ENABLE_VERIFICATION_SYSTEM ? `
            <span class="badge-unlocked">
              <span>Unlocked</span>
            </span>` : ''}
          </div>
        </div>
        <p class="text-[11px] builder-subtext mb-3">Add a banner image URL and custom footer link URL for your profile card. Recommended aspect ratio for banner is 3:1 (or 16:5)</p>
        
        <div class="space-y-3">
          <div>
            <label for="input-custom-banner" class="block text-[10px] uppercase font-bold builder-subtext mb-1">Banner Image Link</label>
            <input 
              type="text" 
              id="input-custom-banner" 
              value="${bannerVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. https://images.unsplash.com/photo-..." 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none" 
            />
          </div>
          <div id="footer-url-container" class="transition-all ${isFooterLinkOff ? 'opacity-40 pointer-events-none' : ''}">
            <label for="input-footer-url" class="block text-[10px] uppercase font-bold builder-subtext mb-1 flex items-center justify-between">
              <span>Footer URL</span>
              ${isFooterLinkOff ? '<span class="text-[9px] lowercase font-normal italic opacity-75">(footer link disabled)</span>' : ''}
            </label>
            <input 
              type="text" 
              id="input-footer-url" 
              ${isFooterLinkOff ? 'disabled' : ''}
              value="${footerUrlVal.replace(/"/g, '&quot;')}" 
              placeholder="e.g. https://yourwebsite.com" 
              class="w-full builder-input border rounded px-3 py-1.5 text-xs focus:outline-none" 
            />
          </div>
        </div>
      `;

      const inputBanner = document.getElementById('input-custom-banner');
      if (inputBanner) {
        inputBanner.addEventListener('input', (e) => {
          appState.banner = e.target.value;
          updatePreview();
          updateShareUrl();
        });
      }

      const inputFooterUrl = document.getElementById('input-footer-url');
      if (inputFooterUrl) {
        inputFooterUrl.addEventListener('input', (e) => {
          appState.footerUrl = e.target.value;
          updatePreview();
          updateShareUrl();
        });
      }
    }
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
            placeholder="Simple Icon Name (e.g. github, X, linkedin)" 
            value="${social.icon || ''}" 
            class="input-social-icon builder-input border rounded px-2.5 py-1.5 text-xs focus:outline-none"
          />
          <input 
            type="text" 
            placeholder="URL (e.g. https://... or mailto:user@example.com)" 
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
        bindFastTap(btnUp, () => {
          const temp = appState.socials[index];
          appState.socials[index] = appState.socials[index - 1];
          appState.socials[index - 1] = temp;
          renderSocialInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      if (btnDown && !btnDown.disabled) {
        bindFastTap(btnDown, () => {
          const temp = appState.socials[index];
          appState.socials[index] = appState.socials[index + 1];
          appState.socials[index + 1] = temp;
          renderSocialInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      bindFastTap(btnDelete, () => {
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
        bindFastTap(btnUp, () => {
          const temp = appState.links[index];
          appState.links[index] = appState.links[index - 1];
          appState.links[index - 1] = temp;
          renderLinkInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      if (btnDown && !btnDown.disabled) {
        bindFastTap(btnDown, () => {
          const temp = appState.links[index];
          appState.links[index] = appState.links[index + 1];
          appState.links[index + 1] = temp;
          renderLinkInputs();
          updatePreview();
          updateShareUrl();
        });
      }

      bindFastTap(btnDelete, () => {
        appState.links.splice(index, 1);
        renderLinkInputs();
        updatePreview();
        updateShareUrl();
      });

      linksContainer.appendChild(item);
    });
  }

  function updatePreview() {
    // Theme class & inline styles on preview frame
    if (appState.theme === 'custom') {
      const bg = appState.customBg || '#0f172a';
      const accent = appState.customAccent || '#d4845a';
      const textColor = getContrastTextColor(bg);

      previewFrame.className = 'w-full max-w-sm mx-auto p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden font-profile preview-card-shadow';
      previewFrame.style.backgroundColor = bg;
      previewFrame.style.color = textColor;
      previewFrame.style.borderColor = accent;
      if (previewMessage) previewMessage.style.borderColor = accent;
    } else {
      previewFrame.style.backgroundColor = '';
      previewFrame.style.color = '';
      previewFrame.style.borderColor = '';
      if (previewMessage) previewMessage.style.borderColor = '';
      previewFrame.className = `w-full max-w-sm mx-auto p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden font-profile preview-card-shadow theme-${appState.theme}`;
    }
    
    // Name & Bio
    previewName.innerHTML = parseMarkdown(appState.name || 'Your Name', true);
    previewBio.innerHTML = parseMarkdown(appState.bio || 'Your bio details will be displayed here.', true);

    // Banner Image & Avatar
    const activeBanner = isSubcard2Unlocked ? (appState.banner || '') : '';
    setupBannerImage(
      activeBanner,
      previewBannerContainer,
      previewBannerImg,
      previewAvatarContainer,
      'flex justify-center mb-4 relative z-10',
      'flex justify-center mb-4 relative z-10 -mt-12 sm:-mt-14'
    );
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
      const isCustom = appState.theme === 'custom';
      const accent = appState.customAccent || '#d4845a';
      const accentText = getContrastTextColor(accent);

      appState.links.forEach(l => {
        const linkBtn = document.createElement('a');
        linkBtn.href = sanitizeUrl(l.url);
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.className = 'link-btn block w-full py-2.5 px-4 rounded-lg text-center cursor-pointer transition-colors';
        
        if (isCustom) {
          linkBtn.style.backgroundColor = accent;
          linkBtn.style.color = accentText;
          linkBtn.style.borderColor = accent;
        }

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

    // Watermark link target & text
    const activeDisableFooter = isSubcardUnlocked ? !!appState.disableFooter : false;
    const activeDisableFooterLink = isSubcardUnlocked ? !!appState.disableFooterLink : false;
    const activeCustomFooter = isSubcardUnlocked ? (appState.customFooter || '') : '';

    const isFooterLinkDisabled = activeDisableFooterLink || activeDisableFooter;
    if (isFooterLinkDisabled) {
      watermarkLink.removeAttribute('href');
      watermarkLink.removeAttribute('target');
      watermarkLink.removeAttribute('rel');
      watermarkLink.removeAttribute('title');
      watermarkLink.classList.add('cursor-default', 'no-underline');
      watermarkLink.classList.remove('cursor-pointer', 'underline');
      watermarkLink.onclick = (e) => { e.preventDefault(); };
    } else {
      const activeFooterUrl = isSubcard2Unlocked ? (appState.footerUrl || '') : '';
      const customUrl = (activeFooterUrl && activeFooterUrl.trim()) ? sanitizeUrl(activeFooterUrl) : null;
      watermarkLink.href = customUrl || 'https://jaival-11.github.io/justalink?ref=footer';
      watermarkLink.target = '_blank';
      watermarkLink.rel = 'noopener noreferrer';
      watermarkLink.setAttribute('title', customUrl ? 'Visit footer URL' : 'Create your own zero-database link-in-bio page');
      watermarkLink.classList.remove('cursor-default', 'no-underline');
      watermarkLink.classList.add('cursor-pointer', 'underline');
      watermarkLink.onclick = null;
    }

    if (watermarkLink.parentElement) {
      if (activeDisableFooter) {
        watermarkLink.parentElement.classList.add('hidden');
      } else {
        watermarkLink.parentElement.classList.remove('hidden');
      }
    }
    if (activeCustomFooter && activeCustomFooter.trim()) {
      watermarkLink.innerHTML = parseMarkdown(activeCustomFooter.trim(), false);
    } else {
      if (isFooterLinkDisabled) {
        watermarkLink.innerHTML = 'Built with JustALink';
      } else {
        watermarkLink.innerHTML = 'Built with <span class="underline">JustALink</span>';
      }
    }
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
    renderSubCardPanel();
    renderSubCardPanel2();
    updatePreview();
    updateShareUrl();
  }

  function renderViewMode(data) {
    if (data.theme === 'custom') {
      const bg = data.customBg || '#0f172a';
      const accent = data.customAccent || '#d4845a';
      const textColor = getContrastTextColor(bg);
      const outerBg = getFaintedOuterColor(bg);

      viewModeSec.className = 'min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6';
      viewModeSec.style.backgroundColor = outerBg;

      viewCardContainer.className = 'w-full max-w-md p-6 sm:p-8 rounded-2xl border transition-colors my-auto relative overflow-hidden';
      viewCardContainer.style.backgroundColor = bg;
      viewCardContainer.style.color = textColor;
      viewCardContainer.style.borderColor = accent;
      if (viewMessage) viewMessage.style.borderColor = accent;
    } else {
      viewModeSec.style.backgroundColor = '';
      viewCardContainer.style.backgroundColor = '';
      viewCardContainer.style.color = '';
      viewCardContainer.style.borderColor = '';
      if (viewMessage) viewMessage.style.borderColor = '';

      const themeClass = `theme-${data.theme || 'slate'}`;
      const pageThemeClass = `page-theme-${data.theme || 'slate'}`;

      viewModeSec.className = `min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 ${pageThemeClass}`;
      viewCardContainer.className = `w-full max-w-md p-6 sm:p-8 rounded-2xl border transition-colors my-auto relative overflow-hidden ${themeClass}`;
    }

    // Name & Bio
    viewName.innerHTML = parseMarkdown(data.name || 'Anonymous', true);
    viewBio.innerHTML = parseMarkdown(data.bio || '', true);

    // Banner Image & Avatar
    setupBannerImage(
      data.banner || data.bannerImage,
      viewBannerContainer,
      viewBannerImg,
      viewAvatarContainer,
      'flex justify-center mb-5 relative z-10',
      'flex justify-center mb-5 relative z-10 -mt-16 sm:-mt-20'
    );
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
      const isCustom = data.theme === 'custom';
      const accent = data.customAccent || '#d4845a';
      const accentText = getContrastTextColor(accent);

      data.links.forEach(l => {
        const linkBtn = document.createElement('a');
        linkBtn.href = sanitizeUrl(l.url);
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.className = 'link-btn block w-full py-3 px-5 rounded-xl text-center cursor-pointer transition-colors';
        
        if (isCustom) {
          linkBtn.style.backgroundColor = accent;
          linkBtn.style.color = accentText;
          linkBtn.style.borderColor = accent;
        }

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
    const isFooterLinkDisabled = !!(data.disableFooterLink || data.footerLinkDisabled || data.disableFooter || data.footerDisabled || (data.enableFooterLink !== undefined && !data.enableFooterLink));
    if (isFooterLinkDisabled) {
      viewWatermarkLink.removeAttribute('href');
      viewWatermarkLink.removeAttribute('target');
      viewWatermarkLink.removeAttribute('rel');
      viewWatermarkLink.removeAttribute('title');
      viewWatermarkLink.classList.add('cursor-default', 'no-underline');
      viewWatermarkLink.classList.remove('cursor-pointer', 'underline');
      viewWatermarkLink.onclick = (e) => { e.preventDefault(); };
    } else {
      const customUrl = (data.footerUrl && String(data.footerUrl).trim()) ? sanitizeUrl(data.footerUrl) : null;
      viewWatermarkLink.href = customUrl || 'https://jaival-11.github.io/justalink?ref=footer';
      viewWatermarkLink.target = '_blank';
      viewWatermarkLink.rel = 'noopener noreferrer';
      viewWatermarkLink.setAttribute('title', customUrl ? 'Visit footer URL' : 'Create your own zero-database link-in-bio page');
      viewWatermarkLink.classList.remove('cursor-default', 'no-underline');
      viewWatermarkLink.classList.add('cursor-pointer', 'underline');
      viewWatermarkLink.onclick = null;
    }

    if (viewWatermarkLink.parentElement) {
      if (data.disableFooter || data.footerDisabled) {
        viewWatermarkLink.parentElement.classList.add('hidden');
      } else {
        viewWatermarkLink.parentElement.classList.remove('hidden');
      }
    }
    if (data.customFooter && data.customFooter.trim()) {
      viewWatermarkLink.innerHTML = parseMarkdown(data.customFooter.trim(), false);
    } else {
      if (isFooterLinkDisabled) {
        viewWatermarkLink.innerHTML = 'Built with JustALink';
      } else {
        viewWatermarkLink.innerHTML = 'Built with <span class="underline">JustALink</span>';
      }
    }
  }

  // --- Fast Touch & Click Helper for Mobile Responsiveness ---
  function bindFastTap(element, callback) {
    if (!element) return;
    
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let isTouch = false;
    let touchTimeout = null;

    element.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
        startTime = Date.now();
        isTouch = true;
        if (touchTimeout) {
          clearTimeout(touchTimeout);
          touchTimeout = null;
        }
      }
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      if (!isTouch || !e.changedTouches || e.changedTouches.length === 0) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
      
      const diffX = Math.abs(endX - startX);
      const diffY = Math.abs(endY - startY);
      const diffTime = endTime - startTime;
      
      // Tap if movement < 15px and duration < 500ms
      if (diffX < 15 && diffY < 15 && diffTime < 500) {
        if (e.cancelable) e.preventDefault();
        callback(e);
      }
      
      // Reset after a delay to allow future mouse clicks but block duplicate native clicks
      touchTimeout = setTimeout(() => { isTouch = false; }, 500);
    }, { passive: false });

    element.addEventListener('click', (e) => {
      if (!isTouch) {
        callback(e);
      }
    });
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
      card.classList.remove('is-active');
      if (cardWrapper) cardWrapper.classList.remove('is-open');
      if (chevron) chevron.classList.remove('rotate-180');
    });

    // If target card was closed, expand it smoothly
    if (!isCurrentlyOpen) {
      wrapper.classList.add('is-open');
      targetCard.classList.add('is-active');
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
        bindFastTap(header, (e) => {
          if (e.target && (e.target.closest('button') || e.target.closest('a') || e.target.closest('input'))) {
            return;
          }
          toggleCard(card);
        });
      }
    });
    openCard('1');
  }

  // --- Mobile Tab Switching Logic ---
  let currentMobileTab = 'edit';

  function switchMobileTab(tab) {
    currentMobileTab = tab;
    const formCol = document.getElementById('builder-form-col');
    const previewCol = document.getElementById('builder-preview-col');
    const shareCard = document.getElementById('share-card');
    const navEdit = document.getElementById('nav-btn-edit');
    const navPreview = document.getElementById('nav-btn-preview');
    const navShare = document.getElementById('nav-btn-share');

    if (navEdit) navEdit.classList.remove('active');
    if (navPreview) navPreview.classList.remove('active');
    if (navShare) navShare.classList.remove('active');

    if (tab === 'edit') {
      if (navEdit) navEdit.classList.add('active');
      if (formCol) formCol.classList.remove('hidden');
      if (previewCol) previewCol.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'preview') {
      if (navPreview) navPreview.classList.add('active');
      if (formCol) formCol.classList.add('hidden');
      if (previewCol) previewCol.classList.remove('hidden');
      updatePreview();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'share') {
      if (navShare) navShare.classList.add('active');
      if (formCol) formCol.classList.remove('hidden');
      if (previewCol) previewCol.classList.add('hidden');
      updateShareUrl();
      openCard('6');
      if (shareCard) {
        setTimeout(() => {
          shareCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 320);
      }
    }
  }

  window._lwSwitchTab = switchMobileTab;

  window.addEventListener('resize', () => {
    const formCol = document.getElementById('builder-form-col');
    const previewCol = document.getElementById('builder-preview-col');
    if (!formCol || !previewCol) return;

    if (window.innerWidth >= 640) {
      formCol.classList.remove('hidden');
      previewCol.classList.remove('hidden');
    } else {
      if (currentMobileTab === 'preview') {
        formCol.classList.add('hidden');
        previewCol.classList.remove('hidden');
      } else {
        formCol.classList.remove('hidden');
        previewCol.classList.add('hidden');
      }
    }
  });

  let previousRouteWasHashData = false;

  // --- Router Logic ---
  function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith('#data=')) {
      const base64Str = hash.substring(6);
      const decodedData = decodeData(base64Str);

      if (decodedData) {
        previousRouteWasHashData = true;
        // Track pageview for /view (aggregate profile view - strictly no user payload data passed!)
        trackUmamiEvent('pageview', { url: '/view', title: `${decodedData.name || 'Profile'} | JustALink` });
        

        const tag = decodedData.tag || 'v1.0';
        // Show View Mode: Hide Header Banner & Mobile Bottom Nav completely
        if (mainHeader) mainHeader.classList.add('hidden');
        builderModeSec.classList.add('hidden');
        viewModeSec.classList.remove('hidden');
        const mobileNav = document.getElementById('mobile-bottom-nav');
        if (mobileNav) mobileNav.classList.add('hidden');
        renderViewMode(decodedData);
        document.title = `${decodedData.name || 'Profile'} | JustALink`;
        return;
      } else {
        trackUmamiEvent('corrupted_hash_arrival');
        showToast('Invalid or corrupted link. Loading Builder Mode.', 'warning');
        window.location.hash = '';
      }
    }

    if (previousRouteWasHashData) {
      trackUmamiEvent('hash_removal_traffic');
      previousRouteWasHashData = false;
    }

    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('ref') === 'footer') {
      searchParams.delete('ref');
      const newSearch = searchParams.toString();
      const newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }

    // Log Native Pageview for Homepage (url: '/')
    trackUmamiEvent('pageview', { url: '/', title: 'JustALink - The URL is all' });

    // Default: Show Builder Mode & Top Header Banner
    if (mainHeader) mainHeader.classList.remove('hidden');
    viewModeSec.classList.add('hidden');
    builderModeSec.classList.remove('hidden');
    const mobileNav = document.getElementById('mobile-bottom-nav');
    if (mobileNav) mobileNav.classList.remove('hidden');
    document.title = 'JustALink - The URL is all';
    populateBuilderInputs();
    switchMobileTab(currentMobileTab || 'edit');
  }

  // --- Event Listeners Initialization ---

  function initEvents() {
    // Delegated click listener for Restore button (header) and Open Preview button
    document.addEventListener('click', (e) => {
      const btnRestore = e.target.closest('#btn-restore-url');
      if (btnRestore) {
        e.preventDefault();
        trackUmamiEvent('restore_click');
        openRestoreModal();
        return;
      }

      const btnPreview = e.target.closest('#btn-open-preview');
      if (btnPreview) {
        trackUmamiEvent('open_preview_link');
        updateShareUrl();
        if (!btnPreview.href || btnPreview.href === '#' || btnPreview.href.endsWith('#')) {
          e.preventDefault();
          const shareUrl = outputShareUrl.value;
          if (shareUrl) {
            window.open(shareUrl, '_blank');
          }
        }
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

      const btnCloseUnlock = e.target.closest('#btn-close-unlock-modal');
      const btnCancelUnlock = e.target.closest('#btn-cancel-unlock');
      if (btnCloseUnlock || btnCancelUnlock) {
        e.preventDefault();
        closeUnlockModal();
        return;
      }

      const btnCloseStar = e.target.closest('#btn-close-star-modal');
      const btnCancelStar = e.target.closest('#btn-cancel-star-modal');
      if (btnCloseStar || btnCancelStar) {
        e.preventDefault();
        closeStarModal();
        return;
      }

      const btnVerifyStar = e.target.closest('#btn-verify-star');
      if (btnVerifyStar) {
        e.preventDefault();
        handleVerifyStar();
        return;
      }

      const btnCloseStarFollow = e.target.closest('#btn-close-star-follow-modal');
      const btnCancelStarFollow = e.target.closest('#btn-cancel-star-follow-modal');
      if (btnCloseStarFollow || btnCancelStarFollow) {
        e.preventDefault();
        closeStarFollowModal();
        return;
      }

      const btnVerifyStarFollow = e.target.closest('#btn-verify-star-follow');
      if (btnVerifyStarFollow) {
        e.preventDefault();
        handleVerifyStarFollow();
        return;
      }

      const btnCloseRestoreSubcard = e.target.closest('#btn-close-restore-subcard-modal');
      if (btnCloseRestoreSubcard) {
        e.preventDefault();
        closeRestoreSubcardModal();
        const subcardModal = document.getElementById('restore-subcard-modal');
        if (subcardModal && subcardModal._onContinue) subcardModal._onContinue();
        return;
      }

      const btnContinueSubcard = e.target.closest('#btn-continue-restore-subcard');
      if (btnContinueSubcard) {
        e.preventDefault();
        closeRestoreSubcardModal();
        const subcardModal = document.getElementById('restore-subcard-modal');
        if (subcardModal && subcardModal._onContinue) subcardModal._onContinue();
        return;
      }

      const btnUnlockSubcard = e.target.closest('#btn-unlock-restore-subcard');
      if (btnUnlockSubcard) {
        e.preventDefault();
        closeRestoreSubcardModal();
        const subcardModal = document.getElementById('restore-subcard-modal');
        if (subcardModal && subcardModal._onUnlock) subcardModal._onUnlock();
        return;
      }

      const btnCloseSupportDev = e.target.closest('#btn-close-support-dev-modal');
      const btnContinueSupportDev = e.target.closest('#btn-continue-support-dev');
      if (btnCloseSupportDev || btnContinueSupportDev) {
        e.preventDefault();
        handleContinueSupportDev();
        return;
      }

      const btnAutoCheckVerify = e.target.closest('#btn-auto-check-verify');
      if (btnAutoCheckVerify) {
        e.preventDefault();
        const autoModal = document.getElementById('auto-check-failed-modal');
        const cb = autoModal ? autoModal._onVerifyAgain : null;
        closeAutoCheckFailedModal();
        if (cb) cb();
        return;
      }

      const btnAutoCheckContinue = e.target.closest('#btn-auto-check-continue');
      if (btnAutoCheckContinue) {
        e.preventDefault();
        const autoModal = document.getElementById('auto-check-failed-modal');
        const cb = autoModal ? autoModal._onContinueWithout : null;
        closeAutoCheckFailedModal();
        if (cb) cb();
        return;
      }

      const modal = document.getElementById('restore-modal');
      if (modal && e.target === modal) {
        closeRestoreModal();
      }

      const subcardModal = document.getElementById('restore-subcard-modal');
      if (subcardModal && e.target === subcardModal) {
        closeRestoreSubcardModal();
        if (subcardModal._onContinue) subcardModal._onContinue();
      }

      const unlockModal = document.getElementById('unlock-colors-modal');
      if (unlockModal && e.target === unlockModal) {
        closeUnlockModal();
      }

      const starModal = document.getElementById('star-repo-modal');
      if (starModal && e.target === starModal) {
        closeStarModal();
      }

      const starFollowModal = document.getElementById('star-follow-repo-modal');
      if (starFollowModal && e.target === starFollowModal) {
        closeStarFollowModal();
      }

      const supportDevModal = document.getElementById('support-dev-modal');
      if (supportDevModal && e.target === supportDevModal) {
        handleContinueSupportDev();
      }
    });

    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('restore-modal');
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeRestoreModal();
      }
      const subcardModal = document.getElementById('restore-subcard-modal');
      if (e.key === 'Escape' && subcardModal && !subcardModal.classList.contains('hidden')) {
        closeRestoreSubcardModal();
        if (subcardModal._onContinue) subcardModal._onContinue();
      }
      const unlockModal = document.getElementById('unlock-colors-modal');
      if (e.key === 'Escape' && unlockModal && !unlockModal.classList.contains('hidden')) {
        closeUnlockModal();
      }
      const starModal = document.getElementById('star-repo-modal');
      if (e.key === 'Escape' && starModal && !starModal.classList.contains('hidden')) {
        closeStarModal();
      }
      const starFollowModal = document.getElementById('star-follow-repo-modal');
      if (e.key === 'Escape' && starFollowModal && !starFollowModal.classList.contains('hidden')) {
        closeStarFollowModal();
      }
      const supportDevModal = document.getElementById('support-dev-modal');
      if (e.key === 'Escape' && supportDevModal && !supportDevModal.classList.contains('hidden')) {
        handleContinueSupportDev();
      }
    });

    // Unlock Custom Colors Link Click Handlers
    const linkX = document.getElementById('unlock-link-x');
    const linkTelegram = document.getElementById('unlock-link-telegram');

    if (linkX) {
      linkX.addEventListener('click', () => {
        if (unlockState.xOpened || verifyingState.x || verifyingState.telegram) return;

        verifyingState.x = true;
        updateUnlockModalTicks();

        setTimeout(() => {
          verifyingState.x = false;
          unlockState.xOpened = true;
          localStorage.setItem('justalink_link_x_opened', 'true');
          updateUnlockModalTicks();
          checkUnlockConditions();
        }, 4000);
      });
    }

    if (linkTelegram) {
      linkTelegram.addEventListener('click', () => {
        if (unlockState.telegramOpened || verifyingState.telegram || verifyingState.x) return;

        verifyingState.telegram = true;
        updateUnlockModalTicks();

        setTimeout(() => {
          verifyingState.telegram = false;
          unlockState.telegramOpened = true;
          localStorage.setItem('justalink_link_telegram_opened', 'true');
          updateUnlockModalTicks();
          checkUnlockConditions();
        }, 4000);
      });
    }

    async function handleRestoreSubmit() {
      hideRestoreError();
      const input = document.getElementById('input-restore-url');
      const submitBtn = document.getElementById('btn-submit-restore');
      const val = input ? input.value : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Verifying & Restoring...';
      }

      try {
        const result = await processRestoreInput(val);
        if (result && result.success) {
          sessionStorage.setItem('justalink_is_restored', 'true');
          if (!result.pendingModal) {
            closeRestoreModal();
            showToast('Profile restored successfully!', 'check');
          }
        } else if (result && result.error) {
          showRestoreError(result.error);
        }
      } catch (err) {
        showRestoreError(err.message || 'Error restoring profile.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Restore Profile';
        }
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

        const starInput = document.getElementById('input-star-username');
        const starModal = document.getElementById('star-repo-modal');
        if (starInput && document.activeElement === starInput && starModal && !starModal.classList.contains('hidden')) {
          e.preventDefault();
          handleVerifyStar();
        }

        const starFollowInput = document.getElementById('input-star-follow-username');
        const starFollowModal = document.getElementById('star-follow-repo-modal');
        if (starFollowInput && document.activeElement === starFollowInput && starFollowModal && !starFollowModal.classList.contains('hidden')) {
          e.preventDefault();
          handleVerifyStarFollow();
        }
      }
    });

    // Theme Mode Toggle (Light / Dark)
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const newTheme = builderTheme === 'dark' ? 'light' : 'dark';
        applyBuilderTheme(newTheme, true);
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
      bindFastTap(btnAddSocial, (e) => {
        if (e && typeof e.stopPropagation === 'function') {
          e.stopPropagation();
        }
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
      bindFastTap(btnAddLink, (e) => {
        if (e && typeof e.stopPropagation === 'function') {
          e.stopPropagation();
        }
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
      bindFastTap(btnLoadPreset, () => {
        appState = JSON.parse(JSON.stringify(defaultState));
        populateBuilderInputs();
        showToast('Form reset to default!', 'bolt');
      });
    }

    // Copy URL Button
    bindFastTap(btnCopyUrl, () => {
      const shareUrl = outputShareUrl.value;
      if (!shareUrl) return;

      const isRestored = sessionStorage.getItem('justalink_is_restored') === 'true';
      trackUmamiEvent('copy_link', { profile_type: isRestored ? 'restored' : 'new' });

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
      try {
        outputShareUrl.focus();
        outputShareUrl.select();
        outputShareUrl.setSelectionRange(0, 99999);
        const successful = document.execCommand('copy');
        if (successful) {
          copyBtnText.textContent = 'Copied!';
          showToast('Link copied to clipboard!', 'check');
        } else {
          showToast('Select text manually to copy', 'info');
        }
      } catch (err) {
        showToast('Select text manually to copy', 'info');
      }
      setTimeout(() => { copyBtnText.textContent = 'Copy Link'; }, 2000);
    }

    // Direct event listeners for Mobile Navigation Bar buttons
    const btnNavEdit = document.getElementById('nav-btn-edit');
    const btnNavPreview = document.getElementById('nav-btn-preview');
    const btnNavShare = document.getElementById('nav-btn-share');

    if (btnNavEdit) bindFastTap(btnNavEdit, () => switchMobileTab('edit'));
    if (btnNavPreview) bindFastTap(btnNavPreview, () => switchMobileTab('preview'));
    if (btnNavShare) bindFastTap(btnNavShare, () => switchMobileTab('share'));

    // Listen to hash route changes
    window.addEventListener('hashchange', handleRoute);
  }

  // --- GitHub Verification Logic ---
  const GITHUB_TARGET_OWNER = 'jaival-11';
  const GITHUB_TARGET_REPO = 'justalink';

  const GITHUB_HEADERS = {
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'JustALink-App',
  };

  class GitHubRateLimitError extends Error {
    constructor(minutesLeft, resetTime) {
      const msg = `API requests reached. Please try again in ${minutesLeft} minute${minutesLeft === 1 ? '' : 's'}.`;
      super(msg);
      this.name = 'GitHubRateLimitError';
      this.isRateLimit = true;
      this.minutesLeft = minutesLeft;
      this.resetTime = resetTime || (Date.now() + minutesLeft * 60 * 1000);
    }
  }

  class GitHubApiDownError extends Error {
    constructor(customMsg) {
      const msg = customMsg || 'GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.';
      super(msg);
      this.name = 'GitHubApiDownError';
      this.isApiDown = true;
      this.retryAfterMinutes = 30;
    }
  }

  function getRateLimitResetMinutes(response) {
    const resetHeader = response && response.headers && response.headers.get('x-ratelimit-reset');
    if (resetHeader) {
      const resetTimeSec = parseInt(resetHeader, 10);
      if (!isNaN(resetTimeSec) && resetTimeSec > 0) {
        const resetMs = resetTimeSec * 1000;
        const diffMs = resetMs - Date.now();
        const diffMinutes = Math.ceil(diffMs / 60000);
        return Math.max(1, diffMinutes);
      }
    }
    return 60;
  }

  function getRateLimitResetTimestamp(response, minutesLeft) {
    const resetHeader = response && response.headers && response.headers.get('x-ratelimit-reset');
    if (resetHeader) {
      const resetTimeSec = parseInt(resetHeader, 10);
      if (!isNaN(resetTimeSec) && resetTimeSec > 0) {
        return resetTimeSec * 1000;
      }
    }
    return Date.now() + (minutesLeft || 60) * 60 * 1000;
  }

  function saveFailedAttempt(attemptInfo) {
    try {
      let username = attemptInfo.username || '';
      if (!username) {
        try {
          username = localStorage.getItem('justalink_github_username') || '';
        } catch (e) {}
      }
      const data = {
        username: username,
        type: attemptInfo.type, // 'rate_limit' | 'api_down' | 'api_down_temp_access'
        targetCard: attemptInfo.targetCard || 'subcard2',
        failedTime: attemptInfo.failedTime || Date.now(),
        resetTime: attemptInfo.resetTime || (Date.now() + (attemptInfo.type.startsWith('api_down') ? 30 * 60 * 1000 : (attemptInfo.minutesLeft || 60) * 60 * 1000)),
        minutesLeft: attemptInfo.minutesLeft || null
      };
      localStorage.setItem('justalink_failed_verify_attempt', JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save verify attempt to localStorage:', e);
    }
  }

  function getSavedFailedAttempt() {
    try {
      const raw = localStorage.getItem('justalink_failed_verify_attempt');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function clearSavedFailedAttempt() {
    try {
      localStorage.removeItem('justalink_failed_verify_attempt');
    } catch (e) {}
  }

  function saveLastVerifiedTime(time = Date.now()) {
    try {
      localStorage.setItem('justalink_last_verified_at', time.toString());
    } catch (e) {}
  }

  function getLastVerifiedTime() {
    try {
      const val = localStorage.getItem('justalink_last_verified_at');
      return val ? parseInt(val, 10) : null;
    } catch (e) {
      return null;
    }
  }

  function openAutoCheckFailedModal(options) {
    const modal = document.getElementById('auto-check-failed-modal');
    if (!modal) return;

    const titleEl = document.getElementById('auto-check-failed-title');
    const descEl = document.getElementById('auto-check-failed-desc');
    const messageEl = document.getElementById('auto-check-failed-message');
    const verifyBtn = document.getElementById('btn-auto-check-verify');
    const continueBtn = document.getElementById('btn-auto-check-continue');

    if (titleEl && options.title) titleEl.innerHTML = `<span>${options.title}</span>`;
    if (descEl && options.description) descEl.textContent = options.description;
    if (messageEl && options.message) messageEl.innerHTML = options.message;
    if (verifyBtn && options.verifyBtnText) verifyBtn.textContent = options.verifyBtnText;
    if (continueBtn && options.continueBtnText) continueBtn.textContent = options.continueBtnText;

    modal._onVerifyAgain = options.onVerifyAgain;
    modal._onContinueWithout = options.onContinueWithout;

    modal.classList.remove('hidden');
  }

  function closeAutoCheckFailedModal() {
    const modal = document.getElementById('auto-check-failed-modal');
    if (modal) modal.classList.add('hidden');
  }

  let isAutoChecking = false;

  async function performAutoCheckOnPageLoad() {
    if (!ENABLE_VERIFICATION_SYSTEM) return;
    if (isAutoChecking) return;
    isAutoChecking = true;

    let attempt = null;
    let savedUser = '';

    try {
      attempt = getSavedFailedAttempt();

      // Auto-check should be performed for unlocked sub-cards or pending temp access retries
      if (!isSubcardUnlocked && !isSubcard2Unlocked && (!attempt || attempt.type !== 'api_down_temp_access')) return;

      savedUser = (attempt && attempt.username) || localStorage.getItem('justalink_github_username');
      if (!savedUser && appState) savedUser = appState.githubUsername;
      if (!savedUser) return;

      const now = Date.now();

      if (attempt) {
        const resetTime = attempt.resetTime || (attempt.failedTime + (attempt.type.startsWith('api_down') ? 30 * 60 * 1000 : 60 * 60 * 1000));
        if (now < resetTime) {
          // Still within retry delay (30 mins for api_down or rate_limit reset time)
          return;
        }
      } else {
        const lastVerified = getLastVerifiedTime();
        const TWO_HOURS_MS = 2 * 60 * 60 * 1000;
        if (lastVerified && (now - lastVerified < TWO_HOURS_MS)) {
          // 2 hours have not passed since last verified state
          return;
        }
      }

      // Auto-check time reached! Perform verification API request
      const cleanUser = validateGitHubUsername(savedUser);

      if (isSubcard2Unlocked || (attempt && attempt.targetCard === 'subcard2')) {
        // Sub-card 2 unlock - check if user starred and followed
        const result = await checkIfUserStarredAndFollowed(cleanUser);
        if (result.hasDoneBoth) {
          isSubcard2Unlocked = true;
          localStorage.setItem('justalink_subcard2_unlocked', 'true');
          isSubcardUnlocked = true;
          localStorage.setItem('justalink_subcard_unlocked', 'true');
          saveLastVerifiedTime(now);
          clearSavedFailedAttempt();
        } else if (attempt && attempt.type === 'api_down_temp_access') {
          if (result.hasStarred) {
            isSubcardUnlocked = true;
            localStorage.setItem('justalink_subcard_unlocked', 'true');
            isSubcard2Unlocked = false;
            localStorage.setItem('justalink_subcard2_unlocked', 'false');
            clearSavedFailedAttempt();
            if (appState) {
              appState.banner = '';
              appState.footerUrl = '';
            }
            populateBuilderInputs();
            renderSubCardPanel();
            renderSubCardPanel2();
            updatePreview();
            updateShareUrl();
            showToast('Verification incomplete: Follow @jaival-11 required to access all features.', 'warning');
          } else {
            isSubcardUnlocked = false;
            localStorage.setItem('justalink_subcard_unlocked', 'false');
            isSubcard2Unlocked = false;
            localStorage.setItem('justalink_subcard2_unlocked', 'false');
            clearSavedFailedAttempt();
            if (appState) {
              appState.banner = '';
              appState.footerUrl = '';
              appState.customFooter = '';
              appState.disableFooter = false;
              appState.disableFooterLink = false;
            }
            populateBuilderInputs();
            renderSubCardPanel();
            renderSubCardPanel2();
            updatePreview();
            updateShareUrl();
            showToast('Temporary access expired. Please complete GitHub verification to access all features.', 'warning');
          }
        } else {
          clearSavedFailedAttempt();
          const unstarred = !result.hasStarred;
          const unfollowed = !result.isFollowing;
          let actionUndidStr = '';
          if (unstarred && unfollowed) {
            actionUndidStr = 'unstarred the repository <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">jaival-11/justalink</code> and unfollowed <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">@jaival-11</code>';
          } else if (unstarred) {
            actionUndidStr = 'unstarred the repository <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">jaival-11/justalink</code>';
          } else if (unfollowed) {
            actionUndidStr = 'unfollowed <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">@jaival-11</code>';
          }

          openAutoCheckFailedModal({
            title: '⚠️ Verification Status Changed',
            message: `You have ${actionUndidStr} on GitHub.<br><br>Customization Sub-Card 2 features are now locked.`,
            verifyBtnText: 'Verify again',
            continueBtnText: 'Continue without those features',
            onVerifyAgain: () => {
              openStarFollowModal(result);
            },
            onContinueWithout: () => {
              isSubcard2Unlocked = false;
              localStorage.setItem('justalink_subcard2_unlocked', 'false');
              if (unstarred) {
                isSubcardUnlocked = false;
                localStorage.setItem('justalink_subcard_unlocked', 'false');
              }
              if (appState) {
                appState.banner = '';
                appState.footerUrl = '';
                if (unstarred) {
                  appState.customFooter = '';
                  appState.disableFooter = false;
                  appState.disableFooterLink = false;
                }
              }
              populateBuilderInputs();
              renderSubCardPanel();
              renderSubCardPanel2();
              updatePreview();
              updateShareUrl();
            }
          });
        }
      } else if (isSubcardUnlocked) {
        // Sub-card 1 unlock - check if user starred
        const hasStarred = await checkIfUserStarred(cleanUser);
        if (hasStarred) {
          isSubcardUnlocked = true;
          localStorage.setItem('justalink_subcard_unlocked', 'true');
          saveLastVerifiedTime(now);
          clearSavedFailedAttempt();
        } else if (attempt && attempt.type === 'api_down_temp_access') {
          isSubcardUnlocked = false;
          localStorage.setItem('justalink_subcard_unlocked', 'false');
          clearSavedFailedAttempt();
          if (appState) {
            appState.customFooter = '';
            appState.disableFooter = false;
            appState.disableFooterLink = false;
          }
          populateBuilderInputs();
          renderSubCardPanel();
          renderSubCardPanel2();
          updatePreview();
          updateShareUrl();
          showToast('Temporary access expired. Please complete GitHub verification to access all features.', 'warning');
        } else {
          clearSavedFailedAttempt();
          openAutoCheckFailedModal({
            title: '⚠️ Verification Status Changed',
            message: `You have unstarred the repository <code class="modal-code font-mono font-semibold px-1.5 py-0.5 rounded">jaival-11/justalink</code> on GitHub.<br><br>Customization Sub-Card 1 features are now locked.`,
            verifyBtnText: 'Verify again',
            continueBtnText: 'Continue without those features',
            onVerifyAgain: () => {
              openStarModal();
            },
            onContinueWithout: () => {
              isSubcardUnlocked = false;
              localStorage.setItem('justalink_subcard_unlocked', 'false');
              if (appState) {
                appState.customFooter = '';
                appState.disableFooter = false;
                appState.disableFooterLink = false;
              }
              populateBuilderInputs();
              renderSubCardPanel();
              renderSubCardPanel2();
              updatePreview();
              updateShareUrl();
            }
          });
        }
      }
    } catch (err) {
      if (err.isApiDown) {
        const cardTarget = (attempt && attempt.targetCard) || (isSubcard2Unlocked ? 'subcard2' : 'subcard1');
        saveFailedAttempt({
          username: savedUser,
          type: (attempt && attempt.type === 'api_down_temp_access') ? 'api_down_temp_access' : 'api_down',
          targetCard: cardTarget,
          failedTime: Date.now(),
          resetTime: Date.now() + 30 * 60 * 1000,
          retryAfterMinutes: 30
        });
      } else if (err.isRateLimit) {
        saveFailedAttempt({
          username: savedUser,
          type: 'rate_limit',
          failedTime: Date.now(),
          resetTime: err.resetTime,
          minutesLeft: err.minutesLeft
        });
      }
    } finally {
      isAutoChecking = false;
    }
  }

  /**
   * Validates a GitHub username format.
   * GitHub usernames can only contain alphanumeric characters and single hyphens (-).
   * Spaces, underscores, and special characters are invalid.
   * 
   * @param {string} username 
   * @returns {string} Cleaned username if valid
   * @throws {Error} If username format is invalid
   */
  function validateGitHubUsername(username) {
    const raw = (username || '').trim();
    if (!raw) {
      throw new Error('Please enter a GitHub username.');
    }
    // GitHub username rule: 1-39 chars, alphanumeric and single hyphens, no start/end hyphen, no spaces/underscores
    const githubUsernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
    if (!githubUsernameRegex.test(raw)) {
      throw new Error(`Username "${raw}" is invalid. GitHub usernames cannot contain spaces or underscores, and can only include letters, numbers, and single hyphens.`);
    }
    return raw;
  }

  /**
   * Check if a user has starred jaival-11/justalink
   * Uses unauthenticated endpoint: GET https://api.github.com/users/{username}/starred
   * 
   * @param {string} username - GitHub username
   * @returns {Promise<boolean>} True if user starred the repo, false otherwise
   */
  async function checkIfUserStarred(username) {
    if (!ENABLE_VERIFICATION_SYSTEM) return true;
    const cleanUsername = validateGitHubUsername(username);

    const targetFullName = `${GITHUB_TARGET_OWNER}/${GITHUB_TARGET_REPO}`.toLowerCase();
    let page = 1;
    const perPage = 100;

    while (true) {
      const url = `https://api.github.com/users/${encodeURIComponent(cleanUsername)}/starred?per_page=${perPage}&page=${page}`;
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        throw new Error('You appear to be offline. Please connect to the internet to verify your GitHub account.');
      }
      let response;
      try {
        response = await fetch(url, { headers: GITHUB_HEADERS });
      } catch (fetchErr) {
        throw new GitHubApiDownError('GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.');
      }

      if (response.status === 403 || response.status === 429) {
        const resetMinutes = getRateLimitResetMinutes(response);
        const resetTimestamp = getRateLimitResetTimestamp(response, resetMinutes);
        throw new GitHubRateLimitError(resetMinutes, resetTimestamp);
      }

      if (response.status >= 500) {
        throw new GitHubApiDownError('GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.');
      }

      if (response.status === 404) {
        throw new Error(`Cannot find GitHub user "${cleanUsername}". Please check the username.`);
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `GitHub API error (${response.status})`);
      }

      const starredRepos = await response.json();
      if (!Array.isArray(starredRepos) || starredRepos.length === 0) {
        return false;
      }

      const found = starredRepos.some(
        (repo) => repo.full_name && repo.full_name.toLowerCase() === targetFullName
      );
      if (found) return true;

      if (starredRepos.length < perPage) {
        return false;
      }

      page++;
    }
  }

  /**
   * Check if a user follows jaival-11
   * Uses unauthenticated endpoint: GET https://api.github.com/users/{username}/following/jaival-11
   * Returns 204 if following, 404 if not following
   * 
   * @param {string} username - GitHub username
   * @returns {Promise<boolean>} True if user follows jaival-11, false otherwise
   */
  async function checkIfUserFollows(username) {
    if (!ENABLE_VERIFICATION_SYSTEM) return true;
    const cleanUsername = validateGitHubUsername(username);

    const url = `https://api.github.com/users/${encodeURIComponent(cleanUsername)}/following/${GITHUB_TARGET_OWNER}`;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      throw new Error('You appear to be offline. Please connect to the internet to verify your GitHub account.');
    }
    let response;
    try {
      response = await fetch(url, { headers: GITHUB_HEADERS });
    } catch (fetchErr) {
      throw new GitHubApiDownError('GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.');
    }

    if (response.status === 204) return true;

    if (response.status === 403 || response.status === 429) {
      const resetMinutes = getRateLimitResetMinutes(response);
      const resetTimestamp = getRateLimitResetTimestamp(response, resetMinutes);
      throw new GitHubRateLimitError(resetMinutes, resetTimestamp);
    }

    if (response.status >= 500) {
      throw new GitHubApiDownError('GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.');
    }

    if (response.status === 404) {
      // Confirm if the user exists or if 404 is simply because they don't follow
      let userCheck;
      try {
        userCheck = await fetch(`https://api.github.com/users/${encodeURIComponent(cleanUsername)}`, { headers: GITHUB_HEADERS });
      } catch (err) {
        throw new GitHubApiDownError('GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.');
      }

      if (userCheck.status === 403 || userCheck.status === 429) {
        const resetMinutes = getRateLimitResetMinutes(userCheck);
        const resetTimestamp = getRateLimitResetTimestamp(userCheck, resetMinutes);
        throw new GitHubRateLimitError(resetMinutes, resetTimestamp);
      }

      if (userCheck.status >= 500) {
        throw new GitHubApiDownError('GitHub API is down. Please try again or check github status at <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:opacity-80">githubstatus.com</a>.');
      }

      if (userCheck.status === 404) {
        throw new Error(`Cannot find GitHub user "${cleanUsername}". Please check the username.`);
      }
      return false; // User exists, but does not follow jaival-11
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `GitHub API error (${response.status})`);
    }

    return false;
  }

  /**
   * Check if user has starred jaival-11/justalink AND follows jaival-11
   * 
   * @param {string} username - GitHub username
   * @returns {Promise<{ hasStarred: boolean, isFollowing: boolean, hasDoneBoth: boolean }>}
   */
  async function checkIfUserStarredAndFollowed(username) {
    if (!ENABLE_VERIFICATION_SYSTEM) {
      return { hasStarred: true, isFollowing: true, hasDoneBoth: true };
    }
    const cleanUsername = validateGitHubUsername(username);

    const [hasStarred, isFollowing] = await Promise.all([
      checkIfUserStarred(cleanUsername),
      checkIfUserFollows(cleanUsername),
    ]);

    return {
      hasStarred,
      isFollowing,
      hasDoneBoth: hasStarred && isFollowing,
    };
  }

  // Expose methods globally for external triggers or button event listeners
  window.GitHubVerification = {
    validateGitHubUsername,
    checkIfUserStarred,
    checkIfUserFollows,
    checkIfUserStarredAndFollowed,
    GitHubRateLimitError,
    GitHubApiDownError,
    saveFailedAttempt,
    getSavedFailedAttempt,
    clearSavedFailedAttempt,
    performAutoCheckOnPageLoad,
    saveLastVerifiedTime,
    getLastVerifiedTime,
    openAutoCheckFailedModal,
    closeAutoCheckFailedModal,
  };
  window.encodeData = encodeData;
  window.decodeData = decodeData;
  window.validateGitHubUsername = validateGitHubUsername;
  window.checkIfUserStarred = checkIfUserStarred;
  window.checkIfUserFollows = checkIfUserFollows;
  window.checkIfUserStarredAndFollowed = checkIfUserStarredAndFollowed;
  window.openStarModal = openStarModal;
  window.closeStarModal = closeStarModal;
  window.handleVerifyStar = handleVerifyStar;
  window.openStarFollowModal = openStarFollowModal;
  window.closeStarFollowModal = closeStarFollowModal;
  window.handleVerifyStarFollow = handleVerifyStarFollow;
  window.renderSubCardPanel2 = renderSubCardPanel2;
  window.processRestoreInput = processRestoreInput;
  window.openRestoreSubcardModal = openRestoreSubcardModal;
  window.closeRestoreSubcardModal = closeRestoreSubcardModal;
  window.applyRestoredWithoutSubcard1 = applyRestoredWithoutSubcard1;
  window.applyRestoredWithoutSubcard2 = applyRestoredWithoutSubcard2;
  window.getAppState = () => appState;
  window.saveFailedAttempt = saveFailedAttempt;
  window.getSavedFailedAttempt = getSavedFailedAttempt;
  window.clearSavedFailedAttempt = clearSavedFailedAttempt;
  window.performAutoCheckOnPageLoad = performAutoCheckOnPageLoad;
  window.saveLastVerifiedTime = saveLastVerifiedTime;
  window.getLastVerifiedTime = getLastVerifiedTime;
  window.openAutoCheckFailedModal = openAutoCheckFailedModal;
  window.closeAutoCheckFailedModal = closeAutoCheckFailedModal;
  window.renderViewMode = renderViewMode;
  window.updatePreview = updatePreview;
  window.ENABLE_VERIFICATION_SYSTEM = ENABLE_VERIFICATION_SYSTEM;
  window.applyBuilderTheme = applyBuilderTheme;
  window.getPreferredBuilderTheme = getPreferredBuilderTheme;
  window.setSubcardState = (s1, s2) => {
    if (!ENABLE_VERIFICATION_SYSTEM) {
      isSubcardUnlocked = true;
      isSubcard2Unlocked = true;
    } else {
      isSubcardUnlocked = s1;
      isSubcard2Unlocked = s2;
    }
  };

  // --- App Entry Point ---
  document.addEventListener('DOMContentLoaded', () => {
    applyBuilderTheme(builderTheme, false);
    initSystemThemeListener();
    initEvents();
    handleRoute();
    performAutoCheckOnPageLoad();
  });

})();


