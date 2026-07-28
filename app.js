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
    moon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 0 1 1-9-9Z"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    up: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-400 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    bolt: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-yellow-400 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7v8l10-12h-7V2z"/></svg>`
  };

  // --- Initial Default App State ---
  const defaultState = {
    name: '',
    avatar: '',
    bio: '',
    theme: 'slate',
    links: []
  };

  let appState = JSON.parse(JSON.stringify(defaultState));

  // --- DOM Elements ---
  const mainHeader = document.getElementById('main-header');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const themeToggleText = document.getElementById('theme-toggle-text');

  const builderModeSec = document.getElementById('builder-mode');
  const viewModeSec = document.getElementById('view-mode');
  
  const inputName = document.getElementById('input-name');
  const inputAvatar = document.getElementById('input-avatar');
  const inputBio = document.getElementById('input-bio');
  const themeOptionsContainer = document.getElementById('theme-options');
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
  const previewLinksList = document.getElementById('preview-links-list');
  const watermarkLink = document.getElementById('watermark-link');

  // View mode elements
  const viewCardContainer = document.getElementById('view-card-container');
  const viewAvatarImg = document.getElementById('view-avatar-img');
  const viewAvatarFallback = document.getElementById('view-avatar-fallback');
  const viewName = document.getElementById('view-name');
  const viewBio = document.getElementById('view-bio');
  const viewLinksList = document.getElementById('view-links-list');
  const viewWatermarkLink = document.getElementById('view-watermark-link');

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
      const jsonStr = JSON.stringify(dataObj);
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
      return JSON.parse(jsonStr);
    } catch (err) {
      console.error('Decoding error:', err);
      return null;
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
            placeholder="Link Title (e.g. My Website)" 
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
      `;

      // Event Listeners for Link Inputs
      const inputTitle = item.querySelector('.input-link-title');
      const inputUrl = item.querySelector('.input-link-url');
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
    previewName.textContent = appState.name || 'Your Name';
    previewBio.textContent = appState.bio || 'Your bio details will be displayed here.';

    // Avatar
    if (appState.avatar) {
      previewAvatarImg.src = appState.avatar;
      setupAvatarFallback(previewAvatarImg, previewAvatarFallback, appState.name);
    } else {
      previewAvatarImg.classList.add('hidden');
      previewAvatarFallback.classList.remove('hidden');
      previewAvatarFallback.querySelector('span').textContent = appState.name ? appState.name.trim().charAt(0).toUpperCase() : '?';
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
        linkBtn.className = 'link-btn block w-full py-2.5 px-4 rounded-lg font-medium text-xs text-center truncate cursor-pointer';
        linkBtn.textContent = l.title || 'Untitled Link';
        previewLinksList.appendChild(linkBtn);
      });
    }

    // Watermark link target
    watermarkLink.href = window.location.origin + window.location.pathname;
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
    renderThemeSelector();
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
    viewName.textContent = data.name || 'Anonymous';
    viewBio.textContent = data.bio || '';

    // Avatar
    if (data.avatar) {
      viewAvatarImg.src = data.avatar;
      setupAvatarFallback(viewAvatarImg, viewAvatarFallback, data.name);
    } else {
      viewAvatarImg.classList.add('hidden');
      viewAvatarFallback.classList.remove('hidden');
      viewAvatarFallback.querySelector('span').textContent = data.name ? data.name.trim().charAt(0).toUpperCase() : '?';
    }

    // Links
    viewLinksList.innerHTML = '';
    if (data.links && Array.isArray(data.links) && data.links.length > 0) {
      data.links.forEach(l => {
        const linkBtn = document.createElement('a');
        linkBtn.href = sanitizeUrl(l.url);
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.className = 'link-btn block w-full py-3 px-5 rounded-xl font-semibold text-sm text-center truncate cursor-pointer';
        linkBtn.textContent = l.title || 'Link';
        viewLinksList.appendChild(linkBtn);
      });
    } else {
      viewLinksList.innerHTML = '<div class="text-center text-xs opacity-60 italic py-4">No active links</div>';
    }

    // Watermark
    viewWatermarkLink.href = window.location.origin + window.location.pathname;
  }

  // --- Router Logic ---
  function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith('#data=')) {
      const base64Str = hash.substring(6);
      const decodedData = decodeData(base64Str);

      if (decodedData) {
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

    // Add Link Button
    btnAddLink.addEventListener('click', () => {
      appState.links.push({
        id: 'link_' + Date.now(),
        title: '',
        url: ''
      });
      renderLinkInputs();
      updatePreview();
      updateShareUrl();
    });

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
