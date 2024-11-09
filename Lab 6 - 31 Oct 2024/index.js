// Custom exercise

// Class for individual professor
class Professor {
    #name;
    #department;

    constructor(name, department) {
        this.#name = name;
        this.#department = department;
    }

    getName() {
        return this.#name;
    }

    getDepartment() {
        return this.#department;
    }

    introduce() {
        console.log(`Hello, I am Professor ${this.#name} from the ${this.#department} department.`);
    }
}

// Class for multiple professors
class Professors {
    constructor() {
        this.professorList = [];
    }

    addProfessor(name, department) {
        const professor = new Professor(name, department);
        this.professorList.push(professor);
    }

    listProfessors() {
        this.professorList.forEach(prof => prof.introduce());
    }
}

// Class for individual student
class Student {
    #name;
    #module;
    #grades;

    constructor(name, module, grades = []) {
        this.#name = name;
        this.#module = module;
        this.#grades = grades;
    }

    getName() {
        return this.#name;
    }

    getModule() {
        return this.#module;
    }

    calculateAverage() {
        const sum = this.#grades.reduce((acc, grade) => acc + grade, 0);
        return this.#grades.length ? sum / this.#grades.length : 0;
    }

    introduce() {
        console.log(`Hello, I am ${this.#name}, taking the module ${this.#module}.`);
    }
}

// Class for multiple students
class Students {
    constructor() {
        this.studentList = [];
    }

    addStudent(name, module, grades = []) {
        const student = new Student(name, module, grades);
        this.studentList.push(student);
    }

    listStudents() {
        this.studentList.forEach(student => student.introduce());
    }
}

const professors = new Professors();
professors.addProfessor("Stone", "Computer Science");
professors.addProfessor("Smith", "Mathematics");
professors.listProfessors();

const students = new Students();
students.addStudent("Taylor Swift", "CS7025", [100, 100, 100, 100]);
students.addStudent("Selena Gomez", "MATH101", [100, 100, 100, 100]);
students.listStudents();
