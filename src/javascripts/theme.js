$(function () {
  /* global PurpleMine */
  'use strict'

  	// all external links to open in a new tab
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

  /* eslint-disable no-new */
  new PurpleMine.SidebarToggler()
  new PurpleMine.HistoryTabs()
  new PurpleMine.MenuCollapse()
})
