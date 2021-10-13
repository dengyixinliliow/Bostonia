var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-71.05, 42.36]),
      zoom: 12
    })
  });

    $("#downtown").mouseenter(() => {
        $("#downtown-d").fadeIn();
     })

    $('#downtown').mouseout(() => {
        $('#downtown-d').fadeOut();
    })

    $("#backbay").mouseenter(() => {
        $("#backbay-d").fadeIn();
    })

    $('#backbay').mouseout(() => {
        $('#backbay-d').fadeOut();
    })

    $("#fenway").mouseenter(() => {
        $("#fenway-d").fadeIn();
    })

    $('#fenway').mouseout(() => {
        $('#fenway-d').fadeOut();
    })

    $("#bay").mouseenter(() => {
        $("#bay-d").fadeIn();
    })

    $('#bay').mouseout(() => {
        $('#bay-d').fadeOut();
    })


  