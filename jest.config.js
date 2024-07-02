export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocks CSS imports for Jest
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
