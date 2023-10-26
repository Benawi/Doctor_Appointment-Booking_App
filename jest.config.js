exports = {
    preset: 'react-native',
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js' 
    }
  }