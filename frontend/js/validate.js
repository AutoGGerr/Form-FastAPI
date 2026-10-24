// const form = document.querySelector("#contact-form");
//     const status = document.querySelector("#form-status");
//     const fields = [
//         { input: document.querySelector("#name"), error: document.querySelector("#name-error") },
//         { input: document.querySelector("#email"), error: document.querySelector("#email-error") },
//         { input: document.querySelector("#phone"), error: document.querySelector("#phone-error") },
//         { input: document.querySelector("#subject"), error: document.querySelector("#subject-error") },
//         { input: document.querySelector("#message"), error: document.querySelector("#message-error") }
//     ];

//         function validateField(input, error) {
//             let message = "";

//             if (input.validity.valueMissing) {
//                 message = "Заполните это поле.";
//             } else if (input.validity.typeMismatch) {
//                 message = "Введите корректный адрес электронной почты.";
//             } else if (input.validity.patternMismatch) {
//                 message = "Введите телефон в указанном формате.";
//             } else if (input.validity.tooShort) {
//                 message = `Введите не менее ${input.minLength} символов.`;
//             } else if (input.validity.tooLong) {
//                 message = `Допустимо не более ${input.maxLength} символов.`;
//             }

//             input.setAttribute("aria-invalid", String(Boolean(message)));
//             error.textContent = message;
//             return message === "";
//         }

//         fields.forEach(({ input, error }) => {
//             input.addEventListener("input", () => {
//                 validateField(input, error);
//                 status.textContent = "";
//             });
//         });

//         form.addEventListener("submit", (event) => {
//             event.preventDefault();
//             status.textContent = "";

//             const isValid = fields
//                 .map(({ input, error }) => validateField(input, error))
//                 .every(Boolean);

//             if (!isValid) {
//                 const firstInvalidField = fields.find(({ input }) => !input.validity.valid);
//                 if (firstInvalidField) {
//                     firstInvalidField.input.focus();
//                 }
//                 return;
//             }

//             status.textContent = "Форма заполнена корректно. Спасибо за обращение!";
//             form.reset();
//             fields.forEach(({ input }) => input.removeAttribute("aria-invalid"));
            
//         });

