name_array=[];

function submit(){
    var display_array = [];
    for(i=1; i<=4; i++){
        name1=document.getElementById("name_of_the_student_"+i).value;
        name_array.push(name1);
    
    }

    console.log(name_array);

    var len= name_array.length;

    for(var k=0; k<len; k++){
        display_array.push("<h4>NAME -" + name_array[k]+"</h4>");

    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_array=display_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_array;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    name_array.sort();
    var display_array1=[];
    var len1= name_array.length;

    for(var k=0; k<len1; k++){
        display_array1.push("<h4>NAME -" + name_array[k]+"</h4>");

    }

    var remove_array1=display_array1.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_array1;

}