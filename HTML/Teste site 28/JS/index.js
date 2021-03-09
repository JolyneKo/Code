$('.container__submit').click((e) => {
    e.preventDefault();

    const userInfo = {
        name: $('#name').val(),
        email: $('#email').val()
    }

    console.log(userInfo.name);

    let isEmpty = Object.values(userInfo).every(o => o === "");

    if (!isEmpty) {
        $.post("api/register.php", userInfo, (data, status) => {
            if (status === "success") {
                window.location.href = "http://localhost:8080/message.php?success=1";
            } else {
                window.location.href = "http://localhost:8080/message.php?success=0";
            }
        });
    }
});
