 /* ========== js for accordion ===========*/  
$(function($)
	{
	
/* ===============js for pagination table ===========*/
		
		$("#dropdown-menu select").dropdown();
		$('#myContent').show();
		
});
$(function () {

	$('.datepicker').datetimepicker({
		format: 'DD-MM-YYYY'
	});
	
	$('.datetimepicker').datetimepicker({
		format: 'DD-MM-YYYY HH:mm'
	});

});
/* =================== filter js =================*/
 (function(document) {
	'use strict';    

	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}
		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() 
			{
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
				var inputs1 = document.getElementsByClassName('light-table-filter1');
				Arr.forEach.call(inputs1, function(input) {
					input.oninput = _onInputEvent;
				});
				var inputs2 = document.getElementsByClassName('light-table-filter2');
				Arr.forEach.call(inputs2, function(input) {
					input.oninput = _onInputEvent;
				});
			}
			
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		} 
		
	}); 

})(document);			 		
/*** Dialog Box Close ***/ 
		
	$( "#reject" ).click(function() {
		$('.modal ').css("display","none");
   });	 
	
	
 /*** accordion1 Box Close with button ***/  
	var $active = $('#accordion1 .panel-collapse.in').prev().addClass('active');
	$active.find('a').append('<i class="fa fa-minus-circle pull-right"></i>');
	$('#accordion1 .panel-heading').not($active).find('a').prepend('<i class="fa fa-plus-circle pull-right"></i>');
	$('#accordion1').on('show.bs.collapse', function (e)
	{
		$('#accordion1 .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
		$(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
	});
	$('#accordion1').on('hide.bs.collapse', function (e)
	{
		$(e.target).prev().removeClass('active').find('.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');
	});
 
   
	//$('#readOnly :input').attr('readonly','readonly');  
	
		$(".containerDetails").css("display","none");
		$(".attachmentDetails").addClass( "col-md-6 col-md-12" );
		$(".attachmentDetails").removeClass( "col-md-6" )
	
	$('#spanExtension').click(function() { 
    if ($(this).is(':checked')) { 
		$(".containerDetails").css("display","block");
		$(".attachmentDetails").addClass( "col-md-6" );
		$(".attachmentDetails").removeClass( "col-md-12" )
	} else {
         //$(this).prop('checked',true);
       // alert("not checked"); 
		$(".containerDetails").css("display","none");
		$(".attachmentDetails").addClass( "col-md-6 col-md-12" );
		$(".attachmentDetails").removeClass( "col-md-6" )
    }
	
	});
			
			
			/* script for popup */
			 
			$('#invoicHistory').on('show.bs.modal', function (event) {
					var button = $(event.relatedTarget) // Button that triggered the modal
					var recipient = button.data('whatever') // Extract info from data-* attributes
					// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
				// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
				var modal = $(this)
				modal.find('.modal-title').text('New message to ' + recipient)
				modal.find('.modal-body input').val(recipient)
			})
		
		
			$('#invoiceDetails').on('show.bs.modal', function (event) {
					var button = $(event.relatedTarget) // Button that triggered the modal
					var recipient = button.data('whatever') // Extract info from data-* attributes
					// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
				// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
				var modal = $(this)
				modal.find('.modal-title').text('New message to ' + recipient)
				modal.find('.modal-body input').val(recipient)
			})
			 
		 
	/*******Script for view invoice  tab ******/   
			
		 var tabContentHtml = "<div class='container' id='accordion1'><div class='row content panel-box'><div class='col-lg-12'><form class='form-body'name='uploadInv' id='defaultForm' data-toggle='validator' role='form' novalidate='true'> <div class='col-md-4 col-sm-3 form-group marginTop10'><label class='col-md-4 control-label' for='InvNO'> Invoice No:</label><input type='text' class='form-control col-md-8' id='InvNO' name='InvNO'   placeholder='BL NO' required></div><div class='col-md-4 col-sm-3 form-group marginTop10'><label class='col-md-4 col-sm-4'>Invoice Date:</label><div class='date-picker1 date-picker-icon col-md-8' id='date'><input type='text' data-plugin-datepicker='' data-date-format='dd-mm-yyyy' class='form-control input-brdr' placeholder='21-09-2015'><img src='image/calender-icon.png'></div></div> <div class='col-md-4 col-sm-3 form-group marginTop10'><label class='col-md-4 col-sm-4'>Valid Till:</label><div class='date-picker1 date-picker-icon col-md-8' id='date'><input type='text' data-plugin-datepicker='' data-date-format='dd-mm-yyyy' class='form-control input-brdr' placeholder='21-09-2015'><img src='image/calender-icon.png'></div></div> <div class='col-md-4 col-sm-3 form-group marginTop10'><label class='col-md-4 control-label' for='totalBillAtm'> Bill To Party:</label><input type='text' class='form-control col-md-8' id='totalBillAtm'  name='billTopary'   placeholder='Bill To Party' required></div><div class='col-md-4 col-sm-6 form-group marginTop10'<label class='col-md-4 col-sm-4 control-label'>Invoice Type:</label><div class='select col-md-8 col-sm-6'><select required class='form-control' id='dlType' name='dlType'><option value=''>Select</option><option value='Mumbai'>Freight</option><option value='Banglore'> Non Freight</option></select></div></div><div class='col-md-4 col-sm-6 form-group marginTop10'><label class='col-md-4 col-sm-4 control-label'>Invoice Category   :</label><div class='select col-md-8 col-sm-6'> <select required class='form-control' id='dlType' name='dlType'><option value=''>Select</option><option value='Mumbai'>Performa</option><option value='Banglore'>Bill of Entry</option></select></div></div><div class='col-md-4 col-sm-3 form-group marginTop10'><label class='col-md-4 control-label' for='totalBillAtm'> Total Bill Amout:</label><input type='text' class='form-control col-md-8' id='totalBillAtm'  name='totalBillAtm'   placeholder='Total Bill Amount' required></div><div class='col-md-4 col-sm-6 form-group marginTop10'><label class='col-md-2 col-sm-2'> Remark :</label><textarea class='col-md-10 col-sm-10' rows='2' cols='50'> </textarea></div></div></div></div> ";
		 	
			$('#myTab a[href="#addTab"]').on('click', function () { // Click event on the "Add Tab" button
			var nbrLiElem = ($('ul#myTab li').length) - 1; // Count how many <li> there are (minus 1 because one <li> is the "Add Tab" button)
		
			// Add a <li></li> line before the last-child
			// Including the complete structure: the li ID, the <a href=""></a> etc... check the Bootstrap togglable tabs structure
			$('ul#myTab li:last-child').before('<li id="li' + (nbrLiElem + 1) + '"><a href="#tab' + (nbrLiElem + 1) + '" role="tab" data-toggle="tab">Invoice ' + (nbrLiElem + 1) + ' <button type="button" class="btn btn-warning btn-xs" onclick="removeTab(' + (nbrLiElem + 1) + ');"><span class="fa fa-close"></span></button></a>'); 
			
			// Add a <div></div> markup after the last-child of the <div class="tab-content">
			$('div.tab-content:last-child').append('<div class="tab-pane fade " id="tab' + (nbrLiElem + 1) + '"> <p> ' + tabContentHtml + ' </p> </div>'); 
				
		
			function removeTab(liElem) {
			alert(liElem);
			// Function remove tab with the <li> number
			if (confirm("Are you sure?")) { // Display "Are you sure message" and wait for you to press "Ok"
			$('ul#myTab > li#li' + liElem).fadeOut(1000, function () { 
				$(this).remove(); // Remove the <li></li> with a fadeout effect
				$('#messagesAlert').text(''); // Empty the <div id="messagesAlert"></div>
			});
			
			$('div.tab-content div#tab' + liElem).remove(); // Also remove the correct <div> inside <div class="tab-content">
		
			$('ul#myTab > li').not('#last').not('#li' + liElem).each(function(i){ // Select all <li> from <ul id="myTab"> except the last (with is the "Add Tab" button) and without the one we deleted
			var getAttr = $(this).attr('id').split('li'); // We get the <li> div attribute
			$('ul#myTab li#li' + getAttr[1]).attr('id', 'li' + (i + 1)); // We change the div attribute of all <li>: the first is 1, then 2, then 3...
			
			var tabContent = 'Tab ' + (i + 1); // 
			if (getAttr[1] != 1) tabContent += ' <button type="button" class="btn btn-warning btn-xs" onclick="removeTab(' + (i + 1) + ');"><span class="glyphicon glyphicon-remove"></span></button>';
			$('#myTab a[href="#tab' + getAttr[1] + '"]').html(tabContent) // tabContent variable, inside the <li>. We change the number also, 1, then 2, then3...
														.attr('href', '#tab' + (i + 1)); // Same for the href attribute
			
			$('div.tab-content div#tab' + getAttr[1]).html('<p>Content tab ' + (i + 1) + '</p>') // We do the same for all <div> from <div class="tab-content">: we change the number: 1, then 2, then 3...
													.attr('id', 'tab' + (i + 1)); // Same for the id attribute
													
			$('#displayElem').html(i+1); // This line is not required (I just display, inside the <div id="messagesAlert"></div> markup, how many tabs there is)
		});
		
		}
	} 
	
	});
	 
	
	
	
	
 
 
/* js for vertival accordion */

$('.collapse').on('shown.bs.collapse', function()
{
	$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	$('.accordion >.panel-heading').css({'background':'#fff','opacity':'0.6'});
}

).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");

});





