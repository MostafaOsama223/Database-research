window.onload = function(){
    change(0);
}

function change(x){
    let table = document.getElementById('tables').value;
    let func = document.getElementById('functions').value;
    let divId = '';
    let divs = document.getElementsByClassName('ay7aga');

    if(func != 'list')  divId = func + '_' + table;
    else  divId = 'list';

    for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none';
    }

    document.getElementById(divId).style.display = 'block';
    if(x)   sendReq(func, table, divId);
}

function sendReq(func, table, divId){
    let url = window.location + `${func}/${table}`;
    let div = document.getElementById(divId);
    let divElems = div.childNodes;
    let body = `{"func":"${func}", "table":"${table}", "data":{`;

    for (let i = 0; i < divElems.length; i++) {
        if(divElems[i].tagName === 'INPUT'){
            const key = divElems[i].id;
            const val = divElems[i].value
            body += `"${key}":"${val}", `;
        }
    }
    body = body.slice(0, body.length - 2).concat('}}');
    


    var xhr = new XMLHttpRequest();
    xhr.open('POST',url, true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            dispData(xhr.response, func);
            // console.log(xhr.responseText);
        }
    }
    xhr.send(body);
}

function dispData(res, func){
    let JSONres;
    let htmlTb = '<table border="1">';
    let tempJson ;
    try{
        JSONres = JSON.parse(res);
    }catch(SyntaxError){
        alert('Error.');
    }
    
    /*  SET HEADERS */
    var colNames = [];
    if(JSONres.length){
        tempJson = JSONres[0];
    }else{
        tempJson = JSONres;
    }

    for (const header in tempJson) {
        htmlTb += `<th>${header}</th>`;
        colNames.push(header);
    }

    console.log(JSONres);
    if(func === 'list'){
        for(const item in JSONres){
            htmlTb += '<tr>';
            for (const header in colNames) {
                htmlTb += '<td>';
                let cell = colNames[header];
                htmlTb += JSONres[item][cell];
                htmlTb += '</td>';
            }
            htmlTb += '</tr>';
        }
        htmlTb += '</table>'
    }else{
        htmlTb += '<tr>';
        for(const header in colNames){
            htmlTb += '<td>';
            let cell = colNames[header];
            htmlTb += JSONres[cell];
            htmlTb += '</td>';
        }
        htmlTb += '</tr>'
    } 
    document.getElementById('results').innerHTML = htmlTb;
}