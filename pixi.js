// old version of pixi.js FontHeight
// simplified for this app.
determineFontHeight = function(fontStyle) {
  let body = document.getElementsByTagName('body')[0];
  let dummy = document.createElement('div');
  let dummyText = document.createTextNode('Mg');
  dummy.appendChild(dummyText);
  dummy.setAttribute('style', fontStyle + ';position:absolute;top:0;left:0');
  body.appendChild(dummy);
  result = dummy.offsetHeight;
  body.removeChild(dummy);
  return result;
};