/* js for add row */
function addRow(tableID){var table=document.getElementById(tableID);

var rowCount=table.rows.length;

var row=table.insertRow(rowCount);var colCount=table.rows[0].cells.length;for(var i=0;i<colCount;i++){var newcell=row.insertCell(i);newcell.innerHTML=table.rows[0].cells[i].innerHTML;switch(newcell.childNodes[0].type){case"text":newcell.childNodes[0].value="";break;case"checkbox":newcell.childNodes[0].checked=false;break;case"select-one":newcell.childNodes[0].selectedIndex=0;break;
}}}
function deleteRow(tableID){try{var table=document.getElementById(tableID);var rowCount=table.rows.length;for(var i=0;i<rowCount;i++){var row=table.rows[i];var chkbox=row.cells[0].childNodes[0];if(null!=chkbox&&true==chkbox.checked){if(rowCount<=1){alert("Cannot delete all the rows.");break;}
table.deleteRow(i);rowCount--;i--;}}}catch(e){alert(e);}}

 $('body').on('click', 'span.deleteDep', function() {
   $(this).parents('tr').remove();  
});


var count = "1";
  function addRow(in_tbl_name)
  {
    var tbody = document.getElementById(in_tbl_name).getElementsByTagName("TBODY")[0];
    var thead = document.getElementById(in_tbl_name).getElementsByTagName("THEAD")[0];
    // create row
    var row = document.createElement("TR");
    // create table cell 1

    // create table cell 2
    var td2 = document.createElement("TD")
    var strHtml2 = "<span CLASS=\"hide\">Country</span><div CLASS=\"select\" > <SELECT NAME=\"country\"><OPTION VALUE=\"india\">india<OPTION VALUE=\"germany\">germany<OPTION VALUE=\"france\">france<OPTION VALUE=\"united states\">united states<OPTION VALUE=\"switzerland\">switzerland<OPTION VALUE=\"germany\">germany</SELECT></div>";
    td2.innerHTML = strHtml2.replace(/!count!/g,count);
    // create table cell 3
    var td3 = document.createElement("TD")
    var strHtml3 = "<span CLASS=\"hide\">Attachment</span><INPUT TYPE=\"file\" NAME=\"in_name\" SIZE=\"30\" MAXLENGTH=\"30\"  STYLE=\"height:24;border: 1 solid;margin:0;\">";
    td3.innerHTML = strHtml3.replace(/!count!/g,count); 
	
	var td4 = document.createElement("TD")
    var strHtml4 = "<span CLASS=\"hide\">Attachment</span><INPUT TYPE=\"text\" class=\"form-control col-md-8\" value=\"Remark\" >";
    td4.innerHTML = strHtml4.replace(/!count!/g,count);
	
    // create table cell 4
  
    var td5 = document.createElement("TD")
    var strHtml5 = "<span CLASS=\"hide\">Action  </span><span CLASS=\" \" onClick=\"delRow()\"> <i class=\"fa fa-times\"></i>  </span>";
    td5.innerHTML = strHtml5.replace(/!count!/g,count);
	//td5 ="CLASS=\"td-close-btn\" ";
	
	// append data to row
    
    row.appendChild(td2);
    row.appendChild(td3);
	row.appendChild(td4);
    
    row.appendChild(td5);
    // add to count variable
    count = parseInt(count) + 1;
    // append row to table
    tbody.appendChild(row);
  }
  function delRow()
  { 
		if($('#addrow tr').size()>1){  
			$('#addrow tbody tr:last-child').remove();
				}else{
					alert('One row should be present in table');
					} 
	} 
  
  
  var countContainer = "1";
  function addRowContainer(in_tbl_name)
  {
    var tbody = document.getElementById(in_tbl_name).getElementsByTagName("TBODY")[0];
    var thead = document.getElementById(in_tbl_name).getElementsByTagName("THEAD")[0];
    // create row
    var row = document.createElement("TR");
    // create table cell 1

    // create table cell 2
    var td2 = document.createElement("TD") 
	
    var strHtml2 = "<span CLASS=\"hide\">Country</span><div CLASS=\" \" >  OERTC565998656</div>";
    td2.innerHTML = strHtml2.replace(/!countContainer!/g,countContainer);
    // create table cell 3
    var td3 = document.createElement("TD")
    var strHtml3 = "<span CLASS=\"hide\">Attachment</span> <div CLASS=\" \" >  Large</div>";
    td3.innerHTML = strHtml3.replace(/!countContainer!/g,countContainer); 
	
	var td4 = document.createElement("TD")
    var strHtml4 = "<span CLASS=\"hide\">Attachment</span> <div CLASS=\" \" >  02/06/2015</div>";
    td4.innerHTML = strHtml4.replace(/!countContainer!/g,countContainer);
	
    // create table cell 4
  
    var td5 = document.createElement("TD")
    var strHtml5 = "<span CLASS=\"hide\">Action</span><span CLASS=\"close\" onClick=\"delRowContainer()\"> <i class=\"fa fa-times-circle\"></i> </span>";
    td5.innerHTML = strHtml5.replace(/!countContainer!/g,countContainer);
	
	// append data to row
    
    row.appendChild(td2);
    row.appendChild(td3);
	row.appendChild(td4);
    
    row.appendChild(td5);
    // add to count variable
    countContainer = parseInt(countContainer) + 1;
    // append row to table
    tbody.appendChild(row);
  }
  function delRowContainer()
  {  
   
	if($('#addRowContainer tr').size()>1){ 
		$('#addRowContainer tbody tr:last-child').remove();
				}
		else{
			alert('One row should be present in table');
			}
	} 
	
	
 /* js for show hide radio button -*/
