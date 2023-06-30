window.onload = function() {
    //<editor-fold desc="Changeable Configuration Block">

    // the following lines will be replaced by docker/configurator, when it runs in a docker-container
    window.ui = SwaggerUIBundle({
        url: "static/elemica-masterdata.json",
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    });
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
    //</editor-fold>
};