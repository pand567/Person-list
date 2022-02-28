var student_display = [];


function submit() {
    var display_name = [];

    for (var j = 1; j<=4; j++){
        var name = document.getElementById("name_of_the_student_"+j).value ;
        console.log(name);
        student_display.push(name);
    }

    console.log(student_display);

    var length = student_display.length ; 
    console.log(length);

    for (var k = 0; k<length; k++){
       display_name.push("<h4>NAME-"+student_display[k]+"</h4>");
       console.log(display_name);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_name ;

    var nocomma = display_name.join("&");
    console.log(nocomma);

    document.getElementById("display_name_without_commas").innerHTML=nocomma ;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";



}
function sorting() {

    student_display.sort();
    console.log(student_display);

    var display_array = [] ;

    var length_array = student_display.length;
    console.log(length_array);

    for (var k = 0; k<length_array; k++){
        display_array.push("<h4>NAME-"+student_display[k]+"</h4>");
        console.log(display_array);
     }

     var nocomas = display_array.join(" ");
     console.log(nocomas);

     document.getElementById("display_name_without_commas").innerHTML = nocomas;
 
}
