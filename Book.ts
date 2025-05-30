interfacetypes.ts;
interface Book {
  title: string;
  author: string;
  yearPublished: number;
}
type Student = {
  name: string;
  age: number;
  isGraduated: boolean;
};
const myBook: Book = {
  title: "You Don’t Know JS",
  author: "Kyle Simpson",
  yearPublished: 2014,
};
const myStudent: Student = {
  name: "Sara",
  age: 22,
  isGraduated: true,
};
console.log("My Book:", myBook);
console.log("My Student:", myStudent);
