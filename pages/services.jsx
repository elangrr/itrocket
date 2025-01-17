import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@styles/Services.module.scss'
import projects from '@store/projects'
import { Context } from '@context/context'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

const services = () => {
	const { theme, toggleTheme } = useContext(Context)

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	let mainnetData = projects.mainnet
	let testnetData = projects.testnet

	return (
		<>
			<Head>
				<title>Services - ITRocket</title>
				<meta
					name='description'
					content='ITRocket 🚀 | Crypto Multipurpose Project'
				/>
			</Head>

			<Header />
			<div
				className={styles.mainColumn__wrapper}
				style={{
					width: '100%',
					padding: '10px 15px 5px 15px',
					marginTop: '60px',
				}}
			>
				<div className={styles.mainColumn}>
					<h1 style={{ paddingTop: '0px' }}>Services 🌟</h1>
					<p className={styles.desc}>
						Select a project from the list below to view installation guides and
						useful commands.
					</p>
					<br />
					<h2 id='mainnets' style={{ marginTop: '0', paddingTop: '5px' }}>
						Mainnets
					</h2>
					<div className={styles.mainnetColumn}>
						{Object.keys(mainnetData).map(item => {
							const name =
								mainnetData[item].name ||
								item.charAt(0).toUpperCase() + item.slice(1)
							const serviceURL = '/services/mainnet/' + name.toLowerCase()

							return (
								<Link href={serviceURL} className={styles.chain__wrapper}>
									<Image
										src={require('@public/mainnet/'.concat(
											mainnetData[item].imgUrl
										))}
										alt='project logo'
										width='25'
										height='25'
									/>
									{name}
								</Link>
							)
						})}
					</div>
					<br />
					<h2 style={{ marginTop: '0', paddingTop: '5px' }} id='testnets'>
						Testnets
					</h2>
					<div className={styles.testnetColumn}>
						{Object.keys(testnetData).map(item => {
							const name =
								testnetData[item].name ||
								item.charAt(0).toUpperCase() + item.slice(1)
							const serviceURL = '/services/testnet/' + name.toLowerCase()

							return (
								<Link href={serviceURL} className={styles.chain__wrapper}>
									<Image
										src={require('@public/testnet/'.concat(
											testnetData[item].imgUrl
										))}
										alt='project logo'
										width='25'
										height='25'
									/>
									{name}
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default services
