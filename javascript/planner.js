const eat = (id) => {
    $(`#btn-eat-day${id}`).click(() => {
        if ($(`#input-eat-day${id}`).val() == "") {
            alert("You have to put something in this field to save");
        } else {
            let display = $(`#input-eat-day${id}`).val();
            $(`.eat-day${id}`).empty();
            $(`#display-eat-day${id}`).append(
                `<h6> You will eat <span>${display}</span> at dat${id}! Hope you love their food</h6>`
            );
        }
    })
}

const see = (id) => {
    $(`#btn-see-day${id}`).click (() => {
        if ($(`#input-see-day${id}`).val() == "") {
            alert("You have to put something in this field to save");
        } else {
            let display = $(`#input-see-day${id}`).val();
            $(`.see-day${id}`).empty();
            $(`#display-see-day${id}`).append(
                `<h6> You will see <span>${display}</span> at day ${id}! Have fun there</h6>`
            );
        }
    })
}

const doing = (id) => {
    $(`#btn-do-day${id}`).click (() => {
        if ($(`#input-do-day${id}`).val() == "") {
            alert("You have to put something in this field to save");
        } else {
            let display = $(`#input-do-day${id}`).val();
            $(`.do-day${id}`).empty();
            $(`#display-do-day${id}`).append(
                `<h6> You will <span>${display}</span> at day ${id}! Good Luck!</h6>`
            );
        }
    })
}

const etc = (id) => {
    $(`#btn-etc-day${id}`).click (() => {
        if ($(`#input-etc-day${id}`).val() == "") {
            alert("You have to put something in this field to save");
        } else {
            let display = $(`#input-etc-day${id}`).val();
            $(`.etc-day${id}`).empty();
            $(`#display-etc-day${id}`).append(
                `<h6><span>${display}</span></h6>
                <h6>We hope you will love boston!</h6>`
            );
        }
    })
}

for (let i = 1; i <= 7; i++) {
    eat(i);
    see(i);
    doing(i);
    etc(i);
}
