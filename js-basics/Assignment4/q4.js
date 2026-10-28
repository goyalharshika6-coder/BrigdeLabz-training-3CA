
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = "<form id='myForm'>";

        for (let i = 0; i < this.fields.length; i++) {
            formHTML += `
                <label>${this.fields[i].label}</label><br>
                <input type="${this.fields[i].type}"
                       name="${this.fields[i].label}" required>
                <br><br>
            `;
        }

        formHTML += "<button type='submit'>Submit</button></form>";

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("myForm").addEventListener("submit", (event) => {
            event.preventDefault();

            let data = this.getFormData();
            console.log(data);
            alert(JSON.stringify(data, null, 2));
        });
    }

    getFormData() {
        let form = document.getElementById("myForm");
        let data = {};

        for (let i = 0; i < this.fields.length; i++) {
            let name = this.fields[i].label;
            data[name] = form.elements[name].value;
        }

        return data;
    }
}

let fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

let builder = new FormBuilder(fields);
builder.createForm();
