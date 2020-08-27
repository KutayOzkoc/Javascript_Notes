function Course(title, Instructor, Image) {
    this.title = title;
    this.Instructor = Instructor;
    this.Image = Image;
}


function UI() {
   
}


UI.prototype.addCourse = (course) => {
    const list = document.getElementById('course-list');
    var html = `<tr>
    <td>${course.title}</td> 
    <td>${course.Instructor}</td>
    <td><img src = "img/${course.Image}" class = "view overlay zoom mask flex-center"></td>
    <td><a href="#" class = "btn btn-danger delete">Delete</a></td>
    </tr>`;
    list.innerHTML += html;
}

UI.prototype.clear = () => {
    const title = document.getElementById('title').value = '';
    const Instructor = document.getElementById('Instructor').value = '';
    const Image = document.getElementById('image').value = '';
}


UI.prototype.deleteCourse = (target) =>{
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
    }
}

document.getElementById('new-course').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value;
    const Instructor = document.getElementById('Instructor').value;
    const Image = document.getElementById('image').value;

    const course = new Course(title, Instructor, Image); // Course object Created

    const ui = new UI(); // UI Object Created

    ui.addCourse(course);

    ui.clear();


    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);

})