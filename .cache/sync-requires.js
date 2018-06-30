// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/templates/blog-post.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/templates/Blog.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/templates/tags.js")),
  "component---src-templates-categories-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/templates/categories.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/404.js")),
  "component---src-pages-categories-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Categories.js")),
  "component---src-pages-crowd-scores-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/CrowdScores.js")),
  "component---src-pages-gradient-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Gradient.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/index.js")),
  "component---src-pages-numilli-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Numilli.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/page-2.js")),
  "component---src-pages-quidco-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Quidco.js")),
  "component---src-pages-suggestv-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Suggestv.js")),
  "component---src-pages-tags-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Tags.js")),
  "component---src-pages-thanks-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Thanks.js")),
  "component---src-pages-weather-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Weather.js")),
  "component---src-pages-yunojuno-js": preferDefault(require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/src/pages/Yunojuno.js"))
}

exports.json = {
  "layout-index.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/layout-index.json"),
  "blog-weeknotes-learning-dev-camp-day-2-to-3.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/blog-weeknotes-learning-dev-camp-day-2-to-3.json"),
  "blog-weeknotes-learning-dev-camp-day-1.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/blog-weeknotes-learning-dev-camp-day-1.json"),
  "blog-weeknotes-elbx-my-day-in-review.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/blog-weeknotes-elbx-my-day-in-review.json"),
  "blog.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/blog.json"),
  "tags-conferences.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-conferences.json"),
  "tags-elearning.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-elearning.json"),
  "tags-learning-dev-camp.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-learning-dev-camp.json"),
  "tags-augmented-reality.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-augmented-reality.json"),
  "tags-learner-journeys.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-learner-journeys.json"),
  "tags-conference.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-conference.json"),
  "tags-game-based-learning.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-game-based-learning.json"),
  "tags-virtual-reality.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags-virtual-reality.json"),
  "categories-commonplace-book.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/categories-commonplace-book.json"),
  "categories-weeknotes.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/categories-weeknotes.json"),
  "dev-404-page.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/404.json"),
  "categories.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/categories.json"),
  "crowd-scores.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/crowd-scores.json"),
  "gradient.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/gradient.json"),
  "index.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/index.json"),
  "numilli.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/numilli.json"),
  "page-2.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/page-2.json"),
  "quidco.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/quidco.json"),
  "suggestv.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/suggestv.json"),
  "tags.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/tags.json"),
  "thanks.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/thanks.json"),
  "weather.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/weather.json"),
  "yunojuno.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/yunojuno.json"),
  "404-html.json": require("/Users/anthkris/knanthony.com/knanthony.com/portfolio-site/.cache/json/404-html.json")
}