qm.engine = {};

qm.engine.masterLimiter = new Tone.Limiter(-36);
qm.engine.reverb = new Tone.Freeverb(0.9, 3000);
qm.engine.waveform = {
    l: new Tone.Analyser("waveform", 1024),
    r: new Tone.Analyser("waveform", 1024)
};

qm.engine.nodes = {
    //************* nodes osc1 ***********
    mergeOsc1: new Tone.Merge(),
    limiterAMOsc1: new Tone.Limiter(-24),
    chebyOsc1a: new Tone.Chebyshev(1),
    chebyOsc1b: new Tone.Chebyshev(1),
    osc1a: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    osc1b: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    //************* nodes osc2 ***********
    mergeOsc2: new Tone.Merge(),
    limiterAMOsc2: new Tone.Limiter(-24),
    chebyOsc2a: new Tone.Chebyshev(1),
    chebyOsc2b: new Tone.Chebyshev(1),
    osc2a: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    osc2b: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    //************* nodes osc3 ***********
    mergeOsc3: new Tone.Merge(),
    limiterAMOsc3: new Tone.Limiter(-24),
    chebyOsc3a: new Tone.Chebyshev(1),
    chebyOsc3b: new Tone.Chebyshev(1),
    osc3a: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    osc3b: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    //************* nodes osc4 ***********
    mergeOsc4: new Tone.Merge(),
    limiterAMOsc4: new Tone.Limiter(-24),
    chebyOsc4a: new Tone.Chebyshev(1),
    chebyOsc4b: new Tone.Chebyshev(1),
    osc4a: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
    osc4b: new Tone.Oscillator({
        "type": "sine", // forma d'ona inicial
        "volume": "-6", // unitats dB en creació
        "frequency": 100 // unitats Hz
    }),
};

qm.engine.modulators = {
    //************modulators osc1 *********
    mergeOsc1ToReverbAmt: qm.engine.nodes.mergeOsc1.send("reverbChan", -96),
    osc1ToOsc1AMamt: qm.engine.nodes.osc1a.send("osc1AmpChan", -Infinity),
    osc1ToOsc1FMamt: qm.engine.nodes.osc1a.send("osc1FreqChan", -Infinity),
    osc1ToOsc2AMamt: qm.engine.nodes.osc1a.send("osc2AmpChan", -Infinity),
    osc1ToOsc2FMamt: qm.engine.nodes.osc1a.send("osc2FreqChan", -Infinity),
    osc1ToOsc3AMamt: qm.engine.nodes.osc1a.send("osc3AmpChan", -Infinity),
    osc1ToOsc3FMamt: qm.engine.nodes.osc1a.send("osc3FreqChan", -Infinity),
    osc1ToOsc4AMamt: qm.engine.nodes.osc1a.send("osc4AmpChan", -Infinity),
    osc1ToOsc4FMamt: qm.engine.nodes.osc1a.send("osc4FreqChan", -Infinity),
    //************modulators osc2 *********
    mergeOsc2ToReverbAmt: qm.engine.nodes.mergeOsc2.send("reverbChan", -96),
    osc2ToOsc1AMamt: qm.engine.nodes.osc2a.send("osc1AmpChan", -Infinity),
    osc2ToOsc1FMamt: qm.engine.nodes.osc2a.send("osc1FreqChan", -Infinity),
    osc2ToOsc2AMamt: qm.engine.nodes.osc2a.send("osc2AmpChan", -Infinity),
    osc2ToOsc2FMamt: qm.engine.nodes.osc2a.send("osc2FreqChan", -Infinity),
    osc2ToOsc3AMamt: qm.engine.nodes.osc2a.send("osc3AmpChan", -Infinity),
    osc2ToOsc3FMamt: qm.engine.nodes.osc2a.send("osc3FreqChan", -Infinity),
    osc2ToOsc4AMamt: qm.engine.nodes.osc2a.send("osc4AmpChan", -Infinity),
    osc2ToOsc4FMamt: qm.engine.nodes.osc2a.send("osc4FreqChan", -Infinity),
    //************modulators osc3 *********
    mergeOsc3ToReverbAmt: qm.engine.nodes.mergeOsc3.send("reverbChan", -96),
    osc3ToOsc1AMamt: qm.engine.nodes.osc3a.send("osc1AmpChan", -Infinity),
    osc3ToOsc1FMamt: qm.engine.nodes.osc3a.send("osc1FreqChan", -Infinity),
    osc3ToOsc2AMamt: qm.engine.nodes.osc3a.send("osc2AmpChan", -Infinity),
    osc3ToOsc2FMamt: qm.engine.nodes.osc3a.send("osc2FreqChan", -Infinity),
    osc3ToOsc3AMamt: qm.engine.nodes.osc3a.send("osc3AmpChan", -Infinity),
    osc3ToOsc3FMamt: qm.engine.nodes.osc3a.send("osc3FreqChan", -Infinity),
    osc3ToOsc4AMamt: qm.engine.nodes.osc3a.send("osc4AmpChan", -Infinity),
    osc3ToOsc4FMamt: qm.engine.nodes.osc3a.send("osc4FreqChan", -Infinity),
    //************modulators osc4 *********
    mergeOsc4ToReverbAmt: qm.engine.nodes.mergeOsc4.send("reverbChan", -96),
    osc4ToOsc1AMamt: qm.engine.nodes.osc4a.send("osc1AmpChan", -Infinity),
    osc4ToOsc1FMamt: qm.engine.nodes.osc4a.send("osc1FreqChan", -Infinity),
    osc4ToOsc2AMamt: qm.engine.nodes.osc4a.send("osc2AmpChan", -Infinity),
    osc4ToOsc2FMamt: qm.engine.nodes.osc4a.send("osc2FreqChan", -Infinity),
    osc4ToOsc3AMamt: qm.engine.nodes.osc4a.send("osc3AmpChan", -Infinity),
    osc4ToOsc3FMamt: qm.engine.nodes.osc4a.send("osc3FreqChan", -Infinity),
    osc4ToOsc4AMamt: qm.engine.nodes.osc4a.send("osc4AmpChan", -Infinity),
    osc4ToOsc4FMamt: qm.engine.nodes.osc4a.send("osc4FreqChan", -Infinity),
};

