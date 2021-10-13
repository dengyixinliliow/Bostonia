$("#vegan").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=vegan&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});

$("#italian").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=italian&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});

$("#american").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=american&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});

$("#asian").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=asian&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});

$("#dessert").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dessert&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});

$("#seafood").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=seafood&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});

$("#drink").click(() => {
    $("#restaurants").empty();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=drink&location=boston',
        dataType: 'json',
        headers: {
            "Authorization": `Bearer tSqs0F0M6PVrknfyBFMw5aQ2Q0ucOwGZOPTuXSa9vXvE-paYgAJh5nrTcitPX0efiqJZpbXjVJM3e01LiYjLdbDCfvdvtHp2aVcB3kiPyWWIOSoKIxgBGNwYSpGHYHYx`
        },
        method: "GET",
        success: function(data) {
            const d = data.businesses;
            d.forEach(business => {
                let url = business.image_url;
                $("#restaurants").append(
                    `<div class="col-sm-4 text-center">
                        <img src=${url} alt="food" class="res"/>
                        <h6>${business.name}</h6>
                    </div>
                    `
            )});
        }
        
    });
});
