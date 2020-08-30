const profile = new Profile();
const searchProfile = document.querySelector('#SearchProfile');
const ui = new UI();

searchProfile.addEventListener('keyup',(event)=>{
    let text =  event.target.value;

    if(text!==''){
       profile.getProfile(text)
        .then(res => {
                if(res.profile.length === 0){

                }else{
                    ui.showData(res.profile[0]);
                }        
            
            })   
        }
        

});
