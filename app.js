var styles = [
    'Road',
    'Aerial',
    'AerialWithLabels',
    'collinsBart',
    'ordnanceSurvey'
];
var layers = [];

var i, ii;

for (i = 0, ii = styles.length; i < ii; ++i) {
    layers.push(new ol.layer.Tile({
        visible: false,
        preload: Infinity,
        source: new ol.source.BingMaps({
            key: 'bhkoysOuQNWyrggN0Zyl~Fe93KxjWWSrAOB-TNfQIaQ~AiEAX5nw6sjp895QX--1_fBwgZgOIUg_ysKsFWeJisRgUD3O53_7UCBpqQSE3ogB',
            imagerySet: styles[i]
                // use maxZoom 19 to see stretched tiles instead of the BingMaps
                // "no photos at this zoom level" tiles
                // maxZoom: 19
        })
    }));
}

var map = new ol.Map({
    controls: ol.control.defaults().extend([
        new ol.control.FullScreen({
            source: 'fullscreen'
        })
    ]),

    layers: layers,
    // Improve user experience by loading tiles while dragging/zooming. Will make
    // zooming choppy on mobile or slow devices.
    loadTilesWhileInteracting: true,
    target: 'map',
    view: new ol.View({
        center: [-6655.5402445057125, 6709968.258934638],
        zoom: 13
    })
});

var select = document.getElementById('layer-select');

function onChange() {
    var style = select.value;
    for (var i = 0, ii = layers.length; i < ii; ++i) {
        layers[i].setVisible(styles[i] === style);
    }
}
select.addEventListener('change', onChange);
onChange();