import "./styles.scss";

import list_border from "#assets/svgs/list_border.svg";
import downloadsvg from "#assets/svgs/download.svg";

import { useEffect } from "react";

import { useRef } from "react";
import windowHandler from "../../hools/windowHandler";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const logolist = {
  logo: "https://ui-collections-1256331022.cos.ap-nanjing.myqcloud.com/icons/Logo.png",
};
const syringeUrl =
  "https://ui-collections-1256331022.cos.ap-nanjing.myqcloud.com/icons/bedtime_syringe.glb";
/**
 * 1920设计稿 20px字体
 */
const designWidth = 1920;
const base = 20;
const handleResize = (e) => {
  windowHandler.resizeFontsize(e, designWidth, base);
};
// 屏幕适配

let tempsize = base / designWidth;
let width = window.innerWidth;
let fontSize = tempsize * width;
// if (fontSize < 10) fontSize = 10;
document.documentElement.style.fontSize = fontSize + "px";
const Header01 = () => {
  // console.log("go");
  const syringe = useLoader(GLTFLoader, syringeUrl);
  let { scene, materials } = syringe;
  console.log({ syringe });
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {};
  }, []);
  return (
    <div ref={ref} className="header01">
      <div className="container">
        <div className="bottom_bcg"></div>
        <div className="center_bcg"></div>
        <div className="column_bcg"></div>
        <div className="topicon cursored">HEADERZ</div>
        <div className="logobar">
          <div className="left">
            <img src={logolist.logo} className="cursored" alt="" />
          </div>
          <div className="right">
            <span>free area here for anything</span>
          </div>
        </div>

        {/* menuOrlist trigger */}
        <div className="list_trigger ">
          <img src={list_border} className="list_t_icon cursored" alt="" />
        </div>

        {/* download icon */}
        <div className="download_texticon">
          <div className="inner cursored">
            <div className="text">DOWNLOAD LINK BELOW</div>
            <div className="icon">↓</div>
          </div>
        </div>
        <div className="threefiber">
          <Canvas>
            {/* <axesHelper /> */}
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <primitive
                object={syringe.scene}
                position={[-2.3, 4.5, 4.0]}
                scale={[1, 1, 1]}
                rotation={[
                  (Math.PI / 180) * 220,
                  (Math.PI / 180) * 10,
                  (Math.PI / 180) * 330,
                ]} //BUJI
                visible={true}
              ></primitive>
            </Float>

            {/* <Environment
              files={
                "https://campsoul-light-1256331022.cos.ap-nanjing.myqcloud.com/hrds/642fdafa8ca99.hdr"
              }
              background
              blur={0.8}
            /> */}
            {/* <OrbitControls /> */}
          </Canvas>
        </div>
        <div className="download_icon cursored">
          <img src={downloadsvg} alt="" />
        </div>

        <div className="textboard">
          Free <br />
          ui <br />
          kit <br />
        </div>
        <div className="textcenter">
          <div className="text1">20 FREE HEADERS</div>
          <div className="text2">
            to kick start your next web design project
          </div>
        </div>

        <div className="bottom_footer">
          <div className="inner">
            <div className="text">
              contactme <a href="##">discord</a> <a href="##">bilibili</a>{" "}
              <a href="##">github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header01;
