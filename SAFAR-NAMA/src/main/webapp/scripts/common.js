
function getURLVar(key) {
	var value = [];

	var query = String(document.location).split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (var i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}

$(document).ready(function() {
	//Form Submit for IE Browser
	$('button[type=\'submit\']').on('click', function() {
		$("form[id*='form-']").submit();
	});

	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();
		
		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});
	
	$('#column-left').addClass('active');	
	$('#button-menu i').replaceWith('<i class="fa fa-arrow-left"></i>');	
	
	// Menu button
	$('#button-menu').on('click', function() {
		// Checks if the left column is active or not.
		if ($('#column-left').hasClass('active')) {
			localStorage.setItem('column-left', '');

			$('#button-menu i').replaceWith('<i class="fa fa-arrow-right"></i>');

			$('#column-left').removeClass('active');

			$('#menu > li > ul').removeClass('in collapse');
			$('#menu > li > ul').removeAttr('style');
		} else {
			localStorage.setItem('column-left', 'active');

			$('#button-menu i').replaceWith('<i class="fa fa-arrow-left"></i>');
			
			$('#column-left').addClass('active');

			// Add the slide down to open menu items
			$('#menu li.open').has('ul').children('ul').addClass('collapse in');
			$('#menu li').not('.open').has('ul').children('ul').addClass('collapse');
		}
	});

	// Menu
	$('#menu').find('li').has('ul').children('a').on('click', function() {
		if ($('#column-left').hasClass('active')) {
			$(this).parent('li').toggleClass('open').children('ul').collapse('toggle');
			$(this).parent('li').siblings().removeClass('open').children('ul.in').collapse('hide');
		} else if (!$(this).parent().parent().is('#menu')) {
			$(this).parent('li').toggleClass('open').children('ul').collapse('toggle');
			$(this).parent('li').siblings().removeClass('open').children('ul.in').collapse('hide');
		}
	});
	
	// Override summernotes image manager
	$('button[data-event=\'showImageDialog\']').attr('data-toggle', 'image').removeAttr('data-event');
	
	$(document).delegate('button[data-toggle=\'image\']', 'click', function() {
		$('#modal-image').remove();
		
		$.ajax({
			url: 'index.php?route=common/filemanager&token=' + getURLVar('token'),
			dataType: 'html',
			beforeSend: function() {
				$('#button-image i').replaceWith('<i class="fa fa-circle-o-notch fa-spin"></i>');
				$('#button-image').prop('disabled', true);
			},
			complete: function() {
				$('#button-image i').replaceWith('<i class="fa fa-upload"></i>');
				$('#button-image').prop('disabled', false);
			},
			success: function(html) {
				$('body').append('<div id="modal-image" class="modal">' + html + '</div>');
	
				$('#modal-image').modal('show');
			}
		});	
	});

	// Image Manager
	$(document).delegate('a[data-toggle=\'image\']', 'click', function(e) {
		e.preventDefault();
	
		var element = this;
	
		$(element).popover({
			html: true,
			placement: 'right',
			trigger: 'manual',
			content: function() {
				return '<button type="button" id="button-image" class="btn btn-primary"><i class="fa fa-pencil"></i></button> <button type="button" id="button-clear" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>';
			}
		});
	
		$(element).popover('toggle');		
	
		$('#button-image').on('click', function() {
			$('#modal-image').remove();
	
			$.ajax({
				url: 'index.php?route=common/filemanager&token=' + getURLVar('token') + '&target=' + $(element).parent().find('input').attr('id') + '&thumb=' + $(element).attr('id'),
				dataType: 'html',
				beforeSend: function() {
					$('#button-image i').replaceWith('<i class="fa fa-circle-o-notch fa-spin"></i>');
					$('#button-image').prop('disabled', true);
				},
				complete: function() {
					$('#button-image i').replaceWith('<i class="fa fa-upload"></i>');
					$('#button-image').prop('disabled', false);
				},
				success: function(html) {
					$('body').append('<div id="modal-image" class="modal">' + html + '</div>');
	
					$('#modal-image').modal('show');
				}
			});
	
			$(element).popover('hide');
		});
	
		$('#button-clear').on('click', function() {
			$(element).find('img').attr('src', $(element).find('img').attr('data-placeholder'));
			
			$(element).parent().find('input').attr('value', '');
	
			$(element).popover('hide');
		});
	});
	
	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body', html: true});

	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});	
	
			
});

// set Selected sections active
function setSectionSelected(idVal){	
	if(idVal == 0 )
		document.getElementById('HOME').className = "active";
	else if(idVal == 10 )
		document.getElementById('REQUESTS').className = "active";
	else if(idVal == 20 )
		document.getElementById('INVOICES').className = "active";
	else if(idVal == 30 )
		document.getElementById('MY_PAYMENTS').className = "active";
	else if(idVal == 40 )
		document.getElementById('ODeX_DOCUMENT').className = "active";
	else if(idVal == 50 )
		document.getElementById('FORM13').className = "active";
	else if(idVal == 60 )
		document.getElementById('MASTERS').className = "active";
	else if(idVal == 70 )
		document.getElementById('MY_TRANSACTIONS').className = "active";
	else if(idVal == 80 ) 
		document.getElementById('REPORTS').className = "active";
	else if(idVal == 90 ) 
		document.getElementById('PDA').className = "active";	
	else if(idVal == 100 ) 
		document.getElementById('HBL').className = "active";
	else if(idVal == 110 ) 
		document.getElementById('SETTLEMENT').className = "active";
	else if (idVal == 120) 
		document.getElementById('VGM').className = "active";
	else if (idVal == 130) 
		document.getElementById('KYC').className = "active";
	else if (idVal == 140) 
		document.getElementById('LINE_NO').className = "active";
	else if (idVal == 150) 
		document.getElementById('IGM_GENERATION').className = "active";
    else if (idVal == 160) 
		document.getElementById('EGM').className = "active";
}

// Give Style to Input Field
function changeTextColor(idVal){	
	idVal.style.color ='#0177b5';// blue
	idVal.style.fontWeight  ='900';
}
	

//----left menu---//
var winheight, winwidth;
winwidth=$(window).width();
$(window).resize(function(){
	winwidth=$(window).width();
	if(winwidth < 768)
	{
		$('#button-menu i').replaceWith('<i class="fa fa-arrow-right"></i>');
		$('#column-left').removeClass('active');
		/* $('#menu > li > ul').removeClass('in collapse'); */
		/* $('#menu > li > ul').removeAttr('style'); */
	}
	if(winwidth >= 768)
	{
		$('#button-menu i').replaceWith('<i class="fa fa-arrow-left"></i>');
		$('#column-left').addClass('active');
	}
});

jQuery(window).scroll(function () {
	if(winwidth<519)
	{
		if (jQuery(document).scrollTop() == 0) {
			jQuery('.amenu').removeClass('tiny');
			jQuery('.right-header-fix').removeClass('fixed-header');
		} else {
			jQuery('.amenu').addClass('tiny');
			jQuery('.right-header-fix').addClass('fixed-header');
		}
	}
});

// Panels
(function( $ ) {

	$(function() {
		$('.panel')
			.on( 'click', '.panel-hide', function( e ) {
				e.preventDefault();

				var $this,
					$panel;

				$this = $( this );
				$panel = $this.closest( '.panel' );
				$icon = $this.find( '.panel-actions a.fa-caret-up' );
				$minusIcon = $this.find( '.panel-icons a.fa-plus-circle' );

				$this
					.removeClass( 'panel-hide' )
					.addClass( 'panel-show' );
					
				$icon
					.removeClass( 'fa-caret-up' )
					.addClass( 'fa-caret-down' );
				
				$minusIcon
					.removeClass( 'fa-plus-circle' )
					.addClass( 'fa-minus-circle' );

				$panel.find('.panel-body, .panel-footer').slideDown( 200 );
			})
			.on( 'click', '.panel-show', function( e ) {
				e.preventDefault();

				var $this,
					$panel;

				$this = $( this );
				$panel = $this.closest( '.panel' );
				$icon = $this.find( '.panel-actions a.fa-caret-down' );
				$plusIcon = $this.find( '.panel-icons a.fa-minus-circle' );
				
				$this
					.removeClass( 'panel-show' )
					.addClass( 'panel-hide' );
					
				$icon
					.removeClass( 'fa-caret-down' )
					.addClass( 'fa-caret-up' );
				
				$plusIcon
					.removeClass( 'fa-minus-circle' )
					.addClass( 'fa-plus-circle' );

				$panel.find('.panel-body, .panel-footer').slideUp( 200 );
			})
			
			//code for close button
			.on( 'click', '.panel-actions a.fa-times', function( e ) {
				e.preventDefault();

				var $panel,
					$row;

				$panel = $(this).closest('.panel');

				if ( !!( $panel.parent('div').attr('class') || '' ).match( /col-(xs|sm|md|lg)/g ) && $panel.siblings().length === 0 ) {
					$row = $panel.closest('.row');
					$panel.parent('div').remove();
					if ( $row.children().length === 0 ) {
						$row.remove();
					}
				} else {
					$panel.remove();
				}
			});
	});

})( jQuery );

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


var lastIndex;

$('.breadcrumb-buttons ul li a').attr("data-toggle", "tooltip");
$('.breadcrumb-buttons ul li a').attr("data-placement", "bottom");
$('.breadcrumb-buttons ul li a span').addClass("hidden-xs");
$('.breadcrumb-buttons ul li a span').addClass("hidden-sm");

// This File will contain all common javascript function
// Please make sure that you comment them so it will be easy for later reference
function includePaging(obj, rows) {
	obj.enablePaging(true, rows, 5, "pagingArea", true);
	obj.setPagingSkin("bricks");
}

// duplicate include paging method for different grids
function includePaging1(obj, rows) {
	// obj.enablePaging(true, rows, 5, "pagingArea1", true);
	// obj.setPagingSkin("bricks");
}

// include paging method for multiple grids
function includePagingForId(obj, rows, id) {
	obj.enablePaging(true, rows, 5, id, true);
	obj.setPagingSkin("bricks");
}

