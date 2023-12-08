<script>
    // const lbl_search = document.querySelectorAll(" .city_categories .filter-option-inner-inner");
    // lbl_search[0].innerHTML = "کشور و شهر";
    // window.addEventListener("load", function() {
    //     const lbl_search = document.querySelectorAll(".city_categories .filter-option-inner-inner");
    //     // const lbl_inner_search = document.querySelectorAll(".main-search-form li.selected .selected span.text");
    //     lbl_search[0].innerHTML = "کشور و شهر";
    //     // lbl_inner_search[0].innerHTML = "کشور و شهر";
    //     // x = document.querySelectorAll(".city_categories .filter-option-inner-inner")[0].innerHTML;
    //     console.log(lbl_search);

    // });
    // window.onload = replace_city_lbl;

    function change_name() {

        const lbl_search = document.querySelectorAll("#city_categories option");
        lbl_search[0].innerHTML = "کشور و شهر";
        // const lbl_search = document.querySelectorAll(".city_categories .filter-option-inner-inner");
        // lbl_search[0].innerHTML = "کشور و شهر";
        // console.log(lbl_search[]);
    }

    function replace_city_lbl() {
        try {
            // const search_form = document.querySelectorAll(".woocommerce-product-search");
            // let tmp_text = search_form[0].outerHTML;

            if (document.querySelectorAll(".woocommerce-product-search")[0].outerHTML.search("شهر / محله")) {
                // document.querySelectorAll(".woocommerce-product-search")[0].outerHTML = document.querySelectorAll(".woocommerce-product-search")[0].outerHTML.replace("کشور / شهر", "شهر / محله");
                document.querySelectorAll(".woocommerce-product-search")[0].outerHTML = document.querySelectorAll(".woocommerce-product-search")[0].outerHTML.replace("شهر / محله", "کشور / شهر");
                console.log("yes replace");
            } else {
                console.log("no replace");
            }
            // search_form[0].outerHTML = tmp_text;
        } catch (err) {
            console.log(err.message + " - " + err.name);
        }
    }
    // setTimeout(replace_city_lbl, 3000);
    // setTimeout(replace_city_lbl, 7000);
    // setTimeout(replace_city_lbl, 13000);
    // setTimeout(replace_city_lbl, 5000);
    // setTimeout(replace_city_lbl, 9000);
    // setTimeout(replace_city_lbl, 13000);


    // ---------------------------------

    window.onload = ad_change_name;

    function ad_change_name() {
        // document.querySelectorAll("#charsoogh_submit_ad_show .city-select-row .col-form-label")[0].innerHTML = "کشور";
        // document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .col-form-label")[0].innerHTML = "شهر";
        // document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML = "شهر";
    }
    // let x = 0;
    // while (x = 1) {

    // }
    setTimeout(() => {
        change_name();
    }, 500);

    function change_name() {
        try {
            // console.log("replace!");
            document.querySelectorAll("#charsoogh_submit_ad_show .city-select-row .col-form-label")[0].innerHTML = "کشور";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .col-form-label")[0].innerHTML = "شهر";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML = "شهر";
        } catch (error) {
            // console.log("replace noooooo!");
        }
    }

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function delayedFunction() {
        // console.log('Starting the delayed function...');
        try {
            console.log("replace!");
            document.querySelectorAll("#charsoogh_submit_ad_show .city-select-row .col-form-label")[0].innerHTML = "کشور";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .col-form-label")[0].innerHTML = "شهر";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML = "شهر";
        } catch (error) {
            // console.log("replace noooooo!");
        }
        // Wait for 3 seconds before proceeding
        await delay(3000);

        // console.log('3 seconds have passed, continuing the function...');
    }

    // Call the delayed function
    delayedFunction();



    let time_now;
    document.body.addEventListener('click', click_screen, true);

    function click_screen() {
        var time_click = new Date().getTime() / 1000;
        fn(time_click);
    }

    function fn(time_get) {
        var time_fn = new Date().getTime() / 1000;
        // console.log("in fn");
        // let if_time = time_fn - time_get;
        // console.log(if_time);
        if (time_fn - time_get > 0.2) {

            console.log("ffff");
            console.log(time_fn - time_get);
            try {
                console.log("replace fff!");
                document.querySelectorAll("#charsoogh_submit_ad_show .city-select-row .col-form-label")[0].innerHTML = "کشور";
                document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .col-form-label")[0].innerHTML = "شهر";
                if (document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML == "محله") {
                    document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML = "شهر";
                }
            } catch (error) {
                console.log("replace ffff noooooo!");
            }

        }
        var time_click = new Date().getTime() / 1000;
        setTimeout(() => {
            fn(time_click);
        }, 500);

    }
</script>