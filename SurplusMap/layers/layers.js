var wms_layers = [];

var format_norway_0 = new ol.format.GeoJSON();
var features_norway_0 = format_norway_0.readFeatures(json_norway_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_norway_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_norway_0.addFeatures(features_norway_0);
var lyr_norway_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_norway_0, 
                style: style_norway_0,
                interactive: true,
                title: '<img src="styles/legend/norway_0.png" /> norway'
            });
var format_europe_1 = new ol.format.GeoJSON();
var features_europe_1 = format_europe_1.readFeatures(json_europe_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_europe_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_europe_1.addFeatures(features_europe_1);
var lyr_europe_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_europe_1, 
                style: style_europe_1,
                interactive: true,
                title: '<img src="styles/legend/europe_1.png" /> europe'
            });
var format_Havvind_Utredningsomrader_2 = new ol.format.GeoJSON();
var features_Havvind_Utredningsomrader_2 = format_Havvind_Utredningsomrader_2.readFeatures(json_Havvind_Utredningsomrader_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havvind_Utredningsomrader_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havvind_Utredningsomrader_2.addFeatures(features_Havvind_Utredningsomrader_2);
var lyr_Havvind_Utredningsomrader_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Havvind_Utredningsomrader_2, 
                style: style_Havvind_Utredningsomrader_2,
                interactive: true,
                title: '<img src="styles/legend/Havvind_Utredningsomrader_2.png" /> Havvind_Utredningsomrader'
            });
var format_Vindkraft_VindkraftanleggOmr_3 = new ol.format.GeoJSON();
var features_Vindkraft_VindkraftanleggOmr_3 = format_Vindkraft_VindkraftanleggOmr_3.readFeatures(json_Vindkraft_VindkraftanleggOmr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vindkraft_VindkraftanleggOmr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vindkraft_VindkraftanleggOmr_3.addFeatures(features_Vindkraft_VindkraftanleggOmr_3);
var lyr_Vindkraft_VindkraftanleggOmr_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vindkraft_VindkraftanleggOmr_3, 
                style: style_Vindkraft_VindkraftanleggOmr_3,
                interactive: true,
                title: '<img src="styles/legend/Vindkraft_VindkraftanleggOmr_3.png" /> Vindkraft_VindkraftanleggOmr'
            });
var format_Vindkraft_Vindkraftanlegg_4 = new ol.format.GeoJSON();
var features_Vindkraft_Vindkraftanlegg_4 = format_Vindkraft_Vindkraftanlegg_4.readFeatures(json_Vindkraft_Vindkraftanlegg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vindkraft_Vindkraftanlegg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vindkraft_Vindkraftanlegg_4.addFeatures(features_Vindkraft_Vindkraftanlegg_4);
var lyr_Vindkraft_Vindkraftanlegg_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vindkraft_Vindkraftanlegg_4, 
                style: style_Vindkraft_Vindkraftanlegg_4,
                interactive: true,
                title: '<img src="styles/legend/Vindkraft_Vindkraftanlegg_4.png" /> Vindkraft_Vindkraftanlegg'
            });
var format_Vindkraft_Vindturbin_5 = new ol.format.GeoJSON();
var features_Vindkraft_Vindturbin_5 = format_Vindkraft_Vindturbin_5.readFeatures(json_Vindkraft_Vindturbin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vindkraft_Vindturbin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vindkraft_Vindturbin_5.addFeatures(features_Vindkraft_Vindturbin_5);
var lyr_Vindkraft_Vindturbin_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vindkraft_Vindturbin_5, 
                style: style_Vindkraft_Vindturbin_5,
                interactive: true,
                title: '<img src="styles/legend/Vindkraft_Vindturbin_5.png" /> Vindkraft_Vindturbin'
            });
var format_Vannkraft_Delfelt_6 = new ol.format.GeoJSON();
var features_Vannkraft_Delfelt_6 = format_Vannkraft_Delfelt_6.readFeatures(json_Vannkraft_Delfelt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vannkraft_Delfelt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vannkraft_Delfelt_6.addFeatures(features_Vannkraft_Delfelt_6);
var lyr_Vannkraft_Delfelt_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vannkraft_Delfelt_6, 
                style: style_Vannkraft_Delfelt_6,
                interactive: true,
                title: '<img src="styles/legend/Vannkraft_Delfelt_6.png" /> Vannkraft_Delfelt'
            });