$(".paymethod").hide();

        $("input[name$='paymentmethod']").change(function () {
            var test = this.value;
            $(".paymethod").hide();
            $(".paymethod[data-period='" + test + "']").show();
        });
		
		$('html.dark .wizard-progress .pay-steps li a span').click(function()
		{
			alert("please select one of the method for pay");
		});
		$('.radiobox >input').click(function(){
			$('#selectebank span').css({'background':'#fff' , 'color':'#000!important' , 'border':'4px solid #0088cc	'});
			 $("pay-steps >li.active >span").css({'background':'#cccccc!important' , 'color':'#fff!important'});
		});
		$('#selectebank span').click(function(){
			alert('please select one of the payment method');
		});
		
		
/************ Submit Confirm box *************/ 

$('#btnView').click( function(){
	
	
releasedInv();	
	
	
});


function releasedInv(){
	 
		 $( "#myTable tr" ).click(function() {
				var text ="Released";		 
				var currenttR = $(':last-child', this).text();
				 if(currenttR=='Released'){
					 
					window.location="http://localhost/odex-ui/view_invoice_liner.php";					 
					 }else{
					
						 window.location="http://localhost/odex-ui/view-invoice.php";
						 
						 }
			 
				});	
		
		
	}



function submitData() {  
	
	var blNo = document.getElementById("blNo").value;  
	var blLocation = document.getElementById("bllocation").value;  
	var dlType = document.getElementById("dlType").value;  
	 
	
	 if((blNo== null || blNo == "") &&(blLocation== null || blLocation == "") && (dlType== null || dlType == "")){
	 
	// alert("please filds all filds");
	  return false;
	 }
	 else{
	 alert("Are You sure to send these invoice or attach any additional invoice!");
	 window.location="http://localhost/odex-ui/view_invoice_liner.php";
	 }
}   

