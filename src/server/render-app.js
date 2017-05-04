// @flow

import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (title: string) =>
`<!doctype html>
<html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="/">
  <meta name="fragment" content="!">
  <title ng-bind="MainCtrl.getPageTitle()">Nautilus Company | Home Page</title>
  <meta id = "siteDescription"
  name="description"
  content="Nautilus Company is the gold standard for custom home construction and home management services in Charleston, SC.">
  <meta name="keywords" content="custom home construction charleston sc, home management charleston sc, custom home construction mount pleasant sc, custom home construction daniel island sc, custom home builders">
  <meta name="robots" content="index,follow,archive">
  <script src="https://use.typekit.net/yhd2cjn.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<meta name="google-site-verification" content="aKzLMrOexZaSSYRxoco53jCbx5Bu0br56NL4vz2PFHY" />
  <link rel="icon" type="image/png" href="./assets/img/favicon.ico">
  <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="./assets/css/styles.css" media="screen" title="no title" charset="utf-8">
  <script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-60994370-1', 'auto');
ga('send', 'pageview');

</script>
<!-----LOCALBUSINESS----->
<script type='application/ld+json'>
{
"@context": "http://www.schema.org",
"@type": "LocalBusiness",
"name": "Nautilus Company",
"url" : "http://www.nautilusco.com/",
"sameAs" : [ "https://www.facebook.com/NautilusCompany",
  "https://twitter.com/@NautilusCompany",
  "http://www.houzz.com/pro/nautilusco/nautilus-company-llc",
  "https://www.linkedin.com/company-beta/1369117/?pathWildcard=1369117"],
"logo": "http://assets.contentful.com/80s1v057uxnv/5fz3qXVwgwmqIiOuu4022/ff2ff1f297fa331bb9c4c4e86b14e270/Nautilus_logo.svg",
"image": "http://images.contentful.com/80s1v057uxnv/3gAUQhIxXy2qkM8qa8U8u4/9864288360cc42e3fefec647f886e86b/Ralston_Green_CSD-I-2015-Ad-Nautilus-155417.jpg",
"description": "Nautilus reduces the stress of owning or building a home in the South Carolina Lowcountry. With dedicated teams for both custom homebuilding and home management, Nautilus services the Charleston peninsula, Mount Pleasant, Daniel Island, Sullivan’s Island, Isle of Palms and the surrounding areas.",
"address": {
  "@type": "PostalAddress",
  "streetAddress": "514 Mill St. Suite E",
  "addressLocality": "Mount Pleasant",
  "addressRegion": "SC",
  "postalCode": "29464",
  "addressCountry": "US"
},
  "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.7",
  "reviewCount": "14"
},
"hasMap": "https://www.google.com/maps/place/Nautilus+Company,+LLC/@32.792816,-79.877648,15z/data=!4m5!3m4!1s0x0:0x857c72bc9e93bad4!8m2!3d32.792816!4d-79.877648",
  "geo":{
  "@type":"GeoCoordinates",
  "latitude":32.792816,
  "longitude":-79.877648
},
"url": "http://www.nautilusco.com/contact",
"telephone": "+18436476224",
"openingHoursSpecification": [
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ],
  "opens": "09:00",
  "closes": "17:00"
}
]
}
}
</script>
<!-----ORGINIZATION----->
<script type="application/ld+json">
{ "@context": "http://schema.org",
"@type": "Organization",
"name": "Nautilus Company",
"legalName" : "Nautilus Company LLC",
"url": "http://www.nautilusco.com/",
"logo": "http://assets.contentful.com/80s1v057uxnv/5fz3qXVwgwmqIiOuu4022/ff2ff1f297fa331bb9c4c4e86b14e270/Nautilus_logo.svg",
"foundingDate": "2010",
"founder":
{
"@type": "Person",
"name": "Bill Payzant"
},
"address": {
"@type": "PostalAddress",
"streetAddress": "514 Mill St. Suite E",
"addressLocality": "Mount Pleasant",
"addressRegion": "SC",
"postalCode": "29464",
"addressCountry": "US"
},
"contactPoint": {
"@type": "ContactPoint",
"contactType": "customer support",
"telephone": "+18436476224",
"email": "info@nautilusco.com"
},
"sameAs" : [ "https://www.facebook.com/NautilusCompany",
  "https://twitter.com/@NautilusCompany",
  "http://www.houzz.com/pro/nautilusco/nautilus-company-llc",
  "https://www.linkedin.com/company-beta/1369117/?pathWildcard=1369117"
]}
</script>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
  </head>
  <body>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
  </body>
</html>
`

export default renderApp
