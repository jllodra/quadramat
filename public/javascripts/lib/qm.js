var qm = {}; // objecte contenidor de mòduls (tb anomenat Namespace)

qm.init = function() {
  qm.engine.init();
  qm.ui.init();
  qm.vis.init()
  qm.preset.init();
};