function getCurrentDate() {
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();

	var mm = "" + month;
	var dd = "" + day;
	mm = mm.length == 1 ? ("0" + month) : month;
	dd = dd.length == 1 ? ("0" + day) : day;
	return dd + "-" + mm + "-" + year;
}

function getCurrentDateYYMMDD() {
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();

	var mm = "" + month;
	var dd = "" + day;
	mm = mm.length == 1 ? ("0" + month) : month;
	dd = dd.length == 1 ? ("0" + day) : day;
	return year + "-" + mm + "-" + dd;
}

function addYearToCurrentDate(addYear) {
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear() + parseInt(addYear);

	var mm = "" + month;
	var dd = "" + day;
	mm = mm.length == 1 ? ("0" + month) : month;
	dd = dd.length == 1 ? ("0" + day) : day;
	return dd + "-" + mm + "-" + year;
}

function getDefaultDate() {
	return "31"+'-'+"12"+'-'+"2059";
}
// 1.1 Starts
// The below javascript is used to disable backspace when used as Go page back
// Non-IE -- window.event works in FF
if (typeof window.event == 'undefined') {
	document.onkeypress = function(e) {
		var test_type = '';
		var test_var = e.target.nodeName.toUpperCase();
		if (e.target.type){
			test_type = e.target.type.toUpperCase();
		}
		if ((test_var == 'INPUT' && (test_type == 'TEXT' || test_type == 'PASSWORD'))
				|| test_var == 'TEXTAREA') {
			return e.keyCode;
		} else if (e.keyCode == 8) {
			e.preventDefault();
		}
	}
	// for IE8 window.captureEvents is used instead of window.event and
	// event.srcElement instead of e.target
} else if (typeof window.captureEvents == 'undefined') {
	document.onkeydown = function(e) {
		var test_type ="";
		var test_var = e.srcElement.tagName.toUpperCase();
		if (e.srcElement.type)
			test_type = e.srcElement.type.toUpperCase();
		if ((test_var == 'INPUT' && (test_type == 'TEXT' || test_type == 'PASSWORD'))
				|| test_var == 'TEXTAREA') {
			return e.keyCode;
		} else if (e.keyCode == 8) {
			e.returnValue = false;
		}
	}
}
// 1.1 Ends

// used to insert row in grid
// take grid object as 1st parameter and 2nd parameter'row' or 'uniqueId'(if you
// want to use uid for grid new row)
// linNoColIndex column index on which you want to put numbering
function addGridRows(gridObj, idType, lineNoColIndex) {
	var newValue = 0;
	var lineNumber = 0;
	var seqId = 1;
	for ( var i = 0; i < gridObj.getRowsNum(); i++) {
		var id = gridObj.getRowId(i);
		newValue = parseInt(gridObj.cells(id, lineNoColIndex).getValue());
		if (newValue > lineNumber) {
			lineNumber = newValue;
		}
		seqId =parseInt(id)+1;
	}
	if (idType == "uniqueId") {
		var uniqueID = gridObj.uid();
		gridObj.addRow(uniqueID, []);
		gridObj.cells(uniqueID, lineNoColIndex).setValue(lineNumber + 1);
		return uniqueID;
	} else if (idType == "sequenceID") {
		gridObj.addRow(seqId, []);
		gridObj.cells(seqId, lineNoColIndex).setValue(lineNumber + 1);
		return seqId;
	} else {
		gridObj.addRow(lineNumber + 1, []);
		gridObj.cells(lineNumber + 1, lineNoColIndex).setValue(lineNumber + 1);
		return lineNumber + 1;
	}
}

// This Script is used to display Calendar having only Month and Year Dropdown
// There are also need to include style on jsp pages
/* <style> .ui-datepicker-current { visibility:hidden } </style>*/
function calWithMonYearOnly(ids) {
	var id = "#" + ids;
	$(function() {
		$(id)
				.datepicker(
						{
							dateFormat : 'yy-mm',
							changeMonth : true,
							changeYear : true,
							showButtonPanel : true,
							onClose : function(dateText, inst) {
								var month = $(
										"#ui-datepicker-div .ui-datepicker-month :selected")
										.val();
								var year = $(
										"#ui-datepicker-div .ui-datepicker-year :selected")
										.val();
								$(this).val(
										$.datepicker.formatDate('MM yy',
												new Date(year, month, 1)));
								$(id).trigger('change');
							}
						});
	});

	$(id).focus(function() {
		$(".ui-datepicker-calendar").hide();
		$("#ui-datepicker-div").position({
			my : "center top",
			at : "center bottom",
			of : $(this)
		});
	});

}

// calculate total time
function getTotalTime(startObj, endObj) {
	var valuestart = startObj.value;
	var valuestop = endObj.value;

	var difference = Math.abs(((24 * 60) - toMins(valuestart))
			+ toMins(valuestop));
	if (parseInt(difference) > (24 * 60)) {
		difference = parseInt(difference) - (24 * 60);
	}
	// compute hours, minutes and seconds
	var result = [ Math.floor(difference / 60), // HOURS
	Math.floor(difference % 60), // MINUTES
	// difference % 60 // SECONDS
	];

	// formatting (0 padding and concatenation)
	result = jQuery.map(result, function(v) {
		return v < 10 ? '0' + v : v;
	}).join(':');
	return result;
}

// convert time in mins
function toMins(time_str) {
	// Extract hours, minutes and seconds
	var parts = time_str.split(':');

	// compute and return total seconds
	// parseInt('08') and parseInt('09') return zero problem,
	// For more information on these problem, see: -
	// http://www.ventanazul.com/webzine/articles/issues-parseint-javascript
	var total_mins = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
	return total_mins;
}

// compare date between fromDate(small value) and toDate(greater value)
// check both value is available or not
// if not form leve validation should be there for both date
function compareDate(fromDate, toDate, msgFlg) {
	// check both value is there or not
	// in else it will return true its due to date field validation is done on
	// form level
	if (toDate != '' && fromDate != '') {
		// extract day month and year from both of date
		var fromDay = fromDate.substring(0, 2);
		var toDay = toDate.substring(0, 2);
		var fromMon = eval(fromDate.substring(3, 5) - 1);
		var toMon = eval(toDate.substring(3, 5) - 1);
		var fromYear = fromDate.substring(6, 10);
		var toYear = toDate.substring(6, 10);

		// convert both date in date object
		var fromDt = new Date(fromYear, fromMon, fromDay);
		var toDt = new Date(toYear, toMon, toDay);

		// compare both date
		// if fromDt is greater than toDt return false else true
		if (fromDt > toDt) {
			alert(msgFlg);// custom msg
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
}

// Help Document for particular Modules
function helpDocument(moduleId, moduleAction) {
	window.open("openHelpDocument.do?moduleId=" + moduleId + "&moduleAction="
			+ moduleAction, "HelpDocument",
			"tools=0,scrollbars=1,resizable=1,menu=0,height=500,width=1000");

}

// generate Grid to Excel
/*function exportGridToExcel(grid, fileNm, colHide) {
	if (grid.getRowsNum() == 0) {
		alert("Data not available");
		return false;
	}

	// hide Column
	grid.setColumnHidden(colHide, true);

	grid.toExcel("generateExcel.do", fileNm);

	// show column
	grid.setColumnHidden(colHide, false);

}*/

//generate Grid to Pdf
function exportGridToPdf(grid, fileNm, colHide) {
	
	if (grid.getRowsNum() == 0) {
		alert("Data not available");
		return false;
	}
	
	// hide Column
	grid.setColumnHidden(colHide, true);
	
	grid.toPDF("generatePdf.do", fileNm);

	// show column
	grid.setColumnHidden(colHide, false);

}

// SmartRendering method for grid paging or smart rendering
function smartRendering(obj, smrtRendering, rows, id) {
	// check if smart rendering is false then set enablePaging
	if (smrtRendering == true) {
		obj.enableSmartRendering(true);
	} else {
		obj.enableSmartRendering(false);
		obj.enablePaging(true, rows, 5, id, true);
		obj.setPagingSkin("bricks");
	}

}

function checkValidExcelFile(flPath) {
	var nm = flPath.split("\\");
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	if (!isValidExcelFile(ext) || ext == "undefined") {
		return false;
	} else {
		return true;
	}
}

// Check for valid Excel file type
function isValidExcelFile(extString) {
	// File type array
	var extArray = new Array("XLS", "XLSX", "DOC", "DOCX", "PDF", "JPG", "GIF",
			"JPEG", "ZIP", "xls", "xlsx", "doc", "docx", "pdf", "jpg", "gif",
			"jpeg", "zip", "msg", "png", "txt", "HTML", "html", "CSV", "csv");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == extString) {
			return true;
		}
	}
	return false;
}

// date sorting
function date_custom(a, b, order) {

	var regex = new RegExp("-");
	if (!regex.test(a)) {
		var c = a;
		a = new Array();
		a.push((c.getDate() < 10 ? '0' : '') + c.getDate());
		a.push((c.getMonth() < 9 ? '0' : '') + (c.getMonth() + 1));
		a.push(c.getFullYear());
	} else {
		a = a.split("-");
	}

	if (!regex.test(b)) {
		var d = b;
		b = new Array();
		b.push((d.getDate() < 10 ? '0' : '') + d.getDate());
		b.push((d.getMonth() < 9 ? '0' : '') + (d.getMonth() + 1));
		b.push(d.getFullYear());
	} else {
		b = b.split("-");
	}

	if (a[2] == b[2]) {
		if (a[1] == b[1])
			return (a[0] > b[0] ? 1 : -1) * (order == "asc" ? 1 : -1);
		else
			return (a[1] > b[1] ? 1 : -1) * (order == "asc" ? 1 : -1);
	} else
		return (a[2] > b[2] ? 1 : -1) * (order == "asc" ? 1 : -1);
}

function str_month(a, b, order) {

	var month_a = getMonthNum(a);
	var month_b = getMonthNum(b);
	return (month_a > month_b ? 1 : -1) * (order == "asc" ? 1 : -1);
}

function getMonthNum(monthStr) {
	return new Date(monthStr + '-1-01').getMonth() + 1;
}

function showJqueryMonthYearCalendar(ids, minDays) {
	var id = "#" + ids;
	$(function() {
		$(id).datepicker({
			changeMonth : true,
			changeYear : true,
			buttonImage : 'img/cal.gif',
			showOn : 'both',
			buttonImageOnly : true,
			dateFormat : 'dd-mm-yy',
			minDate : minDays
		});
	});
}

