(function(){
    $('.slick-inner').slick({
        dots: true,
        infinite: false,
        speed: 300,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    });


    // init Isotope
    var $grid = $('.smart-wall-items');
    if($grid.length) {
    $grid.isotope({
        itemSelector: '.smart-wall-item',
        layoutMode: 'fitRows'
    });

    var iso = $grid.data('isotope');
    var $filterCount = $('.filter-count');
    var $totalCount = $('.total-count');

    // filter functions
    var filterFns = {
        numberBelow100: function() {
            var numberBelow100 = $(this).find('.number').text();
            return parseInt(numberBelow100, 10) < 101;
        },
        numberGreaterThan250: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 250;
        },
        numberBetween101to150: function(){
            var numberB101to150 = parseInt($(this).find('.number').text(), 10);
            if(numberB101to150 > 100 && numberB101to150 < 151) {
                return numberB101to150
            }
        },
        numberBetween151to200: function() {
            var numberB151to200 = parseInt($(this).find('.number').text(), 10);
            if(numberB151to200 > 150 && numberB151to200 < 201) {
                return numberB151to200
            }
        },
        numberBetween201to250: function() {
            console.log(this);
            var numberB201to250 = parseInt($(this).find('.number').text(), 10);
            if(numberB201to250 > 200 && numberB201to250 < 251) {
                return numberB201to250
            }
        },
        customRange: function() {
            console.log(this);
            var finalOutput = parseInt($(this).find('.number').text(), 10);
            var minRange = $('.input-group.minVal input.form-control').val();
            var maxRange = $('.input-group.maxVal input.form-control').val();
            if(finalOutput >= minRange && finalOutput<= maxRange) {
                return finalOutput
            }
        }
    };
    
    // bind filter on radio button click
    $('#radio-wrapper').on( 'click', 'input', function() {
        // get filter value from input value
        var filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });

        updateFilterCount();
    });
    $('#range').on('click' , 'button' , function() {
        // get filter value from input value
        console.log(this);
        var filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });

        updateFilterCount();
    });

    function updateFilterCount() {
        $filterCount.text( iso.filteredItems.length );
    }
    function totalCount(count) {
        $totalCount.text(count.length);
    }
    totalCount($('.smart-wall-item'));
    updateFilterCount();

}

})();