qm.ui = {};

qm.ui.e = {};

qm.ui.e.dials = {
    //**************OSCIL·LADOR 1****************
    dialOsc1Oct: new Nexus.Dial('#osc1Oct', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -6, //
        'max': +6, //
        'step': 1,
        'value': 3 // valor inicial
    }),
    dialOsc1Semi: new Nexus.Dial('#osc1Semi', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // valor mínim: -11 semitons
        'max': 22, // valor màxim +11 semitons
        'step': 1,
        'value': 11 // valor inicial
    }),
    dialOsc1Cents: new Nexus.Dial('#osc1Cents', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -1, // valor mínim: exponent rel dotzeava de dos (un semitó avall)
        'max': 1, // valor màxim exponent dotzeava de dos (un semitó amunt)
        'step': 0.001,
        'value': 0 // valor inicial
    }),
    dialOsc1Order: new Nexus.Dial('#osc1Order', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 1, //
        'max': 49, //
        'step': 2,
        'value': 1 // valor inicial
    }),
    dialOsc1Index: new Nexus.Dial('#osc1Index', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0.8, //
        'max': 1.2, //
        'step': 0,
        'value': 1 // valor inicial
    }),
    //**************OSCIL·LADOR 2****************
    dialOsc2Oct: new Nexus.Dial('#osc2Oct', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -6, //
        'max': +6, //
        'step': 1,
        'value': 3 // valor inicial
    }),
    dialOsc2Semi: new Nexus.Dial('#osc2Semi', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // valor mínim: -11 semitons
        'max': 22, // valor màxim +11 semitons
        'step': 1,
        'value': 11 // valor inicial
    }),
    dialOsc2Cents: new Nexus.Dial('#osc2Cents', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -1, // valor mínim: exponent rel dotzeava de dos (un semitó avall)
        'max': 1, // valor màxim exponent dotzeava de dos (un semitó amunt)
        'step': 0.001,
        'value': 0 // valor inicial
    }),
    dialOsc2Order: new Nexus.Dial('#osc2Order', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 1, //
        'max': 49, //
        'step': 2,
        'value': 1 // valor inicial
    }),
    dialOsc2Index: new Nexus.Dial('#osc2Index', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0.8, //
        'max': 1.2, //
        'step': 0,
        'value': 1 // valor inicial
    }),
    //**************OSCIL·LADOR 3****************
    dialOsc3Oct: new Nexus.Dial('#osc3Oct', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -6, //
        'max': +6, //
        'step': 1,
        'value': 3 // valor inicial
    }),
    dialOsc3Semi: new Nexus.Dial('#osc3Semi', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // valor mínim: -11 semitons
        'max': 22, // valor màxim +11 semitons
        'step': 1,
        'value': 11 // valor inicial
    }),
    dialOsc3Cents: new Nexus.Dial('#osc3Cents', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -1, // valor mínim: exponent rel dotzeava de dos (un semitó avall)
        'max': 1, // valor màxim exponent dotzeava de dos (un semitó amunt)
        'step': 0.001,
        'value': 0 // valor inicial
    }),
    dialOsc3Order: new Nexus.Dial('#osc3Order', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 1, //
        'max': 49, //
        'step': 2,
        'value': 1 // valor inicial
    }),
    dialOsc3Index: new Nexus.Dial('#osc3Index', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0.8, //
        'max': 1.2, //
        'step': 0,
        'value': 1 // valor inicial
    }),
    //**************OSCIL·LADOR 4****************
    dialOsc4Oct: new Nexus.Dial('#osc4Oct', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -6, //
        'max': +6, //
        'step': 1,
        'value': 3 // valor inicial
    }),
    dialOsc4Semi: new Nexus.Dial('#osc4Semi', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // valor mínim: -11 semitons
        'max': 22, // valor màxim +11 semitons
        'step': 1,
        'value': 11 // valor inicial
    }),
    dialOsc4Cents: new Nexus.Dial('#osc4Cents', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -1, // valor mínim: exponent rel dotzeava de dos (un semitó avall)
        'max': 1, // valor màxim exponent dotzeava de dos (un semitó amunt)
        'step': 0.001,
        'value': 0 // valor inicial
    }),
    dialOsc4Order: new Nexus.Dial('#osc4Order', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 1, //
        'max': 49, //
        'step': 2,
        'value': 1 // valor inicial
    }),
    dialOsc4Index: new Nexus.Dial('#osc4Index', {
        'size': [50, 50],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0.8, //
        'max': 1.2, //
        'step': 0,
        'value': 1 // valor inicial
    }),

    //*************M.MODULACIÓ OSC1************
    dialOsc1ToOsc1Freq: new Nexus.Dial('#osc1ToOsc1Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc1ToOsc1Amp: new Nexus.Dial('#osc1ToOsc1Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc1ToOsc2Freq: new Nexus.Dial('#osc1ToOsc2Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc1ToOsc2Amp: new Nexus.Dial('#osc1ToOsc2Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc1ToOsc3Freq: new Nexus.Dial('#osc1ToOsc3Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc1ToOsc3Amp: new Nexus.Dial('#osc1ToOsc3Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc1ToOsc4Freq: new Nexus.Dial('#osc1ToOsc4Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc1ToOsc4Amp: new Nexus.Dial('#osc1ToOsc4Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc1ToOut: new Nexus.Dial('#osc1ToOut', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // gain 0 és silenci
        'max': 1, // gain 1 és volum inicial
        'step': 0,
        'value': 0
    }),
    dialOsc1ToRev: new Nexus.Dial('#osc1ToRev', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -96, // en dB ?
        'max': -18, // en dB ?
        'step': 0,
        'value': qm.engine.modulators.mergeOsc1ToReverbAmt.gain.value
    }),
    //*************M.MODULACIÓ OSC2************
    dialOsc2ToOsc1Freq: new Nexus.Dial('#osc2ToOsc1Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc2ToOsc1Amp: new Nexus.Dial('#osc2ToOsc1Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc2ToOsc2Freq: new Nexus.Dial('#osc2ToOsc2Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc2ToOsc2Amp: new Nexus.Dial('#osc2ToOsc2Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc2ToOsc3Freq: new Nexus.Dial('#osc2ToOsc3Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc2ToOsc3Amp: new Nexus.Dial('#osc2ToOsc3Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc2ToOsc4Freq: new Nexus.Dial('#osc2ToOsc4Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc2ToOsc4Amp: new Nexus.Dial('#osc2ToOsc4Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc2ToOut: new Nexus.Dial('#osc2ToOut', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // gain 0 és silenci
        'max': 1, // gain 1 és volum inicial
        'step': 0,
        'value': 0
    }),
    dialOsc2ToRev: new Nexus.Dial('#osc2ToRev', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -96, // en dB ?
        'max': -18, // en dB ?
        'step': 0,
        'value': qm.engine.modulators.mergeOsc2ToReverbAmt.gain.value
    }),
    //*************M.MODULACIÓ OSC3************
    dialOsc3ToOsc1Freq: new Nexus.Dial('#osc3ToOsc1Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc3ToOsc1Amp: new Nexus.Dial('#osc3ToOsc1Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc3ToOsc2Freq: new Nexus.Dial('#osc3ToOsc2Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc3ToOsc2Amp: new Nexus.Dial('#osc3ToOsc2Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc3ToOsc3Freq: new Nexus.Dial('#osc3ToOsc3Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc3ToOsc3Amp: new Nexus.Dial('#osc3ToOsc3Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc3ToOsc4Freq: new Nexus.Dial('#osc3ToOsc4Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc3ToOsc4Amp: new Nexus.Dial('#osc3ToOsc4Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc3ToOut: new Nexus.Dial('#osc3ToOut', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // gain 0 és silenci
        'max': 1, // gain 1 és volum inicial
        'step': 0,
        'value': 0
    }),
    dialOsc3ToRev: new Nexus.Dial('#osc3ToRev', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -96, // en dB ?
        'max': -18, // en dB ?
        'step': 0,
        'value': qm.engine.modulators.mergeOsc2ToReverbAmt.gain.value
    }),
    //*************M.MODULACIÓ OSC4************
    dialOsc4ToOsc1Freq: new Nexus.Dial('#osc4ToOsc1Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc4ToOsc1Amp: new Nexus.Dial('#osc4ToOsc1Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc4ToOsc2Freq: new Nexus.Dial('#osc4ToOsc2Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc4ToOsc2Amp: new Nexus.Dial('#osc4ToOsc2Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc4ToOsc3Freq: new Nexus.Dial('#osc4ToOsc3Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc4ToOsc3Amp: new Nexus.Dial('#osc4ToOsc3Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc4ToOsc4Freq: new Nexus.Dial('#osc4ToOsc4Freq', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 20,
        'max': 80,
        'step': 0,
        'value': 20
    }),
    dialOsc4ToOsc4Amp: new Nexus.Dial('#osc4ToOsc4Amp', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -36,
        'max': 0,
        'step': 0,
        'value': -36
    }),
    dialOsc4ToOut: new Nexus.Dial('#osc4ToOut', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0, // gain 0 és silenci
        'max': 1, // gain 1 és volum inicial
        'step': 0,
        'value': 0
    }),
    dialOsc4ToRev: new Nexus.Dial('#osc4ToRev', {
        'size': [40, 40],
        'interaction': 'vertical', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': -96, // en dB ?
        'max': -18, // en dB ?
        'step': 0,
        'value': qm.engine.modulators.mergeOsc2ToReverbAmt.gain.value
    })
}

