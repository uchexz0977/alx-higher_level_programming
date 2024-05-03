$(document).ready(function() {
    $('#btn_translate').click(function() {
        let languageCode = $('#language_code').val();
        let apiUrl = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;
        
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data) {
                $('#hello').text(data.hello);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });

    $('#language_code').keypress(function(event) {
        if (event.keyCode === 13) {
            $('#btn_translate').click();
        }
    });
});

