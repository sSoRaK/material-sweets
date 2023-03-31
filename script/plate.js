$(function () {
    var cvs = $('#cakeplate');
    cvs[0].width = 440;
    cvs[0].height = 200;
    var ctx = cvs[0].getContext('2d');
    ctx.fillStyle = "#4F2110";
    ctx.fillRect(0, 0, 440, 200);
    ctx.fillStyle = "#F9F5D0";
    ctx.fillRect(10, 10, 420, 180);
    var flag_plate_white = true;

    // チョコを入れ替える 
    cvs.click(function (e) {
        var x_posi = e.offsetX;
        var y_posi = e.offsetY;
        if ((x_posi >= 0 && x_posi <= 10) ||
            (x_posi >= 430 && x_posi <= 440) ||
            (y_posi >= 0 && y_posi <= 10) ||
            (y_posi >= 190 && y_posi <= 200)) {
            if (flag_plate_white) {
                ctx.fillStyle = "#F9F5D0";
                ctx.fillRect(0, 0, 440, 200);
                ctx.fillStyle = "#4F2110";
                ctx.fillRect(10, 10, 420, 180);
                flag_plate_white = false;
            } else {
                ctx.fillStyle = "#4F2110";
                ctx.fillRect(0, 0, 440, 200);
                ctx.fillStyle = "#F9F5D0";
                ctx.fillRect(10, 10, 420, 180);
                flag_plate_white = true;
            }
        }
    });
    var startX;
    var startY;
    var mousedown;

    function draw(x, y) {
        if (flag_plate_white) {
            ctx.strokeStyle = "#4F2110";
        } else {
            ctx.strokeStyle = "#F9F5D0";
        }
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
        startX = x;
        startY = y;
    }

    cvs.on('mousedown', function (e) {
        startX = e.offsetX;
        startY = e.offsetY;
        mousedown = true;
    });

    cvs.on('mousemove', function (e) {
        if (mousedown) {
            x = e.offsetX;
            y = e.offsetY;
            draw(x, y);
        }
    });

    $(window).on('mouseup', function () {
        mousedown = false;
    });
});