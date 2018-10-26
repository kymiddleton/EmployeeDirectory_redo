const employeeList = [
    {
        name: 'Jan',
        officeNum: 1,
        phoneNum: '(222) 222-2222'
    },
    {
        name: 'Juan',
        officeNum: 304,
        phoneNum: '(489) 789-8789'
    },
    {
        name: 'Margie',
        officeNum: 789,
        phoneNum: '(789) 789-7897'
    },
    {
        name: 'Sara',
        officeNum: 32,
        phoneNum: '(222) 789-4654'
    },
    {
        name: 'Tyrell',
        officeNum: 3,
        phoneNum: '(566) 621-0452'
    },
    {
        name: 'Tasha',
        officeNum: 213,
        phoneNum: '(789) 766-5675'
    },
    {
        name: 'Ty',
        officeNum: 211,
        phoneNum: '(789) 766-7865'
    },
    {
        name: 'Sarah',
        officeNum: 345,
        phoneNum: '(222) 789-5231'
    }
];

//Functions that iterate through the arrays
const findEmployee = function (startIndex, employeeName) {
    for (i = startIndex; i < state.employeeList.length; i++) {
        if (state.employeeList[i].name.toLowerCase().includes(employeeName.toLowerCase())) {
            return i;
        }
    }
    return -1;
}

//Switch Statements
let command = '';
const outputDiv = $('#content');  //#content refers to HTML <div id="content"></div>

const runSubmit = function (e) {
    let employeeList = state.employeeList;
    e.preventDefault();
    let htmlStr = '';
    switch (command) {
        case "print": //Works!
            outputDiv.empty();
            employeeList.forEach(e => {
                htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
                htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
                htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
            });
            render(htmlStr);
            break;
        case "verify": //Works!
            outputDiv.empty();
            index = state.employeeList.some(function (element) {
                return element.name.toLowerCase() === $('#input').val().toLowerCase();
            });
            if (index === true) {
                htmlStr = '<div class="print"><p>Employee Found</p></div>';
            } else {
                htmlStr = '<div class="print"><p>Employee NOT Found</p></div>';
            }
            render(htmlStr);
            break;
        case "lookup": //Works!
            outputDiv.empty();
            let match = false
            // let htmlStr = "";
            employeeList.forEach(e => {
                if (e.name.toLowerCase() === $('#input').val().toLowerCase()) {
                    htmlStr += `<div class="space"><p>Name: ${e.name}</p>`;
                    htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
                    htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
                    match = true;
                }
            });
            if (match === false) {
                htmlStr = '<p>Employee Not Found</p>';
            }
            render(htmlStr);
            break;
        case "contains": //Works!
            outputDiv.empty();
            console.log('contains');
            let inputValue = $('#input').val().toLowerCase();
            let html = "";
            employeeList.forEach(e => {
                if (e.name.toLowerCase().includes(inputValue)) {
                    html += `<div class="print"><p>Name: ${e.name}</p>`;
                    html += `<p>Office Number: ${e.officeNum}</p>`;
                    html += `<p>Phone Number: ${e.phoneNum}</p></div>`;
                }
            });
            render(html);
            break;
        case "update": //Very close to working. Out of time to make changes to input fields. 
            outputDiv.empty();
            index = state.employeeList.findIndex(function (element) {
                return element.name.toLowerCase() === $('#input').val().toLowerCase();
            });
            updateValue = $('#phone').val();
            switch ($('#office').val().toLowerCase()) {
                case "name":
                    employeeList[index].name = updateValue;
                    break;
                case "office":
                    employeeList[index].officeNum = updateValue;
                    break;
                case "phone":
                    employeeList[index].phoneNum = updateValue;
                    break;
                default:
                    htmlStr += `<div class="print" ><p>Invalid Command</p></div>`;
            };
            htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
            htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
            htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
            render(htmlStr);
            break;
        case "add": //Works!
            outputDiv.empty();
            console.log('add');
            const name = $('#input').val();
            const officeNum = $('#office').val();
            const phoneNum = $('#phone').val();

            employeeList.push({ name, officeNum, phoneNum });
            employeeList.forEach(e => {
                htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
                htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
                htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
            });
            render(htmlStr);
            break;
        case "delete": //Works!
            outputDiv.empty();
            index = state.employeeList.findIndex(function (element) {
                return element.name.toLowerCase() === $('#input').val().toLowerCase();
            });
            if (index > -1) {
                employeeList.splice(index, 1);
                employeeList.forEach(e => {
                    htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
                    htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
                    htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
                });
            } else { outputDiv.append("Employee NOT Found"); }
            render(htmlStr);
            break;
        case "phone": //Works!
            outputDiv.empty();
            let matchPhone = false;
            employeeList.forEach(e => {
                if (e.name.toLowerCase() === $('#input').val().toLowerCase()) {
                    htmlStr += `<div class="space"><p>Phone Number: ${e.phoneNum}</p></div>`;
                    matchPhone = true;
                }
            });
            if (matchPhone === false) {
                htmlStr = '<p>Employee Not Found</p>';
            }
            render(htmlStr);
            break;
    }
}


//DOM functions
const hideWelcome = function () {
    $('h1').addClass('hide');
}
const move = function () {
    $('h2').addClass('move');
}
const showInput = function () {
    $('form').removeClass('hide');
}
const hideOffice = function () {
    $('#office').addClass('hide');
}
const hidePhone = function () {
    $('#phone').addClass('hide');
}
const hideUpdateField = function () {
    $('#updateField').addClass('hide');
}
const hideInput = function () {
    $('form').addClass('show');
}
const hidePrint = function () {
    $('.print').addClass('hide');
}
const render = function (htmlStr) {
    $('#content').html(htmlStr);
}


/*DO NOT DELETE */ //Call back Functions that power event listeners
const setPrint = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    hideOffice(); //Hide office input field
    hidePhone(); //Hide phone input field
    command = 'print';
    runSubmit(event);
}
const setVerify = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    hideOffice(); //Hide office input field
    hidePhone(); //Hide phone input field
    runSubmit(event);
    command = 'verify';
}
const setLookup = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    hideOffice(); //Hide office input field
    hidePhone(); //Hide phone input field
    runSubmit(event);
    command = 'lookup';
}
const setContains = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    hideOffice(); //Hide office input field
    hidePhone(); //Hide phone input field
    runSubmit(event);
    command = 'contains';
}
const setUpdate = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    runSubmit(event);
    command = 'update';
}
const setAdd = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    runSubmit(event);
    command = 'add';
}
const setDelete = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    hideOffice(); //Hide office input field
    hidePhone(); //Hide phone input field
    runSubmit(event)
    command = 'delete';
}
const setPhone = function () { //Works!
    outputDiv.empty();
    hideWelcome(); //Hide welcome page text
    move(); //Move h2 header to top left
    showInput(); //Shows form 'input' field
    hideOffice(); //Hide office input field
    hidePhone(); //Hide phone input field
    runSubmit(event)
    command = 'phone';
}

//Event Listener Callback Functions
$('#print').on('click', setPrint);
$('#verify').on('click', setVerify);
$('#lookup').on('click', setLookup);
$('#contains').on('click', setContains);
$('#update').on('click', setUpdate);
$('#add').on('click', setAdd);
$('#delete').on('click', setDelete);
$('#phone').on('click', setPhone);
$('#submit').on('click', runSubmit);