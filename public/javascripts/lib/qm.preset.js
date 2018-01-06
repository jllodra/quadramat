qm.preset = {};

// element select del DOM amb id #presets (a la pàgina principal)
qm.preset.prevButton = $('#prev');
qm.preset.nextButton = $('#next');
qm.preset.domSelect2 = $('#presets2');
qm.preset.domSaveButton = $('#saveButton');
qm.preset.domSaveAsButton = $('#saveAsButton');
qm.preset.domRenameButton = $('#renameButton');
qm.preset.domDeleteButton = $('#deleteButton');

// variables del mòdul preset
qm.preset.cursor = -1;
qm.preset.all = []; // json preset data amb el conjunt de presets

// init preset ID
qm.preset.initPresetId = "5a2fc1325135d3066f96f680";

qm.preset.setButtonStates = function(preset) {
    qm.preset.domSaveButton.hide();
    qm.preset.domRenameButton.hide();
    qm.preset.domDeleteButton.hide();
    if('email' in preset.autor && 'email' in window.sessionStorage) {
        if(preset.autor.email === window.sessionStorage.email) {
            qm.preset.domSaveButton.show();
            qm.preset.domRenameButton.show();
            qm.preset.domDeleteButton.show();
        }
    }
}

// Canvia de preset
qm.preset.changePreset = function(event) {
    var i;
    var _id = $(this).val();
    // Trobar el preset dins qm.preset.all
    var trobat = false;
    i = 0;
    while (!trobat) {
        if (qm.preset.all[i]._id == _id) {
            trobat = true;
        } else {
            i++;
        }
    }

    var preset = qm.preset.all[i];
    qm.preset.cursor = i;

    qm.preset.setButtonStates(preset);
    
    // Un cop trobat, cal canviar els paràmetres de la UI
    // *** Oscil·ladors ***
    // Osc 1
    qm.ui.changes.dialOsc1OctSemiCents(preset.osc1.oct, qm.ui.e.dials.dialOsc1Oct); // valor, dial a canviar
    qm.ui.changes.dialOsc1OctSemiCents(preset.osc1.semi, qm.ui.e.dials.dialOsc1Semi);
    qm.ui.changes.dialOsc1OctSemiCents(preset.osc1.cents, qm.ui.e.dials.dialOsc1Cents);
    qm.ui.e.selects.selectOsc1Wave.value = preset.osc1.wave;
    qm.ui.e.selects.selectOsc1XyType.value = preset.osc1.xy;
    qm.ui.changes.dialOrdre1(preset.osc1.order, qm.ui.e.dials.dialOsc1Order);
    qm.ui.changes.dialIndex1(preset.osc1.index, qm.ui.e.dials.dialOsc1Index);
    qm.ui.e.toggles.toggleOsc1Parity.state = preset.osc1.even;
    // Osc 2
    qm.ui.changes.dialOsc2OctSemiCents(preset.osc2.oct, qm.ui.e.dials.dialOsc2Oct); // valor, dial a canviar
    qm.ui.changes.dialOsc2OctSemiCents(preset.osc2.semi, qm.ui.e.dials.dialOsc2Semi);
    qm.ui.changes.dialOsc2OctSemiCents(preset.osc2.cents, qm.ui.e.dials.dialOsc2Cents);
    qm.ui.e.selects.selectOsc2Wave.value = preset.osc2.wave;
    qm.ui.e.selects.selectOsc2XyType.value = preset.osc2.xy;
    qm.ui.changes.dialOrdre2(preset.osc2.order, qm.ui.e.dials.dialOsc2Order);
    qm.ui.changes.dialIndex2(preset.osc2.index, qm.ui.e.dials.dialOsc2Index);
    qm.ui.e.toggles.toggleOsc2Parity.state = preset.osc2.even;
    // Osc 3
    qm.ui.changes.dialOsc3OctSemiCents(preset.osc3.oct, qm.ui.e.dials.dialOsc3Oct); // valor, dial a canviar
    qm.ui.changes.dialOsc3OctSemiCents(preset.osc3.semi, qm.ui.e.dials.dialOsc3Semi);
    qm.ui.changes.dialOsc3OctSemiCents(preset.osc3.cents, qm.ui.e.dials.dialOsc3Cents);
    qm.ui.e.selects.selectOsc3Wave.value = preset.osc3.wave;
    qm.ui.e.selects.selectOsc3XyType.value = preset.osc3.xy;
    qm.ui.changes.dialOrdre3(preset.osc3.order, qm.ui.e.dials.dialOsc3Order);
    qm.ui.changes.dialIndex3(preset.osc3.index, qm.ui.e.dials.dialOsc3Index);
    qm.ui.e.toggles.toggleOsc3Parity.state = preset.osc3.even;
    // Osc 4
    qm.ui.changes.dialOsc4OctSemiCents(preset.osc4.oct, qm.ui.e.dials.dialOsc4Oct); // valor, dial a canviar
    qm.ui.changes.dialOsc4OctSemiCents(preset.osc4.semi, qm.ui.e.dials.dialOsc4Semi);
    qm.ui.changes.dialOsc4OctSemiCents(preset.osc4.cents, qm.ui.e.dials.dialOsc4Cents);
    qm.ui.e.selects.selectOsc4Wave.value = preset.osc4.wave;
    qm.ui.e.selects.selectOsc4XyType.value = preset.osc4.xy;
    qm.ui.changes.dialOrdre4(preset.osc4.order, qm.ui.e.dials.dialOsc4Order);
    qm.ui.changes.dialIndex4(preset.osc4.index, qm.ui.e.dials.dialOsc4Index);
    qm.ui.e.toggles.toggleOsc4Parity.state = preset.osc4.even;
    // *** Matriu de Modulació ***
    // Mod Osc 1 cap a destinacions
    qm.ui.changes.dialOsc1ToOsc1FM(preset.modmatrix.osc1dest[0], qm.ui.e.dials.dialOsc1ToOsc1Freq);
    qm.ui.changes.dialOsc1ToOsc1AM(preset.modmatrix.osc1dest[1], qm.ui.e.dials.dialOsc1ToOsc1Amp);
    qm.ui.changes.dialOsc1ToOsc2FM(preset.modmatrix.osc1dest[2], qm.ui.e.dials.dialOsc1ToOsc2Freq);
    qm.ui.changes.dialOsc1ToOsc2AM(preset.modmatrix.osc1dest[3], qm.ui.e.dials.dialOsc1ToOsc2Amp);
    qm.ui.changes.dialOsc1ToOsc3FM(preset.modmatrix.osc1dest[4], qm.ui.e.dials.dialOsc1ToOsc3Freq);
    qm.ui.changes.dialOsc1ToOsc3AM(preset.modmatrix.osc1dest[5], qm.ui.e.dials.dialOsc1ToOsc3Amp);
    qm.ui.changes.dialOsc1ToOsc4FM(preset.modmatrix.osc1dest[6], qm.ui.e.dials.dialOsc1ToOsc4Freq);
    qm.ui.changes.dialOsc1ToOsc4AM(preset.modmatrix.osc1dest[7], qm.ui.e.dials.dialOsc1ToOsc4Amp);
    qm.ui.changes.dialOsc1ToOut(preset.modmatrix.osc1dest[8], qm.ui.e.dials.dialOsc1ToOut);
    qm.ui.changes.dialOsc1ToRev(preset.modmatrix.osc1dest[9], qm.ui.e.dials.dialOsc1ToRev);
    // Mod Osc 2 cap a destinacions
    qm.ui.changes.dialOsc2ToOsc1FM(preset.modmatrix.osc2dest[0], qm.ui.e.dials.dialOsc2ToOsc1Freq);
    qm.ui.changes.dialOsc2ToOsc1AM(preset.modmatrix.osc2dest[1], qm.ui.e.dials.dialOsc2ToOsc1Amp);
    qm.ui.changes.dialOsc2ToOsc2FM(preset.modmatrix.osc2dest[2], qm.ui.e.dials.dialOsc2ToOsc2Freq);
    qm.ui.changes.dialOsc2ToOsc2AM(preset.modmatrix.osc2dest[3], qm.ui.e.dials.dialOsc2ToOsc2Amp);
    qm.ui.changes.dialOsc2ToOsc3FM(preset.modmatrix.osc2dest[4], qm.ui.e.dials.dialOsc2ToOsc3Freq);
    qm.ui.changes.dialOsc2ToOsc3AM(preset.modmatrix.osc2dest[5], qm.ui.e.dials.dialOsc2ToOsc3Amp);
    qm.ui.changes.dialOsc2ToOsc4FM(preset.modmatrix.osc2dest[6], qm.ui.e.dials.dialOsc2ToOsc4Freq);
    qm.ui.changes.dialOsc2ToOsc4AM(preset.modmatrix.osc2dest[7], qm.ui.e.dials.dialOsc2ToOsc4Amp);
    qm.ui.changes.dialOsc2ToOut(preset.modmatrix.osc2dest[8], qm.ui.e.dials.dialOsc2ToOut);
    qm.ui.changes.dialOsc2ToRev(preset.modmatrix.osc2dest[9], qm.ui.e.dials.dialOsc2ToRev);
    // Mod Osc 3 cap a destinacions
    qm.ui.changes.dialOsc3ToOsc1FM(preset.modmatrix.osc3dest[0], qm.ui.e.dials.dialOsc3ToOsc1Freq);
    qm.ui.changes.dialOsc3ToOsc1AM(preset.modmatrix.osc3dest[1], qm.ui.e.dials.dialOsc3ToOsc1Amp);
    qm.ui.changes.dialOsc3ToOsc2FM(preset.modmatrix.osc3dest[2], qm.ui.e.dials.dialOsc3ToOsc2Freq);
    qm.ui.changes.dialOsc3ToOsc2AM(preset.modmatrix.osc3dest[3], qm.ui.e.dials.dialOsc3ToOsc2Amp);
    qm.ui.changes.dialOsc3ToOsc3FM(preset.modmatrix.osc3dest[4], qm.ui.e.dials.dialOsc3ToOsc3Freq);
    qm.ui.changes.dialOsc3ToOsc3AM(preset.modmatrix.osc3dest[5], qm.ui.e.dials.dialOsc3ToOsc3Amp);
    qm.ui.changes.dialOsc3ToOsc4FM(preset.modmatrix.osc3dest[6], qm.ui.e.dials.dialOsc3ToOsc4Freq);
    qm.ui.changes.dialOsc3ToOsc4AM(preset.modmatrix.osc3dest[7], qm.ui.e.dials.dialOsc3ToOsc4Amp);
    qm.ui.changes.dialOsc3ToOut(preset.modmatrix.osc3dest[8], qm.ui.e.dials.dialOsc3ToOut);
    qm.ui.changes.dialOsc3ToRev(preset.modmatrix.osc3dest[9], qm.ui.e.dials.dialOsc3ToRev);
    // Mod Osc 4 cap a destinacions
    qm.ui.changes.dialOsc4ToOsc1FM(preset.modmatrix.osc4dest[0], qm.ui.e.dials.dialOsc4ToOsc1Freq);
    qm.ui.changes.dialOsc4ToOsc1AM(preset.modmatrix.osc4dest[1], qm.ui.e.dials.dialOsc4ToOsc1Amp);
    qm.ui.changes.dialOsc4ToOsc2FM(preset.modmatrix.osc4dest[2], qm.ui.e.dials.dialOsc4ToOsc2Freq);
    qm.ui.changes.dialOsc4ToOsc2AM(preset.modmatrix.osc4dest[3], qm.ui.e.dials.dialOsc4ToOsc2Amp);
    qm.ui.changes.dialOsc4ToOsc3FM(preset.modmatrix.osc4dest[4], qm.ui.e.dials.dialOsc4ToOsc3Freq);
    qm.ui.changes.dialOsc4ToOsc3AM(preset.modmatrix.osc4dest[5], qm.ui.e.dials.dialOsc4ToOsc3Amp);
    qm.ui.changes.dialOsc4ToOsc4FM(preset.modmatrix.osc4dest[6], qm.ui.e.dials.dialOsc4ToOsc4Freq);
    qm.ui.changes.dialOsc4ToOsc4AM(preset.modmatrix.osc4dest[7], qm.ui.e.dials.dialOsc4ToOsc4Amp);
    qm.ui.changes.dialOsc4ToOut(preset.modmatrix.osc4dest[8], qm.ui.e.dials.dialOsc4ToOut);
    qm.ui.changes.dialOsc4ToRev(preset.modmatrix.osc4dest[9], qm.ui.e.dials.dialOsc4ToRev);
}

