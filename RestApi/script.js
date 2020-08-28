document.querySelector('#GetData').addEventListener('click',GetAll);




function GetAll(){
    var xhr = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";

    xhr.open('GET',url,true);
    xhr.onload = function(){
        if(this.status == 200){

            
            var day = document.querySelector('#Date').value;
            var posts = JSON.parse(this.responseText);
            var id = day;
            var entry = posts[id];
            
            
            
            

           
            let html = "" ;
                html += `
                
                <tr>
                    <td> ${entry.cases}</td>
                    <td> ${entry.deaths}</td>
                    <td> ${entry.recovered}</td>
                </tr>
    
                `;
            
                document.querySelector('#Data').innerHTML = html;


        }
    }
    xhr.send();
}
