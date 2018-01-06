//    *************************************
//    SCRIPT VISUALITZADOR CORBES LISSAJOUS
//    *************************************

qm.vis = {};

qm.vis.canvas = document.getElementById('visuals');
qm.vis.contenidorVisuals = document.getElementById("contenidorvisuals");
qm.vis.contenidorGUI = document.getElementById("GUI");
qm.vis.canvasCtx = qm.vis.canvas.getContext('2d');
qm.vis.aspectRatio = null; // Es calcula a posteriori, a l'init

qm.vis.dibuixa = function() {
    var valuesL = qm.engine.waveform.l.analyse();
    var valuesR = qm.engine.waveform.r.analyse();
    qm.vis.canvasCtx.globalAlpha = 0.20;
    qm.vis.canvasCtx.fillRect(0, 0, qm.vis.canvas.width, qm.vis.canvas.height);
    qm.vis.canvasCtx.globalAlpha = 1;
    qm.vis.canvasCtx.beginPath();
    qm.vis.canvasCtx.lineJoin = "round";
    qm.vis.canvasCtx.lineWidth = 2;
    for (var i = 1, len = valuesL.length; i < len; i++) {
        var valy = valuesL[i] / 255;
        var valx = valuesR[i] / 255;
        var x = valx * qm.vis.canvas.width;
        var y = valy * qm.vis.canvas.height * qm.vis.aspectRatio + (qm.vis.canvas.height - qm.vis.canvas.width) / 2;
        qm.vis.canvasCtx.lineTo(x, y);
    }
    qm.vis.canvasCtx.stroke();
    requestAnimationFrame(qm.vis.dibuixa);
}

qm.vis.init = function() {
    qm.vis.contenidorVisuals.style.height = String(qm.vis.contenidorGUI.offsetHeight) + "px";
    qm.vis.canvas.width = qm.vis.contenidorVisuals.offsetWidth;
    qm.vis.canvas.height = qm.vis.contenidorVisuals.offsetHeight;
    qm.vis.canvasCtx.globalAlpha = 1;
    qm.vis.canvasCtx.strokeStyle = "hsl(120, 100%, 50%)";
    qm.vis.canvasCtx.fillStyle = "black";
    qm.vis.canvasCtx.clearRect(0, 0, qm.vis.canvas.width, qm.vis.canvas.height);
    qm.vis.aspectRatio = qm.vis.canvas.width / qm.vis.canvas.height;
    qm.vis.dibuixa();
}
