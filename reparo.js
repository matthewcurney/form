jQuery('head').append('<meta content="width=device-width, initial-scale=1" name="viewport" />');
jQuery("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://raw.githubusercontent.com/matthewcurney/form/main/reparo.css"
 }).appendTo("head");
 
jQuery(document).ready(function () {

    // that's one bit sorted 

    // for each element, WRAP it in a label. That's allowed, and better syntax. 
    
    // this will be determined custom to the form. I'll see what gets output. 
    // There will only be a few different types of form element sections, and it will adjust for these according
    // we can keep the table markup, just moving things around so the td are responsive. 
    // and then it's just css styles for the aesthetic 

    // and then it's a header section that's customizable. Will pull in any images or copy needed. 
    // the js will pull in the styles from my CDN hosted on my site. 

    // and for tabs - it can have a navigation at the bottom.  For mobile, we're doing away with tabs alltogether. 
    
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


    // for every element - create a label above it 
    // and remove all other tds on the page. Remove every td that doesn't have a label 
});
