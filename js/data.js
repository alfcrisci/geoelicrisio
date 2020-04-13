var pointGroupLayer;

// Returns different colors depending on the string passed


var notes = [ "Nrow","ID","time","Area",                
"Area_N","Genere","Specie","Sottospecie",        
"Localit","n_indvd","Sb_SOST","Habitat",             
"altitudn","esposizione","Fs_fnlg","Fotpint",             
"Bmssxol","cmpnbtn","Talea","Talea_NON_attecchita",
"TALEA_attecchita","DNA (EtOH)","SEM","Mrfmtrc",             
"Cluster_Chemiotipi","Dendro_Chemio","Cluster_Morfotipi",
"Dendro_Morfo","Lon","Lat","Note"];


// addPoints is a bit simpler, as no GeoJSON is needed for the points
// It does the same check to overwrite the existing points layer once the Google Sheets data comes along

function addPoints(data) {
  if (pointGroupLayer != null) {
    pointGroupLayer.remove();
  }
  pointGroupLayer = L.layerGroup().addTo(map);

  for (var row = 0; row < data.length; row++) {
    var marker = L.marker([data[row].Lat, data[row].Lon]).addTo(pointGroupLayer);

      marker.feature = {
        properties: {
        ID:data[row].ID,
        NrowDB:data[row].Nrow,
        location: data[row].Localit,
        time:data[row].Localit,
        Area:data[row].Area,
        Area_N:data[row].Area_N,
        Genere:data[row].Genere,
        Specie:data[row].Specie,
        Sottospecie:data[row].Sottospecie,
        Localit:data[row].Localit,
        n_indvd:data[row].n_indvd,
        Sb_SOST:data[row].Sb_SOST,
        Habitat:data[row].Habitat,
        altitudn:data[row].altitudn,
        esposizione:data[row].esposizione,
        Fs_fnlg:data[row].Fs_fnlg,
        Fotpint:data[row].Fotpint,
        Bmssxol:data[row].Bmssxol,
        cmpnbtn:data[row].cmpnbtn,
        Talea:data[row].Talea,
        Talea_NON_attecchita:data[row].Talea_NON_attecchita,
        TALEA_attecchita:data[row].TALEA_attecchita,
        DNA_EtOH:data[row].DNA_EtOH,
        SEM:data[row].SEM,
        Mrfmtrc:data[row].Mrfmtrc,
        Cluster_Chemiotipi:data[row].Cluster_Chemiotipi,
        Dendro_Chemio:data[row].Dendro_Chemio,
        Cluster_Morfotipi:data[row].Cluster_Morfotipi,
        Dendro_Morfo:data[row].Dendro_Morfo,
        Lon:data[row].Lon,
        Lat:data[row].Lat,
        note:data[row].Note

      }
    };
    marker.on({
      click: function(e) {
        L.DomEvent.stopPropagation(e);
        document.getElementById("sidebar-title").innerHTML =
          e.target.feature.properties.location;
        document.getElementById("sidebar-content").innerHTML =
          "<strong>ID</strong>:"+e.target.feature.properties.ID + "<br>" +
          "<strong>Indice riga database</strong>:"+e.target.feature.properties.NrowDB + "<br>" + 
          "<strong>Data di raccolta</strong>:"+e.target.feature.properties.time + "<br>" +
          "<strong>Area</strong>:"+e.target.feature.properties.Area + "<br>" + 
          "<strong>Area_N</strong>:"+e.target.feature.properties.Area_N + "<br>" +
          "<strong>Genere</strong>:"+e.target.feature.properties.Genere + "<br>" + 
          "<strong>Specie</strong>:"+e.target.feature.properties.Specie + "<br>" +
          "<strong>Sottospecie</strong>:"+e.target.feature.properties.Sottospecie + "<br>" + 
          "<strong>Localita'</strong>:"+e.target.feature.properties.Localit + "<br>" +
          "<strong>Numerosità Popolazione</strong>:"+e.target.feature.properties.n_indvd + "<br>" +
          "<strong>Classe Substrato</strong>:"+e.target.feature.properties.Sb_SOST + "<br>" + 
          "<strong>Habitat</strong>:"+e.target.feature.properties.Habitat + "<br>" +
          "<strong>Altitudine</strong>:"+e.target.feature.properties.altitudn + "<br>" + 
          "<strong>Esposizione</strong>:"+e.target.feature.properties.esposizione + "<br>" +
          "<strong>Fase Fenologica</strong>:"+e.target.feature.properties.Fs_fnlg + "<br>" + 
          "<strong>Foto Pianta</strong>:"+e.target.feature.properties.Fotpint + "<br>" +
          "<strong>Biomassa raccolta</strong>:"+e.target.feature.properties.Bmssxol + "<br>" +
          "<strong>Campione botanico</strong>:"+e.target.feature.properties.cmpnbtn + "<br>" + 
          "<strong>Talea</strong>:"+e.target.feature.properties.Talea + "<br>" +
          "<strong>Talea morta</strong>:"+e.target.feature.properties.Talea_NON_attecchita + "<br>" + 
          "<strong>Talea viva</strong>:"+e.target.feature.properties.TALEA_attecchita + "<br>" +
          "<strong>DNA</strong>:"+e.target.feature.properties.DNA_EtOH + "<br>" +
          "<strong>Campione microscospia</strong>:"+e.target.feature.properties.SEM + "<br>" + 
          "<strong>Campione morfometrico</strong>:"+e.target.feature.properties.Mrfmtrc + "<br>" +
          "<strong>Cluster Chemiotipo</strong>:"+e.target.feature.properties.Cluster_Chemiotipi + "<br>" + 
          "<strong>Dendro Chemiotipo</strong>:"+e.target.feature.properties.Dendro_Chemio + "<br>" +
          "<strong>Cluster Morfotipo</strong>:"+e.target.feature.properties.Cluster_Morfotipi + "<br>" +
          "<strong>Dendro Morfotipo</strong>:"+e.target.feature.properties.Dendro_Morfo + "<br>" + 
          "<strong>Longitudine</strong>:"+e.target.feature.properties.Lon + "<br>" +
          "<strong>Latitudine</strong>:"+e.target.feature.properties.Lat + "<br>" + 
          "<strong>Note</strong>:"+e.target.feature.properties.note + "<br>"+
          "<strong>Campionatore</strong>:"+"Lorenzo Marini UNIFI";

      sidebar.open(panelID);
      }
    });

    // AwesomeMarkers is used to create fancier icons

    var icon = L.AwesomeMarkers.icon({
      icon: "info-sign",
      iconColor: data[row].colore_marker_2,
      markerColor: data[row].colore_marker,
      prefix: "glyphicon",
      extraClasses: "fa-rotate-0"
    });
    marker.setIcon(icon);
  }
}

