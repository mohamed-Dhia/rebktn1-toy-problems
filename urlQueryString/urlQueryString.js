/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    var index = url.indexOf("?");
    if(index === -1){
        return undefined;
    }
    var newUrl = url.slice(index + 1);
    newUrl = decodeURIComponent(newUrl);
    var result = [];
    tempRes = []
    var temp = "";
    for(var i = 0; i <= newUrl.length; i++){
        if(newUrl[i] === '='){
           tempRes.push(temp);
           temp = "";
           continue;
        }
        if(newUrl[i] === "&" || i === newUrl.length){
           tempRes.push(temp)
           result.push(tempRes);
           tempRes = [];
           temp = "";
           continue;
        }
        temp += newUrl[i];
    }
    return result;
}
