export default function learn(time, courses) {
    const min = courses.indexOf(Math.min(...courses));
    if (courses.every(course => course >= time)) return null
    let indices = [min, min]
    courses.forEach((course, index) => {
        if (course === time) return
        courses.forEach((course1, index1) => {
            if (course1 === time) return
            course + course1 > courses[indices[0]] + courses[indices[1]] && course + course1 <= time && index !== index1 ? indices = [index, index1] : null  
        } )
    })
    return indices
}



