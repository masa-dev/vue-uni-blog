const md = new Vue({
  el: '#app',
  data: {
    input: '',
  },
  computed: {
    convertMarkdown: function () {
      return marked.parse(this.input);
    }
  },
  methods: {
    copyHtml: function () {
      //const html = document.getElementById('html-source').innerText;
      copyOverrideOnce(this.convertMarkdown);
      document.execCommand('copy');
    }
  }
})


// button

function copyOverrideOnce(str) {
  document.addEventListener('copy', function (evt) {
    evt.clipboardData.setData('text/plain', str);
    evt.preventDefault();
  }, { once: true });
}


// textareaのtab入力
document.getElementById('input')
  .addEventListener('keydown', function (event) {

    if (event.key === 'Tab') {
      event.preventDefault();
      event.target = 'tab';

      // textareaの内容
      let position = this.selectionStart;
      let left = this.value.substr(0, position);
      let right = this.value.substr(position, this.value.length);

      this.value = `${left}\t${right}`;
      this.selectionEnd = position + 1;
    }
  });
