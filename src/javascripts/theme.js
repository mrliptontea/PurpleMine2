$(function () {
  /* global PurpleMine */
  'use strict'

  // all external links to open in a new tab
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

  
  // use pretty checkbox/radio elements
  function replaceRadiosAndCheckboxElements() {
    $('label').each(function(){
      var _this = $(this);
      var _txt = _this.text();
      var _input = _this.find('input');
      var _span = _this.find('label-text');

      if ( _input.length > 0 && _span.length == 0 ) {
        _this.text('')
        .append(_input.clone())
        .append('<span class="label-text">' + _txt + '</span>');
      }
    });
  }

  $(document).ajaxComplete(function(){
    replaceRadiosAndCheckboxElements();
  });

  replaceRadiosAndCheckboxElements();

  /* eslint-disable no-new */
  new PurpleMine.SidebarToggler()
  new PurpleMine.HistoryTabs()
  new PurpleMine.MenuCollapse()
});
