var Anim = function () {
    // Keyframes
    var coinAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 660.77778, 313.98397],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }]];
    var exclamationAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 239.15064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.89746, 238.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.89746, 263.40064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.89746, 288.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 288.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 263.90064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 433.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 433.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 458.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 458.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 483.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 483.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 660, 264.4],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.76572, 264.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.26572, 288.90064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660, 314.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.5, 289.40064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 433.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 433.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 458.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 458.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 483.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 483.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }]];
    var treasureAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 1
    }], [{
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.88889, 389.09508],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 1
    }], [{
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 439.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 439.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.28635, 439.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 1
    }], [{
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 439.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 439.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.28635, 439.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 1
    }], [{
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 439.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 661, 439.2062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.39746, 439.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.28635, 439.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 339.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 1
    }], [{
        "position": ["Point", 617.33333, 389.2062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.06761, 414.4562],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.33333, 414.4562],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 439.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.96445, 388.7062],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 439.2062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 439.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.59905, 389.2062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.28635, 439.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.8419, 413.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.33333, 389.2062],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.62317, 415.06731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 415.06731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.15461, 388.81731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 439.2062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 439.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.15461, 388.81731],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 415.06731],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 389.81731],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.19016, 364.31731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.33333, 414.87286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.59905, 389.62286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 439.2062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 439.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.09905, 389.62286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.76634, 415.12286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.45588, 339.06731],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 364.31731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 389.31731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.31731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 414.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 439.2062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.15461, 439.31731],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.31731],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 439.31731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 389.31731],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 339.31731],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 617.77778, 389.98397],
        "rotation": 90,
        "fillColor": [["dictionary", {"#1": ["Gradient", [[[0.88627, 0.88627, 0.88627], 0.34], [[1, 1, 1], 0.35]], false]}], ["gradient", ["#1"], [639.64492, 364.73397], [595.91064, 426.23397]]],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 364.31731],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 389.31731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.77778, 440.48397],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.77778, 364.73397],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.0435, 415.23397],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 439.2062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.28635, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.0435, 440.48397],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 364.31731],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 464.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.77778, 440.48397],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 389.31731],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 339.31731],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }]];
    var hearthstoneAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-21",
        "opacity": 1
    }], [{
        "position": ["Point", 683, 313.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 364.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 339.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 595.69873, 465.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 390.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 595.69873, 415.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 439.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 595.69873, 490.90064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 595.69873, 440.40064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 389.40064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 464.90064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 414.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 338.90064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 364.90064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.39746, 390.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 596.39746, 365.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 596.39746, 415.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 596.69873, 339.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 596.39746, 440.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 595.69873, 465.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 596.39746, 465.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 595.69873, 490.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-21",
        "opacity": 1
    }], [{
        "position": ["Point", 682.5, 313.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 364.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 464.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 389.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 414.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 439.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 489.90064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 439.40064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 389.40064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 464.90064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 414.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 683, 338.90064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 596.69873, 363.90064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 639.26572, 364.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 639.26572, 338.90064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 639.26572, 389.40064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 639.26572, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 639.26572, 414.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 640.43301, 439.40064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 640.43301, 489.90064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 639.43301, 464.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-21",
        "opacity": 1
    }]];
    var ringAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 704.30127, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 323.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 323.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 348.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 423.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 323.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 423.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704.30127, 348.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 323.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 323.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 704, 323.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }], [{
        "position": ["Point", 703.5, 323.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 374.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.3654, 373.81731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.3654, 399.06731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 323.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 348.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 399.90064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 618, 449.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.3654, 424.31731],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.26572, 323.15064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.73428, 449.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 424.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 349.40064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.59968, 323.31731],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.3654, 399.06731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 704.3654, 397.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 323.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 704, 324.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 323.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 374.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.8654, 373.81731],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.3654, 399.06731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 323.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 348.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 398.90064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617, 448.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 573.8654, 423.31731],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 323.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.23428, 448.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 423.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 348.90064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 323.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.09968, 423.31731],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.76572, 423.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 298.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 298.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }]];
    var hadoukenAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 438.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 288.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 438.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 288.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 439.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 288.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }]];
    var froggerAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-21",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-22",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-23",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-24",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-25",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-26",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-27",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-28",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-29",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-30",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-31",
        "opacity": 1
    }], [{
        "position": ["Point", 747.66667, 363.48397],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 530.50857, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.16318, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-21",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-22",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-23",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-24",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-25",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-26",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-27",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-28",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-29",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-30",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-31",
        "opacity": 1
    }], [{
        "position": ["Point", 747.66667, 362.98397],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 530.50857, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 413.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 413.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 413.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-21",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-22",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-23",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-24",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-25",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-26",
        "opacity": 1
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-27",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-28",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-29",
        "opacity": 1
    }, {
        "position": ["Point", 530.50857, 338.40064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-30",
        "opacity": 1
    }, {
        "position": ["Point", 748.23428, 338.40064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-31",
        "opacity": 1
    }], [{
        "position": ["Point", 747.66667, 362.98397],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 530.50857, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 288.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 288.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 413.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 463.98397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 463.98397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 464.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 463.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-21",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-22",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-23",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-24",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-25",
        "opacity": 1
    }, {
        "position": ["Point", 574.16318, 439.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-26",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 438.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-27",
        "opacity": 1
    }, {
        "position": ["Point", 704.43301, 439.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-28",
        "opacity": 1
    }, {
        "position": ["Point", 703.93301, 438.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-29",
        "opacity": 1
    }, {
        "position": ["Point", 530.50857, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-30",
        "opacity": 1
    }, {
        "position": ["Point", 747.73428, 337.90064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-31",
        "opacity": 1
    }], [{
        "position": ["Point", 747.66667, 362.98397],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 530.50857, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 288.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 288.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 413.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 463.98397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 463.98397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 463.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 463.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-21",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-22",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-23",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-24",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-25",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 438.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-26",
        "opacity": 1
    }, {
        "position": ["Point", 530.79492, 463.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-27",
        "opacity": 1
    }, {
        "position": ["Point", 704.43301, 438.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-28",
        "opacity": 1
    }, {
        "position": ["Point", 747.66667, 463.98397],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-29",
        "opacity": 1
    }, {
        "position": ["Point", 530.50857, 338.40064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-30",
        "opacity": 1
    }, {
        "position": ["Point", 748.23428, 337.90064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-31",
        "opacity": 1
    }], [{
        "position": ["Point", 747.66667, 362.98397],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 530.50857, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 288.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 288.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 703.93239, 413.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 703.43239, 463.48397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 746.66667, 488.73397],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 463.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-20",
        "opacity": 1
    }, {
        "position": ["Point", 530.79492, 488.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-21",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 313.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-22",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 263.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-23",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 313.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-24",
        "opacity": 1
    }, {
        "position": ["Point", 661, 263.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-25",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 438.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-26",
        "opacity": 1
    }, {
        "position": ["Point", 530.79492, 463.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-27",
        "opacity": 1
    }, {
        "position": ["Point", 703.93301, 438.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-28",
        "opacity": 1
    }, {
        "position": ["Point", 746.66667, 463.98397],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-29",
        "opacity": 1
    }, {
        "position": ["Point", 530.50857, 338.40064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-30",
        "opacity": 1
    }, {
        "position": ["Point", 748.23428, 337.90064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-31",
        "opacity": 1
    }]];
    var minecraftAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.39746, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }]];
    var snakeAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 835.66667, 363.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 487.17524, 388.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 389.09508],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 389.09508],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 487.79492, 388.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 487.79492, 388.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 487.79492, 388.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 835.66667, 363.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 487.17524, 388.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 389.09508],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 389.09508],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 364.09508],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 487.17524, 363.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 487.79492, 388.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 487.79492, 388.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 530.47651, 363.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 835.66667, 363.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 487.17524, 388.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 389.09508],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 389.09508],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 364.09508],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 443.87397, 388.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 487.17524, 363.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 487.79492, 388.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 443.87397, 363.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 530.47651, 363.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 835.66667, 363.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 487.17524, 388.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 389.09508],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 364.09508],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 791.30127, 389.09508],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.09619, 388.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 748, 364.09508],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 443.87397, 388.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 487.17524, 363.09508],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 400.5727, 388.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 443.87397, 363.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 530.47651, 363.09508],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-19",
        "opacity": 1
    }]];
    var triforceAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 313.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }]];
    var hammerAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 703.5, 338.53953],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 487.3654, 475.2062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 531.77778, 474.76175],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 488.0435, 474.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 531.77778, 474.76175],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 488.0435, 474.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.77778, 449.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 531.77778, 474.76175],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 488.0435, 474.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.77778, 449.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 575.07905, 449.76175],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 531.77778, 474.76175],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 659.5, 348.53953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.26572, 348.53953],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 618.76572, 374.28953],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.96445, 323.90064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 575.46445, 349.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 659.5, 373.78953],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 424.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 575.46445, 374.40064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 488.0435, 474.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.43301, 424.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 703.23428, 424.28953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.77778, 449.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.26572, 323.78953],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 575.07905, 449.76175],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 575.07905, 424.76175],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 703.23428, 399.03953],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 618.26572, 399.53953],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 660, 398.53953],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 618.38032, 424.76175],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 531.77778, 474.76175],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.5, 349.53953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.76572, 349.53953],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 618.25429, 374.2062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.52001, 323.7062],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.52001, 348.9562],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.48857, 374.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.48857, 424.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.52001, 374.2062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 487.3654, 475.2062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 705.23428, 374.78953],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704.72286, 424.2062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 531.77778, 449.76175],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.76572, 324.28953],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 575.07905, 449.76175],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 575.07905, 424.76175],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 704.72286, 399.9562],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 617.76572, 399.53953],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 660.98857, 399.4562],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 618.38032, 424.76175],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }]];
    var starcraftAnimation = [[{
        "position": ["Point", 704, 338.15064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.15064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.15064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.15064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.15064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.15064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.15064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 387.03953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 412.03953],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.15064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.55556, 413.03953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.15064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.15064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.89746, 362.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 412.03953],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 616.75429, 362.53953],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.55556, 413.03953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.38889, 363.2062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.15064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 617.69873, 413.15064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661, 413.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.59619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 362.53953],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.38889, 363.2062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.15064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 388.70623],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 363.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 363.03953],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 363.2062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 363.7062],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 388.53953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 618.19873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 363.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 618.38889, 388.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 363.7062],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 574.58762, 388.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 388.53953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 389.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 363.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.38889, 388.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.58762, 363.7062],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 388.53953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 389.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 574.09619, 338.15064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 389.2062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 617.88889, 388.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.25429, 388.53953],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 617.69873, 388.15064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 378.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.38889, 389.2062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 378.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 672.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 413.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 662.19016, 413.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 378.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 0
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 0
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 0
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 0
    }], [{
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 378.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 378.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 373.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 617.88889, 373.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }], [{
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 378.37286],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 398.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 1
    }, {
        "position": ["Point", 599, 428.7062],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 428.37286],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 555.14317, 403.37286],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.88889, 348.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-14",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 398.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-15",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 373.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-16",
        "opacity": 1
    }, {
        "position": ["Point", 661.19016, 348.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-17",
        "opacity": 1
    }, {
        "position": ["Point", 555.14317, 428.7062],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-18",
        "opacity": 1
    }, {
        "position": ["Point", 617.88889, 373.7062],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-19",
        "opacity": 1
    }]];
    var superHeartAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1
    }]];


    // Durations
    var coinDuration = [15, 15, 15, 15];
    var exclamationDuration = [10, 13, 9];
    var treasureDuration = [30, 15, 15, 15, 15, 10, 15, 15, 15, 40];
    var hearthstoneDuration = [15, 15, 15, 15];
    var ringDuration = [15, 8, 10, 10];
    var hadoukenDuration = [10, 12, 10, 8];
    var froggerDuration = [15, 15, 15, 15, 12, 12];
    var minecraftDuration = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11];
    var snakeDuration = [15, 12, 8, 8, 6];
    var triforceDuration = [12, 12, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    var hammerDuration = [12, 10, 10, 10, 8, 12, 12];
    var starcraftDuration = [12, 12, 12, 10, 20, 8, 10, 10, 10, 10, 30, 30, 12, 30];
    var superHeartDuration = [1, 1];

    // Offscreen
    var offscreenAnimation = [[{
        "position": ["Point", -66.87818, 562.03656],
        "rotation": 232.5672173453495,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1
    }, {
        "position": ["Point", 1329.39416, 406.89328],
        "rotation": 184.81974127935246,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1
    }, {
        "position": ["Point", -32.73668, 158.58001],
        "rotation": 151.45786618581042,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1
    }, {
        "position": ["Point", 1348.923, 460.28271],
        "rotation": 7.73060048231855,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1
    }, {
        "position": ["Point", -61.13647, 73.16297],
        "rotation": 51.59726300742477,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1
    }, {
        "position": ["Point", 1320.79044, 699.45922],
        "rotation": 200.27154221199453,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1
    }, {
        "position": ["Point", -30.15845, 714.63849],
        "rotation": 89.87621418898925,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1
    }, {
        "position": ["Point", 1349.70731, 246.22022],
        "rotation": 49.171772932168096,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1
    }, {
        "position": ["Point", -44.91098, 14.70059],
        "rotation": 13.465787891764194,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1
    }, {
        "position": ["Point", 1309.96141, 31.62072],
        "rotation": 29.151680166833103,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1
    }, {
        "position": ["Point", -51.44953, 221.92661],
        "rotation": 224.28867186186835,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1
    }, {
        "position": ["Point", 1324.91698, 65.0248],
        "rotation": 61.83494919212535,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1
    }, {
        "position": ["Point", -26.17856, -42.23433],
        "rotation": 77.1307985088788,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1
    }, {
        "position": ["Point", 1327.42244, 355.86414],
        "rotation": 35.78518685884774,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }]];
    var offscreenDuration = [1, 120];

    //Intro
    var introAnimation = [[{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 0,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 0,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }], [{
        "position": ["Point", 704, 338.65064],
        "rotation": 90,
        "fillColor": [0.93333, 0.93333, 0.93333],
        "idNum": "triangle-0",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 363.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-1",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 363.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-2",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 388.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-3",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 338.65064],
        "rotation": 270,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-4",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 363.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-5",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 388.65064],
        "rotation": 270,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-6",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 413.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-7",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 574.09619, 388.65064],
        "rotation": 270,
        "fillColor": [0.61176, 0.17255, 0.1451],
        "idNum": "triangle-8",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 338.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-9",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 660.69873, 413.65064],
        "rotation": 90,
        "fillColor": [0.7098, 0.15686, 0.12941],
        "idNum": "triangle-10",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 388.65064],
        "rotation": 90,
        "fillColor": [0.80392, 0.1451, 0.10588],
        "idNum": "triangle-11",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 704, 363.65064],
        "rotation": 270,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-12",
        "opacity": 1,
        "layerOrder": 0
    }, {
        "position": ["Point", 617.39746, 338.65064],
        "rotation": 90,
        "fillColor": [0.9098, 0.13333, 0.0902],
        "idNum": "triangle-13",
        "opacity": 1,
        "layerOrder": 0
    }]];
    var introDuration = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];

    //Containers
    var globalAnimationHolder = [triforceAnimation, coinAnimation, coinAnimation, starcraftAnimation, treasureAnimation, minecraftAnimation, ringAnimation, hammerAnimation, hadoukenAnimation, hearthstoneAnimation, ringAnimation, exclamationAnimation, froggerAnimation, superHeartAnimation];
    var globalDurationHolder = [triforceDuration, coinDuration, coinDuration, starcraftDuration, treasureDuration, minecraftDuration, ringDuration, hammerDuration, hadoukenDuration, hearthstoneDuration, ringDuration, exclamationDuration, froggerDuration, superHeartDuration];

    return {
        coinAnimation: coinAnimation,
        exclamationAnimation: exclamationAnimation,
        treasureAnimation: treasureAnimation,
        hearthstoneAnimation: hearthstoneAnimation,
        ringAnimation: ringAnimation,
        hadoukenAnimation: hadoukenAnimation,
        froggerAnimation: froggerAnimation,
        minecraftAnimation: minecraftAnimation,
        snakeAnimation: snakeAnimation,
        triforceAnimation: triforceAnimation,
        hammerAnimation: hammerAnimation,
        starcraftAnimation: starcraftAnimation,
        superHeartAnimation: superHeartAnimation,
        coinDuration: coinDuration,
        exclamationDuration: exclamationDuration,
        treasureDuration: treasureDuration,
        hearthstoneDuration: hearthstoneDuration,
        ringDuration: ringDuration,
        hadoukenDuration: hadoukenDuration,
        froggerDuration: froggerDuration,
        minecraftDuration: minecraftDuration,
        snakeDuration: snakeDuration,
        triforceDuration: triforceDuration,
        hammerDuration: hammerDuration,
        starcraftDuration: starcraftDuration,
        superHeartDuration: superHeartDuration,
        offscreenAnimation: offscreenAnimation,
        offscreenDuration: offscreenDuration,
        introAnimation: introAnimation,
        introDuration: introDuration,
        globalAnimationHolder: globalAnimationHolder,
        globalDurationHolder: globalDurationHolder
    };
}();