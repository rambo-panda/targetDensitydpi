/**
* 不要想当然的 直接把字符串用来比较大小
* '111' < '12' ===> true  你怎么看？
* 字符串比较大小 简而言之就是 一个一个比较。 只要有一个不匹配理解break
* '111' < '12' ==> '1' <-> '1'   '1' <-> '2'  ==> 1 <2 true ok 后面不比较了 直接返回true吧
*/

var convert_number_version = function(str){
    return str.replace(/\D/g, '');
  },
  auto_fill_zero = function(str, length){
    str = String(str);

    //return str.length < length ? (str + "0000000000000000000").substr(0, length) : str;

    if(str.length < lenght){
  	    var diff = length - str.length;

        if(String.prototype.repeat){
            return str + "0".repeat(diff);
        }

        //return str + (new Array(diff).join(0));

  	    var index = 0;

      	while(index < diff){
        		str += "0";
            index++;
      	}

    }

    return str;
  };

/*
* @return 1 : versiona > versionb  0 : versiona = versionb -1: versiona < versionb
*/

function versionCompare(versiona, versionb){
  var converted_versiona = convert_number_version(versiona),
      converted_versionb = convert_number_version(versionb),
      max_length = Math.max(converted_versionb.length, converted_versiona.length),
      fill_zero_versiona = auto_fill_zero(converted_versiona, max_length),
      fill_zero_versionb = auto_fill_zero(converted_versionb, max_length);

  var diff = fill_zero_versiona - fill_zero_versionb

  if(diff === 0){
    return 0;
  }

  return diff > 0 ? 1 : -1;

}

console.assert(versionCompare('1.1.1', '1.2') === true, "1.1.1 同 1.2 比较出错");