// Crea un objecte 'preset' en clicar sobre el botó Save
// si passem un nom vol dir que volem renombrar (“save as...”)
// si preserveID és true vol dir que volem fer Update (“save” o “rename”)
qm.preset.buildPresetObject = function(nom, preserveId) {
    var preset = {};
    preset.rating = 0;
    if(nom != null) { // volem fer un save as
        preset.nom = nom;
        preset.autor = {
            nom: window.sessionStorage.name,
            email: window.sessionStorage.email
        };
    }
    if(preserveId) { // volem fer un update (save o rename)
        preset._id = qm.preset.all[qm.preset.cursor]._id;
    }
    preset.categoria = "techno";
    preset.osc1 = {
        "oct": qm.ui.e.dials.dialOsc1Oct.value,
        "semi": qm.ui.e.dials.dialOsc1Semi.value,
        "cents": qm.ui.e.dials.dialOsc1Cents.value,
        "wave": qm.ui.e.selects.selectOsc1Wave.value,
        "xy": qm.ui.e.selects.selectOsc1XyType.value,
        "order": qm.ui.e.dials.dialOsc1Order.value,
        "even": qm.ui.e.toggles.toggleOsc1Parity.state,
        "index": qm.ui.e.dials.dialOsc1Index.value
    };
    preset.osc2 = {
        "oct": qm.ui.e.dials.dialOsc2Oct.value,
        "semi": qm.ui.e.dials.dialOsc2Semi.value,
        "cents": qm.ui.e.dials.dialOsc2Cents.value,
        "wave": qm.ui.e.selects.selectOsc2Wave.value,
        "xy": qm.ui.e.selects.selectOsc2XyType.value,
        "order": qm.ui.e.dials.dialOsc2Order.value,
        "even": qm.ui.e.toggles.toggleOsc2Parity.state,
        "index": qm.ui.e.dials.dialOsc2Index.value
    };
    preset.osc3 = {
        "oct": qm.ui.e.dials.dialOsc3Oct.value,
        "semi": qm.ui.e.dials.dialOsc3Semi.value,
        "cents": qm.ui.e.dials.dialOsc3Cents.value,
        "wave": qm.ui.e.selects.selectOsc3Wave.value,
        "xy": qm.ui.e.selects.selectOsc3XyType.value,
        "order": qm.ui.e.dials.dialOsc3Order.value,
        "even": qm.ui.e.toggles.toggleOsc3Parity.state,
        "index": qm.ui.e.dials.dialOsc3Index.value
    };
    preset.osc4 = {
        "oct": qm.ui.e.dials.dialOsc4Oct.value,
        "semi": qm.ui.e.dials.dialOsc4Semi.value,
        "cents": qm.ui.e.dials.dialOsc4Cents.value,
        "wave": qm.ui.e.selects.selectOsc4Wave.value,
        "xy": qm.ui.e.selects.selectOsc4XyType.value,
        "order": qm.ui.e.dials.dialOsc4Order.value,
        "even": qm.ui.e.toggles.toggleOsc4Parity.state,
        "index": qm.ui.e.dials.dialOsc4Index.value
    };
    preset.modmatrix = {};
    preset.modmatrix.osc1dest = [
        qm.ui.e.dials.dialOsc1ToOsc1Freq.value,
        qm.ui.e.dials.dialOsc1ToOsc1Amp.value,
        qm.ui.e.dials.dialOsc1ToOsc2Freq.value,
        qm.ui.e.dials.dialOsc1ToOsc2Amp.value,
        qm.ui.e.dials.dialOsc1ToOsc3Freq.value,
        qm.ui.e.dials.dialOsc1ToOsc3Amp.value,
        qm.ui.e.dials.dialOsc1ToOsc4Freq.value,
        qm.ui.e.dials.dialOsc1ToOsc4Amp.value,
        qm.ui.e.dials.dialOsc1ToOut.value,
        qm.ui.e.dials.dialOsc1ToRev.value
    ];
    preset.modmatrix.osc2dest = [
        qm.ui.e.dials.dialOsc2ToOsc1Freq.value,
        qm.ui.e.dials.dialOsc2ToOsc1Amp.value,
        qm.ui.e.dials.dialOsc2ToOsc2Freq.value,
        qm.ui.e.dials.dialOsc2ToOsc2Amp.value,
        qm.ui.e.dials.dialOsc2ToOsc3Freq.value,
        qm.ui.e.dials.dialOsc2ToOsc3Amp.value,
        qm.ui.e.dials.dialOsc2ToOsc4Freq.value,
        qm.ui.e.dials.dialOsc2ToOsc4Amp.value,
        qm.ui.e.dials.dialOsc2ToOut.value,
        qm.ui.e.dials.dialOsc2ToRev.value
    ];
    preset.modmatrix.osc3dest = [
        qm.ui.e.dials.dialOsc3ToOsc1Freq.value,
        qm.ui.e.dials.dialOsc3ToOsc1Amp.value,
        qm.ui.e.dials.dialOsc3ToOsc2Freq.value,
        qm.ui.e.dials.dialOsc3ToOsc2Amp.value,
        qm.ui.e.dials.dialOsc3ToOsc3Freq.value,
        qm.ui.e.dials.dialOsc3ToOsc3Amp.value,
        qm.ui.e.dials.dialOsc3ToOsc4Freq.value,
        qm.ui.e.dials.dialOsc3ToOsc4Amp.value,
        qm.ui.e.dials.dialOsc3ToOut.value,
        qm.ui.e.dials.dialOsc3ToRev.value
    ];
    preset.modmatrix.osc4dest = [
        qm.ui.e.dials.dialOsc4ToOsc1Freq.value,
        qm.ui.e.dials.dialOsc4ToOsc1Amp.value,
        qm.ui.e.dials.dialOsc4ToOsc2Freq.value,
        qm.ui.e.dials.dialOsc4ToOsc2Amp.value,
        qm.ui.e.dials.dialOsc4ToOsc3Freq.value,
        qm.ui.e.dials.dialOsc4ToOsc3Amp.value,
        qm.ui.e.dials.dialOsc4ToOsc4Freq.value,
        qm.ui.e.dials.dialOsc4ToOsc4Amp.value,
        qm.ui.e.dials.dialOsc4ToOut.value,
        qm.ui.e.dials.dialOsc4ToRev.value
    ];

    return preset;
};

