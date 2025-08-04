// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CNOE',
  // tagline: 'Internal Developer Platforms are a strategic commitment. Share learnings & build in the open.',
  tagline: 'Build your Internal Developer Platform with CNOE!',
  url: 'https://cnoe-io.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cnoe-io', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);

            // Find the directory you want to flatten
            const processItems = (items) => {
              return items.flatMap(item => {
                if (item.type === 'category' && item.label === 'Parent DOC Directory') {
                  // Return the items inside the category instead of the category itself
                  return item.items || [];
                }
                if (item.items) {
                  return [{ ...item, items: processItems(item.items) }];
                }
                return [item];
              });
            };

            return processItems(sidebarItems);
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cnoe-io/website/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  // Enable Mermaid in markdown
  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'CNOE Logo',
          src: 'img/logo-no-name.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/cnoe',
            position: 'left',
            label: 'Docs'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            'aria-label': 'Community Calendar',
            'className': 'navbar--calendar-link',
            'href': "https://calendar.google.com/calendar/u/0/embed?src=064a2adfce866ccb02e61663a09f99147f22f06374e7a8994066bdc81e066986@group.calendar.google.com&ctz=America/Los_Angeles",
            'position': 'right',
          },
          {
            'aria-label': 'Slack Channel',
            'className': 'navbar--slack-link',
            'href': "https://cloud-native.slack.com/archives/C05TN9WFN5S",
            'position': 'right',
          },
          {
            'aria-label': 'GitHub Repository',
            'className': 'navbar--github-link',
            'href': 'https://github.com/cnoe-io',
            'position': 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DOCS',
            items: [
              {
                label: 'Introduction',
                to: '/docs/overview/cnoe',
              },
              {
                label: 'Contribute',
                to: '/docs/contributing/aws-ref-impl-CONTRIBUTING',
              },
            ],
          },
          {
            title: 'SOCIAL',
            items: [
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/cnoe-io',
              // },
              {
                label: 'Slack',
                href: 'https://cloud-native.slack.com/archives/C05TN9WFN5S',
              },
              {
                label: 'Community Meeting Calendar',
                href: 'https://calendar.google.com/calendar/u/0/embed?src=064a2adfce866ccb02e61663a09f99147f22f06374e7a8994066bdc81e066986@group.calendar.google.com&ctz=America/Los_Angeles',
              }
            ],
          },
          {
            title: 'MORE',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cnoe-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CNOE`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: '#FFFFFF',
          scrollOffset: 0,
          //container: '#zoom-container',
          //template: '#zoom-template',
        },
      },
    }),

  plugins: [
    'plugin-image-zoom',
    require.resolve('docusaurus-lunr-search')
  ],
};

module.exports = config;
