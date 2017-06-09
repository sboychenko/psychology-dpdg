/**
 * Created by SBoichenko on 26.12.2016.
 */
// JavaScript Document
var play = false;
var pic = new Image();
pic.src = 'img/ball.png';
var example;
var ctx;
var w;
var w2;
var w_2;
var h;
var h2;
var h_2;
function arrow12(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, h_2, 50, 50);
    $("#fig").attr('i', '0');
    if (w > (h2)) {
        d = h2;
    }
    else {
        d = w;
    }
    l = Math.PI * d;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            a = (360 * i) / (Math.PI * d);
            rad = Math.abs(Math.sin(a * 2 * Math.PI / 360));
            if (a < 180) {
                x = Math.cos((a - 90) * 2 * Math.PI / 360) * w_2 * rad;
                y = Math.sin((a - 90) * 2 * Math.PI / 360) * h * rad;
            }
            else {
                x = Math.cos((a - 90) * 2 * Math.PI / 360) * w_2 * rad;
                y = -Math.sin((a - 90) * 2 * Math.PI / 360) * h * rad;
            }
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow11(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, h_2, 50, 50);
    $("#fig").attr('i', '0');
    if (w > (h2)) {
        d = h2;
    }
    else {
        d = w;
    }
    l = Math.PI * d;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            a = (360 * i) / (Math.PI * d);
            rad = Math.abs(Math.sin(a * 2 * Math.PI / 360));
            if (a < 180) {
                x = -Math.cos((a - 90) * 2 * Math.PI / 360) * w_2 * rad;
                y = -Math.sin((a - 90) * 2 * Math.PI / 360) * h * rad;
            }
            else {
                x = -Math.cos((a - 90) * 2 * Math.PI / 360) * w_2 * rad;
                y = Math.sin((a - 90) * 2 * Math.PI / 360) * h * rad;
            }
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow10(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, h_2, 50, 50);
    $("#fig").attr('i', '0');
    if ((w2) > h) {
        d = h;
    }
    else {
        d = (w2);
    }
    l = Math.PI * d;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            a = (360 * i) / (Math.PI * d);
            rad = Math.abs(Math.sin(a * 2 * Math.PI / 360));
            if (a < 180) {
                x = -Math.cos(a * 2 * Math.PI / 360) * w * rad;
                y = -Math.sin(a * 2 * Math.PI / 360) * h_2 * rad;
            }
            else {
                x = Math.cos(a * 2 * Math.PI / 360) * w * rad;
                y = -Math.sin(a * 2 * Math.PI / 360) * h_2 * rad;
            }
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow9(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, h_2, 50, 50);
    $("#fig").attr('i', '0');
    if ((w2) > h) {
        d = h;
    }
    else {
        d = (w2);
    }
    l = Math.PI * d;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            a = (360 * i) / (Math.PI * d);
            rad = Math.abs(Math.sin(a * 2 * Math.PI / 360));
            if (a < 180) {
                x = Math.cos(a * 2 * Math.PI / 360) * w * rad;
                y = Math.sin(a * 2 * Math.PI / 360) * h_2 * rad;
            }
            else {
                x = -Math.cos(a * 2 * Math.PI / 360) * w * rad;
                y = Math.sin(a * 2 * Math.PI / 360) * h_2 * rad;
            }
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow8(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, 0, 50, 50);
    $("#fig").attr('i', '2880');
    if (w > h) {
        d = h;
    }
    else {
        d = w;
    }
    l = 0;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            if (i > 1350) {
                rad = (2700 - i);
            }
            else {
                rad = i;
            }
            i -= speed[index] * (1440 - rad) / 1440;

            if (i <= l) {
                i = 2880;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            i = i - 90;
            if (i > 1350) {
                rad = (2700 - i);
            }
            else {
                rad = i;
            }
            x = Math.cos(i * 2 * Math.PI / 360) * d * rad / 2880;
            y = Math.sin(i * 2 * Math.PI / 360) * d * rad / 2880;
            i = i + 90;
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow7(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, 0, 50, 50);
    $("#fig").attr('i', '0');
    if (w > h) {
        d = h;
    }
    else {
        d = w;
    }
    l = 2880;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            if (i > 1350) {
                rad = (2700 - i);
            }
            else {
                rad = i;
            }
            i += speed[index] * (1440 - rad) / 1440;

            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            i = i - 90;
            if (i > 1350) {
                rad = (2700 - i);
            }
            else {
                rad = i;
            }
            x = Math.cos(i * 2 * Math.PI / 360) * d * rad / 2880;
            y = Math.sin(i * 2 * Math.PI / 360) * d * rad / 2880;
            i = i + 90;
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow6(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, 0, 50, 50);
    $("#fig").attr('i', '0');
    if (w > h) {
        d = h;
    }
    else {
        d = w;
    }
    l = Math.PI * d;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            a = 360 - (360 * i) / (Math.PI * d) - 90;
            x = Math.cos(a * 2 * Math.PI / 360) * d / 2;
            y = Math.sin(a * 2 * Math.PI / 360) * d / 2;
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow5(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, 0, 50, 50);
    $("#fig").attr('i', '0');
    if (w > h) {
        d = h;
    }
    else {
        d = w;
    }
    l = Math.PI * d;
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            a = (360 * i) / (Math.PI * d) - 90;
            x = Math.cos(a * 2 * Math.PI / 360) * d / 2;
            y = Math.sin(a * 2 * Math.PI / 360) * d / 2;
            ctx.drawImage(pic, x + w_2, y + h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow4(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, 0, 0, 50, 50);
    $("#fig").attr('i', '0');
    l = Math.sqrt(w * w + h * h);
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= 2 * l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            if (i < l) {
                x = w * i / l;
                y = h * i / l;
            }
            else {
                x = w2 - w * i / l;
                y = h2 - h * i / l;
            }
            ctx.drawImage(pic, x, y, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow3(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w, 0, 50, 50);
    $("#fig").attr('i', '0');
    l = Math.sqrt(w * w + h * h);
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= 2 * l) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            if (i < l) {
                x = w - w * i / l;
                y = h * i / l;
            }
            else {
                x = Math.abs(w - w * i / l);
                y = h2 - h * i / l;
            }
            ctx.drawImage(pic, x, y, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow2(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, w_2, 0, 50, 50);
    $("#fig").attr('i', '0');
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= h2) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            if (i < h) {
                y = i;
            }
            else {
                y = h2 - i;
            }
            ctx.drawImage(pic, w_2, y, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function arrow1(index) {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.drawImage(pic, 0, h_2, 50, 50);
    $("#fig").attr('i', '0');
    speed[index] = speed[index] * 2;
    animate = setInterval(
        function () {
            ctx.clearRect(0, 0, example.width, example.height);
            i = $("#fig").attr('i');
            i++;
            i--;
            i += speed[index];
            if (i >= w2) {
                i = 0;
                col[index]--;
                if (col[index] == 0) {
                    index++;
                    clearInterval(animate);
                    raspr(index);
                }
            }
            if (i < w) {
                x = i;
            }
            else {
                x = w2 - i;
            }
            ctx.drawImage(pic, x, h_2, 50, 50);
            $("#fig").attr('i', i);
        },
        10
    );
}

function raspr(index) {
    if (play == true) {
        switch (parseInt(fig[index])) {
            case 1:
                arrow1(index);
                break;
            case 2:
                arrow2(index);
                break;
            case 3:
                arrow3(index);
                break;
            case 4:
                arrow4(index);
                break;
            case 5:
                arrow5(index);
                break;
            case 6:
                arrow6(index);
                break;
            case 7:
                arrow7(index);
                break;
            case 8:
                arrow8(index);
                break;
            case 9:
                arrow9(index);
                break;
            case 10:
                arrow10(index);
                break;
            case 11:
                arrow11(index);
                break;
            case 12:
                arrow12(index);
                break;
            default:
                if (index < 12) {
                    index++;
                    raspr(index);
                }
        }
    }
}

function doDpdg() {
    if (!play) {
        $(".title h1").text("Начинаем...");
        $(".title h3").text("Для выхода нажимайте F11");

        index = 0;

        $(".config").hide();
        $(".close").show();

        setTimeout(
            function () {
                twidth = window.innerWidth;
                theight = window.innerHeight;

                $("#fig").attr({
                    'width': twidth + 'px',
                    'height': theight + 'px'
                });
                $("#fig").css({
                    'width': twidth + 'px',
                    'height': theight + 'px'
                });

                play = true;
                example = document.getElementById("fig");
                ctx = example.getContext('2d');
                w = twidth - 50;
                h = theight - 50;
                w2 = w * 2;
                h2 = h * 2;
                w_2 = Math.round(w / 2);
                h_2 = Math.round(h / 2);
                $(".info").hide();
                raspr(index);
            },
            3000
        );
    } else {
        // Reload page
        play = false;
        location = location;
    }
}

function stopDpdg() {
    if (play) {
        play = false;
        location = location;
    }
}


$(document).ready(
    function () {

        var speedFast = true;
        var whiteTheme = true;
        fig = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0];
        col = [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
        speed = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];


        $("#speed").on("click", function () {
            if (speedFast) {
                $("#speed").text("НОРМАЛЬНО");
                $("#time").text("15");
                speed = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
            } else {
                $("#speed").text("БЫСТРО");
                $("#time").text("5");
                speed = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
            }
            speedFast = !speedFast;
        });

        $("#theme").on("click", function () {
            if (whiteTheme) {
                $("#theme").text("ТЕМНАЯ");
            } else {
                $("#theme").text("СВЕТЛАЯ");
            }
            $("html").toggleClass("uk-contrast");
            whiteTheme = !whiteTheme;
        });


        $(document).keydown(
            function (e) {

                if ((e.keyCode == 122) || (e.which == 122)) {
                    doDpdg();
                }

                if ((e.keyCode == 27) || (e.which == 27)) {
                    stopDpdg();
                }
            }
        );

        $("#start").click(
            function () {
                doDpdg()
            }
        );

        $("#stop").click(
          function () {
              stopDpdg();
          }
        );
    }
);