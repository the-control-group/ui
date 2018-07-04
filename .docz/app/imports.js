export const imports = {
  'docz/Button.doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-button-doc" */ 'docz/Button.doc.mdx'),
}
