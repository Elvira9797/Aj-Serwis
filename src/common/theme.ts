declare module '@emotion/react' {
  export interface Theme {
    colors: {
      accentColor: string;
      primaryColor: string;
      secondaryColor: string;
      bgColor: string;
      lightGrey: string;
    };
    section: {
      padding: {
        medium: {
          paddingTop: string;
          paddingBottom: string;
        };
        small: {
          paddingTop: string;
          paddingBottom: string;
        };
      };
    };
    typography: {
      fontWeight: {
        regular: string;
        semiBold: string;
        bold: string;
      };
    };
    transition: {
      basic: string;
    };
  }
}

export const theme = {
  colors: {
    accentColor: '#c3a069',
    primaryColor: '#1f1f1f',
    secondaryColor: '#ffffff',
    bgColor: '#f7f9fb',
    lightGrey: 'rgb(130, 130, 130)',
  },
  section: {
    padding: {
      medium: {
        paddingTop: '70px',
        paddingBottom: '70px',
      },
      small: {
        paddingTop: '60px',
        paddingBottom: '60px',
      },
    },
  },
  typography: {
    fontWeight: {
      regular: '400',
      semiBold: '700',
      bold: '900',
    },
  },
  transition: {
    basic: 'all 250ms ease-in-out ',
  },
};
