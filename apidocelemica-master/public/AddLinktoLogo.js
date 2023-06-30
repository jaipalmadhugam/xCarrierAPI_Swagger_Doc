ui.initOAuth = function () {
    const logoLink = document.querySelector('.swagger-ui .topbar-wrapper .link');
    if (logoLink) {
      const logoAnchor = document.createElement('a');
      logoAnchor.href = 'all.html';
      logoAnchor.target = '_blank';
      logoAnchor.rel = 'noopener noreferrer';
      logoLink.parentNode.insertBefore(logoAnchor, logoLink);
      logoAnchor.appendChild(logoLink);
    }
  };
  // Initialize Swagger UI
  ui.initOAuth();