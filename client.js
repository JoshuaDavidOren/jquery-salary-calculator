console.log('js');
$(document).ready(connected);

function connected() {
    console.log('JQ');
    $('#theSubmitBuatton').on('click', swearToMe, howMuch);

}

function swearToMe() {
    const el = $('.container2')

    el.append(` <div class="row align-items-center">
                <div class="col">` +
        $('#firstName').val() +
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
                    <button class=Delete id=theDeleteBuatton>Delete</button>
                </div>
            </div>`);
    $('#firstName').val('')
    $('#lastName').val('')
    $('#id').val('')
    $('#title').val('')
    $('#annualSalary').val('')

}

function howMuch() {
    console.log('is it working')
    let el = $('#monthly');
    el.empty();
    el.append('text');
}
//let moneyMath = ('Total Monthly: $ ' + $('#annualSalary').val() / 1);