// Delete Selected Row from grid
function deleteRows(gridObj) {
	gridObj.deleteSelectedRows();
}

// used to rearrange grid Sr. No.
function reArrangeGridSrNo(gridName, cellColumnNo) {
	var rowVal = 1;
	gridName.forEachRow(function(id) {
		gridName.cells(id, cellColumnNo).setValue(rowVal++);
	});
}

function setGridValues(gridVal, grid, widthP, pagingRows, footerFlag,
		subGridVal) {
	var arr = new Array();
	var header = '';
	var width = '';
	var colAlign = '';
	var colType = '';
	var colSorting = '';
	var filter = '';
	var footer = '';
	var arrHiddenCol = new Array();
	var arrFooter = new Array();
	var arrsubHead = new Array();
	var j = 1;
	for ( var i = 0; i < gridVal.length; i++) {
		arr = gridVal[i].split(",");
		j = 1;
		if (i == 0) {
			header = header + arr[j++];
			width = width + arr[j++];
			colAlign = colAlign + arr[j];
			arrsubHead.push("text-align:" + arr[j++] + ';');
			colType = colType + arr[j++];

			if (arr[j] != '') {
				colSorting = colSorting + arr[j++];
			} else {
				j++;
			}

			if (arr[j] != '') {
				filter = filter + arr[j++];
			} else {
				j++;
			}
			if (arr[j] == 'true') {
				arrHiddenCol.push(i);
			}
			j++;
			if (footerFlag == true) {
				footer = footer + arr[j++];
			}
		} else {
			header = header + ',' + arr[j++];
			width = width + ',' + arr[j++];
			colAlign = colAlign + ',' + arr[j];
			arrsubHead.push("text-align:" + arr[j++] + ';');
			colType = colType + ',' + arr[j++];

			if (arr[j] != '') {
				colSorting = colSorting + ',' + arr[j++];
			} else {
				j++;
			}

			if (arr[j] != '') {
				filter = filter + ',' + arr[j++];
			} else {
				j++;
			}

			if (arr[j] == 'true') {
				arrHiddenCol.push(i);
			}
			j++;
			if (footerFlag == true) {
				footer = footer + ',' + arr[j++];
			}
		}
	}
	grid.setHeader(header);
	if (widthP == false) {
		grid.setInitWidths(width);
	} else {
		grid.setInitWidthsP(width);
	}
	grid.setColAlign(colAlign);
	grid.setColTypes(colType);

	if (colSorting != "") {
		grid.setColSorting(colSorting);
	}

	if (subGridVal != "" && subGridVal != undefined) {
		grid.attachHeader(subGridVal, arrsubHead);
	}

	if (filter != "") {
		grid.attachHeader(filter, arrsubHead);
	}

	if (footer != "") {
		for ( var i = 0; i < gridVal.length; i++) {
			arrFooter.push("text-align:right; font-style:normal;");
		}
		grid.attachFooter(footer, arrFooter);
	}

	if (pagingRows == 12) {
		grid.enableAutoHeight(true, 240);
	} else {
		grid.enableAutoHeight(true, 200);
	}
	grid.init();
	for ( var k = 0; k < arrHiddenCol.length; k++) {
		grid.setColumnHidden(arrHiddenCol[k], true);
	}
}

// Function to calculate difference in two dates and return the difference in
// no. of days.
function calculateRoundDateDiff(value1, value2) {

	var diffDays = 0;
	diffDays = Math.round(Math.abs(calculateDateDiff(value1, value2)));
	return diffDays + 1;
}

function calculateDateDiff(value1, value2) {
	var from = value1; // document.getElementById('leaveFrom').value;
	var to = value2; // document.getElementById('leaveTo').value;
	var diffDays = 0;

	if (from == to) {
		// document.getElementById("noOfDays").value = 1;
		diffDays = 1;
	} else {
		var frommonth = from.slice(3, 5);
		frommonth = parseInt(frommonth);

		var fromdate = from.slice(0, 2);
		fromdate = parseInt(fromdate);

		var fromyear = from.slice(6, 10);
		fromyear = parseInt(fromyear);

		var tomonth = to.slice(3, 5);
		tomonth = parseInt(tomonth);

		var todate = to.slice(0, 2);
		todate = parseInt(todate);

		var toyear = to.slice(6, 10);
		toyear = parseInt(toyear);

		var oneDay = 24 * 60 * 60 * 1000;
		var firstDate = new Date(fromyear, frommonth, fromdate);
		var secondDate = new Date(toyear, tomonth, todate);
		
		diffDays = (secondDate.getTime() - firstDate.getTime())/ (oneDay);
	}

		return diffDays;
}

// Fade In and Fade Out for the "Arrow up" image
$(window).scroll(function() {
	if ($(this).scrollTop() > 300) {
		$("#back-top").fadeIn("slow");
	} else {
		$("#back-top").fadeOut("slow");
	}
});

// Uploads file
function uploadFile(val, gridObj, selCol, dataCol, docDiv) {
	var rowNo;
	// hide open browse
	gridObj.forEachRow(function(id) {

		// To Show only one Browse option at a time
		var brId = "#" + val + "-" + id;
		var btnId = "#" + val + "Btn-" + id;
		if ($(brId).length) {
			$(brId).hide();
			$(btnId).hide();
		}
	});

	// id - row's id
	rowNo = gridObj.getSelectedRowId();

	if (rowNo == undefined) {
		alert("Select Record First.");
		return false;
	}
	if (document.getElementById(val + "-" + rowNo) == null) {
		addFileToGrid(val, rowNo, gridObj, dataCol, docDiv);
	} else {
		showDiv(val + "-" + rowNo, val + "Btn-" + rowNo);
	}
}
// Show div
function showDiv(val1, val2) {
	var tohide = document.getElementById(val1);
	tohide.style.display = "block";

	var tohide2 = document.getElementById(val2);
	tohide2.style.display = "block";
}

// Add selected file to the grid
function addFileToGrid(obj, rowNo, gridObj, dataCol, docDiv) {
	// Create an input type dynamically.
	var element = document.createElement("input");

	// Assign different attributes to the element.
	element.setAttribute("type", "file");
	element.setAttribute("name", obj + "-" + rowNo);
	element.setAttribute("id", obj + "-" + rowNo);
	element.setAttribute("style", "width:300px");

	var btn = document.createElement("input");
	btn.setAttribute("type", "button");
	btn.setAttribute("name", obj + "Btn" + "-" + rowNo);
	btn.setAttribute("id", obj + "Btn" + "-" + rowNo);
	btn.setAttribute("value", "OK");
	btn.setAttribute("class", "bigBtn");

	btn.onclick = (function(obj, rowNo, gridObj, dataCol) {
		return function() {
			hideDiv(obj, rowNo, gridObj, dataCol);
		};
	})(obj, rowNo, gridObj, dataCol);

	// Append the element in page (in span).
	var foo = document.getElementById(docDiv);
	foo.appendChild(element);
	foo.appendChild(btn);
}

// Hide div,Checks selected file
function hideDiv(chFileObj, btnObj, gridObj, rowNo, colNo) {

	document.getElementById(chFileObj).style.display = "none";	
	document.getElementById(btnObj).style.display = "none";
	var flPath = document.getElementById(chFileObj).value;
	
	// splits file path
	var nm = flPath.split("\\");
	// get file name with extension
	var fileNmStr = nm[nm.length - 1];
	// get file length
	var fileNmLength = fileNmStr.length + 30;

	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";

	// Check file name length
	if (fileNmStr != "undefined") {
		if (fileNmLength > 400) {
			alert("File name must be less than 370 characters, Please rename the file name.");
			return false;
		}
	}

	// Checks file type
	if (ext != "undefined") {
		if (!isValidExcelFile(ext)) {
			alert("Invalid File Type");
			return false;
		}
		// adds filename in grid
		gridObj.cells(rowNo, colNo).setValue(
				document.getElementById(chFileObj).value);
	}
}

// Enable/Disable buton
function enableDisableBtn(id, type) {
	$("#" + id).button({
		disabled : type
	});
}

// for localization
function setMsgParam(msg, arrArg) {
	var pattern ='';
	for ( var i = 0; i < arrArg.length; i++) {
		// var str = "{"+i+"}";
		pattern = new RegExp("({)" + i + "(})", "g");
		msg = msg.replace(pattern, arrArg[i]);
	}
	return msg;
}

function roundup(number, multipleOf) {
	return multipleOf * (Math.floor(number / multipleOf));
}

function roundAmt(num) {
	return roundNumber(num, 2);
}

// use to round of decimal number.
function roundNumber(num, dec) {
	return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

function customDatePicker(frm, to) {

	var frmDt = "#" + frm;
	var toDt = "#" + to;
	var frmDtVal = $(frmDt).val();
	var toDtVal = $(toDt).val();
	var fromDtAry = frmDtVal.split("-");
	var from_date = new Date(fromDtAry[2], (fromDtAry[1] - 1), fromDtAry[0]);

	if (toDtVal != "") {
		var toDtAry = toDtVal.split("-");
		var to_date = new Date(toDtAry[2], (toDtAry[1] - 1), toDtAry[0]);
		if (from_date > to_date) {
			$(toDt).val(frmDtVal);
		}
	} else {
		$(toDt).val(frmDtVal);
	}

	if ($(toDt).hasClass('hasDatepicker')) {
		$(toDt).datepicker("option", "minDate", from_date);
	}

}

function customSameFrmToDatePicker(frm, to) {

	var frmDt = "#" + frm;
	var toDt = "#" + to;
	var frmDtVal = $(frmDt).val();
	var toDtVal = $(toDt).val();
	var fromDtAry = frmDtVal.split("-");
	var from_date = new Date(fromDtAry[2], (fromDtAry[1] - 1), fromDtAry[0]);

	$(toDt).val(frmDtVal);

	if ($(toDt).hasClass('hasDatepicker')) {
		$(toDt).datepicker("option", "minDate", from_date);
	}

}

function checkValidImageFile(id, flPath) {
	var nm = flPath.split("\\");
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	if (!isValidImageFile(ext) || ext == "undefined") {
		document.getElementById(id).value = "";
		alert("Please upload only image file");
		return false;
	} else {
		if (!isValidFileSize(id)) {
			document.getElementById(id).value = "";
			alert("File size can not be more than 250KB");
			return false;
		} else {
			return true;
		}
	}
}

// Check for valid Excel file type
function isValidImageFile(extString) {
	// File type array
	var extArray = new Array("JPG", "JPEG", "PNG", "jpg", "jpeg", "png");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == extString) {
			return true;
		}
	}
	return false;
}

