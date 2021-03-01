const md = new Vue({
  el: '#app',
  data: {
    input: '',
  },
  computed: {
    convertMarkdown: function () {
      return marked(this.input);
    }
  },
  methods: {
    copyHtml: function () {
      const html = document.getElementById('html-source').innerText;
      copyOverrideOnce(html);
      document.execCommand('copy');
    }
  }
})


// button

function copyOverrideOnce(str) {
  document.addEventListener('copy', function (evt) {
    evt.clipboardData.setData('text/plain', str);
    evt.preventDefault();
  }, { once: true }
  );
}

