class SignUpElements {
    emailField = () => '[data-test="input-email"]'
    passwordField = () => '[data-test="input-password"]'
    confirmPasswordField = () => '[data-test="input-password_confirmation"]'
    noBonusButton = () => "label[for='bonus-0']"
    ageVerificationButton = () => "label[for='core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions']"
    createAccountButton = () => '[data-test="control-submit"]'

}

export default SignUpElements;