var format_Vannkraft_Magasin_7 = new ol.format.GeoJSON();
var features_Vannkraft_Magasin_7 = format_Vannkraft_Magasin_7.readFeatures(json_Vannkraft_Magasin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vannkraft_Magasin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vannkraft_Magasin_7.addFeatures(features_Vannkraft_Magasin_7);
var lyr_Vannkraft_Magasin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vannkraft_Magasin_7, 
                style: style_Vannkraft_Magasin_7,
                interactive: true,
                title: '<img src="styles/legend/Vannkraft_Magasin_7.png" /> Vannkraft_Magasin'
            });
var format_Vannkraft_Vannkraftverk_8 = new ol.format.GeoJSON();
var features_Vannkraft_Vannkraftverk_8 = format_Vannkraft_Vannkraftverk_8.readFeatures(json_Vannkraft_Vannkraftverk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vannkraft_Vannkraftverk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vannkraft_Vannkraftverk_8.addFeatures(features_Vannkraft_Vannkraftverk_8);
var lyr_Vannkraft_Vannkraftverk_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vannkraft_Vannkraftverk_8, 
                style: style_Vannkraft_Vannkraftverk_8,
                interactive: true,
                title: '<img src="styles/legend/Vannkraft_Vannkraftverk_8.png" /> Vannkraft_Vannkraftverk'
            });
var format_NettKonsesjonsomrade_9 = new ol.format.GeoJSON();
var features_NettKonsesjonsomrade_9 = format_NettKonsesjonsomrade_9.readFeatures(json_NettKonsesjonsomrade_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NettKonsesjonsomrade_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NettKonsesjonsomrade_9.addFeatures(features_NettKonsesjonsomrade_9);
var lyr_NettKonsesjonsomrade_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NettKonsesjonsomrade_9, 
                style: style_NettKonsesjonsomrade_9,
                interactive: true,
                title: '<img src="styles/legend/NettKonsesjonsomrade_9.png" /> NettKonsesjonsomrade'
            });
var format_Kraftnett_Sjokabel_10 = new ol.format.GeoJSON();
var features_Kraftnett_Sjokabel_10 = format_Kraftnett_Sjokabel_10.readFeatures(json_Kraftnett_Sjokabel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kraftnett_Sjokabel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kraftnett_Sjokabel_10.addFeatures(features_Kraftnett_Sjokabel_10);
var lyr_Kraftnett_Sjokabel_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kraftnett_Sjokabel_10, 
                style: style_Kraftnett_Sjokabel_10,
                interactive: true,
                title: '<img src="styles/legend/Kraftnett_Sjokabel_10.png" /> Kraftnett_Sjokabel'
            });
var format_Kraftnett_Kraftlinje_11 = new ol.format.GeoJSON();
var features_Kraftnett_Kraftlinje_11 = format_Kraftnett_Kraftlinje_11.readFeatures(json_Kraftnett_Kraftlinje_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kraftnett_Kraftlinje_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kraftnett_Kraftlinje_11.addFeatures(features_Kraftnett_Kraftlinje_11);
var lyr_Kraftnett_Kraftlinje_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kraftnett_Kraftlinje_11, 
                style: style_Kraftnett_Kraftlinje_11,
                interactive: true,
                title: '<img src="styles/legend/Kraftnett_Kraftlinje_11.png" /> Kraftnett_Kraftlinje'
            });
var format_Kraftnett_Transformatorstasjon_12 = new ol.format.GeoJSON();
var features_Kraftnett_Transformatorstasjon_12 = format_Kraftnett_Transformatorstasjon_12.readFeatures(json_Kraftnett_Transformatorstasjon_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kraftnett_Transformatorstasjon_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kraftnett_Transformatorstasjon_12.addFeatures(features_Kraftnett_Transformatorstasjon_12);
var lyr_Kraftnett_Transformatorstasjon_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kraftnett_Transformatorstasjon_12, 
                style: style_Kraftnett_Transformatorstasjon_12,
                interactive: true,
                title: '<img src="styles/legend/Kraftnett_Transformatorstasjon_12.png" /> Kraftnett_Transformatorstasjon'
            });
