import '../styles/index.scss';

import { gsap } from 'gsap';
import lax from 'lax.js';
import Splitting from "splitting";

// const plugins = [ CSSPlugin ];

window.onload = function() {
	lax.setup(); // init

	const updateLax = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(updateLax);
	};

	window.requestAnimationFrame(updateLax);
};

Splitting();
var tl = gsap.timeline({ defaults: {duration: 2, ease:"power4.out"} });
tl.from('.word', {stagger: 0.3, y:-200}, 0)
    // .staggerFrom('.line', 2, {width: 0},0.3, 0)
    .from('.linep1', {x:500}, 0)
    .from('.linep2', {x:-1400}, 0);