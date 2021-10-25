var labelMaker = {
    'address1': 'Address',
    'address2': 'Address',
    'home': 'Home Phone',
    'work': 'Work Phone',
    'ssn': 'Last 4 of SSN',
    'bday': 'Birthday',
    'eSchool': 'Employer / School Name',
    'misc': 'Misc/Guardian'
};

var placeholderMaker = {
    'first': 'Enter your first name...',
    'last': 'Enter your last name...'
}

jQuery(document).ready(function () {

    var name = '';
    var label = '';
    var placeholder = '';

    jQuery("input:not([type=hidden], [type=button]), select").each(function () {

        // get input name
        name = jQuery(this).attr('name');

        // if it has one proceed and make it lowercase
        if (typeof name !== 'undefined') {

            name = name.toLowerCase();

            if (jQuery(this).is(':radio') || jQuery(this).is(':checkbox') || name.startsWith('mc_')) {
                // keep as is and add class to parent tr
                if(name.startsWith('mc_')){
                    jQuery(this).closest('tr').addClass('keep');
                }
                if(jQuery(this).is(':radio') ){
                    jQuery(this).closest('tr').addClass('radio');
                }
                if(jQuery(this).is(':checkbox')){
                    jQuery(this).closest('tr').addClass('checkbox');
                }

                // this is because radio buttons are alreay label wrapped, and checkboxes/ids are too custom to change

            } else {
                // add class to parent td
                jQuery(this).closest('td').addClass(name);

                // then get label and placeholder
                if (name in labelMaker) {
                    label = labelMaker[name];
                    placeholder = placeholderMaker[name];
                } else {
                    label = name;
                    placeholder = '';
                }

                    // put in label and placeholder
                    jQuery(this).wrap("<label>" + label + "</label>");
                    jQuery(this).attr("placeholder", placeholder);
            }

        }

    });


    jQuery('tr:not([class]) td:not([class])').remove();

    // inputs that aren't needed - hide 
    jQuery('td.title, td.other, td.alerts').remove();

    jQuery('head').append('<meta content="width=device-width, initial-scale=1" name="viewport" />');

    jQuery('h1').prepend('<img src="https://wallericheyecare.com/wp-content/uploads/2020/07/big-wallerich-eye-care.png" />');

    // finally load in CSS
    // jQuery.ajax({
    //     url: "https://raw.githubusercontent.com/matthewcurney/form/main/reparo.css",
    //     success: function (data) {
    //         jQuery("<style>").appendTo("head").html(data);
    //     }
    // });

});
