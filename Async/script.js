const a = () =>{
    console.log("a");
    b();
}
const b = () => {

    setTimeout(() =>{console.log("b");},2000); // It will happen in the future so we add this statement to queue
    
    c();
}
const c = () => {
    console.log("c");
}

a();


//AJAX XHR ajax create async construct


var xhr = new XMLHttpRequest();

xhr.onreadystatechange  = function(){
    if(xhr.readyState === 4 && xhr.status === 200){ // here we can check xhr state is ready or not
        console.log(xhr.responseText);
    }
    else if(xhr.readyState ===4 && xhr.status ===404){
        console.log("404 Not found");
    }
}

xhr.onprogress =() =>{
    console.log("Progressing");
}

xhr.open('GET','msg1.txt',true); // We want get information so we use GET if we want to upload we can use POST. IF we say true in parameter it makes that async
xhr.open('GET','msg.txt',true);
xhr.send();

/*
    Ready State options 

    0 = Request not initialized
    1 = Server Connection Established
    2 = Request Received
    3 = Processing Request
    4 = Requst finished and response is ready

    Status Options

    200 = OK
    403 = Forbidden
    404 = Not Found
*/



//JSON

document.querySelector('#getemployee').addEventListener('click',LoadData);

function LoadData(){

    const xhr2 = new XMLHttpRequest();

    xhr2.open('GET',"employees.json",true);

    var loadimage = document.getElementById('loading');
    loadimage.style.display = "block";

    setTimeout(() => {
        xhr2.onload = function(){
            if(this.status === 200){
                let employee = JSON.parse(this.responseText);
                loadimage.style.display = "none";
                
            let html = "" ;
            
            employee.forEach(element => {
                html += `
                
                <tr>
                    <td> ${element.firstname}</td>
                    <td> ${element.lastname}</td>
                    <td> ${element.job}</td>
                </tr>
    
                `;
            });
           
    
            document.querySelector('#employees').innerHTML = html;
        }
    }
    
        xhr2.send();
    }, 1500);

   
}