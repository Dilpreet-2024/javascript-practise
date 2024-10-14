//destructuring of objects
const course={
    cousrename:"javascript",
    price:1000,
    courseInstructor:"youtube",
}
const {courseInstructor:instructor}=course
console.log(instructor);
const {price}=course
console.log(price);
const {cousrename}=course;
console.log(cousrename);