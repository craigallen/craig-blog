const settings = {
  "name": "craig-blog",
  "state": {
    "frontity": {
      "url": "https://craigallen.net",
      "title": "Craig Allen",
      "description": "Front-end web developer"
    }
  },
  "packages": [
    {
      "name": "jsnation-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://craigallen.net"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
