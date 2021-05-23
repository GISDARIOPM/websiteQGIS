var wms_layers = [];


        var lyr_EsriSatelite_0 = new ol.layer.Tile({
            'title': 'Esri Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_parroquias_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ec2-3-14-38-29.us-east-2.compute.amazonaws.com:8080/geoserver/conexionBD/wms?version%3D1.1.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "parroquias",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "parroquias",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_parroquias_1, 1]);

lyr_EsriSatelite_0.setVisible(true);lyr_parroquias_1.setVisible(true);
var layersList = [lyr_EsriSatelite_0,lyr_parroquias_1];
