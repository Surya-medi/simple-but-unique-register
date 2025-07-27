document.querySelector("form").addEventListener("submit", function (e) {
            const username = document.querySelector('input[name="username"]').value.trim();
            const password = document.querySelector('input[name="password"]').value.trim();

            if (username === "" || password === "") {
                alert("Username dan password tidak boleh kosong!");
                e.preventDefault();
            } else if (password.length < 6) {
                alert("Password minimal 6 karakter!");
                e.preventDefault();
            }
        });
