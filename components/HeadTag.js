import Head from 'next/head';

const HeadTag = () => {
	return (
		<Head>
			<title>Psychopomp Comics</title>
			<meta
				name='description'
				content='Psychpompcomics.com is a web3 comic book company and home of The Vanth NFT collection, and the Seed of Cain comic series with accompanying NFT collection.'
			/>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
				key='apple-touch-icon'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
				key='favicon32'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
				key='favicon16'
			/>
			<link rel='manifest' href='/site.webmanifest' key='manifest' />
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
			<meta
				name='msapplication-TileColor'
				content='#000000'
				key='msapplication-TileColor'
			/>
			<meta name='theme-color' content='#000000' key='theme-color' />
		</Head>
	);
};

export default HeadTag;