function submitDataPayment() {  
	
	var linername = document.getElementById("linername").value;  
	var bllocation = document.getElementById("bllocation").value;  
	var blNo = document.getElementById("blNo").value;  
	var invNo = document.getElementById("invNo").value;  
	var invCatagory = document.getElementById("invCatagory").value;  
	var delType = document.getElementById("delType").value; 
	
	 if((blNo== null || blNo == "") &&(bllocation== null || bllocation == "") && (delType== null || delType == "") && (linername== null || linername == "")&& (invNo== null || invNo == "") &&(invCatagory== null || invCatagory == "")){
		//	alert("please filds all filds");
	  return false;
	 }
	 else{
	 alert(" Add Invoice Successfully to Liner!");
	 window.location="http://localhost/odex-ui/view_invoice_liner.php";
	 }
} 

function submitDataRequest() {  
	
	var linerName = document.getElementById("linerName").value;  
	var blLocation = document.getElementById("bllocation").value;  
	var dlType = document.getElementById("dlType").value;  
	 
	
	 if((linerName== null || linerName == "") &&(blLocation== null || blLocation == "") && (dlType== null || dlType == "") &&(requestedby== null || requestedby == "") ){
	 
	// alert("please filds all filds");
	  return false;
	 }
	 else{
	 alert("Invoice Requested Submitted Successfully to Liner!");
	 window.location="http://localhost/odex-ui/view-invoice.php";
	 }
} 


