
<cfif isDefined('url.method') and url.method eq 'emailTracking.emailClick'>
	<cflocation url="http://#cgi.http_host#/index.cfm?method=#url.method#&memberID=#url.memberID#&emailDocumentSentID=#url.emailDocumentSentID#&emailDocumentLinkID=#url.emailDocumentLinkID#">
</cfif>
<cfif isDefined('url.method') and url.method eq 'emailTracking.emailRead'>
	<cfset GetPageContext().forward('/index.cfm?method=#url.method#&memberID=#url.memberID#&emailDocumentSentID=#url.emailDocumentSentID#') />
</cfif>