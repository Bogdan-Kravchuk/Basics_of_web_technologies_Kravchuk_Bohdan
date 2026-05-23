const grades = [78, 92, 45, 88, 67, 39, 95, 71, 82, 58, 90, 64];

// Реалізуйте функції:
function average(grades) { 
    if (grades.length === 0)
        return 0;

    let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    }
    
    return Number((sum / grades.length).toFixed(1));
}



function highest(grades) { 
    if (grades.length === 0)
        return 0;

    let highestVaue = 0;
    for (let i = 0; i < grades.length; i++) {
        if (highestVaue < grades[i]){highestVaue = grades[i]}
    }
    return highestVaue;
}

function lowest(grades) { 
    if (grades.length === 0)
        return 0;

    let lowestVaue = 0;
    lowestVaue = grades[0]
    for (let i = 0; i < grades.length; i++) {
        if (lowestVaue > grades[i]){lowestVaue = grades[i]}
    }
    return lowestVaue;
}
 
function passRate(grades, threshold = 60) { 
    let counter = 0
    let rate = 0

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > threshold) { 
            counter++
        }
    }
    rate = (counter/grades.length)*100

    return rate;
 }
function distribution(grades) { 
    const result = {
    "<60": 0,
    "60-69": 0,
    "70-79": 0,
    "80-89": 0,
    "90-100": 0
    };
    // for (let i = 0; i < grades.length; i++) {
    //     if (grades[i] < 60) { result["<60"]++ }
    //     if (grades[i] >= 60 && grades[i] <= 69) { result["60-69"]++ }
    //     if (grades[i] >= 70 && grades[i] <= 79) { result["70-79"]++ }
    //     if (grades[i] >= 80 && grades[i] <= 89) { result["80-89"]++ }
    //     if (grades[i] >= 90 && grades[i] <= 100) { result["90-100"]++ }
    // }
    for (let i of result) { 
        console.log(i)
    }
    return result
 }
