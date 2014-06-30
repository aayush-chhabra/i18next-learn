require.config({
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'scripts/jquery'
    }
});



require(['helper/browserLanguageDetect','helper/selectedLanguage','jquery','helper/i18next.amd','helper/selectedGender', 'helper/selectedNumber'], 
	function(currentLanguage, selectedLanguage, $, i18n, selectedGender, selectedNumber){

    $('document').ready(function(){

    	alert("page realods!!");

    	i18n.init({ lng: currentLanguage.userLanguage },function(t){

  			$("#myDiv").html(t("Hello"));
        $("#myNewDiv").html(t("Hello", {count: 3}));
        
  		
      });

      $('#language-selector').change(selectedLanguage.onDropDownChange);
      $('#gender-selector').change(selectedGender.onDropDownChange);
      $('#number-selector').change(selectedNumber.onDropDownChange);

    });
});