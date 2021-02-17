module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "refs": {
    "view-components": {
      "title": "ViewComponents",
      "url": "https://primer-view-components.herokuapp.com"
    },
    "react-components": {
      "title": "React Components",
      "url": "http://localhost:6006"
    }
  }
}