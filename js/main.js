$(function () {
	$("#convert_button").click(convert);

	function convert() {
		var json_string = d3.tsv.parse($("#tsv_text").val());
		//$("#json_text").val(JSON.stringify(json_string, null, '\t'));

		var keys = JSON.parse($("#keys_json").val());
		var sj = new StructureJS({json_string: json_string, template: keys});

		$("#json_text").val(JSON.stringify(sj.structured_json, null, '\t'));

		//console.log(JSON.stringify(json_string, null, '\t'));
	}

});

