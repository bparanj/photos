angular.module('photoApp').factory('photoSearchService', function() {
	'use strick';
	
	var service = {};
	
	service.findPhotos = function(keyword, callback) {
	  var matches = [];
	  
	  if (keyword.toLowerCase() === 'water') {
	      matches = [
	      {
	        title: 'A Perfect Morning',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/water1.jpg'
	      },
	      {
	        title: 'Footprints',
	        thumbUrl: ' http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/water2.jpg'
	      },
	      {
	        title: 'Rush (II)',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/water3.jpg'
	      },
	      {
	        title: 'El Matador State Beach',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/water4.jpg'
	      },
	      {
	        title: 'El Matador State Beach',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/water5.jpg'
	      },
	      {
	        title: 'Big Sur',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/water6.jpg'
	      }];
	    } else if (keyword.toLowerCase() === 'mountains') {
	      matches = [
	      {
	        title: 'Difficult Roads',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains1.jpg'
	      },
	      {
	        title: 'Klondike Highway - Mountain',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains2.jpg'
	      },
	      {
	        title: 'Mount Ossa and Cathedral Mountain',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains3.jpg'
	      },
	      {
	        title: 'Heading Down the Mountain',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains4.jpg'
	      },
	      {
	        title: 'Stone Bridge',
	        thumbUrl: 'http://googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains5.jpg'
	      }
	      ];
	    }
	
		callback(matches);
	};
	
	return service;
});