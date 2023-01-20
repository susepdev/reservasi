let show = true;
        $("#show_password").click(function () {
            if (show) {
                show = false;
                $(this).empty();
                $(this).append('<i class="fa-solid fa-eye-slash text-green"></i>');
                $("#cPassword").attr('type','text');
            }else{
                show = true;
                $(this).empty();
                $(this).append('<i class="fa-solid fa-eye text-green"></i>');
                $("#cPassword").attr('type','password');
            }
        });

        $("#btnSubmit").click(function (e) {
            e.preventDefault();
            $(this).empty();
            $(this).append('<span><img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" width="20px"> Loading</span>');
            $(this).addClass("disabled");
            setTimeout(LoadingStop, 2000);
        });


        function LoadingStop() {
            $("#btnSubmit").empty();
            $("#btnSubmit").append('<span><i class="fa-solid fa-right-to-bracket"></i> Login</span>');
            $("#btnSubmit").removeClass("disabled");

            Swal.fire({
              icon: 'error',
              html: 'Username atau password tidak valid!',
            })
        }

        $("#send_email").click(function (e) {
            e.preventDefault();
            $(this).empty();
            $(this).append('<span><img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" width="20px"> Loading</span>');
            $(this).addClass("disabled");
            setTimeout(LoadingStopEmail, 2000);
        });

        function LoadingStopEmail() {
            $("#send_email").empty();
            $("#send_email").append('<span><i class="fa-solid fa-paper-plane"></i> Kirim Reset Password</span>');
            $("#send_email").removeClass("disabled");

            Swal.fire({
              icon: 'success',
              html: 'Berhasil terkirim!',
            })
        }

        checkInput();
        function checkInput() {
            let key      = $("#ckeyKlinik").val();
            let username = $("#cUser").val();
            let password = $("#cPassword").val();

            if (key!="" && username!="" && password!="") {
                $("#btnSubmit").removeClass("disabled");
            }else{
                $("#btnSubmit").addClass("disabled");
            }
        }

        checkInputEmail();
        function checkInputEmail() {
            let email = $("#cEmail").val();

            if (email!="") {
                $("#send_email").removeClass("disabled");
            }else{
                $("#send_email").addClass("disabled");
            }
        }


// background animation2
var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
};
window.addEventListener('resize', resize);
resize();

var elements = [];
var presets = {};

presets.o = function (x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 25 * s,
        w: 4 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            
            ctx.beginPath();
            ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 1000) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }
    }
};

presets.x = function (x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
        x: x,
        y: y,
        s: 40 * s,
        w: 4 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;
            
            var _this = this;
            var line = function(x, y, tx, ty, c, o) {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                ctx.lineWidth = _this.w;
                ctx.strokeStyle = c;
                ctx.stroke();
            };
            
            ctx.save();
            
            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
            ctx.rotate(this.r * Math.PI / 180);
            
            line(-1, -1, 1, 1, '#fff');
            line(1, -1, -1, 1, '#fff');
            
            ctx.restore();
        }
    }
};

for(var x = 0; x < Canvas.width; x++) {
    for(var y = 0; y < Canvas.height; y++) {
        if(Math.round(Math.random() * 20000) == 1) {
            var s = ((Math.random() * 5) + 1) / 10;
            if(Math.round(Math.random()) == 1)
                elements.push(presets.o(x, y, s, 0, 0));
            else
                elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
        }
    }
}

setInterval(function() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    var time = new Date().getTime();
    for (var e in elements)
        elements[e].draw(ctx, time);
}, 1);

// background 3