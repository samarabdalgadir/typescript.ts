 advanced_objects.ts;
interface Course {
  name: string;
  instructor: {
    name: string;
    experienceYears: number;
  };
  studentsCount: number;
}
const course: Course = {
  name: "TypeScript Basics",
  instructor: {
    name: "Ms. Lina",
    experienceYears: 5,
  },
  studentsCount: 30,
};
console.log("Course Info:", course);
