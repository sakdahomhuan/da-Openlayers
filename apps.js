function switchLayer()
{
    var checkedLayer = $('#layerswitcher input[name=layer]:checked').val();
    //for (i = 0, ii = layers.length - 2; i < ii; ++i) layers[i].setVisible(i == checkedLayer);
	for (i = 0, ii = layers.length - 4; i < ii; ++i) layers[i].setVisible(i == checkedLayer);
}
$(function () {
    switchLayer();
});
$("#layerswitcher input[name=layer]").change(function () {
    switchLayer();
});

bingKey = 'bhkoysOuQNWyrggN0Zyl~Fe93KxjWWSrAOB-TNfQIaQ~AiEAX5nw6sjp895QX--1_fBwgZgOIUg_ysKsFWeJisRgUD3O53_7UCBpqQSE3ogB';
var layers = [];
layers[0] = new ol.layer.Tile({
    source: new ol.source.OSM()
});

layers[1] = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
		key: bingKey,
        imagerySet:'Road'
    })
});

layers[2] = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
		key: bingKey,
        imagerySet:'Aerial'
    })
});

layers[3] = new ol.layer.Tile({
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});

$('#lyrs4').change(function () {
    if ($(this).is(':checked')) {
        layers[4].setVisible(true);
    } else {
        layers[4].setVisible(false);
    }
});

$('#lyrs5').change(function () {
    if ($(this).is(':checked')) {
        layers[5].setVisible(true);
    } else {
        layers[5].setVisible(false);
    }
});

$('#lyrs6').change(function () {
    if ($(this).is(':checked')) {
        layers[6].setVisible(true);
    } else {
        layers[6].setVisible(false);
    }
});

$('#lyrs7').change(function () {
    if ($(this).is(':checked')) {
        layers[7].setVisible(true);
    } else {
        layers[7].setVisible(false);
    }
});

layers[4] = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://www.map.nu.ac.th/geoserver-hgis/wms',
        params: {'LAYERS': 'hgis:dpc9_amphoe_4326'},
        serverType: 'geoserver'
    })
});

layers[5] = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://www.map.nu.ac.th/geoserver-hgis/wms',
        params: {
            'LAYERS': 'hgis:dpc9_province_4326'},
        serverType: 'geoserver'
    })
});

layers[6] = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://www.map.nu.ac.th/geoserver-hgis/wms',
        params: {
            'LAYERS': 'hgis:dpc9_health_center'},
        serverType: 'geoserver'
    })
});


layers[7] = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://www.map.nu.ac.th/geoserver-hgis/wms',
        params: {
            'LAYERS': 'hgis:dpc9_village_4326'},
        serverType: 'geoserver'
    })
});

var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({
            units: 'metric'
        })
    ]),
    layers: layers,
    view: new ol.View({
        center: ol.proj.transform([100, 17], 'EPSG:4326', 'EPSG:3857'),
        zoom: 8
    })
});