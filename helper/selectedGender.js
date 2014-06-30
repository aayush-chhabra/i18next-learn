define(['helper/browserLanguageDetect','helper/i18next.amd'], function (currentLanguage, i18n) {

	var onDropDownChange = function(evt){
      //console.log(evt);
  		var newGender = evt.target.value;
  		
      if(newGender === "I dont Know")
      {
        newGender = "";
      }
	  	
      i18n.init({ lng: currentLanguage.userLanguage },function(t){
           $("#myGenderDiv").html("Gender Thingy: "+t("friend_context", {context: newGender}));
	  	});
	}
	return{
		onDropDownChange : onDropDownChange
	}
});