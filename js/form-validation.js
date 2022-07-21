$(function() {

    $("a:contains('Login')").click(function() {
        $("form[name='login-form']").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 16
                }
            },
    
            messages: {
                email: "Please enter a valid email.",
                password: {
                    required: "Please enter a password.",
                    minlength: "Password must be at least 8 characters.",
                    maxlength: "Password can not exceed 16 characters."
                }
            },
    
            submitHandler: function(form) {
                form.submit();
            }
        });
    });

    $("form[name='contact']").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            subject: {
                required: true,
                minlength: 6
            },
            phone: {
                required: true,
                minlength: 10
            },
            emailAddress: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 20,
                maxlength: 500
            }
        },

        messages: {
            name: {
                required: "Please enter your first and last name.",
                minlength: "Must be at least 2 characters",
                maxlength: "Must be less than 50 characters"
            },
            subject: {
                required: "Please enter a subject.",
                minlength: "Subject must be at least 6 characters."
            },
            phone: "Please enter a valid phone number ex:111-111-1111.",
            emailAddress: "Please enter a valid email.",
            message: {
                required: "Please enter a message.",
                minlength: "Message must be at least 20 characters.",
                maxlength: "Message must be less than 500 characters."
            }
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
});

