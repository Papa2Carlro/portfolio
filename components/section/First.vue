<template>
    <section class="first section section--100vh">
        <img src="../../static/image/first/bg.png" alt="" class="first__bg">

        <div class="first__content">

            <RtBlock/>

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
import RtBlock from "../first/RtBlock"

export default {
    name: 'FistSection',
    data: () => ({
        name: 'Max Priymak'
    }),
    components: {RtBlock, RbBlock, LbBlock, Central}
}
</script>
