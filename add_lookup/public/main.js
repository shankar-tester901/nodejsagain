function check() {
    console.log($('#input').val());
    $.ajax(
        {
            type: "POST",
            url: "/addressLookup",
            data: { postcode: $('#input').val() },
            dataType: 'json',
            success: function (data) {
                console.log(JSON.stringify(data.result));
                $('#postcode_lookup').text('');
                $('#postcode_lookup').text(JSON.stringify(data.result));

            },
            error: function (jqxhr, status, exception) {
                console.log('Exception:', exception);
            }

        }
    );
}