(function () {
    'use strict';

    var sm__Obj = window[window.SocialMinerObject];
    var sm__storeId = sm__Obj.Main.CookieStorageRepository.get('LOJA', true);

    try {
      var method = 'GET';
      var url = "https://".concat(window.location.hostname, "/mvc/store/greeting?loja=").concat(sm__storeId);
      var xhr = new XMLHttpRequest();

      if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest !== 'undefined') {
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        xhr = null;
      }

      if (xhr) {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
              var sm__data = JSON.parse(xhr.responseText);

              if (!Array.isArray(sm__data.data)) {
                var sm__UserEmail = sm__data.data.email;

                if (sm__UserEmail.length) {
                  var sm__form = {
                    email: sm__UserEmail
                  };
                  var sm__UserName = sm__data.data.name;

                  if (sm__UserName && sm__UserName.length) {
                    sm__form.name = sm__UserName;
                  }

                  sm__Obj.Main.SmConnector.organicOptin(sm__form).then(function () {
                    return sm__Obj.Main.SmConnector.finishOrganicOptin();
                  });
                }
              } else {
                sm__Obj.Main.SmConnector.finishOrganicOptin();
              }
            }
          }
        };

        xhr.send();
      }
    } catch (e) {}

}());
