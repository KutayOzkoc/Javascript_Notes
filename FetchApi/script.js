//Text

function getText(){
    fetch('text.txt').then(response=>{
        return response.text();
    }).then(data=>{
        console.log(data);
    }).catch(()=>{
        console.log("Text file not founded");
    })
}

getText();


//JSON

function getJSON(){
    fetch('a.json').then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
    }).catch(()=>{
        console.log("Json file not founded");
    })
}
getJSON();