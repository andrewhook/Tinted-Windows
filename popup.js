document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.insertCSS(null, {file: "tints.css"});
  chrome.tabs.executeScript(null, {file: "content_script.js"});

  var buttons = document.getElementsByClassName('apply-tint');
  for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function() {
      var tintColor = this.dataset.tint;
      chrome.tabs.executeScript(null, {file: "set_tint.js"});
      chrome.tabs.executeScript(null, {
        code: 'document.getElementById("tint").setAttribute("class", "' + tintColor + '");'
      });
    });
  }

  var applyOpacityBtn = document.getElementById('apply-opacity');
  applyOpacityBtn.addEventListener('click', function() {
    var opacityInput = document.getElementById('opacity');
    var opacityValue = opacityInput.value;
    chrome.tabs.executeScript({
      code: "document.getElementById('tint').setAttribute('style', 'opacity:" + opacityValue + "');"
    });
  });
});