function isValidFileSize(id) {
	var uploadedFile = document.getElementById(id);
	var fileSize = uploadedFile.files[0].size;
	if (fileSize < 256000) {
		return true;
	}
	return false;
}

function cleanHTML(input) {
	// 1. remove line breaks / Mso classes
	var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
	var output = input.replace(stringStripper, ' ');
	// 2. strip Word generated HTML comments
	var commentSripper = new RegExp('<!--(.*?)-->', 'g');
	output = output.replace(commentSripper, '');
	var tagStripper = new RegExp(
			'<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>', 'gi');
	// 3. remove tags leave content if any
	output = output.replace(tagStripper, '');
	// 4. Remove everything in between and including tags '<style(.)style(.)>'
	var badTags = [ 'style', 'script', 'applet', 'embed', 'noframes',
			'noscript' ];

	for ( var i = 0; i < badTags.length; i++) {
		tagStripper = new RegExp('<' + badTags[i] + '.*?' + badTags[i]
				+ '(.*?)>', 'gi');
		output = output.replace(tagStripper, '');
	}
	// 5. remove attributes ' style="..."'
	var badAttributes = [ 'style', 'start' ];
	var attributeStripper =null;
	for ( var i = 0; i < badAttributes.length; i++) {
		attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"',
				'gi');
		output = output.replace(attributeStripper, '');
	}
	return output;
}

function showJqueryMonthYearCalendarForMaxDays(ids, minDays) {
	var id = "#" + ids;
	$(function() {
		$(id).datepicker({
			changeMonth : true,
			changeYear : true,
			buttonImage : 'img/cal.gif',
			showOn : 'both',
			buttonImageOnly : true,
			dateFormat : 'dd-mm-yy',
			maxDate : minDays
		});
	});
}

// breadcrums redidection
function blInvRedirectTo(link) {
	if (link == 0)
		window.location = "#";
	if (link == 1)
		window.location = "loadLanding.do";
	if (link == 2)
		window.location = "viewBLInvDtls.do";
	if (link == 3)
		window.location = "saveBLInvDtls.do";
	if (link == 4)
		window.location = "loadSearchAllTrans.do";
	if (link == 5)
		window.location = "loadSearchPendingTrans.do";
	if (link == 6)
		window.location = "searchTrans.do";

}

// breadcrums redidection
function igmInvRedirectTo(link) {
	if (link == 0)
		window.location = "#";
	if (link == 1)
		window.location = "loadLanding.do";
	if (link == 2)
		window.location = "viewIGMItemDtls.do";
	if (link == 3)
		window.location = "saveIGMItemDtls.do";
	if (link == 4)
		window.location = "loadSearchAllTrans.do";
	if (link == 5)
		window.location = "loadSearchPendingTrans.do";
	if (link == 6)
		window.location = "searchTrans.do";

}

// breadcrums redidection
function srchRedirectTo(link) {
	if (link == 0)
		window.location = "#";
	if (link == 1)
		window.location = "loadLanding.do";
	if (link == 4)
		window.location = "loadSearchAllTrans.do";
	if (link == 5)
		window.location = "loadSearchPendingTrans.do";
	if (link == 6)
		window.location = "searchTrans.do";
}

// breadcrums redidection
function invReqRedirectTo(link) {
	if (link == 0)
		window.location = "#";
	if (link == 1)
		window.location = "loadLanding.do";
}

/**
 * @param field
 * @param maxChars
 * @returns {Boolean}
 */
function maxLength(field, maxChars) {
	if (field.value.length >= maxChars) {
		event.returnValue = false;
		return false;
	}
}

/**
 * @param field
 * @param maxChars
 * @param id
 */
function showConfirmMaxLength(field, maxChars, id) {
	if (field.value.length >= maxChars) {
		var noOfChars = confirm("Number of characters exceed the maximum length!! Please press 'OK' to restrict text upto "
				+ maxChars + " characters or 'Cancel' to delete the text.");
		if (noOfChars == true) {
			var text = field.value.substring(0, maxChars);
			document.getElementById(id).value = text;
		} else {
			document.getElementById(id).value = "";
		}
	}
}

// NEW UI CHANGES START
// Panels
(function($) {

	$(function() {
		$('.panel').on('click', '.panel-hide', function(e) {
			e.preventDefault();

			var $this, $panel;

			$this = $(this);
			$panel = $this.closest('.panel');
			$icon = $this.find('.panel-actions a.fa-caret-up');

			$this.removeClass('panel-hide').addClass('panel-show');

			$icon.removeClass('fa-caret-up').addClass('fa-caret-down');

			$panel.find('.panel-body, .panel-footer').slideDown(200);
		}).on('click', '.panel-show', function(e) {
			e.preventDefault();

			var $this, $panel;

			$this = $(this);
			$panel = $this.closest('.panel');
			$icon = $this.find('.panel-actions a.fa-caret-down');

			$this.removeClass('panel-show').addClass('panel-hide');

			$icon.removeClass('fa-caret-down').addClass('fa-caret-up');

			$panel.find('.panel-body, .panel-footer').slideUp(200);
		})

		// code for close button
		.on(
				'click',
				'.panel-actions a.fa-times',
				function(e) {
					e.preventDefault();

					var $panel, $row;

					$panel = $(this).closest('.panel');

					if (!!($panel.parent('div').attr('class') || '')
							.match(/col-(xs|sm|md|lg)/g)
							&& $panel.siblings().length === 0) {
						$row = $panel.closest('.row');
						$panel.parent('div').remove();
						if ($row.children().length === 0) {
							$row.remove();
						}
					} else {
						$panel.remove();
					}
				});
	});

})(jQuery);

// ----left menu---//
var winheight, winwidth;
winwidth = $(window).width();
$(window).resize(function() {
	winwidth = $(window).width();
	if (winwidth < 768) {
		$('#button-menu i').replaceWith('<i class="fa fa-arrow-right"></i>');
		$('#column-left').removeClass('active');
		/* $('#menu > li > ul').removeClass('in collapse'); */
		/* $('#menu > li > ul').removeAttr('style'); */
	}
	if (winwidth >= 768) {
		$('#button-menu i').replaceWith('<i class="fa fa-arrow-left"></i>');
		$('#column-left').addClass('active');
		// Add the slide down to open menu items
		/* $('#menu li.open').has('ul').children('ul').addClass('collapse in'); */
		/*
		 * $('#menu
		 * li').not('.open').has('ul').children('ul').addClass('collapse');
		 */
	}
});

// for scroll
jQuery(window).scroll(function() {
	if (winwidth < 519) {
		if (jQuery(document).scrollTop() == 0) {
			jQuery('.amenu').removeClass('tiny');
			jQuery('.right-header-fix').removeClass('fixed-header');
		} else {
			jQuery('.amenu').addClass('tiny');
			jQuery('.right-header-fix').addClass('fixed-header');
		}
	}
});

// NEW UI CHANGES END

// This method is used to display jquery calendar
// Method takes field id as parameter
// user can select month and year from dropdown
function showJqueryMonthYearCalendar(ids) {
	var id = "#" + ids;
	$(function() {
		$(id).datepicker({
			changeMonth : true,
			changeYear : true,
			buttonImage : 'img/cal.gif',
			showOn : 'both',
			buttonImageOnly : true,
			dateFormat : 'dd-mm-yy'
		});
	});
}

// Div Calender
/*function showCalendar(id) {
	var id = "#" + id;
	$(id).datetimepicker({
		pickTime : false,
		format: "DD-MM-YYYY"
	});
}*/

