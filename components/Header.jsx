import styles from '@styles/Header.module.scss'
import { Context } from '@context/context'
import Dropdown from '@components/Dropdown'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuVariants = {
	hidden: {
		y: '-20px',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 120,
			damping: 20,
			duration: 0.15,
		},
	},
	exit: {
		y: '-20px',
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 120,
			damping: 20,
			duration: 0.15,
		},
	},
}

const Header = () => {
	const { theme, toggleTheme } = useContext(Context)
	const [isOpen, setIsOpen] = useState(false)
	const [accordionOpen, setAccordionOpen] = useState(false)
	const [opacity, setOpacity] = useState(0)
	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 55,
	}

	useEffect(() => {
		setTimeout(() => {
			setOpacity(1)
		}, 1)
	}, [])

	const mobileLinks = [
		<Link
			href='/#mainnet'
			onClick={() => {
				setIsOpen(!isOpen)
			}}
		>
			Projects
		</Link>,
		<div
			onClick={() => {
				setAccordionOpen(!accordionOpen)
			}}
			style={{ margin: '5px 0' }}
		>
			<p style={{ marginBottom: accordionOpen ? '10px' : '0' }}> Explorer </p>
			<div
				className={styles.burgerMenu__subMenu}
				style={{ maxHeight: accordionOpen ? '100px' : '0', overflow: 'hidden' }}
				onClick={() => {
					setIsOpen(!isOpen)
				}}
			>
				<a href='https://mainnet.itrocket.net/'>Mainnet</a>
				<a href='https://testnet.itrocket.net/'>Testnet</a>
			</div>
		</div>,
		<Link
			href='/services'
			onClick={() => {
				setIsOpen(!isOpen)
			}}
		>
			Services
		</Link>,
		<Link
			href='/#faq'
			onClick={() => {
				setIsOpen(!isOpen)
			}}
		>
			FAQ
		</Link>,
		<div
			className={styles.switch__wrapper}
			style={{ backgroundColor: theme === 'dark' ? '#222' : '#f6f6f7' }}
		>
			<span>Appearance:</span>
			<div
				className={styles.switch}
				data-ison={theme === 'dark'}
				onClick={toggleTheme}
			>
				<motion.div
					className={styles.handle}
					transition={spring}
					style={{
						backgroundColor: theme === 'light' ? '#fff' : '#000',
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						focusable='false'
						viewBox='0 0 24 24'
						className={styles.sun}
						data-v-59e4a403=''
						style={{ display: theme === 'light' ? 'block' : 'none' }}
					>
						<path d='M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z'></path>
						<path d='M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z'></path>
						<path d='M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z'></path>
						<path d='M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z'></path>
						<path d='M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z'></path>
						<path d='M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z'></path>
						<path d='M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z'></path>
						<path d='M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z'></path>
						<path d='M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z'></path>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						focusable='false'
						viewBox='0 0 24 24'
						className={styles.moon}
						data-v-59e4a403=''
						style={{
							display: theme === 'dark' ? 'block' : 'none',
						}}
					>
						<path d='M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z'></path>
					</svg>
				</motion.div>
			</div>
		</div>,
	]

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'visible'
	}, [isOpen])

	return (
		<>
			<header
				className={styles.header}
				style={{
					backgroundColor: theme === 'light' ? '#fefefe' : '#161616',
					opacity: opacity,
				}}
			>
				{
					<Link href='/'>
						<Image
							src='/logo.svg'
							alt='logo'
							width={175}
							height={50}
							className={styles.logo}
							style={{ display: theme === 'light' ? 'block' : 'none' }}
						/>

						<Image
							src='/darkLogo.svg'
							alt='logo'
							width={175}
							height={50}
							className={styles.logo}
							style={{ display: theme === 'dark' ? 'block' : 'none' }}
						/>
					</Link>
				}

				<div className={styles.headerNav__wrapper}>
					<nav className={styles.headerNav}>
						<ul className={theme === 'light' ? 'light' : 'dark'}>
							<li>
								<Dropdown type='projects' trigger='hover' />
							</li>
							<li>
								<Dropdown type='explorer' trigger='hover' />
							</li>
							<li>
								<Link href='/services' className={styles.link}>
									Services
								</Link>
							</li>

							<li>
								<Link href='/#faq' className={styles.link}>
									FAQ
								</Link>
							</li>
						</ul>
					</nav>

					<div
						className={styles.switch}
						data-ison={theme === 'dark'}
						onClick={toggleTheme}
						id={styles.desktopSwitch}
					>
						<motion.div
							className={styles.handle}
							transition={spring}
							style={{
								backgroundColor: theme === 'light' ? '#fff' : '#000',
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
								focusable='false'
								viewBox='0 0 24 24'
								className={styles.sun}
								data-v-59e4a403=''
								style={{ display: theme === 'light' ? 'block' : 'none' }}
							>
								<path d='M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z'></path>
								<path d='M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z'></path>
								<path d='M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z'></path>
								<path d='M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z'></path>
								<path d='M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z'></path>
								<path d='M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z'></path>
								<path d='M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z'></path>
								<path d='M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z'></path>
								<path d='M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z'></path>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
								focusable='false'
								viewBox='0 0 24 24'
								className={styles.moon}
								data-v-59e4a403=''
								style={{
									display: theme === 'dark' ? 'block' : 'none',
								}}
							>
								<path d='M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z'></path>
							</svg>
						</motion.div>
					</div>

					<button
						type='button'
						onClick={() => {
							setIsOpen(!isOpen)
							setAccordionOpen(false)
						}}
						className={styles.burgerButton}
					>
						<div
							className={styles.burgerIconWrapper}
							style={{ gap: isOpen ? '0' : '10px' }}
						>
							<span
								style={{
									backgroundColor: theme === 'light' ? '#000' : '#fff',
									transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
									width: isOpen ? '100%' : '90%',
								}}
							></span>
							<span
								style={{
									backgroundColor: theme === 'light' ? '#000' : '#fff',
									transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
								}}
							></span>
						</div>
					</button>
				</div>
			</header>

			<motion.div
				className={styles.burgerMenu}
				style={{
					backgroundColor: theme === 'dark' ? '#161616' : '#fff',
					display: isOpen ? 'flex' : 'none',
				}}
				initial='hidden'
				animate={isOpen ? 'visible' : 'hidden'}
				variants={menuVariants}
				transition={{ duration: 0.3, delay: 0.2 }}
			>
				<nav>
					<ul>
						{mobileLinks.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</nav>

				<div className='socials'>
					<a
						href='https://t.me/SEM3gs'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src='/icons/tg.svg' alt='telegram' width={30} height={30} />
					</a>

					<a
						href='https://twitter.com/SEM23404846'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/twitter.svg'
							alt='twitter'
							width={30}
							height={30}
						/>
					</a>
					<a
						href='https://github.com/itrocket-team'
						target='_blank'
						rel='noopener noreferrer'
						style={{ display: theme === 'light' ? 'block' : 'none' }}
					>
						<Image
							src='/icons/github.svg'
							alt='github'
							width={30}
							height={30}
						/>
					</a>
					<a
						href='https://github.com/itrocket-team'
						target='_blank'
						rel='noopener noreferrer'
						style={{ display: theme !== 'light' ? 'block' : 'none' }}
					>
						<Image
							src='/icons/github-white.svg'
							alt='github'
							width={30}
							height={30}
						/>
					</a>
				</div>
			</motion.div>
		</>
	)
}

export default Header
