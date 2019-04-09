//Código para exibir o mapa

  window.onload = function(){

    //configurando plugin de notificações
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
      console.log(navigator.notification);
  }

  //configurando plugin de geolocalização
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log("navigator.geolocation works well");
  }

    var onSuccess = function(position) {

      L.mapquest.key = 'VuATH4WRuwVc1ZJUa2GyU3oOaDiljlOr';

      var map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],//Configurando coordenadas recebidas pelo gps
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
      });

      map.addControl(L.mapquest.control());
    };

    //função de erro
    function onError(error){
      navigator.notification.alert('code: '    + error.code    + '\n' +
                                   'message: ' + error.message + '\n');
    }

    //Pegando coordenadas atuais
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }