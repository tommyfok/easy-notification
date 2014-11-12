function EasyNotify(title, content, iconUrl, ifFailedCallback) {
  var Notification = window.Notification || navigator.webkitNotifications,
      content = content || '',
      iconUrl = iconUrl || 'https://github.com/favicon.ico',
      ifFailedCallback = typeof ifFailedCallback === 'function' ? ifFailedCallback : function () {};

  if (!Notification) {
    ifFailedCallback();
  }

  else if (Notification.permission === 'granted') {
    var notification = new Notification(title, {icon: iconUrl, body: content});
    notification.onclick = window.focus;
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        var notification = new Notification(title, {icon: iconUrl, body: content});
        notification.onclick = window.focus;
      } else {
        window.Notification = function () {};
      }
    });
  }
}
