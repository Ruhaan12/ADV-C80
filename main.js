var name_of_student = []

function submit(){
    var display_student_array = []

    for (var i = 1; i<= 4; i++){
        var student_name = document.getElementById("name_of_the_student_"+i).value;
        console.log(student_name);

        name_of_student.push(student_name);
    }

    console.log(name_of_student)

    var length_of_array1 = name_of_student.length
    console.log(length_of_array1)

    for (var r = 0; r< length_of_array1; r++){

        display_student_array.push("<h2> name "+name_of_student[r]+"</h2>")
        console.log(display_student_array)
    }

    console.log(display_student_array)

    document.getElementById("display_name_with_commas").innerHTML = display_student_array

    var remove_comma = display_student_array.join(" ")
    console.log(remove_comma)
    document.getElementById("display_name_without_commas").innerHTML = remove_comma

    document.getElementById("submit_button").style.display = "none"

    document.getElementById("sort_button").style.display = "inline-block"
}



function sorting(){

    name_of_student.sort()
    console.log(name_of_student)

    var sort_display = []

    var length_of_array2 = name_of_student.length
    console.log(length_of_array2)

    for(var e = 0; e< length_of_array2; e++){

        sort_display.push(name_of_student);
        console.log(sort_display);
    }

    var remove_comma = sort_display.join(" ")
    console.log(remove_comma)

    document.getElementById("display_name_without_commas").innerHTML = remove_comma
}