qm.engine.connect = function () {
    qm.engine.masterLimiter.toMaster();
    qm.engine.reverb.connect(qm.engine.masterLimiter);
    //************connects osc1 *********
    qm.engine.nodes.mergeOsc1.connect(qm.engine.masterLimiter);
    //************connects osc2 *********
    qm.engine.nodes.mergeOsc2.connect(qm.engine.masterLimiter);
    //************connects osc3 *********
    qm.engine.nodes.mergeOsc3.connect(qm.engine.masterLimiter);
    //************connects osc4 *********
    qm.engine.nodes.mergeOsc4.connect(qm.engine.masterLimiter);
};

qm.engine.chain = function () {
    //************chains osc1 *********
    qm.engine.nodes.osc1a.chain(
        qm.engine.nodes.chebyOsc1a,
        qm.engine.nodes.mergeOsc1.left,
        qm.engine.waveform.l
    );
    qm.engine.nodes.osc1b.chain(
        qm.engine.nodes.chebyOsc1b,
        qm.engine.nodes.mergeOsc1.right,
        qm.engine.waveform.r
    );
    //************chains osc2 *********
    qm.engine.nodes.osc2a.chain(
        qm.engine.nodes.chebyOsc2a,
        qm.engine.nodes.mergeOsc2.left,
        qm.engine.waveform.l
    );
    qm.engine.nodes.osc2b.chain(
        qm.engine.nodes.chebyOsc2b,
        qm.engine.nodes.mergeOsc2.right,
        qm.engine.waveform.r
    );
    //************chains osc3 *********
    qm.engine.nodes.osc3a.chain(
        qm.engine.nodes.chebyOsc3a,
        qm.engine.nodes.mergeOsc3.left,
        qm.engine.waveform.l
    );
    qm.engine.nodes.osc3b.chain(
        qm.engine.nodes.chebyOsc3b,
        qm.engine.nodes.mergeOsc3.right,
        qm.engine.waveform.r
    );
    //************chains osc4 *********
    qm.engine.nodes.osc4a.chain(
        qm.engine.nodes.chebyOsc4a,
        qm.engine.nodes.mergeOsc4.left,
        qm.engine.waveform.l
    );
    qm.engine.nodes.osc4b.chain(
        qm.engine.nodes.chebyOsc4b,
        qm.engine.nodes.mergeOsc4.right,
        qm.engine.waveform.r
    );
};

