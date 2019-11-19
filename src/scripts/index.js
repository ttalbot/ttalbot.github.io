import '../styles/index.scss';

import { gsap } from 'gsap';
import Splitting from "splitting";

// const plugins = [ CSSPlugin ];

Splitting();
var tl = gsap.timeline({ defaults: {duration: 2, ease:"power4.out"} });
tl.from('.word', {stagger: 0.3, y:-200}, 0)
    // .staggerFrom('.line', 2, {width: 0},0.3, 0)
    .from('.linep1', {x:500}, 0)
    .from('.linep2', {x:-1400}, 0);