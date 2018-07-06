export const imports = {
  'docs/Button.doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-button-doc" */ 'docs/Button.doc.mdx'),
  'docs/Div.doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-div-doc" */ 'docs/Div.doc.mdx'),
  'docs/Grid.doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-grid-doc" */ 'docs/Grid.doc.mdx'),
  'docs/Input.doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-input-doc" */ 'docs/Input.doc.mdx'),
}