qm.ui.e.selects = {
    //**************OSCIL·LADOR 1****************
    selectOsc1Wave: new Nexus.Select('#osc1Wave', {
        'size': [80, 30],
        'options': ['sine', 'triangle3', 'triangle5', 'triangle7', 'triangle', 'square3', 'square5', 'square103', 'square', 'sawtooth2', 'sawtooth3', 'sawtooth4', 'sawtooth']
    }),
    selectOsc1XyType: new Nexus.Select('#osc1XyType', {
        'size': [50, 30],
        'options': ['xy', 'x', 'y']
    }),
    //**************OSCIL·LADOR 2****************
    selectOsc2Wave: new Nexus.Select('#osc2Wave', {
        'size': [80, 30],
        'options': ['sine', 'triangle3', 'triangle5', 'triangle7', 'triangle', 'square3', 'square5', 'square103', 'square', 'sawtooth2', 'sawtooth3', 'sawtooth4', 'sawtooth']
    }),
    selectOsc2XyType: new Nexus.Select('#osc2XyType', {
        'size': [50, 30],
        'options': ['xy', 'x', 'y']
    }),
    //**************OSCIL·LADOR 3****************
    selectOsc3Wave: new Nexus.Select('#osc3Wave', {
        'size': [80, 30],
        'options': ['sine', 'triangle3', 'triangle5', 'triangle7', 'triangle', 'square3', 'square5', 'square103', 'square', 'sawtooth2', 'sawtooth3', 'sawtooth4', 'sawtooth']
    }),
    selectOsc3XyType: new Nexus.Select('#osc3XyType', {
        'size': [50, 30],
        'options': ['xy', 'x', 'y']
    }),
    //**************OSCIL·LADOR 4****************
    selectOsc4Wave: new Nexus.Select('#osc4Wave', {
        'size': [80, 30],
        'options': ['sine', 'triangle3', 'triangle5', 'triangle7', 'triangle', 'square3', 'square5', 'square103', 'square', 'sawtooth2', 'sawtooth3', 'sawtooth4', 'sawtooth']
    }),
    selectOsc4XyType: new Nexus.Select('#osc4XyType', {
        'size': [50, 30],
        'options': ['xy', 'x', 'y']
    })
}

