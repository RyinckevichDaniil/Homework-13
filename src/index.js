const toDoList = function () {
    this.notes = [
        { value: "Js", completed: false, id: 1596559757142 },
        { value: "World", completed: false, id: 1596559757043 },
        { value: "Hello", completed: false, id: 1596559756940 },
    ]
};


toDoList.prototype.addNote = function (value) {
    const note = {
        value,
        completed: false,
        id: Date.now(),
    };
    this.notes = [note, ...this.notes];
};

toDoList.prototype.removeNote = function (id, confirm) {
    if (confirm) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
};

toDoList.prototype.completeNote = function (id) {
    this.notes = this.notes.map(note => ({
        ...note,
        completed: note.id === id ? !note.completed : note.completed
    }))
};

toDoList.prototype.editNote = function (id, value, confirm) {
    if (confirm) {
        this.notes = this.notes.map(note => {
            let newNote = note;

            if (note.id === id) {
                newNote = {
                    ...note,
                    value
                }
            };

            return newNote
        });
    }
};

toDoList.prototype.getStatistic = function () {
    return this.notes.reduce(
        (acc, note) => {
            note.completed && acc.completed++;
            return acc;
        },
        { total: this.notes.length, completed: 0 }
    );
};

const myToDoList = new toDoList();

/* console.log(myToDoList);
console.log(myToDoList.addNote('Valera'));
console.log(myToDoList.editNote(1596559756940, 'JavaS', true));
console.log(myToDoList.removeNote(1596559757142, true));

console.log(myToDoList); */








