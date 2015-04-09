/**
 * Mapping for date and time format that is dependent to moment.js library
 */
(function(wcc) {
	wcc.dateTimeFormat = {
		'm/dd/yy': 			
		{momentFormat: 'M/DD/YY', 				jqueryFormat: 'm/dd/yy'},
		'mm/dd/yyyy': 		
		{momentFormat: 'MM/DD/YYYY', 			jqueryFormat: 'mm/dd/yyyy'},
		'mm/dd/yy hh:mm': 	
		{momentFormat: 'MM/DD/YY HH:mm', 		jqueryFormat: 'MM/dd/yy HH:mm'},
		
		// Data Element Format
		'DMY': 				{momentFormat: 'DDMMYY', 				jqueryFormat: 'ddmmy'},
		'MD': 				{momentFormat: 'MMDD', 					jqueryFormat: 'mmdd'},
		'DM': 				{momentFormat: 'DDMM', 					jqueryFormat: 'ddmm'},
		'YMM': 				{momentFormat: 'YYMMDD', 				jqueryFormat: 'ymmdd'},
		'YMDHM': 			{momentFormat: 'YYMMDDHHmm', 			jqueryFormat: 'yymmddhhmm'},
		'YMDHMG': 			{momentFormat: 'YYYY-MM-DD HH:mm:ssZ', 	jqueryFormat: 'yy-mm-dd hh:mm:ssz'},
		'ddmmy': 			{momentFormat: 'DDMMY', 				jqueryFormat: 'ddmmy'},
		'mmdd': 			{momentFormat: 'MMDD', 					jqueryFormat: 'mmdd'},
		'ymmdd': 			{momentFormat: 'YYMMDD', 				jqueryFormat: 'ymmdd'},
		'yymmddhhmm': 		{momentFormat: 'YYMMDDHHMM', 			jqueryFormat: 'yymmddhhmm'},
		'UTC': 				{momentFormat: 'YYMMDDHHMM', 			jqueryFormat: 'yymmddhhmm'},
		'UTC-NOTIME': 		{momentFormat: 'YY/MM/DD', 				jqueryFormat: 'yy/mm/dd'},
		'CM':				{momentFormat: 'YYYY-MM-DD',			jqueryFormat: 'yyyy-mm-dd'},
		
		'dd MMM yyyy' : 	{momentFormat: 'DD MMM YYYY', 			jqueryFormat: 'dd M yy'},
		'ddmmyyyy HH:MM:SS':{momentFormat: 'DDMMYYYY HH:MM:SS', 	jqueryFormat: 'ddmmyyyy hh:mm:ss'},

        //preferences date format: defined in DateFormatEnum.java
		'MMM dd yyyy' :  	{momentFormat: 'MMM DD YYYY', 			jqueryFormat: 'M dd yyyy'},
		'dd/MM/yyyy' : 		{momentFormat: 'DD/MM/YYYY', 			jqueryFormat: 'dd/mm/yy'},
		'MM/dd/yyyy' :  	{momentFormat: 'MM/DD/YYYY', 			jqueryFormat: 'mm/dd/yyyy'},
		'yyyy/MM/dd' :  	{momentFormat: 'YYYY/MM/DD', 			jqueryFormat: 'yy/mm/dd'},

		'mm/dd/yyyy hh:mm': {momentFormat: 'MM/DD/YYYY HH:mm', 		jqueryFormat: 'MM/dd/yyyy HH:mm'},

        //preferences time format: defined in TimeFormatEnum.java
		'24 (HH:mm)' : 		{momentFormat: 'HH:mm', 				jqueryFormat: ''},
		'12 (hh:mm a)' : 	{momentFormat: 'hh:mm a', 				jqueryFormat: ''}
	};
})(window.wcc = window.wcc || {});