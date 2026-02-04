//Task 1: Create and Use an Object
let book = {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    pages: "900",
    isRead: false
};

//dot notation
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

//bracket notation
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

book.isRead = true;

book.genre = "literary";

console.log(book);


// -------------------------------------------------

// Task 2: Create and Modify an Array of Objects
let movie = [
    {title: "Joint Security Area", director: "Park Chan-wook", year: 2000},
    {title: "My Sassy Girl", director: "Kwak Jae-yong", year: 2001},
    {title: "Friend", director: "Kang Hyeong-cheol", year: 2001}
];

console.log("Title of the second movie: " + movie[1].title);

movie.push({title: "A Bittersweet Life", director: "Kim Jee-woon", year: 2005});

movie[0].year = 2001;

console.log(movie);

//-------------------------------------------------

//Task 3: Combine Objects and Arrays

let student = {
    studentName: "Nina Stephane Poquita",
    age: 22,
    subjects: ["calc1", "calc2", "dsp"]
};

console.log("First subject in the subjects array is: " + student.subjects[0]);
student.subjects.push("drrm");

console.log(student);

// ------------------------------------------------

//Task 4: Challenge Task (Optional)
let icescramble = {
    ingredients: [
        {iname: "shaved ice", quantity: "1 glass"},
        {iname: "powdered milk", quantity: "2 scoops"},
        {iname: "flavored powder", quantity: "5 scoops"},
        {iname: "mashmallow", quantity: "3 scoops"}
    ],
    isVegetarian: false
}

icescramble.ingredients.push({iname: "sprinkles", quantity: "2 scoops"});
console.log(icescramble.ingredients[1]);
console.log(icescramble);
