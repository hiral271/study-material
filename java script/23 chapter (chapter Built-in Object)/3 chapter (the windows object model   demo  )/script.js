var msg = '<h2> browser window </h2> <p> width : ' + window.innerWidth + '</p>';
msg += '<p> hight : ' + window.innerHeight + '</p>';
msg += '<h2>history</h2> <p> items: ' + window.history.length +'</p>';
msg += '<h2>screen</h2><p> width : '+ window.screen.width +'</p>';
msg+= '<h2>height ' + window.screen.height + '</P>';

var el = document.getElementById("demo")
el.innerHTML = msg ;

// window.alert('current page :' + window.location)


// to join var msg  we can use += with same name for continue the data 


var cool = '<h1> The greatest glory in living ' + 'lies not </h1>'
cool += '<h2>in never falling,   ' + ' but in rising every </h2>'
cool += '<h1> time ' + 'we fall </h2>'



var coolEl = document.getElementById("cool")
coolEl.innerHTML = cool 








//-----------------------------------------------------------------------------


var msg = ' hello  '  + window.innerHeight;

window.alert(msg)