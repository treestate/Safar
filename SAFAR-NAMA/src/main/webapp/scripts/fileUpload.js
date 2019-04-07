$(document).ready(function() {
	
	var bar = $('.bar');
	var percent = $('.percent');

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
		
		url : "uploadMultiFile.do",
		autoProcessQueue : true,
		uploadMultiple : true,
		maxFilesize : 256, // MB
		parallelUploads : 256,
		addRemoveLinks : false,
		previewsContainer : ".dropzone-previews",
		maxFiles:256,

		// The setting up of the dropzone
		init : function() {
			var myDropzone = this;
			this.on("maxfilesexceeded", function(file) {
				this.removeAllFiles();
				//this.addFile(file);
			});
			$('#upload-button').on("click", function(e) {
				myDropzone.processQueue();
			});
			
			this.on("uploadprogress", function(file, progress) {

				progress = parseFloat(progress).toFixed(0);

				var progressBar = file.previewElement.getElementsByClassName("percent")[0];
				var bar = file.previewElement.getElementsByClassName("bar")[0];
				var dwldLink = file.previewElement.getElementsByClassName("dz-action-message")[0];
				bar.style.width =(progress+"%");
				progressBar.innerHTML = progress + "%";
				if (progress >= 100) {
					progressBar.innerHTML = "Complete!";
					dwldLink.innerHTML ='<a onclick="openTempDocument(\''+file.name+'\')" href="javascript:;">View</a>';
				}
			});

			// displaying the uploaded files information in a Bootstrap dialog
			this.on("success", function(files, serverResponse) {
				
				// alert("Upload Successfully");
			});
			
			this.on("sending", function(file, xhr, formData) {
				if(usrTp == 'FP') {
					var bnfId = document.getElementById("bnfId").value;
					formData.append("bnfId", bnfId); // Append all the additional input data of your form here!
				}
			});
		}
	}

});