// Configuración compartida de Tailwind (CDN) para todas las pantallas de TicketHub
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      // Paleta base:
      //   color-1 #F5F7FA (fondo)   color-2 #9DB4D3 (azul claro)   color-3 #2F6FB5 (azul acento)
      //   color-4 #1B3A6B (azul marino)   color-5 #0F1B2D (casi negro)
      // Los tonos intermedios (superficies, texto secundario, bordes) son mezclas de estos cinco.
      // Error (rojo) y tertiary (naranja) se mantienen porque son colores semánticos.
      colors: {
        // Primario
        "primary": "#1B3A6B", "on-primary": "#F5F7FA",
        "primary-container": "#2F6FB5", "on-primary-container": "#F5F7FA",
        "primary-fixed": "#DCE6F2", "primary-fixed-dim": "#9DB4D3",
        "on-primary-fixed": "#0F1B2D", "on-primary-fixed-variant": "#1B3A6B",
        "surface-tint": "#2F6FB5", "inverse-primary": "#9DB4D3",
        // Secundario
        "secondary": "#4B6488", "on-secondary": "#F5F7FA",
        "secondary-container": "#DCE6F2", "on-secondary-container": "#1B3A6B",
        "secondary-fixed": "#DCE6F2", "secondary-fixed-dim": "#9DB4D3",
        "on-secondary-fixed": "#0F1B2D", "on-secondary-fixed-variant": "#1B3A6B",
        // Superficies
        "background": "#F5F7FA", "on-background": "#0F1B2D",
        "surface": "#F5F7FA", "surface-bright": "#F5F7FA", "surface-dim": "#C4D3E6",
        "surface-container-lowest": "#FFFFFF", "surface-container-low": "#EEF2F7",
        "surface-container": "#E6ECF4", "surface-container-high": "#DCE5F0",
        "surface-container-highest": "#CFDBEA", "surface-variant": "#DCE5F0",
        "on-surface": "#0F1B2D", "on-surface-variant": "#1B3A6B",
        "inverse-surface": "#0F1B2D", "inverse-on-surface": "#F5F7FA",
        "outline": "#6E829F", "outline-variant": "#9DB4D3",
        // Semánticos (sin cambios)
        "tertiary": "#7e3000", "on-tertiary": "#ffffff", "tertiary-container": "#a44100",
        "on-tertiary-container": "#ffd2be", "tertiary-fixed": "#ffdbcc", "tertiary-fixed-dim": "#ffb695",
        "on-tertiary-fixed": "#351000", "on-tertiary-fixed-variant": "#7b2f00",
        "error": "#ba1a1a", "on-error": "#ffffff", "error-container": "#ffdad6", "on-error-container": "#93000a"
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      spacing: {
        "space-xs": "0.25rem", "space-md": "0.75rem", "space-sm": "0.5rem", "margin-desktop": "2rem",
        "margin": "1rem", "gutter": "1rem", "space-xl": "1.5rem", "gutter-desktop": "1.5rem", "space-lg": "1rem"
      },
      fontFamily: {
        "label-sm": ["Inter"], "body-sm": ["Inter"], "headline-lg": ["Inter"], "display-lg": ["Inter"],
        "body-lg": ["Inter"], "headline-sm": ["Inter"], "label-md": ["Inter"], "body-md": ["Inter"], "title-md": ["Inter"]
      },
      fontSize: {
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "18px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "display-lg": ["30px", { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "headline-sm": ["18px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "title-md": ["15px", { lineHeight: "22px", letterSpacing: "-0.005em", fontWeight: "600" }]
      }
    }
  }
};
