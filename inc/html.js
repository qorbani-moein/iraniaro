<script>
    window.addEventListener("load", function() {
        document.getElementsByClassName(".city_categories .filter-option-inner-inner")[0].innerHTML = "کشور و شهر";
        document.getElementsByClassName(".main-search-form li.selected .selected span.text")[0].innerHTML = "کشور و شهر";
        x = document.querySelectorAll(".city_categories .filter-option-inner-inner")[0].innerHTML;
        console.log(x);

    });
</script>