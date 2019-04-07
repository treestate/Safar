$(document).ready(function() {
	var bar;
	var percent;


	$(".file-dropzone").on('dragover', handleDragEnter);
	$(".file-dropzone").on('dragleave', handleDragLeave);
	$(".file-dropzone").on('drop', handleDragLeave);

	function handleDragEnter(e) {
		this.classList.add('drag-over');
	}

	function handleDragLeave(e) {
		this.classList.remove('drag-over');
	}

	// "dropzoneForm" is the camel-case version of the form id "dropzone-form"
	Dropzone.options.dropzoneForm = {
		
		url : "uploadBlInv.do",
		autoProcessQueue : false,
		uploadMultiple : false,
		maxFilesize : 10, // MB
		parallelUploads : 1,
		maxFiles : 10,
		addRemoveLinks : false,
		previewsContainer : ".dropzone-previews",

		// The setting up of the dropzone
		init : function() {
			var myDropzone = this;
			
			$('#upload-button').on("click", function(e) {

                myDropzone.processQueue();
          });
			
			
			// customizing the default progress bar
			this.on("uploadprogress", function(file, progress) {
				
				progress = parseFloat(progress).toFixed(0);

				var progressBar = file.previewElement.getElementsByClassName("percent")[0];
				var bar = file.previewElement.getElementsByClassName("bar")[0];
				bar.style.width =(progress+"%");
				progressBar.innerHTML = progress + "%";
				if (progress >= 100) {
					progressBar.innerHTML = "Complete!";
				}
				
			});

		// displaying the uploaded files information in a Bootstrap dialog
		this.on("success", function(files, serverResponse) {
			showInformationDialog(files, serverResponse);
		});
		
		}
	}

	function showInformationDialog(files, objectArray) {
		$("#tabAllSaveBtn").show();	

		if (objectArray.length > 1) {
			$(".invSave").hide();
			$("#tabAllSaveBtn").show();
		}

		var j = 0;
		for (var i = dragTabId; i < parseInt(dragTabId + objectArray.length); i++ ) {
			var infoObject = objectArray[j];
			if ((i > dragTabId ) || dragTabId == totalInv) { //For all invoices add new tab
				addRowInvs();
			}
			document.getElementById('totalInvAmt'+i).value = infoObject.totalInvAmt;
			document.getElementById('invNo'+i).value = infoObject.invNo;
			document.getElementById('invDt'+i).value = infoObject.invDt;
			document.getElementById('billToParty'+i).value = infoObject.billToParty;
			document.getElementById('customerId'+i).value = infoObject.customerId;
			document.getElementById('linRefNo'+i).value = infoObject.linRefNo;
			document.getElementById('gstNo'+i).value = infoObject.gstNo;
			document.getElementById('invAttTitle'+i).value = infoObject.invAttTitle;
			if (infoObject.validTill != null && infoObject.validTill != undefined ) {
				document.getElementById('validTill'+i).value = infoObject.validTill;
			}
			if(infoObject.invCategory != null && infoObject.invCategory!= undefined ) {
				$('#invCategory'+i).val(infoObject.invCategory);
			}
			if(infoObject.invTp != null && infoObject.invTp!= undefined ) {
				$('#invTp'+i).val(infoObject.invTp);
			}
			if(infoObject.billToParty != null && infoObject.billToParty!= undefined ) {
				$('#billToParty'+i).val(infoObject.billToParty);
			}
			$('#attchFileDiv'+i).children().remove();
			
			$('#attchFileDiv'+i).append($('<input type="hidden" id="attchFileNm'+i+ '" value="'+infoObject.attchFileNm+'" name="blInfoVo.invInfoVoList['+i+'].attchFileNm">'));
			$('#attchFileDiv'+i).append($('<label class="col-md-4 control-label" for="invTp">File Uploaded</label><div class="col-md-8 "><a onclick="openTempDocument(\''+infoObject.attchFileNm+'\')" href="javascript:;">'+infoObject.attchFileNm+'</a></div>'));
			j++;
		}
		//$('.dropzone-previews').append($('<div class="alert alert-success text-center"><strong>Success!</strong> File uploaded.</div>'));
		//$( ".dz-default" ).hide();
		dragTabId = parseInt(dragTabId + objectArray.length);
		
	}
});