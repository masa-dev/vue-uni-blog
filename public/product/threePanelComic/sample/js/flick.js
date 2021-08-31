const flicking = new Flicking("#carousel", {
  align: "center",
  circular: false,
  bound: false,
  renderOnlyVisible: true,
});

flicking.on("ready", (e) => {
  document.getElementById("selected-index").innerHTML = `${flicking.defaultIndex + 1} / ${e.currentTarget.panelCount}`;
});

flicking.on("changed", (e) => {
  console.log(e);
  document.getElementById("selected-index").innerHTML = `${e.index + 1} / ${e.currentTarget.panelCount}`;

  // 選択中のスライドのクラス変更
  e.prevPanel._el.classList.remove("selected-panel");
  e.panel._el.classList.add("selected-panel");
});

flicking.addPlugins(new Flicking.Plugins.Arrow());
flicking.addPlugins(new Flicking.Plugins.Fade());
flicking.addPlugins(new Flicking.Plugins.Pagination());
