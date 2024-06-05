import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    password: Yup.string()
        .min(3, "Не менее 3 символов")
        .required("Необходимо ввести пароль")
});
export default loginFormSchema;