// Obté l'id d'un preset a partir del seu nom i l'email del seu autor
qm.preset.getPresetIdByNameAndEmail = function(nom, email) {
    var trobat = false;
    var i = 0;
    var _id = null;
    while(!trobat && i < qm.preset.all.length) {
        var preset = qm.preset.all[i];
        if(preset.nom === nom && preset.autor.email === email) {
            trobat = true;
        }
        i++;
    }
    if(trobat) {
        _id = preset._id;
    }
    return _id;
}

// Crida la ruta preset/update via POST i actualitza preset existent amb valors actuals
qm.preset.savePreset = function(event) {
    var preset = qm.preset.buildPresetObject(null, true);
    
    $.ajax({
        url: 'preset/update',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(preset),
        success: function (data) {
            qm.preset.all = data;
        },
        error: function (err) {
            if('error' in err.responseJSON) {
                alert(err.responseJSON.error);
            } else {
                console.error(err);
            }
        }
    });
}

// Crida la ruta preset/save via POST enviant el nou preset
qm.preset.saveNewPreset = function(event) {
    var nom = prompt("Posa un nom al preset", "");
    var preset = qm.preset.buildPresetObject(nom, false);
    
    $.ajax({
        url: 'preset/save',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(preset),
        success: function (data) {
            qm.preset.all = data;
            qm.preset.refreshPresetSelector();
            var _id = qm.preset.getPresetIdByNameAndEmail(nom, preset.autor.email);
            qm.preset.domSelect2.val(_id);
            qm.preset.domSelect2.trigger('change');
        },
        error: function (err) {
            if('error' in err.responseJSON) {
                alert(err.responseJSON.error);
            } else {
                console.error(err);
            }
        }
    });
};

