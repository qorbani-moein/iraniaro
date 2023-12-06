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
        setTimeout(() => {
            console.log("replace!");
            document.querySelectorAll("#charsoogh_submit_ad_show .city-select-row .col-form-label")[0].innerHTML = "کشور";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .col-form-label")[0].innerHTML = "شهر";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML = "شهر";
        }, 5000);
    }
    // let x = 0;
    // while (x = 1) {

    // }
</script>