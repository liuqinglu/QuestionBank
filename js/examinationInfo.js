//试卷加载
function InfoTest(){
    var data = {
        data: JSON.stringify({
            "FunctionName": null,
            "FunctionTypeName": "asd",
            "DName": "" + indexName + "",
            "RequestBaseHeader": { "SeesionKey": "" + cs_SessionKey + "", "TimeSpan": "" }
        })
    };
	$.ajax({
		type:"post",
		url:"",
		cache:false,
		async:false,
		dataType:"JSON",
		data:data,
		success:function(data){
			obj=eval(data);
			if(obj.IsError==false){
			}else{
				alert(obj.ErrorInfo.ErrorMsg);
			}
		}
	});
}
//试卷评分
function InitTest(){
    var data = {
        data: JSON.stringify({
            "FunctionName": null,
            "FunctionTypeName": "asd",
            "DName": "" + indexName + "",
            "RequestBaseHeader": { "SeesionKey": "" + cs_SessionKey + "", "TimeSpan": "" }
        })
    };
	$.ajax({
		type:"post",
		url:"",
		cache:false,
		async:false,
		dataType:"JSON",
		data:data,
		success:function(data){
			obj=eval(data);
			if(obj.IsError==false){
			}else{
				alert(obj.ErrorInfo.ErrorMsg);
			}
		}
	});
}
//试卷删除
function DeleteTest(){
    var data = {
        data: JSON.stringify({
            "FunctionName": null,
            "FunctionTypeName": "asd",
            "DName": "" + indexName + "",
            "RequestBaseHeader": { "SeesionKey": "" + cs_SessionKey + "", "TimeSpan": "" }
        })
    };
	if(confirm("确定要删除该试卷吗？")){
	  $.ajax({
		type:"post",
		url:"",
		cache:false,
		async:false,
		dataType:"JSON",
		data:data,
		success:function(data){
			obj=eval(data);
			if(obj.IsError==false){
			}else{
				alert(obj.ErrorInfo.ErrorMsg);
			}
		}
	  });
	}
}
//试卷查看
function detailTest(){
    var data = {
        data: JSON.stringify({
            "FunctionName": null,
            "FunctionTypeName": "asd",
            "DName": "" + indexName + "",
            "RequestBaseHeader": { "SeesionKey": "" + cs_SessionKey + "", "TimeSpan": "" }
        })
    };
	$.ajax({
		type:"post",
		url:"",
		cache:false,
		async:false,
		dataType:"JSON",
		data:data,
		success:function(data){
			obj=eval(data);
			if(obj.IsError==false){
			}else{
				alert(obj.ErrorInfo.ErrorMsg);
			}
		}
	});
}