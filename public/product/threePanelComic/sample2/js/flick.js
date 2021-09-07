const flicking = new Flicking("#carousel", {
  align: "center",
  circular: false,
  bound: false,
  renderOnlyVisible: true,
});

flicking.on("ready", (e) => {
  //document.getElementById("selected-index").innerHTML = `${flicking.defaultIndex + 1} / ${e.currentTarget.panelCount}`;
});

flicking.on("changed", (e) => {
  //document.getElementById("selected-index").innerHTML = `${e.index + 1} / ${e.currentTarget.panelCount}`;

  // 選択中のスライドのクラス変更
  //e.prevPanel._el.classList.remove("selected-panel");
  //e.panel._el.classList.add("selected-panel");

  const emotionTexts = [
    "少しの不満",
    "すごい怒り",
    "何とかするべきだ",
    "変な人と思われたくない"
  ]

  document.getElementById("emotional-image").src = `img/sample-2-${e.index}.png`;
  document.getElementById("emotional-text").innerHTML = emotionTexts[e.index];
});

flicking.addPlugins(new Flicking.Plugins.Arrow());
flicking.addPlugins(new Flicking.Plugins.Fade());
flicking.addPlugins(new Flicking.Plugins.Pagination());

flicking.activePlugins[1].scale = 0.6;
flicking.activePlugins[1].update();