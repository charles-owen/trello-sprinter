/**
 * @file
 * Main Trello support object. Includes some global functions that are useful.
 */

function TrelloLib() {
}

TrelloLib.parse_json = function(json) {
    try {
        var data = $.parseJSON(json);
    } catch(err) {
        throw "JSON parse error: " + json;
    }

    return data;
}

/**
 * Remove all HTML tags from a string. 
 * @param str String to process
 * @returns string without tags
 */
TrelloLib.strip_tags = function(str) {
    return str.replace(/<(?:.|\n)*?>/gm, '');
}

/**
 * Convert a JavaScript Date object to a string.
 *
 * This uses formatting that is subset of the PHP date() function.
 * @param date Date object
 * @param format Optional format string (default is 'n-d-Y h:ia').
 * @returns {string}
 */
TrelloLib.format_datetime = function(date, format) {
    if(format === undefined) {
        format = 'n-d-Y h:ia';
    }

    var hours = date.getHours();
    var hour = hours;
    var am = 'a';
    if(hours == 0) {
        hour = 12;
    } else if(hours == 12) {
        am = 'p';
    } else if(hours > 12) {
        hour = hours - 12;
        am = 'p';
    }

    var str = '';
    for(var i=0; i<format.length; i++) {
        switch(format.charAt(i)) {
            case 'n':
                str += date.getMonth() + 1;
                break;

            case 'm':
                str += TrelloLib.pad(date.getMonth() + 1, 2);
                break;

            case 'd':
                str += TrelloLib.pad(date.getDate(), 2);
                break;

            case 'Y':
                str += date.getFullYear();
                break;

            case 'g':
                str += hour;
                break;

            case 'h':
                str += TrelloLib.pad(hour, 2);
                break;

            case 'i':
                str += TrelloLib.pad(date.getMinutes(), 2);
                break;

            case 's':
                str += TrelloLib.pad(date.getSeconds(), 2);
                break;

            case 'a':
                str += am;
                break;

            default:
                str += format.charAt(i);
                break;
        }
    }

    return str;
}

/**
 * Pad a number with leading zeros. Useful for times and dates.
 * @param i Number to pad
 * @param n Desired number length
 * @returns Padded number
 */
TrelloLib.pad = function(i, n) {
    var s = '' + i;
    while(s.length < n) {
        s = '0' + s;
    }

    return s;
}


/**
 * Perform a Trello GET operation.
 * 
 * Includes rate limiting backoff capability.
 * @param url
 * @param success
 * @param failure
 */
TrelloLib.get = function(url, success, failure, msg) {
    var tries = 1;

    var maxtries = 5;  // Maximum number of tries
    var backoff = 10;   // seconds
    var backoffIncrease = 1.25; // Amount to increase backoff after each try

    function trelloGet() {
        Trello.get(url,
            success,
            function(jqXHR, status, error) {        // Error
                if(jqXHR.status == 429 && tries < maxtries) {
                    tries++;
                    $(msg).html("Rate limited, attempt " + tries + " after " +
                        backoff.toFixed(0) + " seconds");
                    setTimeout(function() {
                        trelloGet();
                    }, backoff * 1000);
                    backoff *= backoffIncrease;
                } else {
                    failure(jqXHR, status, error);
                }

            }
        );
    }

    trelloGet();
}

TrelloLib.tokenKiller = function(event) {
    delete window.localStorage.trello_token;
}