var format_Ports_13 = new ol.format.GeoJSON();
var features_Ports_13 = format_Ports_13.readFeatures(json_Ports_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ports_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ports_13.addFeatures(features_Ports_13);
var lyr_Ports_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ports_13, 
                style: style_Ports_13,
                interactive: true,
                title: '<img src="styles/legend/Ports_13.png" /> Ports'
            });
var format_Individuallocations_14 = new ol.format.GeoJSON();
var features_Individuallocations_14 = format_Individuallocations_14.readFeatures(json_Individuallocations_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Individuallocations_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Individuallocations_14.addFeatures(features_Individuallocations_14);
var lyr_Individuallocations_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Individuallocations_14, 
                style: style_Individuallocations_14,
                interactive: true,
                title: '<img src="styles/legend/Individuallocations_14.png" /> Individual locations'
            });
var format_Sitedevelopers_15 = new ol.format.GeoJSON();
var features_Sitedevelopers_15 = format_Sitedevelopers_15.readFeatures(json_Sitedevelopers_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitedevelopers_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitedevelopers_15.addFeatures(features_Sitedevelopers_15);
var lyr_Sitedevelopers_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sitedevelopers_15, 
                style: style_Sitedevelopers_15,
                interactive: true,
                title: '<img src="styles/legend/Sitedevelopers_15.png" /> Site developers'
            });
var group_Datacentres = new ol.layer.Group({
                                layers: [lyr_Individuallocations_14,lyr_Sitedevelopers_15,],
                                title: "Data centres"});
var group_Ports = new ol.layer.Group({
                                layers: [lyr_Ports_13,],
                                title: "Ports"});
var group_Kraftnett = new ol.layer.Group({
                                layers: [lyr_NettKonsesjonsomrade_9,lyr_Kraftnett_Sjokabel_10,lyr_Kraftnett_Kraftlinje_11,lyr_Kraftnett_Transformatorstasjon_12,],
                                title: "Kraftnett"});
var group_Vannkraft = new ol.layer.Group({
                                layers: [lyr_Vannkraft_Delfelt_6,lyr_Vannkraft_Magasin_7,lyr_Vannkraft_Vannkraftverk_8,],
                                title: "Vannkraft"});
var group_Vindkraft = new ol.layer.Group({
                                layers: [lyr_Havvind_Utredningsomrader_2,lyr_Vindkraft_VindkraftanleggOmr_3,lyr_Vindkraft_Vindkraftanlegg_4,lyr_Vindkraft_Vindturbin_5,],
                                title: "Vindkraft"});
var group_Background = new ol.layer.Group({
                                layers: [lyr_norway_0,lyr_europe_1,],
                                title: "Background"});

