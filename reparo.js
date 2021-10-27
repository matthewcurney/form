var labelMaker = {
    'middle': 'MI',
    'address1': 'Address',
    'address2': '',
    'prefcontact': 'Preferred Contact Method',
    'home': 'Home Phone',
    'work': 'Work Phone',
    'ssn': 'Last 4 of SSN',
    'bday': 'Birthday',
    'eSchool': 'Employer / School Name',
    'misc': 'Misc/Guardian',
    'bfrist': 'First',
    'blast': 'Last',
    'bmiddle': 'MI',
    'bsuffix': 'Suffix',
    'baddress1': '',
    'baddress2': '',
    'bcity': 'City',
    'bstate': 'State',
    'bzipcode': 'Zip Code',
    'bhome': 'Home Phone',
    'bwork': 'Work Phone',
    'ins1_name': 'Insurance Name',
    'ins1_id': 'Insurance ID',
    'ins1_pg': 'Insurance Policy Group',
    'ins1_p_name': '',
    'ins1_p_addr': 'Address',
    'ins1_p_city': 'City',
    'ins1_p_zip': '',
    'ins1_p_state': '',
    'ins1_p_ph':'Phone Number',
    'ins1_p_bday': 'Birthday',
    'ins1_p_ssn': 'SSN',
    'ins1_p_emp': 'Employer/School',
    'ins2_name': 'Insurance Name',
    'ins2_id': 'Insurance ID',
    'ins2_pg': 'Insurance Policy Group',
    'ins2_p_name': '',
    'ins2_p_addr': 'Address',
    'ins2_p_city': 'City',
    'ins2_p_zip': '',
    'ins2_p_state': '',
    'ins2_p_ph':'Phone Number',
    'ins2_p_bday': 'Birthday',
    'ins2_p_ssn': 'SSN',
    'ins2_p_emp': 'Employer/School',
    'ins3_name': 'Insurance Name',
    'ins3_id': 'Insurance ID',
    'ins3_pg': 'Insurance Policy Group',
    'ins3_p_name': '',
    'ins3_p_addr': 'Address',
    'ins3_p_city': 'City',
    'ins3_p_zip': '',
    'ins3_p_state': '',
    'ins3_p_ph':'Phone Number',
    'ins3_p_bday': 'Birthday',
    'ins3_p_ssn': 'SSN',
    'ins3_p_emp': 'Employer/School'
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
                if (name.startsWith('mc_')) {
                    jQuery(this).closest('tr').addClass('keep');
                }
                if (jQuery(this).is(':radio')) {
                    jQuery(this).closest('tr').addClass('radio');
                }
                // checkboxes need to have sibling text wrapped in label
                if (jQuery(this).is(':checkbox')) {
                    jQuery(this).closest('tr').addClass('checkbox');
                    jQuery(this.nextSibling).wrap("<label></label>");
                }

                // this is because radio buttons are alreay label wrapped, and checkboxes/ids are too custom to change

            } else {
                // add class to parent td
                jQuery(this).closest('td').addClass(name);

                // then get label and placeholder
                if (name in labelMaker) {
                    label = labelMaker[name];
                } else {
                    label = name;
                }
                if (name in placeholderMaker) {
                    placeholder = placeholderMaker[name];
                } else {
                    placeholder = '';
                }

                // put in label and placeholder
                jQuery(this).wrap("<label>" + label + "</label>");
                jQuery(this).attr("placeholder", placeholder);
            }

        }

    });

    jQuery('.billcheck').each(function(){

    jQuery(this.nextSibling).wrap("<label></label>");
    });

    jQuery('td:contains(Employment Status)').addClass('break');

    jQuery('tr:not([class]) td:not([class])').remove();

    // inputs that aren't needed - hide 
    jQuery('td.title, td.other, td.alerts, td.btitle, td.ins_plan1_name, td.ins_plan2_name, td.ins_plan3_name').remove();

    jQuery('head').append('<meta content="width=device-width, initial-scale=1" name="viewport" />');

    jQuery('h1').prepend('<img src="https://wallericheyecare.com/wp-content/uploads/2020/07/big-wallerich-eye-care.png" />');

    // finally load in CSS
    jQuery.ajax({
        url: "https://raw.githubusercontent.com/matthewcurney/form/main/reparo.css",
        success: function (data) {
            jQuery("<style>").appendTo("head").html(data);
        }
    });

});
