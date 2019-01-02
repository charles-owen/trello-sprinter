/**
 * @file
 * Connect to the Trello library
 */

/**
 * Connect to the Trello library
 *
 * This version sends the connect information to lib/trello.connect.php
 * and is meant for support of PHP data acquisition.
 *
 * @param key API key for Trello
 * @constructor
 */
TrelloLib.Connect = function(key) {

    $(document).ready(function() {
        connect();
    });

    function connect() {
        Trello.authorize({
            type: 'popup',
            name: 'Trello Connect',
            scope: {
                read: true,
                write: false },
            expiration: 'never',
            success: success,
            error: failure,
            persist: false
        });
    }

    function success() {
        $.ajax({
            url: CourseLib.libroot + '/trello/post/connect.php',
            data: {token: Trello.token(), key: key},
            method: 'POST',

            success: function(json) {
                var data = parse_json(json);
                if(data.ok) {
                    ajax_success();
                } else {
                    error(data.msg);
                }
            },

            error: function(xhr, status, error) {
                // Do something about the error that occurred
                $("#msg").html('Unable to communicate with the course server!');
                reset();
            }

        });
    }

    function ajax_success() {
        $(".trello-connect").html("Successfully connected to Trello");
    }

    function failure() {
        $("#msg").html('Unable to authorize with Trello!');
    }

    function error(msg) {
        $("#msg").html(msg);
    }

    function reset() {
        $(".trello-connect").html('<button>Connect to Trello</button>');
        $(".trello-connect button").click(connect);
    }
}
