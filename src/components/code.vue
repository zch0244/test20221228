<template>
    <div>
        <!-- <view style="margin-top: 8px;">验证码：</view> -->
        <!-- <input
          :enableNative="false"
          style="width:100px;height:30px;border-bottom:1px solid #000;"
          v-model="verCode"
          name="verCode"
          id="verCode"
        > -->
        <canvas id="imgcanvas" style="width:100px;height:50px;" @error="canvasIdErrorCallback"></canvas>
    </div>
</template>
<script>
export default {
    data() {
        return {
            verCode: '', // 验证码,
            width: 120,
            height: 45,
        }
    },
    created() {
        const that = this;
        setTimeout(() => {
            that.init();
        }, 1000);
    },
    methods: {
        // 初始化验证码
        init() {
            console.log('start')
            const canvas = document.getElementById('imgcanvas')
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = this.randomColor(80, 230); //填充颜色
            ctx.fillRect(0, 0, 300, 150); //填充位置
            let imgCode = "";
            let arr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4]
            // 随机产生字符串，并且随机旋转
            for (let i = 0; i < 4; i++) {
                const text = arr[Math.floor(Math.random() * 10)]
                const deg = this.randomNum(-30, 80);
                imgCode += text;
                ctx.font = "100px Simhei"; //填充字体
                ctx.textBaseline = "top";
                ctx.fillStyle = this.randomColor(80, 150);
                ctx.save(); //保存
                // ctx.translate(30 * i + 15, 15);
                // // ctx.rotate((deg * Math.PI) / 180); //随机的旋转
                // ctx.fillText(text, 0, 0); //
                ctx.translate(30 * i + 15, 15);
                ctx.rotate((deg * Math.PI) / 180); //随机的旋转
                ctx.fillText(text, -15 + 5, -15); //
                // ctx.translate(15*i+15,15)
                ctx.restore(); //清除
            }
            console.log(imgCode)
            return imgCode;
        },


        // 生成随机数
        randomNum(max, min) {
            return parseInt(Math.random() * (max - min) + min);
        },
        // 生成随机颜色
        randomColor(max, min) {
            const r = this.randomNum(max, min);
            const g = this.randomNum(max, min);
            const b = this.randomNum(max, min);
            return `rgb(${r},${g},${b})`;
        },
        rc(min, max) {
            const r = this.rn(min, max);
            const g = this.rn(min, max);
            const b = this.rn(min, max);
            return `rgb(${r},${g},${b})`;
        },
        rn(max, min) {
            return parseInt(Math.random() * (max - min)) + min;
        },
        refresh() {
            this.init();
        },
        canvasIdErrorCallback(e) {
            console.error(e.detail.errMsg);
        },

    }

}

</script>
