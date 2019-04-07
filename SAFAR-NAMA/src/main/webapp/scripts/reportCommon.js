var levelCnt;		
//Common method to add value in dropdown
function addOption(selectbox,text,value ){
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);	
}

//Common method to add value in dropdown
function addSelOption(selectbox,text,value, selVal){
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	if(selVal == value) {
		optn.selected = "true";
	}
	selectbox.options.add(optn);	
}

function enableDisableDropDowns() {
	levelCnt = $('#levelCnt').val();
	arrLevelId = $('#levelIds').val().split(',');
		
	for(var i = 0; i < levelCnt; i++){
		document.getElementById(arrLevelId[i]).disabled = false;
	}
	if (document.getElementById('reportForTeam').checked) {
		enableOrgLevelDropDown();
	} else { //Self and DirectReportee		
		for(var i = 0; i < levelCnt; i++){
			var curLevel = arrLevelId[i];
			var ordCode = "";
			var orgNm = "";
			$('#'+curLevel).empty();
			
			for(var j = 0;j<levelArray.length;j++){	
				if(levelArray[j].code == curLevel){
					ordCode = levelArray[j].posCode;
					orgNm = levelArray[j].posName;
				}
			}
			if(ordCode == ""){
				addOption(document.getElementById(curLevel), "Select", "");
				document.getElementById(curLevel).disabled = true;
			}else{
				addOption(document.getElementById(curLevel), orgNm, ordCode);
			}
		}
	}
}

//Enables all the fields required before submission
function enableFieldsForSubmission() {
	document.getElementById('reportForSelf').disabled = false;
	
	for(var i = 0; i < levelCnt; i++){
		var curLevel = arrLevelId[i];
		document.getElementById(curLevel).disabled = false;
	}
}


function enableOrgLevelDropDown() {	
	populateOrgLevelList(0,vUserId);	
}


function populateOrgLevelList(index,emp) {
	var curLevel = arrLevelId[index];
	var nextLevel = '';
	selVal= '';	
	parentCode = '';
	var parentLevel = '';
	 if(levelArray[index] != undefined && levelArray[index].showLevel == 'block'){
		if(index != 0){
			parentCode = document.getElementById(arrLevelId[index-1]).value;
			parentLevel = arrLevelId[index-1];
		}
		if(index != 0 && parentCode == ""){//check previous dropdown selected val
			for(var i = index;i < levelCnt;i++){
				$('#'+arrLevelId[i]).empty();
				addOption(document.getElementById(arrLevelId[i]), "Select", "");
			}
		}else{
			// to show selected value on view page
			var level = '';
			for(var i = 0 ; i < selLevelCd.length; i++){
				level = 'LEVEL' +(i+1);
				if(curLevel == level){
					selVal	= selLevelCd[i];
					break;
				}
			}
			
			ordCode = levelArray[index].accessLevelCode;
			orgNm = levelArray[index].accessLevelName;
			if(ordCode != ''){	
				$('#'+curLevel).empty();
				addOption(document.getElementById(curLevel), orgNm, ordCode);
				if(index < levelCnt-1){
					populateOrgLevelList(index+1,emp);
				}
			}else{
				ReportAjaxController.getOrgLevelList(emp,curLevel,parentLevel,parentCode,
				{
					callback : function(returnData) {
						$('#'+curLevel).empty();
						if(returnData.length > 1 || returnData.length == 0) {
							addOption(document.getElementById(curLevel), "Select", "");
						}
						for ( var i = 0; i < returnData.length; i++) {
							
							if(returnData[i].orgName != null) {
								addSelOption(document.getElementById(curLevel), returnData[i].orgName, returnData[i].orgCode, selVal);
							}
						}
						if(returnData.length >= 1) {
							populateOrgLevelList(index+1,emp);
						}else{
							while(index < levelCnt-1){
								nextLevel = arrLevelId[++index];
								$('#'+nextLevel).empty();
								addOption(document.getElementById(nextLevel), "Select", "");
							}
						}
					},
					timeout : 20000,
					async:false, 
					errorHandler : function(message) {
						alert("An error occurred " + message);
					}
				});
			}
		}
	}	
}

//get selected values of dropdown before load
function setOrgLevelVal(){
	var valid = true;
	for(var i = 0; i <$('#levelCnt').val(); i++){
		if(valid == true){
			var orgLevel = 'org_'+levelArray[i].code;
			document.getElementById(orgLevel).value = levelArray[i].posCode;
			if(levelArray[i].head == 'true'){
				valid = false;
			}
		}
	}
}
