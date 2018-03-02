export class CoursesService{
    items=["My Title",
    "My Main",
    "©Yi Zhang | PeterSham College",
    ]
    getCourses(){
        return this.items;
    }
    getSytleClasses(){
        return ["row0","row1","row2"]
    }

}