qm.ui.e.toggles = {
    //**************OSCIL·LADOR 1****************
    toggleOsc1Parity: new Nexus.Toggle('#osc1Parity', {
        'size': [40, 20],
        'state': false
    }),
    //**************OSCIL·LADOR 2****************
    toggleOsc2Parity: new Nexus.Toggle('#osc2Parity', {
        'size': [40, 20],
        'state': false
    }),
    //**************OSCIL·LADOR 3****************
    toggleOsc3Parity: new Nexus.Toggle('#osc3Parity', {
        'size': [40, 20],
        'state': false
    }),
    //**************OSCIL·LADOR 4****************
    toggleOsc4Parity: new Nexus.Toggle('#osc4Parity', {
        'size': [40, 20],
        'state': false
    })
}

qm.ui.assignaValorFreq = function(dialOscOct, dialOscSemi, dialOscCents, osca, oscb) {
    var frequenciaOscillador = Nexus.octave(dialOscOct.value - 6) * Nexus.note(dialOscSemi.value) * Math.pow(Math.pow(2, 1 / 12), dialOscCents.value);
    var temps = Tone.now() + 0.05; // per fer coincicir en el temps els canvis i mantenir la coherència de fase
    osca.frequency.setValueAtTime(frequenciaOscillador, temps);
    oscb.frequency.setValueAtTime(frequenciaOscillador, temps);
}

