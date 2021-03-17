<template>
    <section class="first section section--100vh">
        <img src="../../static/image/first/bg.png" alt="" class="first__bg">

        <div class="first__content">

            <Central :name="name"/>

            <LbBlock/>

            <RbBlock/>

        </div>
    </section>
</template>

<script>
import Central from "../first/Central"
import LbBlock from "../first/LbBlock"
import RbBlock from "../first/RbBlock"

export default {
    name: 'FistSection',
    data: () => ({
        name: 'Max Priymak'
    }),
    components: {RbBlock, LbBlock, Central}
}
</script>
