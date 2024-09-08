import React from "react";
import style from "../../css/Home/Feature.module.css";

const Features = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.col1}>
        
          {/* <img
            src="https://png.pngtree.com/png-clipart/20221221/original/pngtree-fire-illustration-design-vector-file-png-image_8790164.png"
            alt=""
          /> */}
          <img src="https://th.bing.com/th/id/R.22a6258987ab5ec5601566eae19a1d5d?rik=b94yijRVJFzS4w&riu=http%3a%2f%2fcr4.globalspec.com%2fPostImages%2f200807%2fflames_ani_1AEA7101-F0CF-99BD-3BF08E24290D4BD0.gif&ehk=yPri%2bvNpbK%2bd3TvMMJtuFdCd141lPnGQimdXAs0vDmI%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <h2>Roasting Meter</h2>
        </div>
        <div className={style.col1}>
            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/021/779/050/small_2x/illustration-of-lightning-strike-lightning-bolt-close-up-thunder-storm-background-generative-ai-png.png" alt="" /> */}
            <img src="https://media.tenor.com/YV0PPSituxsAAAAi/kstr-kochstrasse.gif" alt="" />
            <h2>Sledging Effect</h2>
        </div>
        <div className={`${style.col1} ${style.anon}`}>
            <img src="https://cdn.pixabay.com/photo/2013/07/13/12/36/woman-159954_960_720.png" alt="" />
            <h2>Totally Anonymous</h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
