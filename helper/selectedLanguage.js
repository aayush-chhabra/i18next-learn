define(['helper/browserLanguageDetect','helper/i18next.amd'], function (currentLanguage, i18n) {

	var onDropDownChange = function(evt){

  		var newUserLanguage = evt.target.value;
  		  		
  		if(newUserLanguage == "Espanol")
  		{
  			currentLanguage.userLanguage = "de";
  		}
  		else if(newUserLanguage == "English")
  		{
  			currentLanguage.userLanguage = "en";
  		}
	  	i18n.init({ lng: currentLanguage.userLanguage },function(t){
	  		$("#myDiv").html(t("Hello"));
        $("#myNewDiv").html(t("Hello", {count: 3}));

	  	});
	}
	return{
		onDropDownChange : onDropDownChange
	}
});