lyr_norway_0.setVisible(true);lyr_europe_1.setVisible(true);lyr_Havvind_Utredningsomrader_2.setVisible(true);lyr_Vindkraft_VindkraftanleggOmr_3.setVisible(true);lyr_Vindkraft_Vindkraftanlegg_4.setVisible(true);lyr_Vindkraft_Vindturbin_5.setVisible(true);lyr_Vannkraft_Delfelt_6.setVisible(true);lyr_Vannkraft_Magasin_7.setVisible(true);lyr_Vannkraft_Vannkraftverk_8.setVisible(true);lyr_NettKonsesjonsomrade_9.setVisible(true);lyr_Kraftnett_Sjokabel_10.setVisible(true);lyr_Kraftnett_Kraftlinje_11.setVisible(true);lyr_Kraftnett_Transformatorstasjon_12.setVisible(true);lyr_Ports_13.setVisible(true);lyr_Individuallocations_14.setVisible(true);lyr_Sitedevelopers_15.setVisible(true);
var layersList = [group_Background,group_Vindkraft,group_Vannkraft,group_Kraftnett,group_Ports,group_Datacentres];
lyr_norway_0.set('fieldAliases', {'NAME': 'NAME', 'ORGN_NAME': 'ORGN_NAME', });
lyr_europe_1.set('fieldAliases', {'NAME': 'NAME', 'ORGN_NAME': 'ORGN_NAME', });
lyr_Havvind_Utredningsomrader_2.set('fieldAliases', {'objType': 'objType', 'omradeNavn': 'omradeNavn', 'anbefaling': 'anbefaling', 'beskrivels': 'beskrivels', 'anleggType': 'anleggType', 'areal_km2': 'areal_km2', 'dybdeMaks': 'dybdeMaks', 'dybdeMin': 'dybdeMin', 'dybdeGjsn': 'dybdeGjsn', 'vindhGjsn': 'vindhGjsn', 'avstKystMi': 'avstKystMi', 'bolge50Max': 'bolge50Max', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Vindkraft_VindkraftanleggOmr_3.set('fieldAliases', {'objType': 'objType', 'sakID': 'sakID', 'sakTittel': 'sakTittel', 'tiltakshav': 'tiltakshav', 'sakKategor': 'sakKategor', 'effekt_MW': 'effekt_MW', 'prod_GWh': 'prod_GWh', 'sakLenke': 'sakLenke', 'kommNavn': 'kommNavn', 'fylkesnavn': 'fylkesnavn', 'status': 'status', 'idriftDato': 'idriftDato', 'utAvDriftD': 'utAvDriftD', 'totAntTurb': 'totAntTurb', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Vindkraft_Vindkraftanlegg_4.set('fieldAliases', {'objType': 'objType', 'sakID': 'sakID', 'sakTittel': 'sakTittel', 'tiltakshav': 'tiltakshav', 'sakKategor': 'sakKategor', 'status': 'status', 'effekt_MW': 'effekt_MW', 'prod_GWh': 'prod_GWh', 'sakLenke': 'sakLenke', 'kommNavn': 'kommNavn', 'fylkesnavn': 'fylkesnavn', 'idriftDato': 'idriftDato', 'utAvDriftD': 'utAvDriftD', 'totAntTurb': 'totAntTurb', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Vindkraft_Vindturbin_5.set('fieldAliases', {'objType': 'objType', 'sakTittel': 'sakTittel', 'sakKategor': 'sakKategor', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Vannkraft_Delfelt_6.set('fieldAliases', {'objType': 'objType', 'delfeltNr': 'delfeltNr', 'delfeltNvn': 'delfeltNvn', 'areal_km2': 'areal_km2', 'QN6190Mm3A': 'QN6190Mm3A', 'formal': 'formal', 'vannkrvNr': 'vannkrvNr', 'vannkrvNvn': 'vannkrvNvn', 'magasinNr': 'magasinNr', 'magNavn': 'magNavn', 'nesteDfNr': 'nesteDfNr', 'vassOmrNr': 'vassOmrNr', 'oppdatDato': 'oppdatDato', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Vannkraft_Magasin_7.set('fieldAliases', {'objType': 'objType', 'vatnLnr': 'vatnLnr', 'magasinNr': 'magasinNr', 'magNavn': 'magNavn', 'kategori': 'kategori', 'lrv_moh': 'lrv_moh', 'hrv_moh': 'hrv_moh', 'status': 'status', 'idriftAar': 'idriftAar', 'kdbNr': 'kdbNr', 'konsStatus': 'konsStatus', 'kStatDato': 'kStatDato', 'spID': 'spID', 'formal_L': 'formal_L', 'areal_km2': 'areal_km2', 'volOppdemt': 'volOppdemt', 'delfeltNr': 'delfeltNr', 'vannkrvNr': 'vannkrvNr', 'vkrvNavn': 'vkrvNavn', 'vassdragNr': 'vassdragNr', 'hierarki': 'hierarki', 'oppdatDato': 'oppdatDato', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Vannkraft_Vannkraftverk_8.set('fieldAliases', {'objType': 'objType', 'vannkrvNr': 'vannkrvNr', 'vannkrv': 'vannkrv', 'vannkrvTyp': 'vannkrvTyp', 'medium': 'medium', 'status': 'status', 'idriftAar': 'idriftAar', 'kdbNr': 'kdbNr', 'konsStatus': 'konsStatus', 'kStatDato': 'kStatDato', 'spID': 'spID', 'ytelse_NW': 'ytelse_NW', 'brFall_m': 'brFall_m', 'energiEkv': 'energiEkv', 'eier': 'eier', 'kommuneNr': 'kommuneNr', 'kommune': 'kommune', 'fylke': 'fylke', 'vassdragNr': 'vassdragNr', 'hierarki': 'hierarki', 'nedVkrvNr': 'nedVkrvNr', 'ndVkrvNr_L': 'ndVkrvNr_L', 'opphav': 'opphav', 'oppdatDato': 'oppdatDato', 'noyaktighe': 'noyaktighe', 'malemetode': 'malemetode', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_NettKonsesjonsomrade_9.set('fieldAliases', {'objType': 'objType', 'konsType': 'konsType', 'eierNavn': 'eierNavn', 'eierOrgNr': 'eierOrgNr', 'eierType': 'eierType', 'planomrade': 'planomrade', 'URL': 'URL', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Kraftnett_Sjokabel_10.set('fieldAliases', {'objType': 'objType', 'kompKode': 'kompKode', 'kompKodSys': 'kompKodSys', 'nveNettniv': 'nveNettniv', 'nettnivaa': 'nettnivaa', 'eier': 'eier', 'eierOrgnr': 'eierOrgnr', 'navn': 'navn', 'spenningkV': 'spenningkV', 'driftsatt': 'driftsatt', 'nveOpprett': 'nveOpprett', 'nveEndret': 'nveEndret', 'kildEndret': 'kildEndret', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'lokalID': 'lokalID', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Kraftnett_Kraftlinje_11.set('fieldAliases', {'objType': 'objType', 'kompKode': 'kompKode', 'kompKodSys': 'kompKodSys', 'nveNettniv': 'nveNettniv', 'nettnivaa': 'nettnivaa', 'eier': 'eier', 'eierOrgnr': 'eierOrgnr', 'navn': 'navn', 'spenningkV': 'spenningkV', 'driftsatt': 'driftsatt', 'nveOpprett': 'nveOpprett', 'nveEndret': 'nveEndret', 'kildEndret': 'kildEndret', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'lokalID': 'lokalID', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Kraftnett_Transformatorstasjon_12.set('fieldAliases', {'objType': 'objType', 'kompKode': 'kompKode', 'kompKodSys': 'kompKodSys', 'nveNettniv': 'nveNettniv', 'nettnivaa': 'nettnivaa', 'eier': 'eier', 'eierOrgnr': 'eierOrgnr', 'navn': 'navn', 'spenningkV': 'spenningkV', 'driftsatt': 'driftsatt', 'nveOpprett': 'nveOpprett', 'nveEndret': 'nveEndret', 'kildEndret': 'kildEndret', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'lokalID': 'lokalID', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_Ports_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PORT_ID': 'PORT_ID', 'DATA_SRC_C': 'DATA_SRC_C', 'PORT_COOR_': 'PORT_COOR_', 'CNTR_CODE': 'CNTR_CODE', 'PORT_NAME': 'PORT_NAME', 'NAME_ASCI': 'NAME_ASCI', 'NAME_HTML': 'NAME_HTML', 'LOCD_STTS_': 'LOCD_STTS_', 'PORT_LOCD_': 'PORT_LOCD_', 'REMK': 'REMK', 'STAT_PORT_': 'STAT_PORT_', 'TEN_CODE': 'TEN_CODE', 'PROC_TEN_C': 'PROC_TEN_C', 'PORT_HIER_': 'PORT_HIER_', 'NUTS_CODE': 'NUTS_CODE', });
lyr_Individuallocations_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sitedevelopers_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_norway_0.set('fieldImages', {'NAME': 'TextEdit', 'ORGN_NAME': 'TextEdit', });
lyr_europe_1.set('fieldImages', {'NAME': 'TextEdit', 'ORGN_NAME': 'TextEdit', });
lyr_Havvind_Utredningsomrader_2.set('fieldImages', {'objType': 'TextEdit', 'omradeNavn': 'TextEdit', 'anbefaling': 'TextEdit', 'beskrivels': 'TextEdit', 'anleggType': 'TextEdit', 'areal_km2': 'TextEdit', 'dybdeMaks': 'TextEdit', 'dybdeMin': 'TextEdit', 'dybdeGjsn': 'TextEdit', 'vindhGjsn': 'TextEdit', 'avstKystMi': 'TextEdit', 'bolge50Max': 'TextEdit', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Vindkraft_VindkraftanleggOmr_3.set('fieldImages', {'objType': 'TextEdit', 'sakID': 'TextEdit', 'sakTittel': 'TextEdit', 'tiltakshav': 'TextEdit', 'sakKategor': 'Range', 'effekt_MW': 'TextEdit', 'prod_GWh': 'TextEdit', 'sakLenke': 'TextEdit', 'kommNavn': 'TextEdit', 'fylkesnavn': 'TextEdit', 'status': 'TextEdit', 'idriftDato': 'DateTime', 'utAvDriftD': 'DateTime', 'totAntTurb': 'Range', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Vindkraft_Vindkraftanlegg_4.set('fieldImages', {'objType': 'TextEdit', 'sakID': 'TextEdit', 'sakTittel': 'TextEdit', 'tiltakshav': 'TextEdit', 'sakKategor': 'Range', 'status': 'TextEdit', 'effekt_MW': 'TextEdit', 'prod_GWh': 'TextEdit', 'sakLenke': 'TextEdit', 'kommNavn': 'TextEdit', 'fylkesnavn': 'TextEdit', 'idriftDato': 'DateTime', 'utAvDriftD': 'DateTime', 'totAntTurb': 'Range', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Vindkraft_Vindturbin_5.set('fieldImages', {'objType': 'TextEdit', 'sakTittel': 'TextEdit', 'sakKategor': 'Range', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Vannkraft_Delfelt_6.set('fieldImages', {'objType': 'TextEdit', 'delfeltNr': 'Range', 'delfeltNvn': 'TextEdit', 'areal_km2': 'TextEdit', 'QN6190Mm3A': 'TextEdit', 'formal': 'TextEdit', 'vannkrvNr': 'Range', 'vannkrvNvn': 'TextEdit', 'magasinNr': 'Range', 'magNavn': 'TextEdit', 'nesteDfNr': 'Range', 'vassOmrNr': 'TextEdit', 'oppdatDato': 'DateTime', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Vannkraft_Magasin_7.set('fieldImages', {'objType': 'TextEdit', 'vatnLnr': 'TextEdit', 'magasinNr': 'Range', 'magNavn': 'TextEdit', 'kategori': 'Range', 'lrv_moh': 'TextEdit', 'hrv_moh': 'TextEdit', 'status': 'TextEdit', 'idriftAar': 'Range', 'kdbNr': 'Range', 'konsStatus': 'Range', 'kStatDato': 'DateTime', 'spID': 'TextEdit', 'formal_L': 'TextEdit', 'areal_km2': 'TextEdit', 'volOppdemt': 'TextEdit', 'delfeltNr': 'Range', 'vannkrvNr': 'Range', 'vkrvNavn': 'TextEdit', 'vassdragNr': 'TextEdit', 'hierarki': 'TextEdit', 'oppdatDato': 'DateTime', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Vannkraft_Vannkraftverk_8.set('fieldImages', {'objType': 'TextEdit', 'vannkrvNr': 'Range', 'vannkrv': 'TextEdit', 'vannkrvTyp': 'TextEdit', 'medium': 'TextEdit', 'status': 'TextEdit', 'idriftAar': 'Range', 'kdbNr': 'Range', 'konsStatus': 'Range', 'kStatDato': 'DateTime', 'spID': 'TextEdit', 'ytelse_NW': 'TextEdit', 'brFall_m': 'TextEdit', 'energiEkv': 'TextEdit', 'eier': 'TextEdit', 'kommuneNr': 'TextEdit', 'kommune': 'TextEdit', 'fylke': 'TextEdit', 'vassdragNr': 'TextEdit', 'hierarki': 'TextEdit', 'nedVkrvNr': 'Range', 'ndVkrvNr_L': 'TextEdit', 'opphav': 'TextEdit', 'oppdatDato': 'DateTime', 'noyaktighe': 'Range', 'malemetode': 'Range', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_NettKonsesjonsomrade_9.set('fieldImages', {'objType': 'TextEdit', 'konsType': 'TextEdit', 'eierNavn': 'TextEdit', 'eierOrgNr': 'TextEdit', 'eierType': 'TextEdit', 'planomrade': 'TextEdit', 'URL': 'TextEdit', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Kraftnett_Sjokabel_10.set('fieldImages', {'objType': '', 'kompKode': '', 'kompKodSys': '', 'nveNettniv': '', 'nettnivaa': '', 'eier': '', 'eierOrgnr': '', 'navn': '', 'spenningkV': '', 'driftsatt': '', 'nveOpprett': '', 'nveEndret': '', 'kildEndret': '', 'malemetode': '', 'noyaktighe': '', 'lokalID': '', 'uttakDato': '', 'ekspType': '', });
lyr_Kraftnett_Kraftlinje_11.set('fieldImages', {'objType': 'TextEdit', 'kompKode': 'TextEdit', 'kompKodSys': 'TextEdit', 'nveNettniv': 'TextEdit', 'nettnivaa': 'TextEdit', 'eier': 'TextEdit', 'eierOrgnr': 'TextEdit', 'navn': 'TextEdit', 'spenningkV': 'TextEdit', 'driftsatt': 'Range', 'nveOpprett': 'DateTime', 'nveEndret': 'DateTime', 'kildEndret': 'DateTime', 'malemetode': 'Range', 'noyaktighe': 'Range', 'lokalID': 'TextEdit', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Kraftnett_Transformatorstasjon_12.set('fieldImages', {'objType': 'TextEdit', 'kompKode': 'TextEdit', 'kompKodSys': 'TextEdit', 'nveNettniv': 'TextEdit', 'nettnivaa': 'TextEdit', 'eier': 'TextEdit', 'eierOrgnr': 'TextEdit', 'navn': 'TextEdit', 'spenningkV': 'TextEdit', 'driftsatt': 'Range', 'nveOpprett': 'DateTime', 'nveEndret': 'DateTime', 'kildEndret': 'DateTime', 'malemetode': 'Range', 'noyaktighe': 'Range', 'lokalID': 'TextEdit', 'uttakDato': 'DateTime', 'ekspType': 'TextEdit', });
lyr_Ports_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'PORT_ID': 'TextEdit', 'DATA_SRC_C': 'TextEdit', 'PORT_COOR_': 'TextEdit', 'CNTR_CODE': 'TextEdit', 'PORT_NAME': 'TextEdit', 'NAME_ASCI': 'TextEdit', 'NAME_HTML': 'TextEdit', 'LOCD_STTS_': 'TextEdit', 'PORT_LOCD_': 'TextEdit', 'REMK': 'TextEdit', 'STAT_PORT_': 'TextEdit', 'TEN_CODE': 'TextEdit', 'PROC_TEN_C': 'TextEdit', 'PORT_HIER_': 'TextEdit', 'NUTS_CODE': 'TextEdit', });
lyr_Individuallocations_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Sitedevelopers_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_norway_0.set('fieldLabels', {});
lyr_europe_1.set('fieldLabels', {});
lyr_Havvind_Utredningsomrader_2.set('fieldLabels', {});
lyr_Vindkraft_VindkraftanleggOmr_3.set('fieldLabels', {});
lyr_Vindkraft_Vindkraftanlegg_4.set('fieldLabels', {});
lyr_Vindkraft_Vindturbin_5.set('fieldLabels', {});
lyr_Vannkraft_Delfelt_6.set('fieldLabels', {});
lyr_Vannkraft_Magasin_7.set('fieldLabels', {});
lyr_Vannkraft_Vannkraftverk_8.set('fieldLabels', {});
lyr_NettKonsesjonsomrade_9.set('fieldLabels', {});
lyr_Kraftnett_Sjokabel_10.set('fieldLabels', {});
lyr_Kraftnett_Kraftlinje_11.set('fieldLabels', {});
lyr_Kraftnett_Transformatorstasjon_12.set('fieldLabels', {});
lyr_Ports_13.set('fieldLabels', {});
lyr_Individuallocations_14.set('fieldLabels', {});
lyr_Sitedevelopers_15.set('fieldLabels', {});
lyr_Sitedevelopers_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});