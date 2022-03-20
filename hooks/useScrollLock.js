import { useLayoutEffect } from 'react';

export const useScrollLock = (menuOpen) => {
	useLayoutEffect(() => {
		const original = window.getComputedStyle(document.body).overflow;

		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = original;
		};
	}, [menuOpen]);
};