/*********** validation **********/

function requestNewnvoiceForm() {  
	   
	var linername = document.forms["requestnewinvoice"]["linername"].value; 
	var bl = document.forms["requestnewinvoice"]["bl"].value;  
	var blLocation = document.forms["requestnewinvoice"]["blLocation"].value;  
	var dlType = document.forms["requestnewinvoice"]["dlType"].value;  
	var tillDate = document.forms["requestnewinvoice"]["tillDate"].value; 
	
	if (linername == null || linername == "") {
		var idvi = document.createElement("div"); 
		document.forms["requestnewinvoice"]["linername"].style.borderBottom = " solid #f00 1px";
		document.getElementsByClassName('select').appendChild(idvi); 
		
        return false;
    }
	else if(bl == null || bl == "")
		{
		document.forms["requestnewinvoice"]["bl"].style.borderBottom = "solid #f00 1px"
		return false;
		}
	else if(blLocation == null || blLocation == "")
		{
		document.forms["requestnewinvoice"]["blLocation"].style.borderBottom = "solid #f00 1px"
		return false;
		}
	else if(dlType == null || dlType == "")
		{
		document.forms["requestnewinvoice"]["dlType"].style.borderBottom = "solid #f00 1px"
		return false;
		}
	else if(tillDate == null || tillDate == "")
		{
		document.forms["requestnewinvoice"]["tillDate"].style.borderBottom = "solid #f00 1px"
		return false;
		}

	else{
		document.forms["requestnewinvoice"]["linername"].style.borderBottom = "none"
		document.forms["requestnewinvoice"]["bl"].style.borderBottom = "none"
		document.forms["requestnewinvoice"]["blLocation"].style.borderBottom = "none"
		document.forms["requestnewinvoice"]["dlType"].style.borderBottom = "none"
		document.forms["requestnewinvoice"]["tillDate"].style.borderBottom = "none"
		alert("Invoice Request Submitted Succefully");
	window.location="http://localhost/odex-ui/view-invoice.php";
	
	}
}
