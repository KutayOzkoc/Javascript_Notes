class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileCont');
    }

    showData(profile){
        this.profileContainer.innerHTML = `

        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                 <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                     <li class="list-group-item">
                        name : ${profile.name}
                     </li>
                     <li class="list-group-item">
                        username : ${profile.username}
                     </li>
                     <li class="list-group-item">
                        email : ${profile.email}
                     </li>
                </ul>
            </div>
        </div>
    </div>
        
        `;
    }
}