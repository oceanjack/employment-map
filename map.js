var getMap = function() {
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(118.855317, 32.035225);
  map.centerAndZoom(point, 5);
  map.enableScrollWheelZoom();
  var getPos = function(pos) {
    var points = [
      new BMap.Point(116.407526, 39.90403), //北京
          new BMap.Point(114.109497, 22.396428), //香港
          new BMap.Point(121.5598345, 25.091075), //台北
          new BMap.Point(-122.4194155, 37.7749295), //旧金山
          new BMap.Point(-0.1254872, 51.508515), //伦敦
          new BMap.Point(144.96328, -37.814107), //墨尔本
          new BMap.Point(120.305578, 31.588086) //无锡
            ];
    for(var i = 0, l = pos.length; i < l; ++i) {
      points.push(new BMap.Point(pos[i]['lng'], pos[i]['lat']));
    }
    var len = points.length;
    for(var i = 0; i < len; ++i) {
      //var polyline = new BMap.Polyline([point, points[i]], {strokeColor:"red", strokeWeight:1, strokeOpacity:0.5});
      //map.addOverlay(polyline);
      var curve = new BMapLib.CurveLine([point, points[i]], {strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});
      map.addOverlay(curve);
    }
    var markers = [new BMap.Marker(point)];
    for(var i = 0; i < len; ++i) {
      markers.push(new BMap.Marker(points[i]));
    }
    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
    for(var i = 0; i < len; ++i) {
      markers[i + 1].addEventListener("click", function(id) {
        return function() {
          var this_ = this;
          var getMsg = function(con) {
            var infoWindow = new BMap.InfoWindow(con);
            this_.openInfoWindow(infoWindow);
          };
          //for api
          var msg = [{
            'uid': '1006840401',
            'ul': 'img/head.png',
            'un': '张三丰',
            'up': '某处',
            'uc': '1098758327662',
            'uh': '天气不错'
          },
          {
            'uid': '1006840401',
            'ul': 'img/head.png',
            'un': '张三丰',
            'up': '某处',
            'uc': '1098758327662',
            'uh': '天气不错'
          },
          {
            'uid': '1006840401',
            'ul': 'img/head.png',
            'un': '张三丰',
            'up': '某处',
            'uc': '1098758327662',
            'uh': '天气不错'
          },
          {
            'uid': '1006840401',
            'ul': 'img/head.png',
            'un': '张三丰',
            'up': '某处',
            'uc': '1098758327662',
            'uh': '天气不错'
          },
          {
            'uid': '1006840401',
            'ul': 'img/head.png',
            'un': '张三丰',
            'up': '某处',
            'uc': '1098758327662',
            'uh': '天气不错',
          }];
          var con = "";
          if(msg.length <= 1) {
            con = con +
              "<div class='pointShow'>" + 
              "<div class='pointHead'>" + 
              "<img src='" + msg[0]['ul'] + "' class='pointImg'/>" + 
              "</div>" + 
              "<p class='pointItem pointHeadUp'>用户名: " + msg[0]['un'] +"</p>" + 
              "<p class='pointItem'>姓名: " + msg[0]['un'] +"</p>" + 
              "<p class='pointItem'>地点: " + msg[0]['up'] +"</p>" + 
              "<p class='pointItem'>联系方式: " + msg[0]['uc'] + "</p>" + 
              "<p class='pointItem'>心情: " + msg[0]['uh'] + "</p>" + 
              "</div>";
          } else {
            con = con +
              "<div class='pointShow'>" +
              "<div class='pointList pointListOne'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[0] ? msg[0]['ul'] : '') + "'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[1] ? msg[1]['ul'] : '') + "'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[2] ? msg[2]['ul'] : '') + "'>" +
              "</div>" +
              "<div class='pointList'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[3] ? msg[3]['ul'] : '') + "'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[4] ? msg[4]['ul'] : '') + "'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[5] ? msg[5]['ul'] : '') + "'>" +
              "</div>" +
              "<div class='pointList'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[6] ? msg[6]['ul'] : '') + "'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[7] ? msg[7]['ul'] : '') + "'>" +
                "<img class='pointListItem pointImgs' src='" + (msg[8] ? msg[8]['ul'] : '') + "'>" +
              "</div>" +
              "<p class='pointList pointListMid'>更多</p>" +
              "</div>";
          }
          getMsg(con);
        };
      }(i));
    }
  };
  //for api
  var getDataPos = function() {
    var pos = [];
    for(var i = 0; i < 3; ++i) {
      pos.push({'lng': Math.random() * 360 - 180, 'lat': Math.random() * 180 - 90});
    }
    getPos(pos);
    window.setTimeout(function() {getDataPos();}, 2000);
  };
  getDataPos();
}();
