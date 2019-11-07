export default {
    key: 'UserReport',
    options: {
        attempts: 3,
        timeout: 10000
    },
    async handle({ data }) {
        const { user } = data;
        console.log('UserReport', user);
    }
}