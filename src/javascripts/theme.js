$(function () {
  /* global PurpleMine */
  'use strict'

  // all external links to open in a new tab
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

  // use pretty checkbox/radio elements
  function replaceRadiosAndCheckboxElements() {
    $('[type="checkbox"],[type="radio"]').each(function(){
      var _this = $(this);
      if ( _this.hasClass('pretty-checkbox-radio') === false ) {
        _this.addClass('pretty-checkbox-radio');
        $('<span class="pretty-checkbox-radio-wrap">').insertBefore(_this)
        .append(_this.clone())
        .append($('<span class="label-text">'));
        _this.remove();
      }
    });
  }

  // trigger input skinning upon ajax calls
  $(document).ajaxComplete(function(){
    replaceRadiosAndCheckboxElements();
  });

  // skin all radio/checkbox inputs
  replaceRadiosAndCheckboxElements();

  // bind click event for input/radio for the <span class="label-text"> DOM element to trigger the status toggle
  // this is usefull when the input is not wrapped inside a <label> tag
  $('body').on('click', '.label-text', function(){
    $(this).prev().trigger('click');
  });

  /* eslint-disable no-new */
  new PurpleMine.SidebarToggler()
  new PurpleMine.HistoryTabs()
  new PurpleMine.MenuCollapse()
});
