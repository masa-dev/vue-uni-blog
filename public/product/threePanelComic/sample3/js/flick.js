const flicking = new Flicking("#carousel", {
  align: "center",
  circular: true,
  deceleration: 0.05,
  duration: 350,
  bound: false,
  renderOnlyVisible: true,
});

flicking.on("ready", (e) => {
  //document.getElementById("selected-index").innerHTML = `${flicking.defaultIndex + 1} / ${e.currentTarget.panelCount}`;
});

flicking.on("changed", (e) => {
  const emotionTexts = [
    "勇気・ポジティブ思考",
    "諦め・途方に暮れる",
    "不安・焦り",
    "絶望・自己嫌悪"
  ];

  document.getElementById("emotional-image").src = `img/sample-2-${e.index}.png`;
  document.getElementById("emotional-text").innerHTML = emotionTexts[e.index];
});

flicking.addPlugins(new Flicking.Plugins.Arrow());
flicking.addPlugins(new Flicking.Plugins.Fade());
flicking.addPlugins(new Flicking.Plugins.Pagination());

flicking.activePlugins[1].scale = 0.3;
flicking.activePlugins[1].update();