qm.ui.assignaOrdre = function(dialOscOrder, toggleOscParity, chebyOscA, chebyOscB) {
    var ordre = dialOscOrder.value + (toggleOscParity.state ? 1 : 0);
    chebyOscA.order = ordre;
    chebyOscB.order = ordre;
}

qm.ui.assignaXyType = function(v, oscA, oscB) {
    if (v.value == "xy") {
        oscA.volume.linearRampToValueAtTime(-6, Tone.now() + 0.06);
        oscB.volume.linearRampToValueAtTime(-6, Tone.now() + 0.06);
    } else if (v.value == "x") {
        oscA.volume.linearRampToValueAtTime(-Infinity, Tone.now() + 0.06);
        oscB.volume.linearRampToValueAtTime(-6, Tone.now() + 0.06);
    } else if (v.value == "y") {
        oscA.volume.linearRampToValueAtTime(-6, Tone.now() + 0.06);
        oscB.volume.linearRampToValueAtTime(-Infinity, Tone.now() + 0.06);
    }
};

qm.ui.assignaIndex = function(v, chebyOscA, chebyOscB) {
    chebyOscA.input.gain.linearRampToValueAtTime(v, Tone.now() + 0.05);
    chebyOscB.input.gain.linearRampToValueAtTime(v, Tone.now() + 0.05);
    chebyOscA.output.gain.linearRampToValueAtTime(1 / v, Tone.now() + 0.05);
    chebyOscB.output.gain.linearRampToValueAtTime(1 / v, Tone.now() + 0.05);
};

qm.ui.assignaModAmt = function(osc, th, v) {
    if (v == th) {
        osc.gain.value = -Infinity;
    } else {
        osc.gain.value = v;
    }
};

