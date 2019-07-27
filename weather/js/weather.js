window.onload=function(){
    var inp=document.getElementById("inp");
    var btn=document.getElementById("btn");
    var future=document.getElementById("container");
    
    btn.onclick=function(){
        var url="http://v.juhe.cn/weather/index?key=45e9b5de560d9652139b868ad200c8f9&cityname="+inp.value;

        $.ajax({
            type:"get",
            async:false,
            url:url,
            dataType:"jsonp",
            jsonpCallback:"jsonpCallback",
            success:function(data){
                var fail=data.resultcode;
                if(fail==202){
                    alert("查询不到该城市天气！");
                }else{
                console.log(data);
                var time=data.result.sk.time;
                $(".time").text(time);
                var dressing_index=data.result.today.dressing_index;
                var city=data.result.today.city;
                $("#city").text(city);
                var weather=data.result.today.weather;
                $("#weather").text(weather);
                var temperature=data.result.sk.temp;
                $("#temp").text(temperature+"℃");
                var wind_direction=data.result.sk.wind_direction;
                $("#wind").text(wind_direction);
                var wind_strength=data.result.sk.wind_strength;
                $("#wind_str").text(wind_strength+"/");
                var uv_index=data.result.today.uv_index;
                $("#uv").text("紫外线"+uv_index);
                var exercise_index=data.result.today.exercise_index;
                $("#exercise_index").text(exercise_index+"锻炼");
                var travel_index=data.result.today.travel_index;
                $("#travel_index").text(travel_index+"旅游");
                var wash_index=data.result.today.wash_index;
                $("#wash_index").text(wash_index+"洗车");
                var dress=data.result.today.dressing_advice;
                $("#dress").text(dress);      
                switch(data.result.today.weather_id.fa){
                    case "00":
                       document.getElementById("img").src="images/sunny.png";
                        break;
                    case "01":
                       document.getElementById("img").src="images/cloudy-sunny.png";
                       break;
                    case "02":
                        document.getElementById("img").src="images/cloudy.png";
                        break;
                    case "03":
                        document.getElementById("img").src="images/shower.png";
                        break;
                    case "04":
                        document.getElementById("img").src="images/thunder-shower.png";
                        break;
                    case "06":
                        document.getElementById("img").src="images/sleet.png";
                        break;
                    case "07":
                        document.getElementById("img").src="images/rain-light.png";
                        break;
                    case "08":
                        document.getElementById("img").src="images/rain.png";
                        break;
                    case "09":
                        document.getElementById("img").src="images/rain-heavy.png";
                        break;
                    case "10":
                        document.getElementById("img").src="images/rain-heavy.png";
                        break;
                    case "14":
                        document.getElementById("img").src="images/snow.png";
                        break;
                    case "15":
                        document.getElementById("img").src="images/snow.png";
                        break;
                    case "16":
                        document.getElementById("img").src="images/snow-heavy.png";
                        break;
                    default:
                        document.getElementById("img").src="images/icon.png";
                }
              console.log("今天："+"城市："+city+"\n"+"天气："+weather+","+"气温："+temperature+"\n"
                +"风力："+wind_direction+wind_strength+"\n"+"紫外线强度："+uv_index+"\n"+"穿衣建议："+dress+"\n");
                $("#dressing_index").text(dressing_index);

                /*动态添加列表 */
                var ulO=document.getElementsByTagName("ul")[0];
                var obj=data.result.future;
                for(i in obj){
                    var liO=document.createElement("li");
                    liO.innerHTML=i+"："+"天气"+obj[i].weather+"，"+"温度："+obj[i].temperature+"<hr/>";
                    ulO.appendChild(liO);
                }
               
            }
              
            },
            error:function(){
                console.log('fail')
            }
        });
       
        
        }
    }
