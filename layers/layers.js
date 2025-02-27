var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIStandard_2 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRITopo_3 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DivisionBoundary_4 = new ol.format.GeoJSON();
var features_DivisionBoundary_4 = format_DivisionBoundary_4.readFeatures(json_DivisionBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivisionBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisionBoundary_4.addFeatures(features_DivisionBoundary_4);
var lyr_DivisionBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DivisionBoundary_4, 
                style: style_DivisionBoundary_4,
                popuplayertitle: 'Division Boundary',
                interactive: true,
                title: '<img src="styles/legend/DivisionBoundary_4.png" /> Division Boundary'
            });
var format_AssetsinDivisionIX_5 = new ol.format.GeoJSON();
var features_AssetsinDivisionIX_5 = format_AssetsinDivisionIX_5.readFeatures(json_AssetsinDivisionIX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssetsinDivisionIX_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssetsinDivisionIX_5.addFeatures(features_AssetsinDivisionIX_5);
var lyr_AssetsinDivisionIX_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssetsinDivisionIX_5, 
                style: style_AssetsinDivisionIX_5,
                popuplayertitle: 'Assets in Division IX',
                interactive: true,
                title: '<img src="styles/legend/AssetsinDivisionIX_5.png" /> Assets in Division IX'
            });
var format_AssetDetails_6 = new ol.format.GeoJSON();
var features_AssetDetails_6 = format_AssetDetails_6.readFeatures(json_AssetDetails_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssetDetails_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssetDetails_6.addFeatures(features_AssetDetails_6);
var lyr_AssetDetails_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssetDetails_6, 
                style: style_AssetDetails_6,
                popuplayertitle: 'Asset Details',
                interactive: true,
                title: '<img src="styles/legend/AssetDetails_6.png" /> Asset Details'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRIStandard_2.setVisible(true);lyr_ESRITopo_3.setVisible(true);lyr_DivisionBoundary_4.setVisible(true);lyr_AssetsinDivisionIX_5.setVisible(true);lyr_AssetDetails_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_ESRIStandard_2,lyr_ESRITopo_3,lyr_DivisionBoundary_4,lyr_AssetsinDivisionIX_5,lyr_AssetDetails_6];
lyr_DivisionBoundary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name_1': 'Name of Division', });
lyr_AssetsinDivisionIX_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Sl_NO': 'Sl No.', 'Section': 'Section', 'District': 'District', 'Mandal': 'Mandal', 'Vill': 'Village/Town/City', 'Division': 'Division', 'Survey_No': 'Survey No.', 'Area': 'Area', 'Area_1': 'Area', 'Market_Value': 'Market Value', });
lyr_AssetDetails_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Image': 'Image', 'Image_1': 'Image_1', 'Image_2': 'Image_2', 'Image_3': 'Image_3', 'Plan_Name': 'Name of Plan', });
lyr_DivisionBoundary_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name_1': 'TextEdit', });
lyr_AssetsinDivisionIX_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Sl_NO': 'Range', 'Section': 'TextEdit', 'District': 'TextEdit', 'Mandal': 'TextEdit', 'Vill': 'TextEdit', 'Division': 'TextEdit', 'Survey_No': 'TextEdit', 'Area': 'TextEdit', 'Area_1': 'TextEdit', 'Market_Value': 'TextEdit', });
lyr_AssetDetails_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Image': 'ExternalResource', 'Image_1': 'ExternalResource', 'Image_2': 'ExternalResource', 'Image_3': 'ExternalResource', 'Plan_Name': 'TextEdit', });
lyr_DivisionBoundary_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name_1': 'inline label - visible with data', });
lyr_AssetsinDivisionIX_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Sl_NO': 'inline label - visible with data', 'Section': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Mandal': 'inline label - visible with data', 'Vill': 'inline label - visible with data', 'Division': 'inline label - visible with data', 'Survey_No': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Area_1': 'inline label - visible with data', 'Market_Value': 'inline label - visible with data', });
lyr_AssetDetails_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Image': 'header label - visible with data', 'Image_1': 'header label - visible with data', 'Image_2': 'header label - visible with data', 'Image_3': 'header label - visible with data', 'Plan_Name': 'header label - visible with data', });
lyr_AssetDetails_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});