qm.ui.changes = {
    // Executa els canvis dels paràmetres de l'engine d'àudio
    // Oscil·lador 1
    dialOsc1OctSemiCents: function(v, dial) {
        if(dial) dial.value = v; // Quan la funció la crida el Nexus (amb el binding que hem fet) només rep la v ja que el dial canvia de posició per ell mateix (l'hem canviat amb el ratolí). En canvi, quan carregam un preset, sí que li passam el dial, ja que li hem de posar el valor que toca perquè no l'hem mogut amb el ratolí. Tot això s'ha de fer per evitar un bucle infinit de que si assignam v quan movem amb el ratolí, Nexus torna a cridar al listener, i això crea una cridada recursiva.
        qm.ui.assignaValorFreq(
            qm.ui.e.dials.dialOsc1Oct,
            qm.ui.e.dials.dialOsc1Semi,
            qm.ui.e.dials.dialOsc1Cents,
            qm.engine.nodes.osc1a,
            qm.engine.nodes.osc1b);
    },
    selectOsc1Wave: function(v) {
        qm.engine.nodes.osc1a.type = v.value;
        qm.engine.nodes.osc1b.type = v.value;
    },
    selectOsc1XyType: function(v) {
        qm.ui.assignaXyType(
            v,
            qm.engine.nodes.osc1a,
            qm.engine.nodes.osc1b
        );
    },
    dialOrdre1: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaOrdre(
            qm.ui.e.dials.dialOsc1Order,
            qm.ui.e.toggles.toggleOsc1Parity,
            qm.engine.nodes.chebyOsc1a,
            qm.engine.nodes.chebyOsc1b
        );
    },
    dialIndex1: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaIndex(
            v,
            qm.engine.nodes.chebyOsc1a,
            qm.engine.nodes.chebyOsc1b
        )
    },
    // Oscil·lador 2
    dialOsc2OctSemiCents: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaValorFreq(
            qm.ui.e.dials.dialOsc2Oct,
            qm.ui.e.dials.dialOsc2Semi,
            qm.ui.e.dials.dialOsc2Cents,
            qm.engine.nodes.osc2a,
            qm.engine.nodes.osc2b);
    },
    selectOsc2Wave: function(v) {
        qm.engine.nodes.osc2a.type = v.value;
        qm.engine.nodes.osc2b.type = v.value;
    },
    selectOsc2XyType: function(v) {
        qm.ui.assignaXyType(
            v,
            qm.engine.nodes.osc2a,
            qm.engine.nodes.osc2b
        );
    },
    dialOrdre2: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaOrdre(
            qm.ui.e.dials.dialOsc2Order,
            qm.ui.e.toggles.toggleOsc2Parity,
            qm.engine.nodes.chebyOsc2a,
            qm.engine.nodes.chebyOsc2b
        );
    },
    dialIndex2: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaIndex(
            v,
            qm.engine.nodes.chebyOsc2a,
            qm.engine.nodes.chebyOsc2b
        )
    },
    // Oscil·lador 3
    dialOsc3OctSemiCents: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaValorFreq(
            qm.ui.e.dials.dialOsc3Oct,
            qm.ui.e.dials.dialOsc3Semi,
            qm.ui.e.dials.dialOsc3Cents,
            qm.engine.nodes.osc3a,
            qm.engine.nodes.osc3b);
    },
    selectOsc3Wave: function(v) {
        qm.engine.nodes.osc3a.type = v.value;
        qm.engine.nodes.osc3b.type = v.value;
    },
    selectOsc3XyType: function(v) {
        qm.ui.assignaXyType(
            v,
            qm.engine.nodes.osc3a,
            qm.engine.nodes.osc3b
        );
    },
    dialOrdre3: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaOrdre(
            qm.ui.e.dials.dialOsc3Order,
            qm.ui.e.toggles.toggleOsc3Parity,
            qm.engine.nodes.chebyOsc3a,
            qm.engine.nodes.chebyOsc3b
        );
    },
    dialIndex3: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaIndex(
            v,
            qm.engine.nodes.chebyOsc3a,
            qm.engine.nodes.chebyOsc3b
        )
    },
    // Oscil·lador 4
    dialOsc4OctSemiCents: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaValorFreq(
            qm.ui.e.dials.dialOsc4Oct,
            qm.ui.e.dials.dialOsc4Semi,
            qm.ui.e.dials.dialOsc4Cents,
            qm.engine.nodes.osc4a,
            qm.engine.nodes.osc4b);
    },
    selectOsc4Wave: function(v) {
        qm.engine.nodes.osc4a.type = v.value;
        qm.engine.nodes.osc4b.type = v.value;
    },
    selectOsc4XyType: function(v) {
        qm.ui.assignaXyType(
            v,
            qm.engine.nodes.osc4a,
            qm.engine.nodes.osc4b
        );
    },
    dialOrdre4: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaOrdre(
            qm.ui.e.dials.dialOsc4Order,
            qm.ui.e.toggles.toggleOsc4Parity,
            qm.engine.nodes.chebyOsc4a,
            qm.engine.nodes.chebyOsc4b
        );
    },
    dialIndex4: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaIndex(
            v,
            qm.engine.nodes.chebyOsc4a,
            qm.engine.nodes.chebyOsc4b
        )
    },

    // Matriu de Modulació
    dialOsc1ToOsc1FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc1FMamt, 20, v);
    },
    dialOsc1ToOsc1AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc1AMamt, -36, v);
    },
    dialOsc1ToOsc2FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc2FMamt, 20, v);
    },
    dialOsc1ToOsc2AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc2AMamt, -36, v);
    },
    dialOsc1ToOsc3FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc3FMamt, 20, v);
    },
    dialOsc1ToOsc3AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc3AMamt, -36, v);
    },
    dialOsc1ToOsc4FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc4FMamt, 20, v);
    },
    dialOsc1ToOsc4AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc1ToOsc4AMamt, -36, v);
    },
    dialOsc1ToOut: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.nodes.mergeOsc1.left.gain.value = v;
        qm.engine.nodes.mergeOsc1.right.gain.value = v;
    },
    dialOsc1ToRev: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.modulators.mergeOsc1ToReverbAmt.gain.value = v;
    },
    dialOsc2ToOsc1FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc1FMamt, 20, v);
    },
    dialOsc2ToOsc1AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc1AMamt, -36, v);
    },
    dialOsc2ToOsc2FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc2FMamt, 20, v);
    },
    dialOsc2ToOsc2AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc2AMamt, -36, v);
    },
    dialOsc2ToOsc3FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc3FMamt, 20, v);
    },
    dialOsc2ToOsc3AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc3AMamt, -36, v);
    },
    dialOsc2ToOsc4FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc4FMamt, 20, v);
    },
    dialOsc2ToOsc4AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc2ToOsc4AMamt, -36, v);
    },
    dialOsc2ToOut: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.nodes.mergeOsc2.left.gain.value = v;
        qm.engine.nodes.mergeOsc2.right.gain.value = v;
    },
    dialOsc2ToRev: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.modulators.mergeOsc2ToReverbAmt.gain.value = v;
    },
    dialOsc3ToOsc1FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc1FMamt, 20, v);
    },
    dialOsc3ToOsc1AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc1AMamt, -36, v);
    },
    dialOsc3ToOsc2FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc2FMamt, 20, v);
    },
    dialOsc3ToOsc2AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc2AMamt, -36, v);
    },
    dialOsc3ToOsc3FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc3FMamt, 20, v);
    },
    dialOsc3ToOsc3AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc3AMamt, -36, v);
    },
    dialOsc3ToOsc4FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc4FMamt, 20, v);
    },
    dialOsc3ToOsc4AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc3ToOsc4AMamt, -36, v);
    },
    dialOsc3ToOut: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.nodes.mergeOsc3.left.gain.value = v;
        qm.engine.nodes.mergeOsc3.right.gain.value = v;
    },
    dialOsc3ToRev: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.modulators.mergeOsc3ToReverbAmt.gain.value = v;
    },
    dialOsc4ToOsc1FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc1FMamt, 20, v);
    },
    dialOsc4ToOsc1AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc1AMamt, -36, v);
    },
    dialOsc4ToOsc2FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc2FMamt, 20, v);
    },
    dialOsc4ToOsc2AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc2AMamt, -36, v);
    },
    dialOsc4ToOsc3FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc3FMamt, 20, v);
    },
    dialOsc4ToOsc3AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc3AMamt, -36, v);
    },
    dialOsc4ToOsc4FM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc4FMamt, 20, v);
    },
    dialOsc4ToOsc4AM: function(v, dial) {
        if(dial) dial.value = v;
        qm.ui.assignaModAmt(qm.engine.modulators.osc4ToOsc4AMamt, -36, v);
    },
    dialOsc4ToOut: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.nodes.mergeOsc4.left.gain.value = v;
        qm.engine.nodes.mergeOsc4.right.gain.value = v;
    },
    dialOsc4ToRev: function(v, dial) {
        if(dial) dial.value = v;
        qm.engine.modulators.mergeOsc4ToReverbAmt.gain.value = v;
    }
};

