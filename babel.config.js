module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);

  return {
    plugins: ['syntax-dynamic-import', '@babel/plugin-proposal-optional-chaining'],
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
        },
      ],

      '@babel/preset-react',
    ],
  };
};
