<template>
    <Container>
        <template #title>
            Вход
        </template>
        <template #form>
            <LoginForm/>
        </template>
    </Container>
</template>

<script>
    import Container from '~/components/authForms/containers/container';
    import LoginForm from '~/components/authForms/login';

    export default {
        layout: 'auth',
        components: {
            Container,
            LoginForm
        }
    }
</script>