qm.ui.binds = function () { // Enllaça els events de la GUI amb funcions que modifiquen valors de l'engine

    //**************OSCIL·LADOR 1****************
    qm.ui.e.dials.dialOsc1Oct.on('change', qm.ui.changes.dialOsc1OctSemiCents);
    qm.ui.e.dials.dialOsc1Semi.on('change', qm.ui.changes.dialOsc1OctSemiCents);
    qm.ui.e.dials.dialOsc1Cents.on('change', qm.ui.changes.dialOsc1OctSemiCents);
    qm.ui.e.selects.selectOsc1Wave.on('change', qm.ui.changes.selectOsc1Wave);
    qm.ui.e.selects.selectOsc1XyType.on('change', qm.ui.changes.selectOsc1XyType);
    qm.ui.e.dials.dialOsc1Order.on('change', qm.ui.changes.dialOrdre1);
    qm.ui.e.dials.dialOsc1Index.on('change', qm.ui.changes.dialIndex1);
    qm.ui.e.toggles.toggleOsc1Parity.on('change', qm.ui.changes.dialOrdre1);

    //**************OSCIL·LADOR 2****************
    qm.ui.e.dials.dialOsc2Oct.on('change', qm.ui.changes.dialOsc2OctSemiCents);
    qm.ui.e.dials.dialOsc2Semi.on('change', qm.ui.changes.dialOsc2OctSemiCents);
    qm.ui.e.dials.dialOsc2Cents.on('change', qm.ui.changes.dialOsc2OctSemiCents);
    qm.ui.e.selects.selectOsc2Wave.on('change', qm.ui.changes.selectOsc2Wave);
    qm.ui.e.selects.selectOsc2XyType.on('change', qm.ui.changes.selectOsc2XyType);
    qm.ui.e.dials.dialOsc2Order.on('change', qm.ui.changes.dialOrdre2);
    qm.ui.e.dials.dialOsc2Index.on('change', qm.ui.changes.dialIndex2);
    qm.ui.e.toggles.toggleOsc2Parity.on('change', qm.ui.changes.dialOrdre2);

    //**************OSCIL·LADOR 3****************
    qm.ui.e.dials.dialOsc3Oct.on('change', qm.ui.changes.dialOsc3OctSemiCents);
    qm.ui.e.dials.dialOsc3Semi.on('change', qm.ui.changes.dialOsc3OctSemiCents);
    qm.ui.e.dials.dialOsc3Cents.on('change', qm.ui.changes.dialOsc3OctSemiCents);
    qm.ui.e.selects.selectOsc3Wave.on('change', qm.ui.changes.selectOsc3Wave);
    qm.ui.e.selects.selectOsc3XyType.on('change', qm.ui.changes.selectOsc3XyType);
    qm.ui.e.dials.dialOsc3Order.on('change', qm.ui.changes.dialOrdre3);
    qm.ui.e.dials.dialOsc3Index.on('change', qm.ui.changes.dialIndex3);
    qm.ui.e.toggles.toggleOsc3Parity.on('change', qm.ui.changes.dialOrdre3);

    //**************OSCIL·LADOR 4****************
    qm.ui.e.dials.dialOsc4Oct.on('change', qm.ui.changes.dialOsc4OctSemiCents);
    qm.ui.e.dials.dialOsc4Semi.on('change', qm.ui.changes.dialOsc4OctSemiCents);
    qm.ui.e.dials.dialOsc4Cents.on('change', qm.ui.changes.dialOsc4OctSemiCents);
    qm.ui.e.selects.selectOsc4Wave.on('change', qm.ui.changes.selectOsc4Wave);
    qm.ui.e.selects.selectOsc4XyType.on('change', qm.ui.changes.selectOsc4XyType);
    qm.ui.e.dials.dialOsc4Order.on('change', qm.ui.changes.dialOrdre4);
    qm.ui.e.dials.dialOsc4Index.on('change', qm.ui.changes.dialIndex4);
    qm.ui.e.toggles.toggleOsc4Parity.on('change', qm.ui.changes.dialOrdre4);

    //*************M.MODULACIÓ OSC1************
    qm.ui.e.dials.dialOsc1ToOsc1Freq.on('change', qm.ui.changes.dialOsc1ToOsc1FM);
    qm.ui.e.dials.dialOsc1ToOsc1Amp.on('change', qm.ui.changes.dialOsc1ToOsc1AM);
    qm.ui.e.dials.dialOsc1ToOsc2Freq.on('change', qm.ui.changes.dialOsc1ToOsc2FM);
    qm.ui.e.dials.dialOsc1ToOsc2Amp.on('change', qm.ui.changes.dialOsc1ToOsc2AM);
    qm.ui.e.dials.dialOsc1ToOsc3Freq.on('change', qm.ui.changes.dialOsc1ToOsc3FM);
    qm.ui.e.dials.dialOsc1ToOsc3Amp.on('change', qm.ui.changes.dialOsc1ToOsc3AM);
    qm.ui.e.dials.dialOsc1ToOsc4Freq.on('change', qm.ui.changes.dialOsc1ToOsc4FM);
    qm.ui.e.dials.dialOsc1ToOsc4Amp.on('change', qm.ui.changes.dialOsc1ToOsc4AM);
    qm.ui.e.dials.dialOsc1ToOut.on('change', qm.ui.changes.dialOsc1ToOut);
    qm.ui.e.dials.dialOsc1ToRev.on('change', qm.ui.changes.dialOsc1ToRev);

     //*************M.MODULACIÓ OSC2************
    qm.ui.e.dials.dialOsc2ToOsc1Freq.on('change', qm.ui.changes.dialOsc2ToOsc1FM);
    qm.ui.e.dials.dialOsc2ToOsc1Amp.on('change', qm.ui.changes.dialOsc2ToOsc1AM);
    qm.ui.e.dials.dialOsc2ToOsc2Freq.on('change', qm.ui.changes.dialOsc2ToOsc2FM);
    qm.ui.e.dials.dialOsc2ToOsc2Amp.on('change', qm.ui.changes.dialOsc2ToOsc2AM);
    qm.ui.e.dials.dialOsc2ToOsc3Freq.on('change', qm.ui.changes.dialOsc2ToOsc3FM);
    qm.ui.e.dials.dialOsc2ToOsc3Amp.on('change', qm.ui.changes.dialOsc2ToOsc3AM);
    qm.ui.e.dials.dialOsc2ToOsc4Freq.on('change', qm.ui.changes.dialOsc2ToOsc4FM);
    qm.ui.e.dials.dialOsc2ToOsc4Amp.on('change', qm.ui.changes.dialOsc2ToOsc4AM);
    qm.ui.e.dials.dialOsc2ToOut.on('change', qm.ui.changes.dialOsc2ToOut);
    qm.ui.e.dials.dialOsc2ToRev.on('change', qm.ui.changes.dialOsc2ToRev);

    //*************M.MODULACIÓ OSC3************
    qm.ui.e.dials.dialOsc3ToOsc1Freq.on('change', qm.ui.changes.dialOsc3ToOsc1FM);
    qm.ui.e.dials.dialOsc3ToOsc1Amp.on('change', qm.ui.changes.dialOsc3ToOsc1AM);
    qm.ui.e.dials.dialOsc3ToOsc2Freq.on('change', qm.ui.changes.dialOsc3ToOsc2FM);
    qm.ui.e.dials.dialOsc3ToOsc2Amp.on('change', qm.ui.changes.dialOsc3ToOsc2AM);
    qm.ui.e.dials.dialOsc3ToOsc3Freq.on('change', qm.ui.changes.dialOsc3ToOsc3FM);
    qm.ui.e.dials.dialOsc3ToOsc3Amp.on('change', qm.ui.changes.dialOsc3ToOsc3AM);
    qm.ui.e.dials.dialOsc3ToOsc4Freq.on('change', qm.ui.changes.dialOsc3ToOsc4FM);
    qm.ui.e.dials.dialOsc3ToOsc4Amp.on('change', qm.ui.changes.dialOsc3ToOsc4AM);
    qm.ui.e.dials.dialOsc3ToOut.on('change', qm.ui.changes.dialOsc3ToOut);
    qm.ui.e.dials.dialOsc3ToRev.on('change', qm.ui.changes.dialOsc3ToRev);

    //*************M.MODULACIÓ OSC4************
    qm.ui.e.dials.dialOsc4ToOsc1Freq.on('change', qm.ui.changes.dialOsc4ToOsc1FM);
    qm.ui.e.dials.dialOsc4ToOsc1Amp.on('change', qm.ui.changes.dialOsc4ToOsc1AM);
    qm.ui.e.dials.dialOsc4ToOsc2Freq.on('change', qm.ui.changes.dialOsc4ToOsc2FM);
    qm.ui.e.dials.dialOsc4ToOsc2Amp.on('change', qm.ui.changes.dialOsc4ToOsc2AM);
    qm.ui.e.dials.dialOsc4ToOsc3Freq.on('change', qm.ui.changes.dialOsc4ToOsc3FM);
    qm.ui.e.dials.dialOsc4ToOsc3Amp.on('change', qm.ui.changes.dialOsc4ToOsc3AM);
    qm.ui.e.dials.dialOsc4ToOsc4Freq.on('change', qm.ui.changes.dialOsc4ToOsc4FM);
    qm.ui.e.dials.dialOsc4ToOsc4Amp.on('change', qm.ui.changes.dialOsc4ToOsc4AM);
    qm.ui.e.dials.dialOsc4ToOut.on('change', qm.ui.changes.dialOsc4ToOut);
    qm.ui.e.dials.dialOsc4ToRev.on('change', qm.ui.changes.dialOsc4ToRev);
};

