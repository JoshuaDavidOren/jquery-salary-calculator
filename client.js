console.log('js')
$(document).ready(connected)

function connected() {
    console.log('JQ')
    $('#theSubmitBuatton').on('click', swearToMe)
}

function swearToMe() {
    const el = $('.container')

    el.append(` <div class="row align-items-center">
                <div class="col">
                    One of three columns
                </div>
                <div class="col">
                    One of three columns
                </div>
                <div class="col">
                    One of three columns
                </div>
                <div class="col">
                    One of four columns
                </div>
                <div class="col">
                    One of five columns
                </div>
                <div class="col">
                    <button id=theDeleteBuatton>Delete</button>
                </div>
            </div>`)
}