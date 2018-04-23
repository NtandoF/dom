// get a reference to the sms or call radio buttons
 var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields

var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
var updateBtn = document.querySelector(".updateSettings")
//get a reference t the 'Update settings' button
var addBtn = document.querySelector(".SettingsAddBtn")
// create a variables that will keep track of all the settings
var callSett = 0;
var smsSett = 0;
var totalSett = 0;

var callcost = 0;
var smscost = 0;
var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var callTotalSetting = document.querySelector('.callTotalSettings')
var smsTotalSetting = document.querySelector('.smsTotalSettings')
var TotalSetting = document.querySelector('.TotalSettings')

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function settings(){
callcost = parseFloat(callCostSettings.value);
console.log(callcost)

  var updatesmscost = smsCostSettings.value;
smscost = parseFloat(updatesmscost);
console.log(smscost)

  warningLevel = parseFloat(warningLevelSetting.value);

  criticalLevel = parseFloat(criticalLevelSetting.value);

}
updateBtn.addEventListener('click', settings);


 function billtype(){
    //   //To get the bill type to add from the radio button
    var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedBtn){
       var billType = checkedBtn.value;
       // billItemType will be 'call' or 'sms'

       if (billType === call){
          callSett += callcost;
       }

       else if (billType === sms){
        smsSett += smscost;
       }
    }
    callTotalSetting.innerHTML =  callSett.toFixed(2);
    smsTotalSetting.innerHTML =  smsSett.toFixed(2);
    var totalcost = callSett + smsSett;
    TotalSetting.innerHTML = totalcost.toFixed(2);

}
//add an event listener for when the add button is pressed
addBtn.addEventListener('click', billtype);
