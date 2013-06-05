<cfoutput> <!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<cf_metaTags>

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

	<cf_vin65GlobalAssets>

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js">

	<cf_css files="/assets/nivo/nivo-slider.css,/assets/css/screen.css">

</head>
<body>

<div class="wrapper v65-group">

	<!--header-->
	<div class="header">

		<!--logo-->
		<a href="/" accesskey="h" class="logo"><img src="/assets/images/logo.png" alt="<cf_websiteName>"></a>
		<!--/logo-->

		<!--mainMenu-->
		<div class="mainMenu">
			<cf_layoutHeaderNav depth="2">
		</div>
		<!--/mainMenu-->

		<!--user-tools-->
		<div id="user-tools">
			<cf_modalCart>
			<cf_login>
		</div>
		<!--/user-tools-->

	</div>
	<!--/header-->

	<!--content-->
	<div class="content v65-group">
		<cf_mainContent>
	</div>
	<!--/content-->

	<!--footer-->
	<div class="footer">
		<cf_layoutFooterNav>
		<p><cf_copyright></p>
		<p class="accolade"><cf_vin65Accolade></p>
	</div>
	<!--/footer-->

</div>

<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
