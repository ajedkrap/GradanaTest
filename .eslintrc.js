module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _atoms: './src/screens/components/atoms',
          _helpers: './src/helpers',
          _images: './src/assets/images',
          _molecules: './src/screens/components/molecules',
          _organisms: './src/screens/components/organisms',
          _redux: './src/redux',
          _routes: './src/routes',
          _screens: './src/screens',
          _services: './src/services',
          _templates: './src/screens/components/templates',
          _theme: './src/theme',
        },
      },
    },
  },
};
