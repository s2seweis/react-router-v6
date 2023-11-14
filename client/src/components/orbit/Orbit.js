import React from 'react';
// import '../orbit/styles.scss';
import '../orbit/index.scss';
// ### React-Icons - 4
import { SiFirebase } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
// ###

// ### React-Icons - 3
import { SiCsswizardry } from 'react-icons/si';
import { BiLogoRedux } from 'react-icons/bi';
import { SiJquery } from 'react-icons/si';
// ###

// ### React-Icons - 2
import { SiGatsby } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { SiNextcloud } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
// ###

// ### React-Icons - 1
import { SiExpress } from 'react-icons/si';
import { SiWebpack } from 'react-icons/si';
import { AiOutlineLineChart } from 'react-icons/ai';
// ###

// ### React-Icons - 0
import { BsStackOverflow } from 'react-icons/bs';
// ###

const AnimationOrbit = () => {
  return (
    <div className="orbit">
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <i className="orbit-center__icon fa fa-code"><BsStackOverflow/></i>
        </li>
        <li>
          <ul className="ring-01">
            <li><i className="orbit-icon fa fa-git"><FaReact/></i></li>
            <li><i className="orbit-icon fa fa-free-code-camp"><BsGithub/></i></li>
            <li><i className="orbit-icon fa fa-meetup"><SiFirebase/></i></li>
            <li><i className="orbit-icon fa fa-codepen"><AiFillHtml5/></i></li>
          </ul>
        </li>
        <li>
          <ul className="ring-0">
            <li><i className="orbit-icon fa fa-git"><FaReact/></i></li>
            <li><i className="orbit-icon fa fa-free-code-camp"><BsGithub/></i></li>
            <li><i className="orbit-icon fa fa-meetup"><SiFirebase/></i></li>
            <li><i className="orbit-icon fa fa-codepen"><AiFillHtml5/></i></li>
          </ul>
        </li>

        <li>
          <ul className="ring-1">
            <li><i className="orbit-icon fa fa-podcast"><SiCsswizardry/></i></li>
            <li><i className="orbit-icon fa fa-css3"><BiLogoRedux/></i></li>
            <li><i className="orbit-icon fa fa-html5"><SiJquery/></i></li>
          </ul>
        </li>
        <li>
          <ul className="ring-2">
            <li><i className="orbit-icon fa fa-windows"><SiGatsby/></i></li>
            <li><i className="orbit-icon fa fa-safari"><FaVuejs/></i></li>
            <li><i className="orbit-icon fa fa-edge"><SiNextcloud/></i></li>
            <li><i className="orbit-icon fa fa-linux"><SiAngular/></i></li>
            <li><i className="orbit-icon fa fa-apple"><TbBrandNextjs/></i></li>
            <li><i className="orbit-icon fa fa-chrome"><BsFillBootstrapFill/></i></li>
            <li><i className="orbit-icon fa fa-android"><BiLogoTailwindCss/></i></li>
            <li><i className="orbit-icon fa fa-firefox">< FaNodeJs/></i></li>
          </ul>
        </li>
        <li>
          <ul className="ring-3">
            <li><i className="orbit-icon fa fa-coffee"><SiExpress/></i></li>
            <li><i className="orbit-icon fa fa-terminal"><SiWebpack/></i></li>
            <li><i className="orbit-icon fa fa-heart-o"><AiOutlineLineChart/></i></li>
          </ul>
        </li>

      </ul>
    </div>
  );
};

export default AnimationOrbit;
