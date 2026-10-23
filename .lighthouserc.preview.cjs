/* global require, module */
const base = require('./.lighthouserc.json')

// Vercel previews intentionally send X-Robots-Tag: noindex.
// Production audits must continue to use the complete base configuration.
module.exports = {
  ...base,
  ci: {
    ...base.ci,
    collect: {
      ...base.ci.collect,
      settings: {
        ...base.ci.collect.settings,
        skipAudits: ['is-crawlable'],
      },
    },
  },
}
