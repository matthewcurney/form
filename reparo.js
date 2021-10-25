jQuery('head').append('<meta content="width=device-width, initial-scale=1" name="viewport" />');

    jQuery('h1').prepend('<img src="https://wallericheyecare.com/wp-content/uploads/2020/07/big-wallerich-eye-care.png" />');

    jQuery("input:not([type=hidden]), select").each(function () {
        // wrap each one in a label 

        // get name and add it to parent td
        var name = jQuery(this).attr('name');
        if (typeof name !== 'undefined') {
            name = name.toLowerCase();
            console.log(name);
            jQuery(this).closest('td').addClass(name);
        }
        // wrap each input in a label
        jQuery(this).wrap("<label>"+name+"</label>");
    });


    // label and placeholder edits based on field 
    jQuery(".first").find('input').attr("placeholder", "Enter your first name...");
    jQuery(".last").find('input').attr("placeholder", "Enter your last name...");

    jQuery('td:not([class])').remove();
    jQuery('.title').remove();

    // if first name table
    if(jQuery('table').find('.first').length !== 0) {
        console.log(jQuery(this));
    }
   jQuery.ajax({
        url: "https://raw.githubusercontent.com/matthewcurney/form/main/reparo.css",
        success: function(data) {
            jQuery("<style>").appendTo("head").html(data);
        }
    });
