<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
    <title>Sitemap</title>
    <style>
        body { font-family: Arial; background: #fafafa; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 8px; border-bottom: 1px solid #ddd; }
        th { background: #f0f0f0; text-align: left; }
        a { color: #0073aa; text-decoration: none; }
    </style>
</head>
<body>
<h2>Sitemap</h2>

<table>
<tr>
    <th>URL</th>
    <th>Change Frequency</th>
    <th>Priority</th>
</tr>

<xsl:for-each select="urlset/url">
<tr>
    <td><a href="{loc}"><xsl:value-of select="loc" /></a></td>
    <td><xsl:value-of select="changefreq" /></td>
    <td><xsl:value-of select="priority" /></td>
</tr>
</xsl:for-each>

</table>

</body>
</html>
</xsl:template>

</xsl:stylesheet>