// compare date between fromDate(small value) and toDate(greater value)
// check both value is available or not
// if not form leve validation should be there for both date
function compareDate(fromDate, toDate) {// Custom msg removed
	// check both value is there or not
	// in else it will return true its due to date field validation is done on
	// form level
	if (toDate != '' && fromDate != '') {
		// extract day month and year from both of date
		var fromDay = fromDate.substring(0, 2);
		var toDay = toDate.substring(0, 2);
		var fromMon = eval(fromDate.substring(3, 5) - 1);
		var toMon = eval(toDate.substring(3, 5) - 1);
		var fromYear = fromDate.substring(6, 10);
		var toYear = toDate.substring(6, 10);

		// convert both date in date object
		var fromDt = new Date(fromYear, fromMon, fromDay);
		var toDt = new Date(toYear, toMon, toDay);

		// compare both date
		// if fromDt is greater than toDt return false else true
		if (fromDt > toDt) {			
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
}

// On select Attach image Populate data To grid row
function populateFileIntoGrid(chFileObj,  gridObj, rowNo, colNo) {				
	var flPath = chFileObj.value;					
	// splits file path
	var nm = flPath.split("\\");				
	// get file name with extension
	var fileNmStr = nm[nm.length - 1];				
	// get file length
	var fileNmLength = fileNmStr.length + 30;				
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";

	// Check file name length
	if (fileNmStr != "undefined") {
		if (fileNmLength > 400) {
			alert("File name must be less than 400 characters, Please rename the file name.");
			return false;
		}
	}				
	// Checks file type
	if (ext != "undefined") {
		if (!isValidExcelFile(ext)) {
			alert("Invalid File Type");
			return false;
		}
		// adds filename in grid					
		gridObj.cells(rowNo, colNo).setValue(chFileObj.value);					
	}
}

function isFutureDate(dt, msg) {
	if (dt != null) {
		if (!compareDate(getCurrentDate(), dt)) {
			alert(msg+" date should be greater than equal to current date !");
			return true;
		}
	}
    return false;
}

function validateDate(dt, errorMsgDiv, msg) {
	var pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	if (!pattern.test(dt)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" Date should be in DD-MM-YYYY";
		return true;
	}
	return false;
}

function validDateCompare(frmdt, toDt, errorMsgDiv, msg1, msg2) {
	if (!compareDate(frmdt, toDt)) {
		document.getElementById(errorMsgDiv).innerHTML = msg1+" Date should be greater than equal to "+msg2;
		return true;
	}
	return false;
}

function validateFileSizeAndTp(input) {

	if(input.files){
		var file = input.files[0];
		var size = file.size;
		var filePath = document.getElementById(input.id).value;
		if ( size ==  0 ) {
			alert("File size should not be 0 MB");
			input.value = null;
			return true;
		} else if ( size >  2000000 ) {
			alert("File size should not be greater then 2 MB");
			input.value = null;
			return true;
		} else if (!checkValidExcelFile(filePath)) {
			alert("Invalid File Type.");
			input.value = null;
			return true;
		}
	}
	return false;
}

function chkTotlFileSize(input) {
	var fileSize = 0;
	if(input.files){
		var file = input.files[0];
		var size = file.size;
		fileSize = parseInt(size);
	}
	return fileSize;
}

function validateFileSize(fileSize) {
	if (fileSize > 4000000) {
		alert("Uploaded files should not be greater then 4 MB");		
		return true;
	}
	return false;
}

function isValidCntnrNo(id,cntnrNo,errorMsgDiv,msg) {
	var regex = "^[A-Za-z]{4}\\d{7}$";
	
	if (!cntnrNo.match(regex)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" format should be 4 chars and 7 digits.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function addMultipleRow (tableCount, tableBody, tableRowId,delBtnNm,path) {
	var newId ;
	var regex = /^(.*)(\d)+$/i;
	var cloneIndex = parseInt(tableCount);
	var $clone = $("#"+tableRowId).clone();
	$clone.removeAttr("id");
	$clone.attr("id", tableRowId + cloneIndex);
	$clone.find("*")
	.each(function() {
		var id = this.id || "";
		var match = id.match(regex) || [];
		if (match.length == 3) {
			newId = match[1].substr(4, 100);
			this.id = newId + (cloneIndex);

			// Attach event for the button
			if (this.id == delBtnNm+(cloneIndex)) {
				if ("delAttachment" == delBtnNm ) {
					this.onclick = function() { deleteAttchDtls(cloneIndex);}
				} else if ("deleteContnr" == delBtnNm) {
					this.onclick = function() { deleteCntnrDtls(cloneIndex);}
				} else if ("deleteUser" == delBtnNm) {
					this.onclick = function() { deleteUserDtls(cloneIndex);}
				} else if ("deleteGST" == delBtnNm) {
					this.onclick = function() { deleteGSTDtls(cloneIndex);}
				}
			} else {// Reset value for all text and calendar fields
				this.value="";
				this.text = "";
				this.name= path+"["+(cloneIndex)+"]."+newId;
			}
		}
	});
	$clone.appendTo("#"+tableBody);
	/*$("#"+tableBody+ " select").chosen(); */
}

function addMultipleRowWithoutChkBox(tableCount, tableBody, tableRowId,delBtnNm,path) {
	var newId ;
	var regex = /^(.*)(\d)+$/i;
	var cloneIndex = parseInt(tableCount);
	var $clone = $("#"+tableRowId).clone();
	$clone.removeAttr("id");
	$clone.attr("id", tableRowId + cloneIndex);
	$clone.find("*")
	.each(function() {
		var id = this.id || "";
		var match = id.match(regex) || [];
		if (match.length == 3) {
			newId = match[1].substr(4, 100);
			this.id = newId + (cloneIndex);

			// Attach event for the button
			if (this.id == delBtnNm+(cloneIndex)) {
				if ("delAttachment" == delBtnNm ) {
					this.onclick = function() { deleteAttchDtls(cloneIndex);}
				} else if ("deleteContnr" == delBtnNm) {
					this.onclick = function() { deleteCntnrDtls(cloneIndex);}
				}
			} else {// Reset value for all text and calendar fields
				if (this.type != "checkbox") {
					this.value="";
					this.text = "";
				}
				this.name= path+"["+(cloneIndex)+"]."+newId;
			}
		}
	});
	$clone.appendTo("#"+tableBody);
}

function deleteTableRow (rowId,id) {
	id= "#"+rowId+id;
	$(id).remove();
}

function isFutureDt (validFrom, validTo, errorMsgDiv ,msg) {
	if (!compareDate(validFrom, validTo)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" date should be greater than equal to current date !";
		return true;
	}
	return false;
}

function isRequiredChk (id,value, errorMsgDiv, msg) {
	if (value == "") {
		document.getElementById(errorMsgDiv).innerHTML = msg+" is required.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function isRequired (id,value1, value2,errorMsgDiv, msg) {
	if (value1 == "" && value2 == "") {
		document.getElementById(errorMsgDiv).innerHTML = msg+" is required.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function isRequiredDD (id,value,errorMsgDiv, msg) {
	if (value == "") {
		document.getElementById(errorMsgDiv).innerHTML = msg+" is required.";
		document.getElementById(id).selectedIndex = 0;
		return true;
	}
	return false;
}

function isRequiredChkDD (id,value1, value2,errorMsgDiv, msg) {
	if (value1 == "" && value2 == "") {
		document.getElementById(errorMsgDiv).innerHTML = msg+" is required.";
		document.getElementById(id).selectedIndex = 0;
		return true;
	}
	return false;
}

function isRequiredChkBox (id,value, errorMsgDiv, msg) {
	if (value == "") {
		document.getElementById(errorMsgDiv).innerHTML = msg+" is required.";
		document.getElementById(id).selectedIndex = "";
		return true;
	}
	return false;
}

function isValidNumber(id,value, errorMsgDiv, msg) {
	if (isNaN(value)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" should be a valid number.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function isLessThenTodayDt(dt, msg) {
	if (dt != null) {
		if (!compareDate(dt, getCurrentDate())) {
			alert(msg+" should not be greater than current date !");
			return true;
		}
	}
    return false;
}

function addChildTableRow (perentId, tableBodyNm, parentRowId, childRowId, rowId, path1, path2, onclickEvent, onclickEventId) {
	var newId ;
	var regex1 = /^(.*)(\d)(\d)+$/i;
	var cloneIndex = 0;

	var tableLastId=$("#"+tableBodyNm+perentId+ " tr:last").attr('id');
	if (tableLastId != undefined) {
		var intVal = tableLastId.replace( /[^\d.]/g, '' );
		cloneIndex = parseInt(intVal) + 1;
	}
	var regex = /^(.*)(\d{2})+$/i;		
	var $clone = $("#"+parentRowId).find("#"+childRowId).clone();
		$clone.removeAttr("id");
		$clone.attr("id", rowId+ perentId +  cloneIndex);
		$clone.find("*")
		.each(function() {
			var id = this.id || "";
			var match = id.match(regex) || [];
			if (match.length == 3) {
				var newId3 = match[1].substr(4, 100);
				if (onclickEvent != "" && newId3 == onclickEvent) {
					this.onclick = function() { openDocument(onclickEventId + perentId +cloneIndex);}
				}
				this.id = newId3 + perentId + (cloneIndex);
				if (this.type != "checkbox") {
					this.value="";
				}
				this.disabled=false;
				this.name=path1+"["+perentId+"]."+ path2+"["+(cloneIndex)+"]."+newId3;
			}
		});
	$clone.appendTo("#"+tableBodyNm+perentId);
}

//Function is use for add multi DIV which inside multiple add functionality
function addChildDivRow(perentId, childId, divBodyNm, parentRowId, childRowId, rowId, path1, path2, onclickEvent, onclickEventId) {
	var newId ;
	var regex1 = /^(.*[a-zA-Z])+(.*\d)+$/i;
	var cloneIndex = 0;

	cloneIndex = childId;
	var regex = /^(.*[a-zA-Z])+(.*\d)+$/i;
	var $clone = $("#"+parentRowId).find("#"+childRowId).clone();
		$clone.removeAttr("id");
		$clone.attr("id", rowId+ perentId +  cloneIndex);
		$clone.find("*")
		.each(function() {
			var id = this.id || "";
			var match = id.match(regex) || [];
			if (match.length == 3) {
				var newId3 = match[1].substr(4, 100);
				if (onclickEvent != "" && newId3 == onclickEvent) {
					this.onclick = function() { openDocument(onclickEventId + perentId +cloneIndex);}
				}
				this.id = newId3 + perentId + (cloneIndex);
				if (this.type != "checkbox") {
					this.value="";
				}				
				this.id = newId3 +perentId+""+cloneIndex;
				this.disabled=false;
				this.name=path1+"["+perentId+"]."+ path2+"["+(cloneIndex)+"]."+newId3;
			}
		});
	$clone.appendTo("#"+divBodyNm+perentId);
}

// Delete On Img Click
function deleteTableDataRow(id) {
	$(id).remove();
}

function maximumChar (id, value, errorMsgDiv, msg, char) {
	if (value.length > parseInt(char)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" should not be more than "+char+" Characters.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function chkDoubleVal (id, value, errorMsgDiv, msg ) {

	var regexDouble12_2 = /^[0-9]{0,10}(\.[0-9]{0,2})?$/;

	if (value != "" && (!regexDouble12_2.test(value))) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" should be maximum 10 digit & 2 decimals.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function chkDoubleValForPrecisionDecimalPlace(id, value, errorMsgDiv, msg ) {

	var regexDouble8_2 = /^[0-9]{0,6}(\.[0-9]{0,2})?$/;

	if (value != "" && (!regexDouble8_2.test(value))) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" should be maximum 6 digit & 2 decimals.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function changeReqTextColor(tableId, reqId, reqNoId) {
	tableNm = "#"+tableId;
	var allTrs = $(tableNm).find('tr');
	var cloneIndex = allTrs.length;
	cloneIndex = parseInt(cloneIndex);
	for(var i = 0; i < cloneIndex; i++) {
		if (document.getElementById(reqId).value == document.getElementById(reqId+i).value) {
			document.getElementById(reqNoId+i).style.color = "#000080";
		}
	}
}

// for Bootstarp jquerry radio button
function gridRadioBtn(tableName) {
	$('#'+tableName+ ' tbody').on( 'click', 'tr', function () {
		if ($('.gridRadioButton  tr').is('.selected')) {
			$('.btnDisableGrid').addClass('btnEnable');
			$('.btnDisableGrid').removeClass('btnDisable');
			$(".btnDisableGrid").hover(function(){
				$(this).addClass('btnEnableHover');
				$(this).removeClass('btnEnableOut');
			}, 
			function(){
				$(this).addClass('btnEnableOut');
				$(this).removeClass('btnEnableHover');
			}); 
		} else {
			$('.btnDisableGrid').addClass('btnDisable');
			$('.btnDisableGrid').removeClass('btnEnable');
		}
	 });
}

function searchGridInput(oTable, datatableId) {
	var asInitVals = new Array();
	$("thead input").keyup( function () {
		/* Filter on the column (the index) of this element */
		oTable.fnFilter( this.value, $("thead input").index(this) );
	}); 

	/*
	 * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
	 * the footer
	 */
	$("thead input").each( function (i) {
		asInitVals[i] = this.value;
	});

	$("thead input").focus( function () {
		if ( this.className == "search_init" ) {
			this.className = "";
			this.value = "";
		}
	});

	$("thead input").blur( function (i) {
		if ( this.value == "" )	{
			this.className = "search_init";
			this.value = asInitVals[$("thead input").index(this)];
		}
	});
	// use fot grid button
		var pdfButton = $(".dt-buttons").detach();
		$(".dataTables_wrapper").append( pdfButton );
		  
	
	// use for scroll bar
	if (datatableId == undefined || datatableId == "undefined" || datatableId == "") {
		 
		var pagination = $('.dataTables_paginate').detach();
		var datatableinfo = $('.dataTables_info').detach();
		var pdfButton = $(".dt-buttons").detach();
			oTable.after(pdfButton);
		var isClassExist = document.getElementsByClassName('gridScrollBar');
		if (isClassExist.length > 0) {
			$(".gridScrollBar").after(pagination);
			$(".gridScrollBar").after(datatableinfo);
			$(".gridScrollBar").after(pdfButton);
		} else {
			oTable.after(pagination);
			oTable.after(datatableinfo);
			$(".dataTables_info").addClass("paddingTop17");
		}
	} else {
		var pagination = $('#'+datatableId+'.dataTables_paginate').detach();
		var datatableinfo = $('#'+datatableId+'.dataTables_info').detach();
		var pagination_1 = $('.dataTables_paginate').detach();
		var datatableinfo_1 = $('.dataTables_info').detach();
		var isClassExist = document.getElementsByClassName('gridScrollBar');
		if (isClassExist.length > 0) {
			$(".gridScrollBar").after(pagination);
			$(".gridScrollBar").after(datatableinfo);
			$(".gridScrollBar").after(pdfButton);
			$(".gridScrollBar").after(pagination_1);
			$(".gridScrollBar").after(datatableinfo_1);
		} else {
			oTable.after(pagination);
			oTable.after(datatableinfo);
		}
	}
}

function checkBoxGridBtn(tableName) {
	var table = $('#'+tableName).DataTable();
	$('#'+tableName+ ' tbody').on( 'click', 'tr', function () {
		if (table.rows('.selected').data().length > 1) {
				$('.btnView').addClass('btnDisable');
				$('.btnEdit').addClass('btnDisable');
				$('.btnPay').addClass('btnEnable');
			$(".btnDisableGrid").hover(function(){
				$(this).addClass('btnEnableHover');
				$(this).removeClass('btnEnableOut');
			}, 
			function(){
				$(this).addClass('btnEnableOut');
				$(this).removeClass('btnEnableHover');
			});
		} else if (table.rows('.selected').data().length == 0) {
			$('.btnDisableGrid').addClass('btnDisable');
			$('.btnView').removeClass('btnEnable');
			$('.btnEdit').removeClass('btnEnable');
			$('.btnPay').removeClass('btnEnable');
		} else {
			$('.btnDisableGrid').addClass('btnEnable');
			$('.btnView').removeClass('btnDisable');
			$('.btnEdit').removeClass('btnDisable');
			$('.btnPay').removeClass('btnDisable');
			$(".btnDisableGrid").hover(function(){
				$(this).addClass('btnEnableHover');
				$(this).removeClass('btnEnableOut');
			}, 
			function(){
				$(this).addClass('btnEnableOut');
				$(this).removeClass('btnEnableHover');
			});
		}
	 });	
}

//use for lock div enable
function lockOn(lockDiv) {
	try{
		if (lockDiv) {
			lockDiv.className = 'lock-on';
			lockDiv.innerHTML = '<div style="margin-top:40px;" align="center"><FIELDSET><div align="center" class="message"><img src="img/loading.gif" /></br></br>Processing your request. Please wait...</br></span></div></FIELDSET></div>';
		}
	} catch(err){}
}

// use for lock div off
function lockOff(lockDiv) {
	try{
		lockDiv.className = 'lock-off';
	} catch(err){}
}

//To add Masking after click on submit button
function addLockOn() {
	try {
		lockOn(document.getElementById('lock'));
	} catch(err){}
}

function submit(formObj, url, lockoff) {
	try { 
		addLockOn();
	} catch(err){}
	
	document.forms[formObj].action = url;
	document.forms[formObj].submit();
	if(lockoff) {
		setTimeout(function(){ try {lockOff(document.getElementById('lock'));} catch(err){} }, 2000);
	}
	
}

// use for set date picker externally
function setDatePicker() {
	$('.datepicker').datetimepicker({
		format: 'DD-MM-YYYY'
	});
}

function isListchecked (listName, errorMsgDiv, msg) {
	
	var checkcount = 0;
	var checkboxes = document.getElementsByName(listName);
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        	checkcount++;
        }
	}
    if (checkcount <= 0) {
    	document.getElementById(errorMsgDiv).innerHTML = "select any one of the "+msg;
    	return true;
    }
	
	return false;
}

function validatePanCard(val) {
	var pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
	if (!pattern.test(val)) {
		return true;
	}
	return false;
}

function validateMultiSelect (id,errorMsgDiv,msg) {
	if ($("#"+id+" option:selected").length <= 0) {
		document.getElementById(errorMsgDiv).innerHTML = "select any one of the "+msg;
		return true;
	}
	return false;
}

function validateIgmNo(id,igmNo,errorMsgDiv,msg) {
	var pattern = /^\d{7}$/;
	
	if (!igmNo.match(pattern)) {
		document.getElementById(errorMsgDiv).innerHTML = msg + " should be 7 digits.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function validateItemNo(id,itemNo,errorMsgDiv,msg){
	var pattern = /^\d{1,4}$/;
	
	if(!itemNo.match(pattern)){
		document.getElementById(errorMsgDiv).innerHTML = msg + " should be less than or equal to 4 digits.";
		document.getElementById(id).select();
		return true;
	} 
	return false;	
}

function validateSubItemNo(id,subItemNo,errorMsgDiv,msg){
	var pattern = /^\d{1,10}$/;
	
	if(!subItemNo.match(pattern)){
		document.getElementById(errorMsgDiv).innerHTML = msg + " should be less than or equal to 10 digits.";
		document.getElementById(id).select();
		return true;
	} 
	return false;	
}

// check for negative value
function chkNegativeVal(id, value, errorMsgDiv, msg ) {

	if (value != "" && (value <0)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" should be non-negative.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

// check for zero value
function chkNonZeroVal(id, value, errorMsgDiv, msg ) {

	if (value != "" && (value == 0 || value == 0.0)) {
		document.getElementById(errorMsgDiv).innerHTML = msg+" should not be zero.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

function validateDateDiff(frmdt, toDt, errorMsgDiv, msg) {
	if (!compareDateDiff(frmdt, toDt)) {
		document.getElementById(errorMsgDiv).innerHTML = msg + " is required. ";
		return true;
	}
	return false;
}

function compareDateDiff(fromDate, toDate) {// Custom msg removed
		if (fromDate != '' && toDate != '' ) {
		// extract day month and year from both of date
		var fromDay = fromDate.substring(0, 2);
		var toDay = toDate.substring(0, 2);
		var fromMon = eval(fromDate.substring(3, 5) - 1);
		var toMon = eval(toDate.substring(3, 5) - 1);
		var fromYear = fromDate.substring(6, 10);
		var toYear = toDate.substring(6, 10);

		// convert both date in date object
		var frmDt = new Date(fromYear, fromMon, fromDay);
		var toDt = new Date(toYear, toMon, toDay);
		
		var timeDiff = Math.abs(toDt.getTime() - frmDt.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		if (parseInt(diffDays) > 7) {			
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
}

//use for make page button disabled
function disabledSubmitBtn(id) {
	document.getElementById(id).setAttribute("class", "btn btnDisable");
}

//use for make gide button disabled
function disabledGridBtn(id) {
	$("#"+id).addClass('btnDisable');
}

//use for make search button disabled
function srchBtndisabled(id) {
	$("#"+id).addClass('srchBtnDisable');
}

// for creation of span, setting label and field vaues
function setAdvSrchDtls(map) {
	var advSrchSpan = document.getElementById("srchAdvDtlsId");
	if (map.size > 0) {
		var defSrchSpan = document.createElement("span");
		defSrchSpan.setAttribute("class", "textBold textFont12 textOrange");
		advSrchSpan.appendChild(defSrchSpan);
		defSrchSpan.innerHTML = "Results For:";
		map.forEach(function (key, value) {
			setSrchFieldValues(value);
			setSrchLabelValues(key);
		});
	}			
}

 function setSrchLabelValues(key) {
	var advSrchSpan = document.getElementById("srchAdvDtlsId");
	var srchLabelSpan = document.createElement("span");
	srchLabelSpan.setAttribute("class", "textFont11");
	srchLabelSpan.innerHTML = key+"&nbsp;";
	advSrchSpan.appendChild(srchLabelSpan);
}

function setSrchFieldValues(value) {
	var advSrchSpan = document.getElementById("srchAdvDtlsId");
	var srchFieldSpan = document.createElement("span");
	srchFieldSpan.setAttribute("class", "textBold textFont11 textGray padding5");
	srchFieldSpan.textContent = value;
	advSrchSpan.appendChild(srchFieldSpan); 
}

// Function use for add Date Picker
function addDatePicker(fromDate , toDate) {
	$('#'+fromDate).datetimepicker({
	  format: 'DD-MM-YYYY'
	}).on('dp.change', function (ev) {
		$("#"+toDate).focus();
	});

	$('#'+toDate).datetimepicker({
		format: 'DD-MM-YYYY'
	}); 
	
}

// Function use for Replace Script Text and all content of script from Page or Tag
function replaceScriptFromString(src) {
	var scripts = src.getElementsByTagName('script');
	var i = scripts.length;
	while (i--) {
	  scripts[i].parentNode.removeChild(scripts[i]);
	}
}

// Function use for load Script Content into new Script Tag
function loadScript(src) {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.innerHTML = src;
   document.getElementsByTagName("head")[0].appendChild(script);
}

// Function use for Populate Child Grid For Json
function populateChildtls(tableNm, functionName) {

	var table = $('#'+tableNm).DataTable();

	$('#'+tableNm+' tbody').on('click', 'td.details-control', function () {
		var tr = $(this).closest('tr');
		var rowIdx = table.row(tr).index();
		var value = table.row(rowIdx).data();
		var row = table.row(tr);
		if ( row.child.isShown() ) {
			// This row is already open - close it
			row.child.hide();
			tr.removeClass('shown');
		} else {
			// Open this row
			row.child(functionName(value)).show();
			tr.addClass('shown');
		}
	}); 

}

//Function use for Populate Child Grid For Json
function populateMultiChildtls(tableNm, functionName) {
	var table;
	$('#'+tableNm+' tbody').on('click', 'td.dtls_show', function () {
		table = $('#'+tableNm).DataTable();
		var tr = $(this).closest('tr');
		var row = table.row(tr);
		row.child.hide();
		tr.removeClass('shown');
		$(this).removeClass('dtls_show');
		$(this).addClass('dtls_hide');
	}); 
	$('#'+tableNm+' tbody').on('click', 'td.dtls_hide', function () {
		table = $('#'+tableNm).DataTable();
		functionName(table, this);
		/*// Open this row
		row.child(functionName(value)).show();
		tr.addClass('shown');
		$(this).removeClass('dtls_hide');
		$(this).addClass('dtls_show');*/
	});

}

function compareFloatValues(value1, value2, errorMsgDiv, msg1, msg2) {	 
	// var valid = false;
	if (value1 != "" && value2 != "" && (parseFloat(value1) > parseFloat(value2))) {
		document.getElementById(errorMsgDiv).innerHTML = msg1 + " should be less than or equal to " + msg2;
		return true;
	}
	return false;
}

function compareIntValues(value1, value2, errorMsgDiv, msg1, msg2) {	 
	
	if (value1 != "" && value2 != "" && (value1 <= value2)) {
		document.getElementById(errorMsgDiv).innerHTML = msg1 + " should be greater than " + msg2;
		return true;
	}
	return false;
}

function isValidPdfFile(input) {
	var filePath = document.getElementById(input.id).value;
	var nm = filePath.split("\\");
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	var extArray = new Array("PDF", "pdf");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == ext) {
			return false;
		}
	}
	alert("Please upload PDF documents only. ");
	input.value = null;
	return true;
}

function validateMobileNo(value) {
	var pattern = /^[0-9]+$/;
	if (!pattern.test(value)) {
		return true;
	}
	return false;
}

//for active inactive button
function enableActiveInactiveBtn() {
	$('.inputRadioBtn').change(function(){
		$('.inputRadioBtn').parent().addClass('btn-default');
		var $self = $(this);
		  if ($self.prop('checked')) {
				$('.inputRadioBtn').parent().removeClass('btn-primary');
				$self.parent().addClass('btn-primary');
				$self.parent().removeClass('btn-default');
		  } 
		 else {
			  $('.inputRadioBtn').parent().addClass('btn-default');
			  $self.parent().addClass('btn-default');
		  }
	});
}


//showing confirm box with message and name of buttons
function showConfirmMsg(msg, textYes, functionYes, textNo, functionNo, divStyleClass) {
	if(divStyleClass==undefined){
		divStyleClass = '';
	}
	$('<div></div>').appendTo('body')
    .html('<div divStyleClass ><h6>' + msg +' </h6></div>')
    .dialog({	
	  resizable: false,
	  modal: true,
	 
	  buttons: {
			yes:{ 
				class: 'leftPopUpButton',
				text: textYes,
				click : function (){
					$( this ).dialog( "close" );
					try {
						functionYes();
					} catch(err){}
				}
			},
			no:{ 
				class: 'rightPopUpButton',
				text: textNo,
				click : function (){
					$( this ).dialog( "close" );
					try {
						functionNo();
					} catch(err){}
				}
			}
		}
	});
}

//This function validates the 'value' according to regular expression provided in 'regex'
function validatePattern(value, regex) {
	return (new RegExp(regex)).test(value);
}


function isValidXlsFile(input) {
	var filePath = document.getElementById(input.id).value;
	var nm = filePath.split("\\");
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	
	// File type array
	var extArray = new Array("XLS", "XLSX", "xls", "xlsx");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == ext) {
			return true;
		}
	}
	alert("Please upload Excel file only. ");
	input.value = null;
	return false;
}

/**
	This function validates if given decimal no is having mentioned no of digits before and after decimal point.
	e.g. validateDecimalNo(vgmRequestVo.getTotWt().toString(), 4, 6, 0, 2)
	verifies VGM is having 4 to 6 no of digits before decimal point; and 0 to 2 no of digits after decimal point.
	This function can also be used to validate a whole no if we pass minDigitsAfterDeciPt = 0 and maxDigitsAfterDeciPt = 0
 */
function validateDecimalNo(id, value, divErrorMsg, msg, minDigitsBeforeDeciPt, maxDigitsBeforeDeciPt, minDigitsAfterDeciPt, maxDigitsAfterDeciPt ) {

	var regexMin4Max6_2 = new RegExp('^[0-9]{'+minDigitsBeforeDeciPt+','+maxDigitsBeforeDeciPt+'}(\\.[0-9]{'+minDigitsAfterDeciPt+','+maxDigitsAfterDeciPt+'})?$');
	
	if (value != "" && (!regexMin4Max6_2.test(value))) {
		document.getElementById(divErrorMsg).innerHTML = msg+" should be "+minDigitsBeforeDeciPt+" to "+maxDigitsBeforeDeciPt+" digits before decimal and max "+maxDigitsAfterDeciPt+" after decimal.";
		document.getElementById(id).select();
		return true;
	}
	return false;
}

//last parameter name is optional. If it is not sent, only code will appear in text box on selection. 
//The description will be visible only in list.
function loadAutoCompltBox(list, id, name) {
	var availablePyrNms = new Array();
	var i = 0;
	while(document.getElementById(list).length > i) {
		availablePyrNms.push({'label':document.getElementById(list).options[i].text , 'value': document.getElementById(list).options[i].value});
		i++;
	
		if(name != undefined && name!= ''){
			$("#"+name).autocomplete({
				source: function(request, response) {
					var results = $.ui.autocomplete.filter(availablePyrNms, request.term);
					response(results.slice(0, 10));
				},
				select: function(e, ui) {
					e.preventDefault(); // <--- Prevent the value from being inserted.
					$("#"+name).val(ui.item.label);
					$("#"+id).val(ui.item.value);
				},
				focus: function(e, ui) {
					e.preventDefault(); // <--- Prevent the value from being inserted.
					$("#"+name).val(ui.item.label);
					$("#"+id).val(ui.item.value);
				}
			});	
		}else{
			$("#"+id).autocomplete({
				source: function(request, response) {
					var results = $.ui.autocomplete.filter(availablePyrNms, request.term);
					response(results.slice(0, 10));
				},
				select: function(e, ui) {
					e.preventDefault(); // <--- Prevent the value from being inserted.
					$("#"+id).val(ui.item.value);
				},
				focus: function(e, ui) {
					e.preventDefault(); // <--- Prevent the value from being inserted.
					$("#"+id).val(ui.item.value);
				}
			});	
		}
	}
}

//if Desc is not blank, then it's a vlaid Desc. The value against valid desc is returned.
function getAutoCompltDescValidValue(list, fieldDesc, fieldName){
	var validValue = '';		
	var i = 0;
	while(document.getElementById(list).length > i) {
		if(document.getElementById(list).options[i].text.toLowerCase().trim() == fieldDesc.toLowerCase().trim()){	
			validValue = document.getElementById(list).options[i].value;
			break;
		}
		i++;
	}
	return validValue;
}

//if value is not blank, then it's a vlaid value. The description against valid value is returned.
function getAutoCompltValueValidDesc(list, fieldValue){
	var validDesc = '';		
	var i = 0;
	while(document.getElementById(list).length > i) {
		if(document.getElementById(list).options[i].value.toLowerCase().trim() == fieldValue.toLowerCase().trim()){				
			validDesc = document.getElementById(list).options[i].text;
			break;
		}
		i++;
	}
	return validDesc;
}

// to check the extension of input file is XLS or not.
function isValidFileFormat(input) {
	var filePath = document.getElementById(input.id).value;
	var nm = filePath.split("\\");
	
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	// File type array
	var extArray = new Array("XLS", "xls");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == ext) {
			return true;
		}
	}
	alert("Please upload Excel file only. ");
	input.value = null;
	return false;
}

// Use for select multiselect value 
function setMultiSelectedVal(val, selectBoxId) {
	var selectObj = document.getElementById(selectBoxId);
	if(val == '[]') {
		for (var K = 0; K < selectObj.options.length; K++) {
			selectObj.options[K].selected = true;
		}
	} else {
		var slctValue = val.replace(/[\[\]']+/g,'');
		var res = slctValue.split(",");
		for (var j = 0; j < selectObj.options.length; j++) {
			for (var i = 0; i < res.length; i++) {
				if (res[i].trim() == selectObj.options[j].value) {
					selectObj.options[j].selected = true;
				}
			}
		}
	}
	if (val != "") {
		$('#'+selectBoxId).multiselect('rebuild');
		genrateMultiSelect(selectBoxId);
	}
}

// generate multi select drop down
function genrateMultiSelect(id) {
	$('#locList'+id ).multiselect ({
		noneSelectedText: 'Select ',
		includeSelectAllOption: true,
		numberDisplayed: 1,
		buttonWidth: '100%',
		paddingCss: '3px'
	});
	$('.multiselect-container li input').addClass('regular-checkbox');
}

function isNotEmpty(str) {
	return (str != "" && str != 'null' && str != undefined);
}


//to check the extension of input file is XLS or not.
function isValidIgmFileFormat(input) {
	var filePath = document.getElementById(input.id).value;
	var nm = filePath.split("\\");
	
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	// File type array
	var extArray = new Array("IGM", "igm", "txt");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == ext) {
			return true;
		}
	}
	alert("Please upload valid igm file only. ");
	input.value = null;
	return false;
}

function isValidIgmXLFileFormat(input) {
	var filePath = document.getElementById(input.id).value;
	var nm = filePath.split("\\");
	
	var ext = (/[.]/.exec(nm[nm.length - 1])) ? /[^.]+$/
			.exec(nm[nm.length - 1]) : "undefined";
	// File type array
	var extArray = new Array("IGM", "igm", "txt", "XLS", "xls");
	// If file type among extArray
	for ( var i = 0; i < extArray.length; i++) {
		if (extArray[i] == ext) {
			return true;
		}
	}
	alert("Please upload valid igm file only. ");
	input.value = null;
	return false;
}

//showing confirm box with message and name of buttons with params
function showConfirmMsgWithParams(msg, textYes, functionYes, functionYesParam, textNo, functionNo, functionNoParam) {
	$('<div></div>').appendTo('body')
    .html('<div><h6>' + msg +' </h6></div>')
    .dialog({	
	  resizable: false,
	  modal: true,
	 
	  buttons: {
			yes:{ 
				class: 'leftPopUpButton',
				text: textYes,
				click : function (){
					$( this ).dialog( "close" );
					try {
						functionYes(functionYesParam);
					} catch(err){}
				}
			},
			no:{ 
				class: 'rightPopUpButton',
				text: textNo,
				click : function (){
					$( this ).dialog( "close" );
					try {
						functionNo(functionNoParam);
					} catch(err){}
				}
			}
		}
	});
}

function chkMaxLengthForTextArea(field, maxChars, id){
	var newLineCharLen = 0;
	var newLines = field.value.match(/(\r\n|\n|\r)/g);
	if (newLines != null && newLines != undefined && newLines != "") {
		newLineCharLen = newLines.length;
	}
	if (field.value.length + newLineCharLen >= maxChars) {
		alert("Number of characters exceed the maximum length.");
		document.getElementById(id).value = "";
	}
}

//Function to show and hide grid columns
function fnShowHideGridCol(iCol, tableNm) {			
	var oTable = $('#'+tableNm).dataTable();
	var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
	oTable.fnSetColumnVis( iCol, bVis ? false : true );
}

//Function to export Grid to excel using DHTMLX grid with column hide
function exportGridToExcel(grid, fileNm, colHide) {
	if (grid.getRowsNum() == 0) {
		alert("Data not available");
		return false;
	}

	if (colHide!= null && colHide != undefined && colHide != "") {
		var colArray = colHide.split(',');
		for (var i = 0; i < colArray.length; i++) {
			//hide column in excel
			grid.setColumnHidden(colArray[i], true);
		}
		grid.toExcel("generateExcel.do?fileNm="+fileNm);	
		for (var i = 0; i < colArray.length; i++) {
			//show column in grid
			grid.setColumnHidden(colArray[i], false);
		}
	} else {
		grid.toExcel("generateExcel.do?fileNm="+fileNm);
	}

}

// Function to export Grid to excel using DHTMLX grid
function exportGridInExcelFormat(grid, fileNm) {

	if (grid.getRowsNum() == 0) {
		alert("Data not available");
		return false;
	}	
	grid.toExcel("generateExcel.do?fileNm="+fileNm);
}

// Function to print Grid using DHTMLX grid
function validatePrintView(gridObj,colHide) {
	if (gridObj.getRowsNum() == 0) {
		alert("Data not available.");
		return false;
	} 
	if (colHide!= null && colHide != undefined && colHide != "") {
		var colArray = colHide.split(',');
		for (var i = 0; i < colArray.length; i++) {
			//hide column in print
			gridObj.setColumnHidden(colArray[i], true);
		}
		gridObj.printView();	
		for (var i = 0; i < colArray.length; i++) {
			//show column in grid
			gridObj.setColumnHidden(colArray[i], false);
		}
	} else {
		gridObj.printView();
		return false;
	}
}

function browserBack() {
	javascript:history.go(-1);
}  

$(function() {
    $('#helpDocId').BootSideMenu({
                   side: "right",
                   pushBody: false,
                   autoClose: true,
                   duration: 1000
           });  
});

function addChildTableRowWithMap (perentId, tableBodyNm, parentRowId, childRowId, rowId, path1, path2, map, onclickEvent, onclickEventId) {
	//var newId ;
	//var regex1 = /^(.*)(\d)(\d)+$/i;
	var cloneIndex = 0;

	var tableLastId=$("#"+tableBodyNm+perentId+ " tr:last").attr('id');
	if (tableLastId != undefined) {
		var intVal = tableLastId.replace( /[^\d.]/g, '' );
		cloneIndex = parseInt(intVal) + 1;
	}
	var regex = /^(.*)(\d{2})+$/i;		
	var $clone = $("#"+parentRowId).find("#"+childRowId).clone();
		$clone.removeAttr("id");
		$clone.attr("id", rowId+ perentId +  cloneIndex);
		$clone.find("*")
		.each(function() {
			var id = this.id || "";
			var match = id.match(regex) || [];
			if (match.length == 3) {
				var newId3 = match[1].substr(4, 100);
				if (onclickEvent != "" && newId3 == onclickEvent) {
					this.onclick = function() { openDocument(onclickEventId + perentId +cloneIndex);}
				}
				this.id = newId3 + perentId + (cloneIndex);
				if (this.type != "checkbox") {
					this.value="";
				}
				this.disabled=false;
				
				if (map.has(newId3)) {
					this.name=path1+"["+perentId+"]."+ path2+"["+(cloneIndex)+"]."+map.get(newId3);
				} else {
					this.name=path1+"["+perentId+"]."+ path2+"["+(cloneIndex)+"]."+newId3;
				}
				
			}
		});
	$clone.appendTo("#"+tableBodyNm+perentId);
}


function addMultipleRowWithMap (tableCount, tableBody, tableRowId,path, map, fnMap) {
	var newId ;
	var regex = /^(.*)(\d)+$/i;
	var cloneIndex = parseInt(tableCount);
	var $clone = $("#"+tableRowId).clone();
	$clone.removeAttr("id");
	$clone.attr("id", tableRowId + cloneIndex);
	$clone.find("*")
	.each(function() {
		var id = this.id || "";
		var match = id.match(regex) || [];
		if (match.length == 3) {
			newId = match[1].substr(4, 100);
			this.id = newId + (cloneIndex);
			
			if (this.type != "checkbox") {
				this.value="";
				this.text = "";
			}
			if (map.size > 0 && map.has(newId)) {
				this.name= path+"["+(cloneIndex)+"]."+map.get(newId);
			} else {
				this.name= path+"["+(cloneIndex)+"]."+newId;
			}
			
			if (fnMap.size > 0 && fnMap.has(newId)) {
				var callFunc=new Function(fnMap.get(newId)+'('+cloneIndex+')');
				if (this.onchange != null)
					this.onchange = callFunc;
				else 
					this.onclick = callFunc;
			}
			
		}
	});
	$clone.appendTo("#"+tableBody);
}
// function used to show update message
function showUpdateAlert(updateflag,labelVal){
	if(updateflag){
		msg =  labelVal +" has been updated successfully!";
		alert(msg);
	}	
}

//function used to show update message
function showCreateAlert(createflag,labelVal){
	if(createflag){
		msg =  labelVal +" has been created successfully!";
		alert(msg);
	}	
}

//function used to show file update message
function showUploadFileAlert(updateflag,labelVal){
	if(updateflag){
		msg =  labelVal +" has been updated successfully!";
		alert(msg);
	}	
}


//This function will copy the copyVal to client system clipboard.
function copyToClipboard(copyVal) {
	var copySuccess= false;
    var aux = document.createElement("input");
	aux.setAttribute("value", copyVal);
	document.body.appendChild(aux);
	aux.select();
    document.execCommand("copy");
	document.body.removeChild(aux);
	copySuccess = true;
	
	return copySuccess;
}

//Returns true if GST no is valid for given state. else returns false.
function validateGSTNo(gstNo, gstStCd) {
	var valid = true;
	if (gstNo != "") {
		gstNo = gstNo.trim();
		gstStCd = gstStCd.trim();
		if (gstNo.substring(0,2) == gstStCd) {
			var pattern = /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}?$/;
			if (!pattern.test(gstNo)) {
				valid = false;
			}
		} else {
			valid = false;
		} 
	 return valid;
	}
}

//Validate GST Pattern only
function validateGSTNoPattern(gstNo) {
	var valid = false;
	if (gstNo != "") {
		gstNo = gstNo.trim();
		var pattern = /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}?$/;
		if (pattern.test(gstNo)) {
			valid = true;
		} 
	}
	return valid;
}

//function used to validate multiple email ids with comma seperated
function validateMultiEmailId(emailIds) {
	var emailArray = emailIds.split(",");
	var mail_pattern = /^[a-zA-Z0-9-_]+(\.[-_a-zA-Z0-9]+)*@[a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)*(\.[a-zA-Z-_]{2,15})$/;
	for(var i = 0; i<emailArray.length; i++) {
		if (!mail_pattern.test(emailArray[i])) {
			return true;
		}
	}
	return false;
}

function replaceCRLFWithSpace(arg) {
	var id = arg.getAttribute('id');
	var value = arg.value;
	var txt =  value.replace(/[\n\r]/g, " ");
	$('#'+id).val(txt);
}

function disableEnterKeyForTxtArea() {
	$('textarea').keypress(function(event) {
	    if (event.keyCode == 13) {
	        event.preventDefault();
	    }
	});
}