/**
 * ============================================================================
 * GLOWÉ - MULTIPURPOSE PREMIUM HTML5 TEMPLATE
 * Core JavaScript Engine: main.js
 * Features: Theme Switcher, RTL Mode, Cart & Wishlist with LocalStorage,
 *           Quick View Modal, Product Filter & Sort, Skin Quiz Engine,
 *           Ingredient Explorer, Pricing Switcher, Countdown Timer,
 *           Admin Dashboard Analytics (Chart.js), Form Validations & Toasts
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. GLOBAL DATA: PRODUCTS, INGREDIENTS & BUNDLES
     -------------------------------------------------------------------------- */
  const PRODUCTS = [
    {
      id: 'prod-1',
      title: 'Botanical Hydrating Cleanser',
      category: 'Cleansers',
      skinType: 'Dry',
      price: 28.00,
      oldPrice: 35.00,
      badge: 'Bestseller',
      badgeType: 'sale',
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      description: 'Gentle, pH-balanced gel cleanser infused with chamomile and green tea to melt away impurities without stripping natural moisture.',
      benefits: ['Balances pH', 'Soothes redness', 'Deep pore cleansing without tightness'],
      ingredients: 'Water, Chamomile Extract, Camellia Sinensis (Green Tea), Glycerin, Coco-Glucoside.',
      usage: 'Massage 1-2 pumps onto damp skin in circular motions. Rinse thoroughly with lukewarm water AM & PM.'
    },
    {
      id: 'prod-2',
      title: 'Glow Boost 15% Vitamin C Serum',
      category: 'Serums',
      skinType: 'Combination',
      price: 46.00,
      oldPrice: 58.00,
      badge: 'Popular',
      badgeType: 'organic',
      rating: 5.0,
      reviews: 218,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
      description: 'High-potency L-Ascorbic Acid serum combined with Ferulic Acid and Vitamin E for supreme antioxidant defense and radiant complexion.',
      benefits: ['Fades dark spots', 'Boosts collagen', 'Protects against UV environmental stress'],
      ingredients: '15% L-Ascorbic Acid, Ferulic Acid, Alpha Tocopherol, Hyaluronic Acid.',
      usage: 'Apply 3-4 drops to cleansed face and neck in the morning prior to moisturizer and sunscreen.'
    },
    {
      id: 'prod-3',
      title: 'Ultra-Rich Ceramide Barrier Cream',
      category: 'Moisturizers',
      skinType: 'Sensitive',
      price: 38.00,
      oldPrice: 48.00,
      badge: '20% OFF',
      badgeType: 'sale',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
      description: 'Strengthening daily cream powered by 5 essential bio-identical ceramides and niacinamide to repair damaged skin barriers.',
      benefits: ['Restores moisture barrier', 'Prevents trans-epidermal water loss', 'Fragrance-free'],
      ingredients: 'Ceramide NP, Ceramide AP, Phytosphingosine, Squalane, Niacinamide.',
      usage: 'Apply an even layer over face, neck, and chest as the final step in your routine.'
    },
    {
      id: 'prod-4',
      title: 'Invisible Shield Mineral Sunscreen SPF 50',
      category: 'Sunscreens',
      skinType: 'All',
      price: 32.00,
      oldPrice: null,
      badge: 'New Formula',
      badgeType: 'new',
      rating: 4.9,
      reviews: 84,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
      description: 'Ultra-lightweight, 100% non-nano zinc oxide mineral sunscreen with zero white cast and a velvety matte finish.',
      benefits: ['Broad spectrum UVA/UVB SPF 50+', 'Non-comedogenic', 'Reef safe & water resistant 80 mins'],
      ingredients: 'Zinc Oxide 20.4%, Niacinamide, Bisabolol, Green Tea Seed Oil.',
      usage: 'Apply generously 15 minutes before sun exposure. Reapply at least every 2 hours.'
    },
    {
      id: 'prod-5',
      title: 'Overnight Exfoliating BHA Mask',
      category: 'Masks',
      skinType: 'Acne-Prone',
      price: 36.00,
      oldPrice: 45.00,
      badge: 'Acne Pick',
      badgeType: 'sale',
      rating: 4.7,
      reviews: 110,
      image: 'https://images.unsplash.com/photo-1556228722-d0b5b0340fe3?auto=format&fit=crop&w=600&q=80',
      description: 'Leave-on 2% Salicylic Acid and Willow Bark clarifying mask designed to unclog pores and smooth uneven texture overnight.',
      benefits: ['Clears blemishes', 'Minimizes enlarged pores', 'Smooths rough bumps'],
      ingredients: 'Salicylic Acid 2%, Salix Alba Bark, Centella Asiatica, Allantoin.',
      usage: 'Smooth a thin layer over clean face 2-3 nights per week. No rinsing needed.'
    },
    {
      id: 'prod-6',
      title: 'Awakening Peptide Eye Contour Gel',
      category: 'Eye Care',
      skinType: 'All',
      price: 42.00,
      oldPrice: 52.00,
      badge: 'Top Rated',
      badgeType: 'organic',
      rating: 4.9,
      reviews: 130,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      description: 'Cooling peptide serum targeting puffiness, dark circles, and fine lines with caffeine and matrixyl 3000.',
      benefits: ['De-puffs under eyes in 10 mins', 'Fades dark shadows', 'Tightens crepey skin'],
      ingredients: 'Palmitoyl Tripeptide-1, Caffeine, Peptides, Hyaluronic Acid.',
      usage: 'Gently dab a pea-sized amount around orbital bone morning and evening.'
    },
    {
      id: 'prod-7',
      title: 'Restorative Lip Butter Treatment',
      category: 'Lip Care',
      skinType: 'Dry',
      price: 18.00,
      oldPrice: null,
      badge: 'Vegan',
      badgeType: 'organic',
      rating: 4.8,
      reviews: 62,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
      description: 'Intense cushiony lip balm with shea butter, peptides, and vanilla orchid extract for instantly plump, hydrated lips.',
      benefits: ['Heals cracked lips', 'Glossy non-sticky shine', 'Long-lasting 12hr moisture'],
      ingredients: 'Shea Butter, Murumuru Seed Butter, Vegan Squalane, Vitamin E.',
      usage: 'Apply liberally to lips throughout the day and before sleeping.'
    },
    {
      id: 'prod-8',
      title: 'Nourishing Botanical Body Polish',
      category: 'Body Care',
      skinType: 'Normal',
      price: 34.00,
      oldPrice: 42.00,
      badge: 'Best Value',
      badgeType: 'sale',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=600&q=80',
      description: 'Silky exfoliating sugar body scrub enriched with cold-pressed coconut oil, sweet almond oil, and eucalyptus.',
      benefits: ['Exfoliates dead skin cells', 'Leaves skin glowing and soft', 'Aromatherapy scent'],
      ingredients: 'Cane Sugar, Organic Virgin Coconut Oil, Sweet Almond Oil, Eucalyptus Essential Oil.',
      usage: 'Massage into wet skin in circular motions in shower, then rinse thoroughly.'
    }
  ];

  const INGREDIENTS_DATA = [
    {
      name: 'Hyaluronic Acid',
      category: 'Hydration',
      role: 'Moisture Magnet & Plumping',
      description: 'A naturally occurring sugar molecule that can bind up to 1000x its weight in water, delivering instant dewy hydration.',
      suitableFor: 'All skin types, especially Dehydrated & Dry skin.',
      usage: 'Use twice daily on slightly damp skin right before sealing with moisturizer.',
      relatedProduct: 'prod-1'
    },
    {
      name: 'Niacinamide (Vitamin B3)',
      category: 'Brightening',
      role: 'Tone Balance & Pore Minimizer',
      description: 'A versatile vitamin that strengthens the lipid barrier, calms inflammation, and regulates sebum production.',
      suitableFor: 'Oily, Combination, Acne-Prone & Sensitive skin.',
      usage: 'Safe for daily morning and evening use alongside serums or moisturizers.',
      relatedProduct: 'prod-3'
    },
    {
      name: 'Vitamin C (L-Ascorbic Acid)',
      category: 'Brightening',
      role: 'Potent Antioxidant & Collagen Booster',
      description: 'Fades hyperpigmentation, protects skin cells from environmental pollution, and stimulates healthy collagen synthesis.',
      suitableFor: 'Dull, Hyperpigmented & Aging skin.',
      usage: 'Apply AM after cleansing. Always follow with a broad-spectrum SPF 30+.',
      relatedProduct: 'prod-2'
    },
    {
      name: 'Retinol (Vitamin A)',
      category: 'Anti-Aging',
      role: 'Cell Renewal & Wrinkle Defense',
      description: 'Gold standard anti-aging molecule that accelerates cellular turnover, reduces fine lines, and refines texture.',
      suitableFor: 'Mature, Sun-Damaged & Texture-Prone skin.',
      usage: 'PM use only. Start 2x per week and gradually build tolerance.',
      relatedProduct: 'prod-6'
    },
    {
      name: 'Salicylic Acid (BHA)',
      category: 'Exfoliation',
      role: 'Deep Pore Clearing & Anti-Acne',
      description: 'Oil-soluble beta hydroxy acid that penetrates deep into pores to dissolve sebum build-up and blackheads.',
      suitableFor: 'Oily, Congested & Acne-Prone skin.',
      usage: 'Use 2-4 times a week as a toner, serum, or overnight mask treatment.',
      relatedProduct: 'prod-5'
    },
    {
      name: 'Ceramides Complex',
      category: 'Barrier Repair',
      role: 'Skin Lipid Reinforcement',
      description: 'Essential fats making up over 50% of the skin barrier, locking in hydration and protecting against irritants.',
      suitableFor: 'Sensitive, Irritated, Dry & Compromised skin barriers.',
      usage: 'Daily morning and night in your primary moisturizer or barrier balm.',
      relatedProduct: 'prod-3'
    },
    {
      name: 'Peptides & Matrixyl',
      category: 'Anti-Aging',
      role: 'Firming & Elasticity Signalers',
      description: 'Short amino acid chains that signal skin cells to produce more structural elastin and collagen.',
      suitableFor: 'Fine lines, Loss of firmness & Tired eyes.',
      usage: 'Apply morning and night on clean skin before heavier oils.',
      relatedProduct: 'prod-6'
    },
    {
      name: 'Aloe Vera & Centella',
      category: 'Soothing',
      role: 'Calming & Redness Relief',
      description: 'Rich in polysaccharides, antioxidants, and vitamins that provide instant cooling comfort and speed wound healing.',
      suitableFor: 'Red, Sunburned, Post-Procedure & Reactive skin.',
      usage: 'Can be used freely as needed whenever skin feels tight or inflamed.',
      relatedProduct: 'prod-1'
    }
  ];

  /* --------------------------------------------------------------------------
     2. APP STATE MANAGEMENT
     -------------------------------------------------------------------------- */
  const AppState = {
    theme: localStorage.getItem('glowe_theme') || 'light',
    direction: localStorage.getItem('glowe_direction') || 'ltr',
    cart: JSON.parse(localStorage.getItem('glowe_cart')) || [
      { id: 'prod-1', qty: 1 },
      { id: 'prod-2', qty: 1 }
    ],
    wishlist: JSON.parse(localStorage.getItem('glowe_wishlist')) || ['prod-2', 'prod-4'],
    activeFilters: {
      category: 'all',
      skinType: 'all',
      maxPrice: 60,
      minRating: 0,
      search: '',
      sort: 'featured'
    },
    quizStep: 1,
    quizAnswers: {
      skinType: 'Combination',
      primaryGoal: 'Glow & Brightening',
      sensitivities: 'Fragrance-free'
    }
  };

  /* --------------------------------------------------------------------------
     3. THEME & RTL LOGIC
     -------------------------------------------------------------------------- */
  function applyTheme(theme) {
    AppState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('glowe_theme', theme);
    
    const themeIcons = document.querySelectorAll('.theme-toggle-icon');
    themeIcons.forEach(icon => {
      if (theme === 'dark') {
        icon.classList.remove('bi-moon-stars');
        icon.classList.add('bi-sun');
      } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon-stars');
      }
    });
  }

  function applyDirection(dir) {
    AppState.direction = dir;
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem('glowe_direction', dir);
    
    const rtlButtons = document.querySelectorAll('.rtl-toggle-text');
    rtlButtons.forEach(btn => {
      btn.textContent = dir === 'rtl' ? 'LTR (English)' : 'RTL (العربية)';
    });
  }

  // Initialize theme and RTL
  applyTheme(AppState.theme);
  applyDirection(AppState.direction);

  // Event Listeners for Theme & RTL Toggles
  document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast('Theme Changed', `Switched to ${nextTheme} mode`, 'info');
    });
  });

  document.querySelectorAll('.btn-rtl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextDir = AppState.direction === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir);
      showToast('Language Direction', `Switched layout to ${nextDir.toUpperCase()}`, 'info');
    });
  });

  /* --------------------------------------------------------------------------
     4. TOAST NOTIFICATION GENERATOR
     -------------------------------------------------------------------------- */
  function showToast(title, message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-custom';
    
    let iconClass = 'bi-check-circle-fill text-success';
    if (type === 'error') iconClass = 'bi-exclamation-triangle-fill text-danger';
    if (type === 'info') iconClass = 'bi-info-circle-fill text-info';
    if (type === 'warning') iconClass = 'bi-exclamation-circle-fill text-warning';

    toast.innerHTML = `
      <i class="bi ${iconClass} fs-4"></i>
      <div class="flex-grow-1">
        <strong class="d-block" style="font-size:0.875rem;">${title}</strong>
        <span class="text-secondary" style="font-size:0.8rem;">${message}</span>
      </div>
      <button type="button" class="btn-close btn-sm" aria-label="Close" style="font-size:0.7rem;"></button>
    `;

    toast.querySelector('.btn-close').addEventListener('click', () => toast.remove());
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* --------------------------------------------------------------------------
     5. CART & WISHLIST LOGIC
     -------------------------------------------------------------------------- */
  function saveCart() {
    localStorage.setItem('glowe_cart', JSON.stringify(AppState.cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('glowe_wishlist', JSON.stringify(AppState.wishlist));
    updateWishlistUI();
  }

  function addToCart(productId, qty = 1) {
    const existing = AppState.cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      AppState.cart.push({ id: productId, qty: qty });
    }
    saveCart();
    const product = PRODUCTS.find(p => p.id === productId);
    showToast('Added to Cart', `${product ? product.title : 'Item'} was added to your bag!`, 'success');
    openDrawer('cartDrawer');
  }

  function updateCartQty(productId, delta) {
    const item = AppState.cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      AppState.cart = AppState.cart.filter(i => i.id !== productId);
    }
    saveCart();
  }

  function removeFromCart(productId) {
    AppState.cart = AppState.cart.filter(i => i.id !== productId);
    saveCart();
    showToast('Item Removed', 'Product removed from shopping bag.', 'info');
  }

  function toggleWishlist(productId) {
    const index = AppState.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (index > -1) {
      AppState.wishlist.splice(index, 1);
      showToast('Wishlist Updated', `${product ? product.title : 'Item'} removed from wishlist.`, 'info');
    } else {
      AppState.wishlist.push(productId);
      showToast('Saved to Wishlist', `${product ? product.title : 'Item'} saved to your wishlist!`, 'success');
    }
    saveWishlist();
    renderAllProducts();
  }

  function updateCartUI() {
    const cartCountBadges = document.querySelectorAll('.cart-count-badge');
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(badge => badge.textContent = totalItems);

    const cartListContainer = document.getElementById('cartDrawerItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingBar = document.getElementById('freeShippingProgress');
    const shippingText = document.getElementById('freeShippingText');

    if (!cartListContainer) return;

    if (AppState.cart.length === 0) {
      cartListContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag-x text-muted" style="font-size: 3.5rem;"></i>
          <p class="mt-3 text-secondary">Your shopping bag is empty.</p>
          <button class="btn-custom btn-primary-custom btn-sm mt-2" onclick="closeAllDrawers(); document.getElementById('shopCatalogSection').scrollIntoView();">
            Shop Clean Formulas
          </button>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (shippingBar) shippingBar.style.width = '0%';
      if (shippingText) shippingText.textContent = 'Add $50.00 more for Free Worldwide Shipping!';
      return;
    }

    let subtotal = 0;
    cartListContainer.innerHTML = AppState.cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      const itemTotal = product.price * item.qty;
      subtotal += itemTotal;
      return `
        <div class="cart-item-row">
          <img src="${product.image}" alt="${product.title}" class="cart-item-img">
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start">
              <h6 class="mb-1" style="font-size:0.925rem; font-weight:600;">${product.title}</h6>
              <button class="btn btn-link text-danger p-0 ms-2" onclick="window.GloweApp.removeFromCart('${product.id}')" aria-label="Remove item">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
            <div class="text-secondary small mb-2">${product.category} • $${product.price.toFixed(2)}</div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="window.GloweApp.updateCartQty('${product.id}', -1)">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="window.GloweApp.updateCartQty('${product.id}', 1)">+</button>
              </div>
              <span class="fw-bold text-primary">$${itemTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    // Free shipping threshold = $50
    const freeShippingThreshold = 50.0;
    if (shippingBar && shippingText) {
      if (subtotal >= freeShippingThreshold) {
        shippingBar.style.width = '100%';
        shippingBar.style.backgroundColor = 'var(--success)';
        shippingText.innerHTML = '<span class="text-success fw-bold"><i class="bi bi-check-circle-fill me-1"></i> You unlocked Free Express Shipping!</span>';
      } else {
        const remaining = (freeShippingThreshold - subtotal).toFixed(2);
        const percent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
        shippingBar.style.width = `${percent}%`;
        shippingBar.style.backgroundColor = 'var(--primary)';
        shippingText.textContent = `Add $${remaining} more for Free Worldwide Shipping!`;
      }
    }
  }

  function updateWishlistUI() {
    const wishlistCountBadges = document.querySelectorAll('.wishlist-count-badge');
    wishlistCountBadges.forEach(badge => badge.textContent = AppState.wishlist.length);

    const wishlistContainer = document.getElementById('wishlistDrawerItems');
    if (!wishlistContainer) return;

    if (AppState.wishlist.length === 0) {
      wishlistContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-heart text-muted" style="font-size: 3.5rem;"></i>
          <p class="mt-3 text-secondary">Your wishlist is currently empty.</p>
        </div>
      `;
      return;
    }

    wishlistContainer.innerHTML = AppState.wishlist.map(id => {
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return '';
      return `
        <div class="cart-item-row align-items-center">
          <img src="${product.image}" alt="${product.title}" class="cart-item-img">
          <div class="flex-grow-1">
            <h6 class="mb-1" style="font-size:0.925rem; font-weight:600;">${product.title}</h6>
            <div class="text-primary fw-bold mb-2">$${product.price.toFixed(2)}</div>
            <div class="d-flex gap-2">
              <button class="btn-custom btn-primary-custom btn-sm py-1 px-3" onclick="window.GloweApp.addToCart('${product.id}'); window.GloweApp.toggleWishlist('${product.id}');">
                <i class="bi bi-bag-plus"></i> Move to Bag
              </button>
              <button class="btn btn-outline-danger btn-sm rounded-circle p-1" style="width:30px;height:30px;" onclick="window.GloweApp.toggleWishlist('${product.id}')">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* --------------------------------------------------------------------------
     6. DRAWERS & MODALS LOGIC
     -------------------------------------------------------------------------- */
  /* --------------------------------------------------------------------------
     6. DRAWERS & MODALS LOGIC
     -------------------------------------------------------------------------- */
  function openDrawer(drawerId) {
    const backdrop = document.getElementById('drawerBackdrop');
    const drawer = document.getElementById(drawerId);
    if (backdrop && drawer) {
      backdrop.classList.add('active');
      drawer.classList.add('active', 'show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllDrawers() {
    const backdrop = document.getElementById('drawerBackdrop');
    document.querySelectorAll('.drawer-panel, .offcanvas, .mobile-menu-drawer').forEach(d => {
      d.classList.remove('active', 'show');
    });
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // =========================================================================
  // GLOBAL DELEGATED EVENT LISTENER (100% Reliable on Mobile, Desktop & Touch)
  // =========================================================================
  document.addEventListener('click', (e) => {
    // 1. Close triggers (Backdrop, Drawer X, Close buttons)
    if (e.target.closest('#drawerBackdrop') || e.target.closest('.btn-close-drawer') || e.target.closest('.btn-close-mobile-menu') || e.target.closest('[data-bs-dismiss="offcanvas"]')) {
      closeAllDrawers();
      return;
    }

    // 2. Mobile Menu Toggle button
    const mobileToggle = e.target.closest('.btn-mobile-toggle') || e.target.closest('[data-bs-target="#mobileMenuOffcanvas"]');
    if (mobileToggle) {
      e.preventDefault();
      openDrawer('mobileMenuOffcanvas');
      return;
    }

    // 3. Cart Trigger
    const cartTrigger = e.target.closest('.btn-trigger-cart');
    if (cartTrigger) {
      e.preventDefault();
      closeAllDrawers();
      openDrawer('cartDrawer');
      return;
    }

    // 4. Wishlist Trigger
    const wishlistTrigger = e.target.closest('.btn-trigger-wishlist');
    if (wishlistTrigger) {
      e.preventDefault();
      closeAllDrawers();
      openDrawer('wishlistDrawer');
      return;
    }

    // 5. Auth Modal Trigger
    const authTrigger = e.target.closest('.btn-trigger-auth');
    if (authTrigger) {
      e.preventDefault();
      closeAllDrawers();
      openModal('authModal');
      return;
    }

    // 6. Search Trigger
    const searchTrigger = e.target.closest('.btn-trigger-search');
    if (searchTrigger) {
      e.preventDefault();
      closeAllDrawers();
      openModal('searchModal');
      return;
    }

    // 7. Theme Toggle Trigger
    const themeBtn = e.target.closest('.btn-theme-toggle');
    if (themeBtn) {
      e.preventDefault();
      const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast('Theme Changed', `Switched to ${nextTheme} mode`, 'info');
      return;
    }

    // 8. RTL Toggle Trigger
    const rtlBtn = e.target.closest('.btn-rtl-toggle');
    if (rtlBtn) {
      e.preventDefault();
      const nextDir = AppState.direction === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir);
      showToast('Language Direction', `Switched layout to ${nextDir.toUpperCase()}`, 'info');
      return;
    }

    // 9. Close Modal Buttons
    const modalClose = e.target.closest('.btn-close-modal');
    if (modalClose) {
      const parentModal = modalClose.closest('.modal-custom');
      if (parentModal) closeModal(parentModal.id);
      return;
    }

    // 10. Backdrop click on Modal
    if (e.target.classList.contains('modal-custom')) {
      closeModal(e.target.id);
      return;
    }
  });

  // Mobile menu links smooth scroll & auto-close
  document.querySelectorAll('#mobileMenuOffcanvas a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      closeAllDrawers();
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
      document.querySelectorAll('.modal-custom.active').forEach(m => closeModal(m.id));
    }
  });
  /* --------------------------------------------------------------------------
     7. PRODUCT RENDERING & QUICK VIEW
     -------------------------------------------------------------------------- */
  function renderProductCardHTML(p) {
    const isWishlisted = AppState.wishlist.includes(p.id);
    const badgeClass = p.badgeType === 'sale' ? 'badge-sale' : (p.badgeType === 'new' ? 'badge-new' : 'badge-organic');
    return `
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <div class="product-card">
          <div class="product-thumb">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <div class="product-badge-group">
              ${p.badge ? `<span class="badge-custom ${badgeClass}">${p.badge}</span>` : ''}
              <span class="badge-custom badge-primary">${p.skinType} Skin</span>
            </div>
            <div class="product-actions-floating">
              <button class="product-action-btn ${isWishlisted ? 'active' : ''}" onclick="window.GloweApp.toggleWishlist('${p.id}')" title="Save to Wishlist">
                <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
              </button>
              <button class="product-action-btn" onclick="window.GloweApp.openQuickView('${p.id}')" title="Quick Preview">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div class="product-body">
            <span class="product-category-tag">${p.category}</span>
            <h5 class="product-title" title="${p.title}">${p.title}</h5>
            <div class="product-rating">
              <i class="bi bi-star-fill"></i>
              <span>${p.rating.toFixed(1)}</span>
              <span class="count">(${p.reviews})</span>
            </div>
            <div class="product-price-row">
              <div class="product-price">
                <span class="current-price">$${p.price.toFixed(2)}</span>
                ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}
              </div>
              <button class="btn-custom btn-primary-custom btn-add-cart" onclick="window.GloweApp.addToCart('${p.id}')">
                <i class="bi bi-bag-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBestsellers() {
    const container = document.getElementById('bestsellersGrid');
    if (!container) return;
    const bestsellers = PRODUCTS.slice(0, 4);
    container.innerHTML = bestsellers.map(p => renderProductCardHTML(p)).join('');
  }

  function filterAndRenderShopCatalog() {
    const container = document.getElementById('shopCatalogGrid');
    const resultCount = document.getElementById('catalogResultCount');
    if (!container) return;

    let filtered = PRODUCTS.filter(p => {
      // Category filter
      if (AppState.activeFilters.category !== 'all' && p.category.toLowerCase() !== AppState.activeFilters.category.toLowerCase()) {
        return false;
      }
      // Skin Type filter
      if (AppState.activeFilters.skinType !== 'all' && p.skinType.toLowerCase() !== AppState.activeFilters.skinType.toLowerCase() && p.skinType !== 'All') {
        return false;
      }
      // Max price
      if (p.price > AppState.activeFilters.maxPrice) {
        return false;
      }
      // Rating
      if (AppState.activeFilters.minRating > 0 && p.rating < AppState.activeFilters.minRating) {
        return false;
      }
      // Search term
      if (AppState.activeFilters.search.trim() !== '') {
        const query = AppState.activeFilters.search.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCat) return false;
      }
      return true;
    });

    // Sorting
    if (AppState.activeFilters.sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (AppState.activeFilters.sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (AppState.activeFilters.sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (AppState.activeFilters.sort === 'newest') {
      filtered.reverse();
    }

    if (resultCount) {
      resultCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} clean formulas`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
          <h5 class="mt-3">No matching skincare formulas found</h5>
          <p class="text-secondary">Try resetting your filters or search keywords.</p>
          <button class="btn-custom btn-outline-custom btn-sm mt-2" onclick="window.GloweApp.resetCatalogFilters()">Reset All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
    }
  }

  function renderAllProducts() {
    renderBestsellers();
    filterAndRenderShopCatalog();
    updateCartUI();
    updateWishlistUI();
  }

  function openQuickView(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    const modal = document.getElementById('quickViewModal');
    if (!modal) return;

    modal.querySelector('#quickViewImg').src = p.image;
    modal.querySelector('#quickViewImg').alt = p.title;
    modal.querySelector('#quickViewCategory').textContent = p.category;
    modal.querySelector('#quickViewTitle').textContent = p.title;
    modal.querySelector('#quickViewRating').innerHTML = `
      <i class="bi bi-star-fill text-warning"></i>
      <span class="fw-bold">${p.rating.toFixed(1)}</span>
      <span class="text-secondary small">(${p.reviews} verified buyer reviews)</span>
    `;
    modal.querySelector('#quickViewPrice').textContent = `$${p.price.toFixed(2)}`;
    modal.querySelector('#quickViewOldPrice').textContent = p.oldPrice ? `$${p.oldPrice.toFixed(2)}` : '';
    modal.querySelector('#quickViewDescription').textContent = p.description;
    
    // Benefits list
    const benefitsList = modal.querySelector('#quickViewBenefits');
    if (benefitsList) {
      benefitsList.innerHTML = p.benefits.map(b => `<li><i class="bi bi-check2 text-success me-2"></i>${b}</li>`).join('');
    }
    
    // Ingredients & usage
    const ingredientsEl = modal.querySelector('#quickViewIngredients');
    if (ingredientsEl) ingredientsEl.textContent = p.ingredients;
    const usageEl = modal.querySelector('#quickViewUsage');
    if (usageEl) usageEl.textContent = p.usage;

    // Add to cart button binding
    const addBtn = modal.querySelector('#quickViewAddBtn');
    const qtyInput = modal.querySelector('#quickViewQty');
    if (qtyInput) qtyInput.value = 1;
    if (addBtn) {
      addBtn.onclick = () => {
        const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
        addToCart(p.id, qty);
        closeModal('quickViewModal');
      };
    }

    openModal('quickViewModal');
  }

  function resetCatalogFilters() {
    AppState.activeFilters = {
      category: 'all',
      skinType: 'all',
      maxPrice: 60,
      minRating: 0,
      search: '',
      sort: 'featured'
    };
    // Reset form elements
    const priceSlider = document.getElementById('catalogPriceSlider');
    const priceDisplay = document.getElementById('catalogPriceVal');
    const searchInput = document.getElementById('catalogSearchInput');
    const sortSelect = document.getElementById('catalogSortSelect');
    
    if (priceSlider) priceSlider.value = 60;
    if (priceDisplay) priceDisplay.textContent = '$60';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'featured';

    document.querySelectorAll('.filter-category-radio').forEach(r => r.checked = r.value === 'all');
    document.querySelectorAll('.filter-skintype-radio').forEach(r => r.checked = r.value === 'all');
    
    filterAndRenderShopCatalog();
    showToast('Filters Cleared', 'Catalog reset to default view.', 'info');
  }

  /* --------------------------------------------------------------------------
     8. INGREDIENT TRANSPARENCY EXPLORER
     -------------------------------------------------------------------------- */
  function renderIngredients(filterCategory = 'all', searchQuery = '') {
    const container = document.getElementById('ingredientsGrid');
    if (!container) return;

    let items = INGREDIENTS_DATA.filter(ing => {
      if (filterCategory !== 'all' && ing.category.toLowerCase() !== filterCategory.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return ing.name.toLowerCase().includes(q) || ing.role.toLowerCase().includes(q) || ing.description.toLowerCase().includes(q);
      }
      return true;
    });

    if (items.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-4">
          <p class="text-secondary">No active clean ingredients matched your query.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(ing => `
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="ingredient-card">
          <span class="ingredient-pill">${ing.category}</span>
          <h5 class="fw-bold mb-1">${ing.name}</h5>
          <div class="text-primary small fw-semibold mb-3">${ing.role}</div>
          <p class="text-secondary small mb-3">${ing.description}</p>
          <div class="border-top pt-2 mt-auto">
            <div class="small fw-semibold text-primary mb-1">Target Skin Profile:</div>
            <div class="small text-secondary mb-3">${ing.suitableFor}</div>
            <button class="btn-custom btn-outline-custom btn-sm w-100" onclick="window.GloweApp.openQuickView('${ing.relatedProduct}')">
              <i class="bi bi-eye"></i> View Formula
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     9. INTERACTIVE SKIN QUIZ ENGINE
     -------------------------------------------------------------------------- */
  function initSkinQuiz() {
    const steps = document.querySelectorAll('.quiz-step');
    const progressBar = document.getElementById('quizProgressBar');

    function showStep(stepNum) {
      AppState.quizStep = stepNum;
      steps.forEach((s, idx) => {
        s.classList.toggle('active', idx + 1 === stepNum);
      });
      if (progressBar) {
        progressBar.style.width = `${(stepNum / 4) * 100}%`;
      }
    }

    // Option selections
    document.querySelectorAll('.quiz-option-card').forEach(card => {
      card.addEventListener('click', () => {
        const parent = card.closest('.quiz-step');
        parent.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        
        const questionKey = card.getAttribute('data-quiz-key');
        const answerVal = card.getAttribute('data-quiz-val');
        if (questionKey && answerVal) {
          AppState.quizAnswers[questionKey] = answerVal;
        }
      });
    });

    document.querySelectorAll('.btn-quiz-next').forEach(btn => {
      btn.addEventListener('click', () => {
        if (AppState.quizStep < 3) {
          showStep(AppState.quizStep + 1);
        } else if (AppState.quizStep === 3) {
          // Generate customized recommendations
          generateQuizResults();
          showStep(4);
        }
      });
    });

    document.querySelectorAll('.btn-quiz-prev').forEach(btn => {
      btn.addEventListener('click', () => {
        if (AppState.quizStep > 1) {
          showStep(AppState.quizStep - 1);
        }
      });
    });

    document.getElementById('btnQuizRestart')?.addEventListener('click', () => {
      showStep(1);
    });
  }

  function generateQuizResults() {
    const resultsContainer = document.getElementById('quizResultsContent');
    if (!resultsContainer) return;

    const { skinType, primaryGoal } = AppState.quizAnswers;
    
    // Pick 3 recommended products
    let recommended = PRODUCTS.filter(p => p.skinType === skinType || p.skinType === 'All');
    if (recommended.length < 3) recommended = PRODUCTS.slice(0, 3);
    else recommended = recommended.slice(0, 3);

    const bundleTotal = recommended.reduce((sum, p) => sum + p.price, 0);

    resultsContainer.innerHTML = `
      <div class="text-center mb-4">
        <span class="badge-custom badge-organic mb-2">Prescribed Routine Generated</span>
        <h4 class="fw-bold">Your 3-Step Custom Routine for ${skinType} Skin</h4>
        <p class="text-secondary">Tailored to achieve your goal: <strong>${primaryGoal}</strong></p>
      </div>
      <div class="row g-3 mb-4">
        ${recommended.map((p, i) => `
          <div class="col-md-4">
            <div class="card-custom p-3 text-center h-100">
              <span class="badge-custom badge-primary mb-2">Step 0${i+1}</span>
              <img src="${p.image}" alt="${p.title}" class="rounded-3 mx-auto mb-2" style="width:90px;height:90px;object-fit:cover;">
              <h6 class="fw-bold mb-1" style="font-size:0.9rem;">${p.title}</h6>
              <div class="text-primary fw-bold mb-2">$${p.price.toFixed(2)}</div>
              <p class="text-secondary small mb-0">${p.category}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="p-3 bg-surface border rounded-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <span class="text-secondary small d-block">Routine Bundle Price:</span>
          <span class="fs-4 fw-bold text-primary">$${bundleTotal.toFixed(2)}</span>
          <span class="badge-custom badge-sale ms-2">Free Express Shipping</span>
        </div>
        <button class="btn-custom btn-primary-custom" onclick="window.GloweApp.addRoutineToCart('${recommended.map(p => p.id).join(',')}')">
          <i class="bi bi-bag-check-fill"></i> Add Full 3-Step Routine to Bag
        </button>
      </div>
    `;
  }

  function addRoutineToCart(idsString) {
    const ids = idsString.split(',');
    ids.forEach(id => addToCart(id, 1));
    showToast('Routine Added!', 'Your custom 3-step routine has been placed in your bag.', 'success');
  }

  /* --------------------------------------------------------------------------
     10. PRICING TOGGLE SWITCHER
     -------------------------------------------------------------------------- */
  function initPricingToggle() {
    const switchInput = document.getElementById('pricingBillingSwitch');
    if (!switchInput) return;

    const prices = {
      starter: { monthly: 19, yearly: 15 },
      pro: { monthly: 49, yearly: 39 },
      business: { monthly: 99, yearly: 79 },
      enterprise: { monthly: 199, yearly: 159 }
    };

    switchInput.addEventListener('change', () => {
      const isYearly = switchInput.checked;
      document.querySelectorAll('.pricing-card').forEach(card => {
        const plan = card.getAttribute('data-plan');
        if (plan && prices[plan]) {
          const amountEl = card.querySelector('.pricing-amount-val');
          const periodEl = card.querySelector('.pricing-amount .period');
          if (amountEl) {
            amountEl.textContent = isYearly ? prices[plan].yearly : prices[plan].monthly;
          }
          if (periodEl) {
            periodEl.textContent = isYearly ? '/mo (Billed Annually)' : '/month';
          }
        }
      });
      showToast('Billing Updated', isYearly ? 'Switched to Annual Billing (Saved 20%)' : 'Switched to Monthly Billing', 'info');
    });
  }

  /* --------------------------------------------------------------------------
     11. COMING SOON COUNTDOWN TIMER
     -------------------------------------------------------------------------- */
  function initCountdownTimer() {
    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // Set target date to 45 days from current
    const targetDate = new Date().getTime() + (45 * 24 * 60 * 60 * 1000);

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* --------------------------------------------------------------------------
     12. FORM VALIDATIONS & HANDLERS
     -------------------------------------------------------------------------- */
  function initFormHandlers() {
    // Contact Form
    const contactForm = document.getElementById('contactUsForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('#contactName')?.value.trim();
        const email = contactForm.querySelector('#contactEmail')?.value.trim();
        const msg = contactForm.querySelector('#contactMessage')?.value.trim();

        if (!name || !email || !msg) {
          showToast('Validation Error', 'Please complete all required fields.', 'error');
          return;
        }

        showToast('Message Sent!', `Thank you, ${name}. Our skincare specialists will reply within 24 hours.`, 'success');
        contactForm.reset();
      });
    }

    // Newsletter forms
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (input && input.value.trim()) {
          showToast('VIP Subscribed!', 'Check your inbox for your 15% welcome discount code.', 'success');
          input.value = '';
        }
      });
    });

    // Auth Modal Forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Welcome Back!', 'Logged into Glowé Beauty account successfully.', 'success');
        closeModal('authModal');
      });
    }

    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Account Created!', 'Your beauty membership profile has been created.', 'success');
        closeModal('authModal');
      });
    }

    // Password visibility togglers
    document.querySelectorAll('.btn-toggle-password').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        if (input && input.type) {
          input.type = input.type === 'password' ? 'text' : 'password';
          const icon = btn.querySelector('i');
          if (icon) {
            icon.classList.toggle('bi-eye');
            icon.classList.toggle('bi-eye-slash');
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     13. ADMIN DASHBOARD & CHART.JS ENGINE
     -------------------------------------------------------------------------- */
  let salesChartInstance = null;
  let categoryChartInstance = null;

  function initAdminDashboard() {
    const adminToggleBtn = document.getElementById('btnToggleAdminView');
    const adminBackBtn = document.getElementById('btnExitAdminView');
    const adminView = document.getElementById('adminDashboardView');
    const frontendView = document.getElementById('frontendMainContent');

    if (adminToggleBtn && adminView) {
      adminToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        adminView.classList.add('active');
        if (frontendView) frontendView.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderAdminCharts();
        showToast('Admin Mode Active', 'Welcome to Glowé Management Console.', 'info');
      });
    }

    if (adminBackBtn && adminView) {
      adminBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        adminView.classList.remove('active');
        if (frontendView) frontendView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Admin Sidebar Tabs
    document.querySelectorAll('.admin-nav-item[data-admin-tab]').forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.admin-nav-item').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const tabTarget = tab.getAttribute('data-admin-tab');
        document.querySelectorAll('.admin-tab-pane').forEach(pane => {
          pane.style.display = pane.id === tabTarget ? 'block' : 'none';
        });
      });
    });

    // Admin Orders filter
    const orderStatusFilter = document.getElementById('adminOrderStatusSelect');
    if (orderStatusFilter) {
      orderStatusFilter.addEventListener('change', () => {
        const val = orderStatusFilter.value.toLowerCase();
        document.querySelectorAll('.admin-order-row').forEach(row => {
          const status = row.getAttribute('data-order-status').toLowerCase();
          row.style.display = (val === 'all' || status === val) ? '' : 'none';
        });
      });
    }
  }

  function renderAdminCharts() {
    if (typeof Chart === 'undefined') return;

    // Line Chart: Revenue Trends
    const salesCanvas = document.getElementById('adminSalesChart');
    if (salesCanvas && !salesChartInstance) {
      const ctx = salesCanvas.getContext('2d');
      salesChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Total Revenue ($USD)',
            data: [14200, 18500, 22400, 28900, 35000, 42100, 51200, 63800, 78500, 92400, 108500, 128450],
            borderColor: '#c97a63',
            backgroundColor: 'rgba(201, 122, 99, 0.12)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#c97a63',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { grid: { color: 'rgba(150, 150, 150, 0.1)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }

    // Doughnut Chart: Category Sales
    const categoryCanvas = document.getElementById('adminCategoryChart');
    if (categoryCanvas && !categoryChartInstance) {
      const ctx = categoryCanvas.getContext('2d');
      categoryChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Serums', 'Moisturizers', 'Cleansers', 'Sunscreens', 'Others'],
          datasets: [{
            data: [38, 26, 18, 12, 6],
            backgroundColor: ['#c97a63', '#2c3e50', '#2ec4b6', '#ff9f1c', '#959e9c']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     14. CATALOG FILTER EVENT LISTENERS
     -------------------------------------------------------------------------- */
  function initFilterListeners() {
    // Category radios
    document.querySelectorAll('.filter-category-radio').forEach(r => {
      r.addEventListener('change', () => {
        AppState.activeFilters.category = r.value;
        filterAndRenderShopCatalog();
      });
    });

    // Skin type radios
    document.querySelectorAll('.filter-skintype-radio').forEach(r => {
      r.addEventListener('change', () => {
        AppState.activeFilters.skinType = r.value;
        filterAndRenderShopCatalog();
      });
    });

    // Price Slider
    const priceSlider = document.getElementById('catalogPriceSlider');
    const priceDisplay = document.getElementById('catalogPriceVal');
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener('input', () => {
        const val = parseFloat(priceSlider.value);
        priceDisplay.textContent = `$${val}`;
        AppState.activeFilters.maxPrice = val;
        filterAndRenderShopCatalog();
      });
    }

    // Search Input
    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        AppState.activeFilters.search = searchInput.value;
        filterAndRenderShopCatalog();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('catalogSortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        AppState.activeFilters.sort = sortSelect.value;
        filterAndRenderShopCatalog();
      });
    }

    // Ingredient Search & Category tabs
    const ingSearch = document.getElementById('ingredientSearchInput');
    if (ingSearch) {
      ingSearch.addEventListener('input', () => {
        renderIngredients('all', ingSearch.value);
      });
    }

    document.querySelectorAll('.ingredient-filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.ingredient-filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.getAttribute('data-category') || 'all';
        renderIngredients(cat, ingSearch ? ingSearch.value : '');
      });
    });
  }

  /* --------------------------------------------------------------------------
     15. INITIALIZE EVERYTHING
     -------------------------------------------------------------------------- */
  renderAllProducts();
  renderIngredients();
  initSkinQuiz();
  initPricingToggle();
  initCountdownTimer();
  initFormHandlers();
  initAdminDashboard();
  initFilterListeners();

  /* --------------------------------------------------------------------------
     16. EXPOSE GLOBAL APP API
     -------------------------------------------------------------------------- */
  window.GloweApp = {
    addToCart,
    updateCartQty,
    removeFromCart,
    toggleWishlist,
    openQuickView,
    resetCatalogFilters,
    addRoutineToCart,
    openDrawer,
    closeAllDrawers,
    openModal,
    closeModal,
    showToast
  };
});
