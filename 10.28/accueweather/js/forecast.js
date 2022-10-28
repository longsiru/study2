var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=e315203ed4fd50339017692e418b2ec0"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

//현재날씨의 모든 정보 얻어오기
function getCurrentWeather(city){
    var dataObj
    var openweatherAPI = url

    $.ajax({
        type:"GET",  //사이버 get방식으로 요청을 함
        url: openweatherAPI += city,
        dataType: "json",  //받아올 데이터 타입
        asyns: false,  //비동기x--->동기(결과 데이터를 리턴시키기 위해)
        success: function(data){    //API call 성공할때
            // console.log(data.main.temp)
            // console.log(data.name)
            // console.log(data.weather[0].description)
            // console.log(data.wind.speed)
            // console.log(data.dt)
            dataObj = data;
        },
        error: function(requset, status, error){  //API call 실페할때
            console.log(requset, status, error)
        }
    });

    return dataObj;
}

//getCurrentWeather()




//지역별 현재 온도 얻어오기

function getCurrentTemp(city){
    var temp = {};
    var openweatherAPI = url;
    $.ajax({
        type:"GET",  //사이버 get방식으로 요청을 함
        url: openweatherAPI += city,
        dataType: "json",  //받아올 데이터 타입
        async: false,  //비동기x--->동기(결과 데이터를 리턴시키기 위해)
        success: function(data){    //API call 성공할때\
           console.log('data.main.temp:',data.main.temp, 'data.weather[0].icon : ',data.weather[0].icon)
          temp.celsius = (data.main.temp).toFixed(0);  //온도
          temp.icon = data.weather[0].icon;  //아이콘
          console.log(temp);
        },
        error: function(requset, status, error){  //API call 실페할때
            console.log(requset, status, error)
        },
    })
    return temp
}

// // 현재 날씨의 모든 정보 얻어오기
// function getCurrentWeather(city) {
//     var dataObj;
//     var openWeatherAPI = url;

//     $.ajax({
//         type: "GET",
//         url: openWeatherAPI += city,
//         dataType: "json",
//         async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
//         success: function(data) {
//             //정상 응답시 처리 작업 
//             dataObj = data;
//         },
//         error: function(request, status, error) {
//             //응답 에러시 처리 작업    
//             console.log("code:" + request.status);
//             console.log("message:" + request.responseText);
//             console.log("error:" + error);
//         }
//     });

//     return dataObj;
// }

// // 현재 날씨 온도 얻어오기 
// function getCurrentTemp(city) {
//     var temp = {};
//     var openWeatherAPI = url; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

//     $.ajax({
//         type: "GET",
//         url: openWeatherAPI += city,
//         dataType: "json",
//         async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
//         success: function(data) {
//             //정상 응답시 처리 작업 
//             temp.celsius  = Math.floor(data.main.temp); // 소수점 버림;
//             temp.icon = data.weather[0].icon; 
//             console.log('data.main.temp:',temp)
//         },
//         error: function(request, status, error) {
//             //응답 에러시 처리 작업    
//             console.log("code:" + request.status);
//             console.log("message:" + request.responseText);
//             console.log("error:" + error);
//         }
//     });

//     return temp;
// }