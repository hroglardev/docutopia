import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
        fonts: {
            primary: {
              value: `Twemoji Country Flags, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
            },
          },
        sizes: {
            "sidebar-width-desktop": { value: "280px" },
            "sidebar-width-mobile": { value: "333px" },
            "param-form-width": { value: "8.75rem" },
          },
        radii: {
          "default": { value: "5px"},
          "lg": {value: "calc(5px * 1.5)"}
        },

        borders: {
          "border-body-param": { value: "1px solid rgba(0, 0, 0, 0.1)"},
          "border-input": { value: "1px solid #e5e5e5"},
          "border-input-hover": { value: "1px solid #ccc"},
          "border-input-focus-pass": {value: "#018ef5"},
          "border-input-focus-fail": {value: "#e95f6a"}
        },
        fontWeights: {
            light: {value: "400"},
            medium: { value: "500" },
            semiBold: { value: "600" },
            bold: { value: "700" },
        },
        lineHeights: {
            light: {value: "1.2"},
            medium: {value: "12px"},
            tall: {value: "1.5"}
        },
        fontSizes: {
            "xxs": {value: "8px"},
            "xs": {value: "12px"},
            "s": {value: "13px"},
            "m": {value: "14px"},
            "l": {value: "1em"},
            "xl": {value: "1.9em"}
        },
        shadows: {
          "shadow-input-focus-fail": {value: "0 0 0 3px rgba(233, 95, 100, .4)"},
          "shadow-input-focus-pass": {value: "0 0 0 3px rgba(1, 142, 245, 0.25)"},
          "shadow-code-status": {value: "inset 0 1px 0 rgba(255, 255, 255, .5), inset 0 -1px 2px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1)"}
        },
        colors: {
        "primary-color-100": {value: "#422c96"},
        "primary-color-200": { value: "rgba(75, 50, 170, 0.09)" },
        "primary-color-600": { value: "#018ef5" },
        "primary-color-700": { value: "rgba(1, 142, 245, 0.25)" },

        "secondary-color-50": { value: "rgba(255, 255, 255, 0.2)" },
        "secondary-color-100": { value: "rgba(0, 0, 0, 0)" },
        "secondary-color-200": { value: "rgba(0, 0, 0, 0.1)" },
        "secondary-color-300": { value: "rgba(0, 0, 0, 0.33)" },
        "secondary-color-400": { value: "rgba(0, 0, 0, 0.125)" },
        "secondary-color-500": { value: "rgba(0, 0, 0, 0.05)" },
        "secondary-color-600": { value: "rgba(0, 0, 0, 0.2)" },

        "tertiary-color-50": { value: "#f8f8f8" },
        "tertiary-color-100": { value: "#e5e5e5" },
        "tertiary-color-200": { value: "#4f5a66" },
        "tertiary-color-300": { value: "#384248" },
        "tertiary-color-400": { value: "#637288" },
        "tertiary-color-500": { value: "rgba(255, 255, 255, 0.1)" },

        "danger-color-50": { value: "rgba(233, 95, 106, 0.1)" },
        "danger-color-100": { value: "#e95f6a" },
        "danger-color-200": { value: "rgba(233, 95, 106, 0.4)" },
        "danger-color-300": { value: "#dd1e2e" },
        "danger-color-400": { value: "#c71b29" },
        "danger-color-500": { value: "#b91926" },

        "color-base-white": { value: "#ffffff" },
        "primary-text": { value: "#121212" },
        "primary-background-color": { value: "{color-base-white}" }, 
        "secondary-background-color": { value: "{color-base-white}" },
        "sidebar-item-selected-color": { value: "rgba(1, 142, 245, 0.09)" },
        "sidebar-text-selected-color": {value: "#017fdc"},
        "card-box-shadow": { value: "inset 0 0.0625rem 0.0625rem {tertiary-color-500}" },

        "input-background-color": { value: "{color-base-white}" },
        "input-border-color": { value: "{tertiary-color-100}" },
        "input-hover-border-color": { value: "#ccc" },

  

        "required-color": { value: "{danger-color-300}" },
        
        "primary-color-dark-100": { value: "#422c96" },
        "primary-color-dark-200": { value: "rgba(75, 50, 170, 0.09)" },
        "primary-color-dark-600": { value: "#018ef5" },
        "primary-color-dark-700": { value: "rgba(1, 142, 245, 0.25)" },

        "secondary-color-dark-50": { value: "rgba(255, 255, 255, 0.2)" },
        "secondary-color-dark-100": { value: "rgba(0, 0, 0, 0)" },
        "secondary-color-dark-200": { value: "rgba(255, 255, 255, 0.1)" },
        "secondary-color-dark-300": { value: "rgba(0, 0, 0, 0.33)" },
        "secondary-color-dark-400": { value: "rgba(0, 0, 0, 0.125)" },
        "secondary-color-dark-500": { value: "rgba(255, 255, 255, 0.05)" },
        "secondary-color-dark-600": { value: "rgba(0, 0, 0, 0.2)" },

        "tertiary-color-dark-50": { value: "#303b42" },
        "tertiary-color-dark-100": { value: "#e5e5e5" },
        "tertiary-color-dark-200": { value: "{color-base-white}" },
        "tertiary-color-dark-300": { value: "{color-base-white}" },
        "tertiary-color-dark-400": { value: "#adb4c1" },
        "tertiary-color-dark-500": { value: "rgba(255, 255, 255, 0.1)" },

        "danger-color-dark-50": { value: "rgba(233, 95, 106, 0.1)" },
        "danger-color-dark-100": { value: "#e95f6a" },
        "danger-color-dark-200": { value: "rgba(233, 95, 106, 0.4)" },
        "danger-color-dark-300": { value: "#dd1e2e" },
        "danger-color-dark-400": { value: "#c71b29" },
        "danger-color-dark-500": { value: "#b91926" },

        "color-base-white-dark": { value: "#ffffff" },

        "primary-text-dark": { value: "{color-base-white-dark}" },
        "primary-background-color-dark": { value: "#121212" },
        "secondary-background-color-dark": { value: "#242e34" },
        "sidebar-item-selected-color-dark": { value: "{color-base-white-dark}" },
        "card-box-shadow-dark": { value: "none" },

        "input-background-color-dark": { value: "#384248" },
        "input-border-color-dark": { value: "#4c555a" },
        "input-hover-border-color-dark": { value: "#60686d" },

        "primary-color-method-get-dark": { value: "#0e9b71" },
        "secondary-color-method-get-dark": { value: "#0d8d67" },

        "primary-color-method-post-dark": { value: "#0171c2" },
        "secondary-color-method-post-dark": { value: "#0168b3" },

        "primary-color-method-delete-dark": { value: "{danger-color-dark-400}" },
        "secondary-color-method-delete-dark": { value: "{danger-color-dark-500}" },

        "primary-color-method-put-dark": { value: "#674ead" },
        "secondary-color-method-put-dark": { value: "#604aa2" },

        "primary-color-method-patch-dark": { value: "#df7d03" },
        "secondary-color-method-patch-dark": { value: "#d07503" },

        "required-color-dark": { value: "{danger-color-dark-100}" },

        // FONT COLORS
        "font-default": {value: "#384248"},
        "font-minimum": {value: "#637288"},
        "font-required": {value: "#dd1e2e"},
        "font-sidebar-selected": {value: "#017fdc"},
        "font-something": {value: "4f5a66"},
        
        // BGs
        "bg-body-param": {value: "#f8f8f8"},
        "bg-sidebar-selected": {value: "rgba(1, 142, 245, 0.09)"},
        "primary-color-method-get": { value: "#0e9b71" },
        "secondary-color-method-get": { value: "#0d8d67" },
        "primary-color-method-post": { value: "#0171c2" },
        "secondary-color-method-post": { value: "#0168b3" },
        "primary-color-method-delete": { value: "{danger-color-400}" },
        "secondary-color-method-delete": { value: "{danger-color-500}" },
        "primary-color-method-put": { value: "#674ead" },
        "secondary-color-method-put": { value: "#604aa2" },
        "primary-color-method-patch": { value: "#df7d03" },
        "secondary-color-method-patch": { value: "#d07503" },
        "code-status-green": {value: "#12ca93"},
        "code-status-red": {value: "#e95f6a"},
        "code-status-orange": {value: "#f7c543"}
      }
    },
  },
})