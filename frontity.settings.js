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
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Podcast",
              "https://whywemakestuff.com/"
            ],
            [
              "Twitter",
              "https://twitter.com/craigger"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
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
