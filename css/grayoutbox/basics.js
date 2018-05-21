/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	
	$('#basic-modal-content').modal( {
    overlayClose: true,
    onShow: function() {
        var timer;
        $('#simplemodal-container').bind({
            mouseenter: function() {
                clearTimeout(timer);
            },
            mouseleave: function() {
                timer = setTimeout($.modal.close, 5000);
            }
        })
        .trigger('mouseleave');
    }
});
   
	
});