console.log('js');
$(document).ready(connected);

let incrementedId = [];

function swearToMe() {
    const el = $('.container2')
    incrementedId.push(1);

    el.append(` <div class=row align-items-center>
                <div class="col">` + $('#firstName').val() +
        `</div>
                <div class="col">` + $('#lastName').val() +
        `</div>
                <div class="col">` + $('#id').val() +
        `</div>
                <div class="col">` + $('#title').val() +
        `</div>
                <div class="col">` + $('#annualSalary').val() +
        `</div>
                <div class="col">
                    <button type=button class=delete` + (incrementedId.length) + ` ''id=theDeleteBuatton>Delete</button>
                </div>
            </div>`);
    $('#firstName').val('')
    $('#lastName').val('')
    $('#id').val('')
    $('#title').val('')
    $('#annualSalary').val('')
    $('.delete' + incrementedId.length).on('click', FireThem);

}


let anSal = 0;

function howMuch() {
    console.log('is it working')
    anSal += ($('#annualSalary').val() / 1)
    let moneyMath = anSal / 12;
    let el = $('#monthly');
    el.empty();
    el.append('Total Monthly: $ ', moneyMath);
}



function connected() {
    console.log('JQ');
    $('#theSubmitBuatton').on('click', howMuch);
    $('#theSubmitBuatton').on('click', swearToMe);


}

function FireThem() {
    console.log('your fired');
    $(this).parents().parents().first().remove();

}