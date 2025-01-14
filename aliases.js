const aliases = (prefix = `src`) => ({
  app: `${prefix}/app`,
  styles: `${prefix}/styles`,
  components: `${prefix}/app/components`,
  store: `${prefix}/app/store`,
  configs: `${prefix}/app/configs`,
  pages: `${prefix}/app/pages`,
});

// eslint-disable-next-line no-undef
module.exports = aliases;
