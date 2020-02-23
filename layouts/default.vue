<template>
    <nuxt/>
</template>

<script>
  //лэйаут используется для редиректа при отсутствии токена
    export default {
        middleware: 'redirect',
    };
</script>