qm.engine.busses = function () {
    qm.engine.reverb.receive("reverbChan");
    //************busses to osc1 *********
    qm.engine.nodes.osc1a.frequency.receive("osc1FreqChan");
    qm.engine.nodes.osc1b.frequency.receive("osc1FreqChan");
    qm.engine.nodes.limiterAMOsc1.receive("osc1AmpChan");
    //************busses to osc2 *********
    qm.engine.nodes.osc2a.frequency.receive("osc2FreqChan");
    qm.engine.nodes.osc2b.frequency.receive("osc2FreqChan");
    qm.engine.nodes.limiterAMOsc2.receive("osc2AmpChan");
    //************busses to osc3 *********
    qm.engine.nodes.osc3a.frequency.receive("osc3FreqChan");
    qm.engine.nodes.osc3b.frequency.receive("osc3FreqChan");
    qm.engine.nodes.limiterAMOsc3.receive("osc3AmpChan");
    //************busses to osc4 *********
    qm.engine.nodes.osc4a.frequency.receive("osc4FreqChan");
    qm.engine.nodes.osc4b.frequency.receive("osc4FreqChan");
    qm.engine.nodes.limiterAMOsc4.receive("osc4AmpChan");
};

qm.engine.fan = function () {
    //************fans osc1 *********
    qm.engine.nodes.limiterAMOsc1.fan(qm.engine.nodes.osc1a.volume, qm.engine.nodes.osc1b.volume);
    //************fans osc2 *********
    qm.engine.nodes.limiterAMOsc2.fan(qm.engine.nodes.osc2a.volume, qm.engine.nodes.osc2b.volume);
    //************fans osc3 *********
    qm.engine.nodes.limiterAMOsc3.fan(qm.engine.nodes.osc3a.volume, qm.engine.nodes.osc3b.volume);
    //************fans osc4 *********
    qm.engine.nodes.limiterAMOsc4.fan(qm.engine.nodes.osc4a.volume, qm.engine.nodes.osc4b.volume);
};

qm.engine.start = function () {
    var temps = Tone.now() + 0.05;
    //************start osc1 *********
    qm.engine.nodes.osc1a.start(temps);
    qm.engine.nodes.osc1b.start(temps);
    qm.engine.nodes.osc1b.phase = qm.engine.nodes.osc1a.phase + 90;
    qm.engine.nodes.mergeOsc1.left.gain.value = 0;
    qm.engine.nodes.mergeOsc1.right.gain.value = 0;
    //************start osc2 *********
    qm.engine.nodes.osc2a.start(temps);
    qm.engine.nodes.osc2b.start(temps);
    qm.engine.nodes.osc2b.phase = qm.engine.nodes.osc2a.phase + 90;
    qm.engine.nodes.mergeOsc2.left.gain.value = 0;
    qm.engine.nodes.mergeOsc2.right.gain.value = 0;
    //************start osc3 *********
    qm.engine.nodes.osc3a.start(temps);
    qm.engine.nodes.osc3b.start(temps);
    qm.engine.nodes.osc3b.phase = qm.engine.nodes.osc3a.phase + 90;
    qm.engine.nodes.mergeOsc3.left.gain.value = 0;
    qm.engine.nodes.mergeOsc3.right.gain.value = 0;
    //************start osc4 *********
    qm.engine.nodes.osc4a.start(temps);
    qm.engine.nodes.osc4b.start(temps);
    qm.engine.nodes.osc4b.phase = qm.engine.nodes.osc4a.phase + 90;
    qm.engine.nodes.mergeOsc4.left.gain.value = 0;
    qm.engine.nodes.mergeOsc4.right.gain.value = 0;
};

qm.engine.init = function () {
    StartAudioContext(Tone.context);

    Nexus.tune.createJIScale( // Escala justa
        8 / 15,
        9 / 16, // RE -1
        3 / 5,
        81 / 128, // MI -1
        2 / 3, // FA -1
        729 / 1024,
        3 / 4, // SOL -1
        4 / 5,
        27 / 32, // LA -1
        8 / 9,
        243 / 256, // SI -1
        1 / 1, // DO
        256 / 243,
        9 / 8, // RE
        32 / 27,
        5 / 4, // MI
        4 / 3, // FA
        1024 / 729,
        3 / 2, // SOL
        128 / 81,
        5 / 3, // LA
        16 / 9,
        15 / 8); //SI

    qm.engine.connect();
    qm.engine.chain();
    qm.engine.busses();
    qm.engine.fan();
    qm.engine.start();
};
