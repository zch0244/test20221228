<!-- import { reactive, ref, onMounted, toRefs } from "vue"; -->
export default {
  setup() {
    const canvasRef = ref(null);
    const state = reactive({
      letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
      width: 120,
      height: 40,
      imgCode: "",
    });
    // 绘制验证码
    onMounted(() => {
      state.imgCode = drawCanvas();
    });
    // 生成随机数
    const randomNum = (max, min) => {
      return parseInt(Math.random() * (max - min) + min);
    };
    // 生成随机颜色
    const randomColor = (max, min) => {
      const r = randomNum(max, min);
      const g = randomNum(max, min);
      const b = randomNum(max, min);
      return `rgb(${r},${g},${b})`;
    };
    // 绘画
    const drawCanvas = () => {
      let ctx = canvasRef.value.getContext("2d");
      ctx.fillStyle = randomColor(180, 230); //填充颜色
      ctx.fillRect(0, 0, state.width, state.height); //填充位置
      let imgCode = "";
      // 随机产生字符串，并且随机旋转
      for (let i = 0; i < 4; i++) {
        const text = state.letter[randomNum(0, state.letter.length)];
        const deg = randomNum(-30, 30);
        imgCode += text;
        ctx.font = randomNum(18, 40) + "px Simhei"; //填充字体
        ctx.textBaseline = "top";
        ctx.fillStyle = randomColor(80, 150);
        ctx.save(); //保存
        ctx.translate(30 * i + 15, 15);
        ctx.rotate((deg * Math.PI) / 180); //随机的旋转
        ctx.fillText(text, -15 + 5, -15); //
        ctx.restore(); //清除
      }
      return imgCode;
    };
    // 点击验证码更换
    const clickCanvas = () => {
      state.imgCode = drawCanvas();
    };
    return {
      ...toRefs(state),
      canvasRef,
      drawCanvas,
      clickCanvas,
    };
  },
};
