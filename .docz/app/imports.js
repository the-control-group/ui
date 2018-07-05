export const imports = {
  'docs/Button.doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-button-doc" */ 'docs/Button.doc.mdx'),
}