// Crida la ruta preset/update via POST i canvia el nom del preset
qm.preset.renamePreset = function(event) {
    var nom = prompt("Posa un nou nom al preset", qm.preset.all[qm.preset.cursor].nom);
    
    if(nom != null) {
        var preset = qm.preset.buildPresetObject(nom, true);
        $.ajax({
            url: 'preset/update',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(preset),
            success: function (data) {
                qm.preset.all = data;
                qm.preset.refreshPresetSelector();
                qm.preset.domSelect2.val(qm.preset.all[qm.preset.cursor]._id);
                qm.preset.domSelect2.trigger('change');
            },
            error: function (err) {
                if('error' in err.responseJSON) {
                    alert(err.responseJSON.error);
                } else {
                    console.error(err);
                }
            }
        });
    }
}

// Crida la ruta preset/delete via POST i elimina el preset de la base de dades
qm.preset.deletePreset = function(event) {
    var preset = {
        _id: qm.preset.all[qm.preset.cursor]._id,
        email: qm.preset.all[qm.preset.cursor].autor.email
    };
    
    $.ajax({
        url: 'preset/delete',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(preset),
        success: function (data) {
            qm.preset.all = data;
            qm.preset.refreshPresetSelector();
            qm.preset.domSelect2.val(qm.preset.initPresetId);
            qm.preset.domSelect2.trigger('change');
        },
        error: function (err) {
            if('error' in err.responseJSON) {
                alert(err.responseJSON.error);
            } else {
                console.error(err);
            }
        }
    });
}

