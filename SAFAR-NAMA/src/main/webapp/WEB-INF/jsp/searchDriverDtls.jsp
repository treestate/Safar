<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<%@ include file="/WEB-INF/include.jsp" %>

<script type="text/javascript">

function doOnLoad() {
		//setSectionSelected(160);
		//setDataTable();
		//$(".choosen_select select").chosen();
	//	setDateRange();	
		alert(document.getElementById('jsonData').value);
	}
	
	
</script>
</head>
<body onload ="doOnLoad()">

<jsp:include page="header.jsp"/>

<form:form method="post" modelAttribute="driverForm" name="driverForm" enctype="multipart/form-data">
	
	<form:hidden id="name" path="driverVo.name"/>
	<form:hidden id="mobileNo" path="driverVo.mobileNo"/>
	<form:hidden id="jsonData" path="driverVo.jsonData"/>
	
</form:form>
</body>
</html>