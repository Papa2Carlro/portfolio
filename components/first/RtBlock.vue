<template>
    <ul class="graphic">
        <li v-for="(line, index) in lines" :key="index" class="graphic__item" :class="{big: line > 115}">*
            <div :style="{height: line + 'px'}" class="graphic__body"></div>

            <div class="graphic__footer"></div>
        </li>
    </ul>
</template>

<script>
export default {
    data: () => ({
        line1: 85,
        line2: 135,
        line3: 100,
        line4: 65,
        line5: 50,
        line6: 85,

        interval: null
    }),
    computed: {
        lines() {
            return [this.line1, this.line2, this.line3, this.line4, this.line5, this.line6]
        }
    },
    created() {
        this.interval = setInterval(() => {
            this[`line${this.random('line')}`] = this.random('height')
            this[`line${this.random('line')}`] = this.random('height')
        }, 400)
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        random(type) {
            switch (type) {
                case 'line':
                    return (Math.random() * (6 - 1) + 1).toFixed(0);

                case 'height':
                    return Math.random() * (150 - 10) + 10;
            }
        }
    }
}
</script>
