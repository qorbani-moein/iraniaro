<script>
    document.body.addEventListener('click', click_screen, true);

    function click_screen() {
        // sleep(2000);
        //console.log("ffff");
        try {
            //console.log("replace fff!");
            document.querySelectorAll("#charsoogh_submit_ad_show .city-select-row .col-form-label")[0].innerHTML = "کشور";
            document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .col-form-label")[0].innerHTML = "شهر";
            if (document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML == "محله") {
                document.querySelectorAll("#charsoogh_submit_ad_show .district-sec .filter-option-inner-inner")[0].innerHTML = "شهر";
            }
        } catch (error) {
            //console.log("replace ffff noooooo!");
        }
        setTimeout(() => {
            click_screen();
        }, 500);

    }
</script>