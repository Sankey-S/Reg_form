$(document).ready(function() {
    $("#submitButton").on("click", function() {
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const address = $("#address").val();

        if (name && email && phone && address) {
            const outputHtml = `
                <h2>Submitted Information:</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
            `;

            $("#output").html(outputHtml).fadeIn();
        } else {
            alert("Please fill in all fields.");
        }
    });
});