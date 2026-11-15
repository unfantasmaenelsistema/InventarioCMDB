/** Misma configuración que usaba el CDN de Tailwind 3: el aspecto no cambia. */
export default {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        soc: {
          canvas: '#0B1120',
          surface: '#111827',
          elevated: '#162032',
          border: '#1E293B',
          accent: '#0EA5E9',
        },
      },
    },
  },
};
