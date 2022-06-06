let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] }, 
    { name: "Courses in China", prices: [50, 250] }, 
    { name: "Courses in USA", prices: [200, null] }, 
    { name: "Courses in Kazakhstan", prices: [56, 324] }, 
    { name: "Courses in France", prices: [null, null] }, 
];

let requiredRange1 = [null, 200]; 
let requiredRange2 = [100, 350]; 
let requiredRange3 = [200, null]; 


function filter(range) {

    let startUser = range[0];
    let endUser = range[1];

    if (startUser === null) startUser = 0
    if (endUser === null) endUser = Infinity

    if (startUser > endUser) {
        console.log("Not correct entry range");
        return;
    }

    let result = []

    courses.forEach(course => {
        let startCourse = course.prices[0]
        let endCourse = course.prices[1]

        if (startCourse === null) startCourse = 0
        if (endCourse === null) endCourse = Infinity

        if ((startUser >= startCourse || endUser <= endCourse || endUser == Infinity) && (endUser >= startCourse) && (startUser <= endCourse)) {
            result.push(course)
        } 
        return result
    })
    console.log(result);
}

filter(requiredRange1);
filter(requiredRange2);
filter(requiredRange3);
