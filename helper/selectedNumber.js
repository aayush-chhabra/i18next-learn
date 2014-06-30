define(['helper/browserLanguageDetect','helper/i18next.amd'], function (currentLanguage, i18n) {

  var onDropDownChange = function(evt){
      //console.log(evt);
      var newNumber = parseInt(evt.target.value);
      
      i18n.init({ lng: currentLanguage.userLanguage },function(t){
           
           $("#myNumberDiv").html("Number Thingy: "+t("Hello", {count: newNumber}));
      });
  }
  return{
    onDropDownChange : onDropDownChange
  }
});