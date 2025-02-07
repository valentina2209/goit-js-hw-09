const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};

const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};

const updateFormData = (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
};

const loadFormLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.email.value = formData.email || "";
        form.message.value = formData.message || "";
    }
};

const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

 console.log("form data:", formData);

 form.reset();
 localStorage.removeItem(STORAGE_KEY);
 formData = { email: "", message: ""};

};

form.addEventListener("input", updateFormData);
form.addEventListener("submit", handleSubmit);

loadFormLocalStorage();