<template>
  <div class="toggle-switch-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      id="toggle-to-sun"
      class="bi bi-sun-fill"
      :class="{ selected: !isDark }"
      viewBox="0 0 16 16"
      @click="changeWhite()"
    >
      <path
        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
      />
    </svg>

    <div class="toggle-switch">
      <input
        id="toggle"
        class="toggle-input"
        type="checkbox"
        v-model="isDark"
        @click="change()"
      />
      <label for="toggle" class="toggle-label"></label>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      id="toggle-to-moon"
      class="bi bi-moon-stars-fill"
      :class="{ selected: isDark }"
      viewBox="0 0 16 16"
      @click="changeDark()"
    >
      <path
        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
      />
      <path
        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
      />
    </svg>
  </div>
</template>

<script>
/**
 * 文字列化したBoolean値をBoolean型に変換する
 * @param {String} bool Booleanの文字列（例："True"）
 */
function toBoolean(bool) {
  return bool.toLowerCase() === "true" ? true : false;
}

export default {
  name: "ToggleTheme",
  props: {},
  data() {
    return {
      isDark: false,
      /**
       * @type {String} ローカルストレージのID
       */
      lsId: "blog_theme_isDark",
    };
  },
  methods: {
    change() {
      this.isDark = !this.isDark;
      this.setIsDark(this.isDark);
    },
    changeDark() {
      this.isDark = true;
      this.setIsDark(this.isDark);
    },
    changeWhite() {
      this.isDark = false;
      this.setIsDark(this.isDark);
    },
    setIsDark(isDark) {
      this.isDark = isDark;

      localStorage.setItem(this.lsId, this.isDark);

      if (this.isDark) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    },
    loadLocalStrage() {
      let value = localStorage.getItem(this.lsId);
      value = toBoolean(value);

      this.isDark = value;
    },
  },
  created() {
    let lsVal = localStorage.getItem(this.lsId);
    // LocalStrageに設定されていない場合は、初期値としてfalseを設定する
    this.isDark = lsVal === null ? false : toBoolean(lsVal);

    if (this.isDark) document.body.classList.add("dark-theme");

    setTimeout(() => {
      // リロード時に保存したスタイルが一瞬適用されるため、
      // 短い時間を開けてスタイルを変更する
      document.body.style.transition = "0.75s background-color, 0.75s color";
    }, 100);
  },
};
</script>

<style scoped lang="scss">
@import "_base.scss";

.toggle-switch-wrapper {
  color: $defaultColor;
  position: absolute;
  top: 30px;
  right: 10px;

  svg {
    width: 23px;
    height: 23px;
    padding: 4px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 10px;
    background-color: transparent;

    &.bi {
      color: gray;
      transform: scale(0.9, 0.9);
      transition: 0.05s linear transform;

      &.selected {
        transform: scale(1.05, 1.05);
      }
    }

    &.bi-sun-fill {
      padding-left: 2px;
      &.selected {
        color: rgb(230, 140, 23);
      }
    }

    &.bi-moon-stars-fill {
      padding-right: 2px;
      &.selected {
        color: rgb(219, 206, 17);
      }
    }
  }

  .toggle-switch {
    display: inline-block;
  }

  // input
  .toggle-input {
    position: absolute;
    left: -3px;
    top: -3px;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  // label
  .toggle-label {
    width: 50px;
    height: 30px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 15px;
    transition: 0.4s;
    box-sizing: border-box;
    &:after {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      left: 3px;
      top: 3px;
      z-index: 2;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.4s;
    }
  }

  // input:ckeecked
  .toggle-input:checked {
    + .toggle-label {
      background-color: #3b52b9;
      &:after {
        left: 22px;
      }
    }
  }

  .toggle-switch {
    position: relative;
    width: 50px;
    height: 30px;
    margin: auto;
  }
}

@media only screen and (max-width: 600px) {
  .toggle-switch-wrapper {
    top: 25px;
    right: 0;
  }
}

// ダークテーマ（スイッチ切り替え用）
body.dark-theme {
  @import "_darkBase.scss";
  .toggle-switch-wrapper {
    color: $defaultColor;
    .toggle-label {
      &:after {
        background-color: $defaultBackgroundColor;
      }
    }
  }
}
</style>
