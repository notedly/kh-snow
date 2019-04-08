import { LinkedList, Node } from "../common/LinkedList";
import { Common } from "../common/Common";
import { Particle } from "./particle";
// import { Controller } from "./controller";

class SnowContainer {
  constructor() {
    // super();
    let ctx = document.createElement("canvas").getContext("2d");
    let { canvas } = ctx;

    let windVariance = 0;

    this.bln = false;
    this.stopBln = false;
    this.props = {
      ctx: ctx,
      len: 100,
      w: (canvas.width = window.innerWidth),
      h: (canvas.height = window.innerHeight),
      wind: (canvas.height * windVariance) / 2,
      windVariance: windVariance,
      speed: 1,
      particles: new LinkedList()
    };

    window.addEventListener("resize", () => {
      let { props } = this;
      props.w = canvas.width = window.innerWidth;
      props.h = canvas.height = window.innerHeight;
    });
  } // end of constructor

  add = elem => {
    elem.appendChild(this.props.ctx.canvas);
  };

  make = () => {
    let { props } = this;
    let i = 0,
      len = props.len;
    for (; i < len; i += 1) {
      props.particles.addToHead(new Particle(i, props));
    }
  };

  draw = () => {
    if (this.bln) return;
    this.bln = true;
    this.stopBln = false;
    this.move();
  };

  move = () => {
    let { props } = this;
    props.ctx.clearRect(0, 0, props.w, props.h);

    let crntSnow = props.particles.head;

    while (crntSnow.next !== null) {
      let snow = crntSnow.value;

      snow.rotate += Math.random() * 0.045;
      snow.x += snow.size * 0.1 * snow.duration + snow.windVariance;
      snow.y += snow.size * snow.duration;

      if (snow.y > props.h) {
        if (!this.stopBln) {
          snow.x = Common.rdm(
            -Math.abs(snow.wind),
            snow.w + Math.abs(snow.wind)
          );
          let map = new Map();
          map.set("fallingDown", snow.idx);
          snow.update(map);
        }
      }
      snow.draw();
      crntSnow = crntSnow.next;
    }
    if (this.bln) {
      requestAnimationFrame(this.move);
    }
  };

  changeVariance = num => {
    let { props } = this;
    let crntSnow = props.particles.head;
    while (crntSnow.next !== null) {
      let snow = crntSnow.value;
      let map = new Map();
      map.set("windVariance", +num);
      snow.update(map);
      crntSnow = crntSnow.next;
    }

  };

  changeSpeed = num => {
    let { props } = this;
    let crntSnow = props.particles.head;
    while (crntSnow.next !== null) {
      let snow = crntSnow.value;
      let map = new Map();
      map.set("speed", +num);
      snow.update(map);
      crntSnow = crntSnow.next;
    }
  };

  changeValue = (valueName, num) => {

    let { props } = this;
    let crntSnow = props.particles.head;
    while (crntSnow.next !== null) {
      let snow = crntSnow.value;
      let map = new Map();
      map.set(valueName, +num);
      snow.update(map);
      crntSnow = crntSnow.next;
    }

  }; // end of changeValue

  stop = () => {
    this.stopBln = true;
  }; // end of stop

  clear = () => {
    let { props } = this;
    this.bln = false;
    this.stopBln = false;
    setTimeout(() => {
      props.ctx.clearRect(0, 0, props.w, props.h);
    }, 10);
  }; // end of clear

  delete = () => {
    let { particles } = this.props;
    let crntSnow = particles.head;
    while (crntSnow.next !== null) {
      if (crntSnow.value.idx == 100) {
        console.log(crntSnow);
      }
      if (crntSnow.value.idx % 2 === 0) {
        // 2-> 정적인 것을 동적으로 변경
        particles.removeAt(crntSnow.value);
      }
      crntSnow = crntSnow.next;
    }
  }; // end of delete

  addSnow = num => {
    let { props } = this;
    let i = props.len + 1,
      len = props.len + num;
    for (; i < len; i += 1) {
      props.particles.addToHead(new Particle(i, props));
    }
    props.len = props.len + num;
  }; // end of addSnow
}

export default SnowContainer ;