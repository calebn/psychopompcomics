import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from '../components/themes/DefaultTheme';
import { GlobalStyle } from '../components/styles/GlobalStyles.styled';
import HeadTag from '../components/HeadTag';
import { Navbar } from '../components/Navbar';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import './_app.css';
import { useState } from 'react';

export default function App({ Component, pageProps, router }) {
	const [theme, setTheme] = useState('dark');
	const url = `${
		process.env.NODE_ENV == 'production'
			? 'https://psychopompcomics.com'
			: 'localhost'
	}${router.route}`;
	return (
		<>
			<HeadTag />
			<ThemeProvider
				theme={theme == 'light' ? themeLight : themeDark}
				setTheme={setTheme}
			>
				<GlobalStyle />
				<MotionConfig reducedMotion='user'>
					{process.env.NODE_ENV !== 'production' ? (
						<Navbar theme={theme} />
					) : null}
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} canonical={url} key={url} theme={theme} />
					</AnimatePresence>
				</MotionConfig>
			</ThemeProvider>
		</>
	);
}
