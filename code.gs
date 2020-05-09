function doGet() {

  return HtmlService.createHtmlOutputFromFile('table');
}

function getTableData(){
var url="https://docs.google.com/spreadsheets/d/1MQ2oHVMqPE02RugEmYYjca2feUEL59i4XbwfdbgYRc4/edit#gid=0";
var ss=SpreadsheetApp.openByUrl(url);
 // Logger.log(str);
var ws=ss.getSheetByName("Sheet1");
var data=ws.getRange(2,1,ws.getLastRow()-1,3).getValues();
  Logger.log(data);
  return data;
}

function sendToSpreadsheet(e) {
var url="https://docs.google.com/spreadsheets/d/1MQ2oHVMqPE02RugEmYYjca2feUEL59i4XbwfdbgYRc4/edit#gid=0";
var ss=SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Sheet1");
  var data = ws.getDataRange().getValues();
  var ar = [];
  data.forEach(function(f) {
    if (~f.indexOf(e)) {
      ar.push(f);
    }
  });
  Logger.log(ar);
  return JSON.stringify(ar)
}



  
