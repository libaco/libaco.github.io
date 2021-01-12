module.exports = {
  title: 'Libaco',
  tagline: 'Asymmetric coroutines for C/C++',
  url: 'https://libaco.org',
  baseUrl: 'https://libaco.org/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'libaco', // Usually your GitHub org/user name.
  projectName: 'libaco.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'libaco',
      // logo: {
      //   alt: 'libaco',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'support',
          activeBasePath: 'support',
          label: 'Support',
          position: 'left',
        },
        {
          href: 'https://github.com/hnes/libaco',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/libaco/" target="_blank">libaco</a>. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/libaco/libaco.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
