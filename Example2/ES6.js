class Course{
    constructor(title,Instructor,Image){
        this.title = title;
        this.Instructor = Instructor;
        this.Image = Image;
    }
};

class UI{
    addCourse(course){
        const list = document.getElementById('course-list');
        var html = `<tr>
        <td>${course.title}</td> 
        <td>${course.Instructor}</td>
        <td><img src = "img/${course.Image}" class = "view overlay zoom mask flex-center"></td>
        <td><a href="#" class = "btn btn-danger delete">Delete</a></td>
        </tr>`;
        list.innerHTML += html;
    }
    clear(){
        const title = document.getElementById('title').value = '';
        const Instructor = document.getElementById('Instructor').value = '';
        const Image = document.getElementById('image').value = '';
    }
    deleteCourse(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
        }
    }

};

class Storage{
    static getCourses(){
        let courses;
        courses = JSON.parse(localStorage.getItem('courses'));

        return courses;
    }
    static display(){
        const courses = Storage.getCourses();
        courses.forEach(course =>{
            const ui = new UI();
            ui.addCourse(course);
        });
    }
    static addC(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }
    
}


document.addEventListener('DOMContentLoaded',Storage.display);



document.getElementById('new-course').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value;
    const Instructor = document.getElementById('Instructor').value;
    const Image = document.getElementById('image').value;

    const course = new Course(title, Instructor, Image); // Course object Created

    const ui = new UI(); // UI Object Created

    ui.addCourse(course);

    Storage.addC(course);

    ui.clear();


    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
   
})