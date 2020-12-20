var wms_layers = [];

var format_Provincias_0 = new ol.format.GeoJSON();
var features_Provincias_0 = format_Provincias_0.readFeatures(json_Provincias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_0.addFeatures(features_Provincias_0);
var lyr_Provincias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_0, 
                style: style_Provincias_0,
                interactive: true,
                title: '<img src="styles/legend/Provincias_0.png" /> Provincias'
            });
var format_Hospitales_Referencia_1 = new ol.format.GeoJSON();
var features_Hospitales_Referencia_1 = format_Hospitales_Referencia_1.readFeatures(json_Hospitales_Referencia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitales_Referencia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_Referencia_1.addFeatures(features_Hospitales_Referencia_1);
var lyr_Hospitales_Referencia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitales_Referencia_1, 
                style: style_Hospitales_Referencia_1,
                interactive: true,
                title: '<img src="styles/legend/Hospitales_Referencia_1.png" /> Hospitales_Referencia'
            });

lyr_Provincias_0.setVisible(true);lyr_Hospitales_Referencia_1.setVisible(true);
var layersList = [lyr_Provincias_0,lyr_Hospitales_Referencia_1];
lyr_Provincias_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FCODE': 'FCODE', 'PROVINCIA': 'PROVINCIA', 'NOM_PRO': 'NOM_PRO', 'ANIO': 'ANIO', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Casos': 'Casos', 'Confirmados': 'Confirmados', 'Muertes': 'Muertes', 'Recuperados': 'Recuperados', 'Existentes': 'Existentes', 'Cerco': 'Cerco', });
lyr_Hospitales_Referencia_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNI_CODIGO': 'UNI_CODIGO', 'UNI_NOMBRE': 'UNI_NOMBRE', 'UNI_DIRECCION': 'UNI_DIRECCION', 'UNI_JEFATURA_AREA': 'UNI_JEFATURA_AREA', 'ARE_CODIG': 'ARE_CODIG', 'ARE_DESCRIPCION': 'ARE_DESCRIPCION', 'PRV_CODIGO': 'PRV_CODIGO', 'PRV_DESCRIPCION': 'PRV_DESCRIPCION', 'CAN_CODIGO': 'CAN_CODIGO', 'CAN_DESCRIPCION': 'CAN_DESCRIPCION', 'PAR_CODIGO': 'PAR_CODIGO', 'PAR_DESCRIPCION': 'PAR_DESCRIPCION', 'ZON_CODIGO': 'ZON_CODIGO', 'ZON_DISTRIBUCION': 'ZON_DISTRIBUCION', 'DIS_CODIGO': 'DIS_CODIGO', 'DIS_DESCRIPCION': 'DIS_DESCRIPCION', 'CIR_CODIGO': 'CIR_CODIGO', 'HAU_DESCRIPCION': 'HAU_DESCRIPCION', 'NUM_DESCRI': 'NUM_DESCRI', 'TUN_SIMBOLO': 'TUN_SIMBOLO', 'TUN_DESCRIPCION': 'TUN_DESCRIPCION', 'IGU_DESCRIPCION': 'IGU_DESCRIPCION', 'LONGPS': 'LONGPS', 'LATGPS': 'LATGPS', 'X17S': 'X17S', 'Y17S': 'Y17S', 'ESTADO': 'ESTADO', 'TIPO_PARROQUIA': 'TIPO_PARROQUIA', 'REFERECIA_2019_nCoV': 'REFERECIA_2019_nCoV', 'TIPO': 'TIPO', 'CAMAS': 'CAMAS', });
lyr_Provincias_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'NOM_PRO': 'TextEdit', 'ANIO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Casos': 'Range', 'Confirmados': 'Range', 'Muertes': 'Range', 'Recuperados': 'Range', 'Existentes': 'Range', 'Cerco': 'Range', });
lyr_Hospitales_Referencia_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNI_CODIGO': 'TextEdit', 'UNI_NOMBRE': 'TextEdit', 'UNI_DIRECCION': 'TextEdit', 'UNI_JEFATURA_AREA': 'TextEdit', 'ARE_CODIG': 'TextEdit', 'ARE_DESCRIPCION': 'TextEdit', 'PRV_CODIGO': 'TextEdit', 'PRV_DESCRIPCION': 'TextEdit', 'CAN_CODIGO': 'TextEdit', 'CAN_DESCRIPCION': 'TextEdit', 'PAR_CODIGO': 'TextEdit', 'PAR_DESCRIPCION': 'TextEdit', 'ZON_CODIGO': 'TextEdit', 'ZON_DISTRIBUCION': 'TextEdit', 'DIS_CODIGO': 'TextEdit', 'DIS_DESCRIPCION': 'TextEdit', 'CIR_CODIGO': 'TextEdit', 'HAU_DESCRIPCION': 'TextEdit', 'NUM_DESCRI': 'TextEdit', 'TUN_SIMBOLO': 'TextEdit', 'TUN_DESCRIPCION': 'TextEdit', 'IGU_DESCRIPCION': 'TextEdit', 'LONGPS': 'TextEdit', 'LATGPS': 'TextEdit', 'X17S': 'TextEdit', 'Y17S': 'TextEdit', 'ESTADO': 'TextEdit', 'TIPO_PARROQUIA': 'TextEdit', 'REFERECIA_2019_nCoV': 'TextEdit', 'TIPO': 'TextEdit', 'CAMAS': 'Range', });
lyr_Provincias_0.set('fieldLabels', {'OBJECTID': 'no label', 'FCODE': 'no label', 'PROVINCIA': 'no label', 'NOM_PRO': 'no label', 'ANIO': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Casos': 'no label', 'Confirmados': 'no label', 'Muertes': 'no label', 'Recuperados': 'no label', 'Existentes': 'no label', 'Cerco': 'no label', });
lyr_Hospitales_Referencia_1.set('fieldLabels', {'OBJECTID': 'no label', 'UNI_CODIGO': 'inline label', 'UNI_NOMBRE': 'inline label', 'UNI_DIRECCION': 'no label', 'UNI_JEFATURA_AREA': 'no label', 'ARE_CODIG': 'no label', 'ARE_DESCRIPCION': 'no label', 'PRV_CODIGO': 'no label', 'PRV_DESCRIPCION': 'no label', 'CAN_CODIGO': 'no label', 'CAN_DESCRIPCION': 'no label', 'PAR_CODIGO': 'no label', 'PAR_DESCRIPCION': 'no label', 'ZON_CODIGO': 'no label', 'ZON_DISTRIBUCION': 'no label', 'DIS_CODIGO': 'no label', 'DIS_DESCRIPCION': 'no label', 'CIR_CODIGO': 'no label', 'HAU_DESCRIPCION': 'no label', 'NUM_DESCRI': 'no label', 'TUN_SIMBOLO': 'no label', 'TUN_DESCRIPCION': 'no label', 'IGU_DESCRIPCION': 'no label', 'LONGPS': 'no label', 'LATGPS': 'no label', 'X17S': 'no label', 'Y17S': 'no label', 'ESTADO': 'no label', 'TIPO_PARROQUIA': 'no label', 'REFERECIA_2019_nCoV': 'no label', 'TIPO': 'no label', 'CAMAS': 'no label', });
lyr_Hospitales_Referencia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});