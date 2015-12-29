<h1>TrendStructureJS</h1>
<p class="lead">Creates a structured JSON object from a flat TSV and a structure template. [<a href="http://projects.ctmirror.org/dev/git/TrendStructureJS/">live</a>]</p>
<p>This tool allows spreadsheets (1NF tables) with duplicate rows to be put into higher "normal forms" for faster and cleaner access via indexing. <em>This is is in very early development stages and shouldn't be relied on for accurate data. Always verify your processed data against your raw data.</em></p>
<p><strong>Sample data: </strong> No documentation yet, but for now, there is sample data and a sample JSON template. The sample data represents typical spreadsheet data that needs to be normalized, with test scores given for two tests, in three grades at 5 different schools. In flat 2D JSON, each of the 30 rows would be an object that would not be easy to query.</p>
<p><strong>Usage notes: </strong>Use column names (case-sensitive!) where you want the value plugged in. Use "val" (or any other non-column string) as a placeholder for values. Please try it out with your own data and let me know if it breaks and how:</p>
<p class="text-right"><em>--Jake Kara / jkara@trendct.org</em></p>
