<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    exclude-result-prefixes="sitemap">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html>
<head>
    <title>Sitemap - Apna Pahad</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            background: #fafafa; 
            margin: 20px;
            padding: 0;
        }
        h2 { 
            color: #333; 
            margin-bottom: 10px;
        }
        .info {
            color: #666;
            margin-bottom: 20px;
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        th, td { 
            padding: 12px; 
            border-bottom: 1px solid #ddd; 
            text-align: left;
        }
        th { 
            background: #f0f0f0; 
            font-weight: bold;
            color: #333;
        }
        tr:hover {
            background: #f9f9f9;
        }
        a { 
            color: #0073aa; 
            text-decoration: none; 
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
<h2>Sitemap - Apna Pahad</h2>
<p class="info">Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></p>

<table>
<tr>
    <th>URL</th>
    <th>Last Modified</th>
    <th>Change Frequency</th>
    <th>Priority</th>
</tr>

<xsl:for-each select="sitemap:urlset/sitemap:url">
<tr>
    <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td>
    <td><xsl:value-of select="sitemap:lastmod" /></td>
    <td><xsl:value-of select="sitemap:changefreq" /></td>
    <td><xsl:value-of select="sitemap:priority" /></td>
</tr>
</xsl:for-each>

</table>

</body>
</html>
</xsl:template>

</xsl:stylesheet>
