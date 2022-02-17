const siteConfig = require("../../config");

export default {
  mounted() {
    let { title } = this.$options;
    let { description } = this.$options;

    if (title && typeof title === "string") {
      // title = typeof title === 'function' ? title.call(this) : title
      document.title = `${siteConfig.title} - ${title}`;
    }

    if (description && typeof description === "string") {
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", description);
    }
  },
};
