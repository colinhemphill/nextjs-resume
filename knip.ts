const config = {
  entry: [
    'src/app/**/sitemap.{js,ts}',
    'src/app/**/{default,error,forbidden,loading,not-found,unauthorized}.{js,jsx,ts,tsx}',
    'src/app/**/{layout,page,route,template}.{js,jsx,ts,tsx}',
    'contentlayer.config.ts',
  ],
  ignoreDependencies: [
    'eslint-config-next',
    'eslint-plugin-unicorn',
  ],
};

export default config;
