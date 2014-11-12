function EasyNotify(title, content, iconUrl) {
  var Notification = window.Notification || navigator.webkitNotifications,
      content = content || '',
      iconUrl = iconUrl || 'https://github.com/favicon.ico';

  if (!Notification) {
    alert('浏览器不支持桌面提醒功能');
  }

  else if (Notification.permission === 'granted') {
    var notification = new Notification(title, {icon: iconUrl, body: content});
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        var notification = new Notification(title, {icon: iconUrl, body: content});
      } else {
        window.Notification = function () {};
      }
    });
  }
}
