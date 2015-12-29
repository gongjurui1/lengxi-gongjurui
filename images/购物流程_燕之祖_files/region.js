/* $Id : region.js 4865 2007-01-31 14:04:10Z paulgao $ */

var region = new Object();

region.isAdmin = false;

region.loadRegions = function(parent, type, target)
{
  Ajax.call(region.getFileName(), 'type=' + type + '&target=' + target + "&parent=" + parent , region.response, "GET", "JSON");
}

/* *
 * 载入指定的国家下所有的省份
 *
 * @country integer     国家的编号
 * @selName string      列表框的名称
 */
region.loadProvinces = function(country, selName)
{
  var objName = (typeof selName == "undefined") ? "selProvinces" : selName;

  region.loadRegions(country, 1, objName);
}

/* *
 * 载入指定的省份下所有的城市
 *
 * @province    integer 省份的编号
 * @selName     string  列表框的名称
 */
region.loadCities = function(province, selName)
{
  var objName = (typeof selName == "undefined") ? "selCities" : selName;

  region.loadRegions(province, 2, objName);
}

/* *
 * 载入指定的城市下的区 / 县
 *
 * @city    integer     城市的编号
 * @selName string      列表框的名称
 */
region.loadDistricts = function(city, selName)
{
  var objName = (typeof selName == "undefined") ? "selDistricts" : selName;

  region.loadRegions(city, 3, objName);
}

/* *
 * 处理下拉列表改变的函数
 *
 * @obj     object  下拉列表
 * @type    integer 类型
 * @selName string  目标列表框的名称
 */
region.changed = function(obj, type, selName)
{
 
  if(obj){
	  var parent = obj.options[obj.selectedIndex].value;
  }else{
	  var parent=1;
  }  
  
  region.loadRegions(parent, type, selName);
 
}

region.response = function(result, text_result)
{
  var sel = document.getElementById(result.target);

  sel.length = 1;
  sel.selectedIndex = 0;
  //sel.style.display = (result.regions.length == 0 && ! region.isAdmin && result.type + 0 == 3) ? "none" : '';

  if (document.all)
  {
    sel.fireEvent("onchange");
  }
  else
  {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('change', true, true);
    sel.dispatchEvent(evt);
  }

  if (result.regions)
  {
    for (i = 0; i < result.regions.length; i ++ )
    {
      var opt = document.createElement("OPTION");
      opt.value = result.regions[i].region_id;
      opt.text  = result.regions[i].region_name;

      sel.options.add(opt);
    }
	setTimeout(function(){
		if(sel.id == 'selCities_'){
		  if(!$("#selCities_ option").eq(1).text()){
				  sel.selectedIndex = 0;
				  $("#selCities_").prev().text($("#selCities_ option").eq(0).text());
			  }else{
				  sel.selectedIndex = 1;
				  $("#selCities_").prev().text($("#selCities_ option").eq(1).text());
				  region.changed(document.getElementById('selCities_'), 3, 'selDistricts_');
			  }
		  }
		  if(sel.id == 'selDistricts_'){
			  if(!$("#selDistricts_ option").eq(1).text()){
				  $("#selDistricts_").prev().text($("#selDistricts_ option").eq(0).text());
				  sel.selectedIndex = 0;
			  }else{
				 $("#selDistricts_").prev().text($("#selDistricts_ option").eq(1).text());
				 sel.selectedIndex = 1; 
			  }
			  
		  }
	},200)
	
  }
  
}

region.getFileName = function()
{
  if (region.isAdmin)
  {
    return "../region.php";
  }
  else
  {
    return "region.php";
  }
}