// funció per refrescar l'element HTML 'select' a index.html amb la llista de presets
qm.preset.refreshPresetSelector = function() {
    // Un cop tenim el JSON dels presets, hem d'omplir el selector HTML
    var html = '<option value="" disabled selected></option>';
    var currentName = null;
    var oldName = null;
    for(var i = 0; i < qm.preset.all.length; i++) {
        currentName = qm.preset.all[i].autor.nom;
        if(currentName !== oldName) {
            if(oldName !== null) {
                html += '</optgroup>';
            }
            html += '<optgroup label="';
            html += qm.preset.all[i].autor.nom;
            html += '">';
        }
        html += '<option value="' + qm.preset.all[i]._id + '">' + qm.preset.all[i].nom + '</option>';
        oldName = currentName;
    }
    if(currentName !== null) {
        html += '</optgroup>';
    }

    qm.preset.domSelect2.html(html);
    qm.preset.domSelect2.select2( {
        placeholder: "Select a preset..."
    });
    
}

// funció per cridar la ruta preset/all via GET i obtenir la llista de presets
qm.preset.getPresets = function() {
    $.get('preset/all', function(data) {
        qm.preset.all = data;
        qm.preset.refreshPresetSelector();
    });
}

qm.preset.prevPreset = function() {
    var newCursor = qm.preset.cursor - 1;
    if(newCursor < 0) {
        newCursor = qm.preset.all.length - 1;
    }
    qm.preset.domSelect2.val(qm.preset.all[newCursor]._id);
    qm.preset.domSelect2.trigger('change');
}

qm.preset.nextPreset = function() {
    var newCursor = qm.preset.cursor + 1;
    if(newCursor > qm.preset.all.length - 1) {
        newCursor = 0;
    }
    qm.preset.domSelect2.val(qm.preset.all[newCursor]._id);
    qm.preset.domSelect2.trigger('change');
}

// funció d'inicialització d'aquest mòdul
qm.preset.init = function() {
    // Binding (Listener) d'elements del dom
    qm.preset.prevButton.click(qm.preset.prevPreset);
    qm.preset.nextButton.click(qm.preset.nextPreset);
    qm.preset.domSelect2.on('change', qm.preset.changePreset);
    qm.preset.domSaveButton.click(qm.preset.savePreset);
    qm.preset.domSaveAsButton.click(qm.preset.saveNewPreset);
    qm.preset.domRenameButton.click(qm.preset.renamePreset);
    qm.preset.domDeleteButton.click(qm.preset.deletePreset);
    // Anar a cercar els presets de la bbdd
    // això ho farem contactant amb el servidor via GET.
    qm.preset.getPresets();

}