qm.ui.init = function () { // Assegura l'assignació inicial dels binds i dels valors inicials de freqüència
    qm.ui.binds();
    // Assignació valor inicial
    qm.ui.assignaValorFreq(
        qm.ui.e.dials.dialOsc1Oct,
        qm.ui.e.dials.dialOsc1Semi,
        qm.ui.e.dials.dialOsc1Cents,
        qm.engine.nodes.osc1a,
        qm.engine.nodes.osc1b);
    qm.ui.assignaValorFreq(
        qm.ui.e.dials.dialOsc2Oct,
        qm.ui.e.dials.dialOsc2Semi,
        qm.ui.e.dials.dialOsc2Cents,
        qm.engine.nodes.osc2a,
        qm.engine.nodes.osc2b);
    qm.ui.assignaValorFreq(
        qm.ui.e.dials.dialOsc3Oct,
        qm.ui.e.dials.dialOsc3Semi,
        qm.ui.e.dials.dialOsc3Cents,
        qm.engine.nodes.osc3a,
        qm.engine.nodes.osc3b);
    qm.ui.assignaValorFreq(
        qm.ui.e.dials.dialOsc4Oct,
        qm.ui.e.dials.dialOsc4Semi,
        qm.ui.e.dials.dialOsc4Cents,
        qm.engine.nodes.osc4a,
        qm.engine.nodes.osc4b);
};

