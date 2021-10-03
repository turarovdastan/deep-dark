<template>
    <div class="main">
        <div class="page">
            <Nuxt/>
        </div>
        <footer>
            <footer_container />
        </footer>
    </div>
</template>

<script>

import footer_container from "@/components/blocks/footer";
export default {
    components:{
        footer_container
    }
}
</script>

