import '../styles/index.scss';

import { TimelineLite } from 'gsap/all';
import Splitting from "splitting";

// const plugins = [ CSSPlugin ];

Splitting();
var tl = new TimelineLite();
tl.staggerFrom('.word', 2, {y:-200, ease:Power4.easeOut},0.3, 0)
    // .staggerFrom('.line', 2, {width: 0, ease:Power4.easeOut},0.3, 0)
    .from('.linep1', 2, {x:500, ease:Power4.easeOut}, 0)
    .from('.linep2', 2, {x:-1400, ease:Power4.easeOut}, 0);