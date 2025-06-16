document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,
        showPass: false,
        errors: {},
        beltChoices: ['red','black','green','yellow'],

        validateForm() {
            this.errors = {};
            if(this.username == '') {
                this.errors.username = 'Username is required.';
            }
        },

        submitForm($event) {
            this.validateForm()
            console.log(this)
            $event.target.reset()
        }
    }))
})