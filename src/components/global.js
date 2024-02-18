/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "gray-100": "#f2f4f7",
          "gray-700": "#344054",
          "error-50": "#fef3f2",
          "error-700": "#b42318",
          "success-50": "#ecfdf3",
          "success-700": "#027a48",
          "warning-50": "#fffaeb",
          "warning-700": "#b54708",
          "primary-50": "#f9f5ff",
          "primary-700": "#6941c6",
        },
        spacing: {},
        fontFamily: {
          "text-sm-medium": "Inter",
        },
      },
      fontSize: {
        sm: "14px",
        xs: "12px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  