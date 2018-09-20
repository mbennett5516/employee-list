for(let i=0;i<5;i++){
    let employee = '<div class="empInfo"><p class="name">';
    employee += employeeList[i].name;
    employee +='</p><p>';
    employee += employeeList[i].officeNum;
    employee +='</p><p>';
    employee += employeeList[i].phoneNum;
    employee += '</p></div>';
    $(".info").append(employee);
}