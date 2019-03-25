export default {
    name: String,
    email: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: false
    },
    password: String
}