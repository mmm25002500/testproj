export default {
  webpack: (config) => {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true, // Optional, enable when you use `import` and `export` in wasm
    };
    return config;
  },
};

