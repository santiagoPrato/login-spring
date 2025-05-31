document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("create-link");
    link.addEventListener("click", event => {
        event.preventDefault();
        create();
    });
});

function create() {
    document.getElementById("form-title").innerText = "Create Account";

    const oldForm = document.getElementById("login-form");
    const form = document.createElement("form");
    form.id = "register-form";
    form.method = "post";
    form.action = "/register";
    form.className = "form-create shadow-lg p-3 mb-5 bg-body-tertiary rounded";

    const csrfHeader = document.querySelector('meta[name="csrf-header"]').content;
    const csrfToken  = document.querySelector('meta[name="csrf-token"]').content;

    let createAccount;
    createAccount = `
        <input type="hidden" name="${csrfHeader}" value="${csrfToken}" />
        <div class="mb-2">
            <label class="form-label">Username</label>
            <input name="username" type="text" class="form-control" maxlength="50"/>
        </div>
        <div class="mb-2">
            <label class="form-label">Age</label>
            <input name="age" type="number" class="form-control" maxlength="50"/>
        </div>
        
        <div class="mb-2">
            <label class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" maxlength="50"/>
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input name="password" type="password" class="form-control" maxlength="50"/>
        </div>
        <button type="submit" class="btn btn-primary d-block">Submit</button>
        <a class="fs-6 mt-1 float-end cursor-pointer text-decoration-none text-dark" href="index.html">Login</a>
    `;

    form.innerHTML = createAccount;

    oldForm.replaceWith(form);
}