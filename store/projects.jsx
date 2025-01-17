let projects = {
	mainnet: {
		arkhadian: {
			chainID: 'arkh',
			link: 'https://mainnet.itrocket.net/arkhadian/staking',
			delegate:
				'https://mainnet.itrocket.net/arkhadian/staking/arkhvaloper18u4es3gnjerdqw3u96pjdq6ukclysh3f9wfmqe',
			imgUrl: 'arkhadian.jpg',
			website: 'https://www.arkhadian.com/',
			offValDoc: '',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/arkhadian',
			binHome: '/home/arkhadian/go/bin/arkhd',
			snapMaxSize: '10',
			port: '27',
			VAR: 'ARKH',
			denom: 'arkh',
			ecosystem: 'cosmos',
			bin: 'arkhd',
			path: '.arkh',
			peerID: 'f3c163dc9c2649fe203bd87afd101869952e685a',
			seedID: '30d97270c31601c38e5b89c52fca985901cd8c20',
			explorer: '',
			peerPort: '27656',
			seedPort: '27656',
			installBin:
				'cd $HOME\nrm -rf arkh-blockchain\ngit clone https://github.com/vincadian/arkh-blockchain\ncd arkh-blockchain\ngit checkout v2.0.0\ngo build -o arkhd ./cmd/arkhd\nmv arkhd $HOME/go/bin',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		nym: {
			chainID: '',
			name: 'NYM',
			link: 'https://mixnet.explorers.guru/',
			imgUrl: 'nym.png',
			delegate:
				'https://mixnet.explorers.guru/mixnode/6L1geN6S9n7SMvgajjptj6p96sCSMfxWmbR8dJ3G3f5',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		nois: {
			chainID: 'nois-1',
			link: 'https://mainnet.itrocket.net/nois/staking',
			imgUrl: 'nois.png',
			delegate:
				'https://mainnet.itrocket.net/nois/staking/noisvaloper19yul78yu9jzay9afsyjgmv0pk0k5rl80sa6vlx',
			desc: 'Brings random beacons to Cosmos blockchains without compromising security or usability by leveraging drand and IBC.',
			website: 'https://nois.network/',
			offValDoc: 'https://docs2.nois.network/mainnet.html',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/nois',
			binHome: '/home/nois/go/bin/noisd',
			snapMaxSize: '10',
			port: '36',
			VAR: 'NOIS',
			denom: 'unois',
			ecosystem: 'cosmos',
			bin: 'noisd',
			path: '.noisd',
			peerID: '22ec344512fc679e16eb358284e0d1eaa4291194',
			seedID: 'c8db99691545545402a1c45fa897f3cb1a05aea6',
			explorer: '',
			peerPort: '36656',
			seedPort: '36656',
			updHeight: '',
			installBin:
				'cd $HOME\nrm -rf $HOME/noisd\ngit clone https://github.com/noislabs/noisd\ncd noisd\ngit checkout v1.0.0\nmake install',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		terp: {
			chainID: 'morocco-1',
			link: 'https://mainnet.itrocket.net/terp/staking',
			imgUrl: 'terp.svg',
			delegate:
				'https://mainnet.itrocket.net/terp/staking/terpvaloper1u9nx0mxq30h6dq99w6ptju09pz3m32jxz4672f',
			desc: 'Decentralized Infrastructure for the Cannabis Community',
			website: 'https://terp.network/',
			offValDoc: 'https://github.com/terpnetwork/mainnet/tree/main/morocco-1',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/terp',
			binHome: '/home/terp/go/bin/terpd',
			snapMaxSize: '10',
			port: '13',
			VAR: 'TERP',
			denom: 'uterp',
			ecosystem: 'cosmos',
			bin: 'terpd',
			path: '.terp',
			peerID: 'a81dc3bf1bb1c3837b768eeb82659eecc971890b',
			seedID: 'd8256642afae77264bcce1631d51233a9d00249b',
			explorer: '',
			peerPort: '13656',
			seedPort: '13656',
			updHeight: '',
			installBin:
				'cd $HOME\nrm -rf ~/terp-core\ngit clone https://github.com/terpnetwork/terp-core.git\ncd terp-core\ngit checkout v1.0.0\nmake install',
			goVersion: '1.19.3',
			gas: '--gas 210000 --fees 200000uthiol',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		forta: {
			link: 'https://explorer.forta.network/',
			imgUrl: 'forta.jpg',
			delegate: 'https://app.forta.network/nodePool/272/',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		quicksilver: {
			chainID: 'quicksilver-2',
			link: 'https://mainnet.itrocket.net/quicksilver/staking',
			delegate:
				'https://wallet.keplr.app/chains/quicksilver?modal=validator&validator_address=quickvaloper1jlh8cttv96kyxu0j0r2ppv4sga6ju4uzxa3c2x&chain=quicksilver-2',
			imgUrl: 'quicksilver.jpg',
			desc: 'Quicksilver is a permissionless, sovereign Cosmos SDK zone providing liquid staking for the entire Cosmos Ecosystem.',
			website: 'https://quicksilver.zone/',
			offValDoc: 'https://github.com/ingenuity-build/mainnet',
			hardware: '4 Cores, 16GB RAM, 500GB of storage (NVME)',
			prHome: '/home/quick',
			binHome: '/home/quick/go/bin/quicksilverd',
			snapMaxSize: '10',
			port: '15',
			VAR: 'QUICKSILVER',
			denom: 'uqck',
			ecosystem: 'cosmos',
			bin: 'quicksilverd',
			path: '.quicksilverd',
			peerID: '4559f4c24037bfad4791b2a6d6d5c769a16cad53',
			seedID: '3b3c0037090a1b5ef9f7ac58ff79f33dffdd188a',
			explorer: '',
			peerPort: '15656',
			seedPort: '15656',
			installBin:
				'cd $HOME\nrm -rf ~/quicksilver\ngit clone https://github.com/ingenuity-build/quicksilver\ncd quicksilver\ngit fetch\ngit checkout v1.2.9-hotfix.0\nmake install',
			updHeight: '1279200',
			newInstallBin:
				'cd $HOME\nrm -rf ~/quicksilver\ngit clone https://github.com/ingenuity-build/quicksilver\ncd quicksilver\ngit fetch\ngit checkout v1.2.9-hotfix.0\nmake install',
			goVersion: '1.19.3',
			gas: '',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		realio: {
			chainID: 'realionetwork_3301-1',
			link: 'https://mainnet.itrocket.net/realio/staking',
			delegate:
				'https://mainnet.itrocket.net/realio/staking/realiovaloper1479d25uzwf529kxh9dxme64xlv89c4un676emc',
			imgUrl: 'realio.png',
			desc: 'The Future of Private Equity is Digital',
			website: 'https://www.realio.fund/',
			offValDoc:
				'https://github.com/realiotech/mainnet/tree/main/realionetwork_3301-1',
			hardware: '4 Cores, 8GB RAM, 240GB of storage (NVME)',
			prHome: '/home/realio',
			binHome: '/home/realio/go/bin/realio-networkd',
			snapMaxSize: '10',
			port: '23',
			VAR: 'REALIO',
			denom: 'ario',
			ecosystem: 'cosmos',
			bin: 'realio-networkd',
			path: '.realio-network',
			peerID: '2815cc1437461f808a7f022c0df679fa27918dbc',
			seedID: 'a5039f260cd848facfbe7fbe62bf3e8adfce9c98',
			explorer: '',
			peerPort: '23656',
			seedPort: '23656',
			installBin:
				'cd $HOME\nrm -rf realio-network\ngit clone https://github.com/realiotech/realio-network.git\ncd realio-network\ngit checkout tags/v0.8.0-rc4\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		uptick: {
			chainID: 'uptick_117-1',
			link: 'https://mainnet.itrocket.net/uptick/staking',
			delegate:
				'https://mainnet.itrocket.net/uptick/staking/uptickvaloper1dx5sfmg4ascplvmkn39stq3rgk0c3vhpv6ysd0',
			fav: true,
			imgUrl: 'uptick.jpg',
			desc: 'The Business Grade Multi-Chain NFT Infrastructure for Web 3.0',
			website: 'https://uptick.network/',
			offValDoc: 'https://docs.uptick.network/mainnet/',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/uptick',
			binHome: '/home/uptick/go/bin/uptickd',
			snapMaxSize: '10',
			port: '35',
			VAR: 'UPTICK',
			denom: 'auptick',
			ecosystem: 'cosmos',
			bin: 'uptickd',
			path: '.uptickd',
			peerID: 'dd482d080820020b144ca2efaf128d78261dea82',
			seedID: 'e71bae28852a0b603f7360ec17fe91e7f065f324',
			explorer: '',
			peerPort: '10656',
			seedPort: '35656',
			installBin:
				'cd $HOME\nrm -rf uptick\ngit clone https://github.com/UptickNetwork/uptick.git\ncd uptick\ngit checkout v0.2.4\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas 250000 --fees 3000000000000000auptick',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
	},
	testnet: {
		andromeda: {
			chainID: 'galileo-3',
			link: 'https://testnet.itrocket.net/andromeda/staking',
			imgUrl: 'andromeda.svg',
			desc: 'Andromeda is an application platform layer that connects all public blockchains in the Cosmos ecosystem. Through our vast library of no-code smart contracts, users can harness the power of web3.',
			website: 'https://andromedaprotocol.io/',
			offValDoc: '',
			hardware: '16 Cores, 32GB RAM, 500GB of storage (NVME)',
			prHome: '/home/andromeda',
			binHome: '/home/andromeda/go/bin/andromedad',
			snapMaxSize: '10',
			port: '30',
			VAR: 'ANDROMEDA',
			denom: 'uandr',
			ecosystem: 'cosmos',
			bin: 'andromedad',
			path: '.andromedad',
			peerID: '239eeebb9c4c32f5ca91b22322fed2486aee01b5',
			seedID: '5cfce64114f98e29878567bdd1adbebe18670fc6',
			explorer: '',
			peerPort: '29656',
			seedPort: '30656',
			installBin:
				'cd $HOME\nrm -rf andromedad\ngit clone https://github.com/andromedaprotocol/andromedad.git\ncd andromedad\ngit checkout galileo-3-v1.1.0-beta1\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		axelar: {
			chainID: 'axelar-testnet-lisbon-3',
			link: 'https://testnet.itrocket.net/axelar/staking',
			imgUrl: 'axelar.jpg',
			desc: 'Axelar delivers secure cross-chain communication for Web3. Its infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.',
			website: 'https://axelar.network/',
			offValDoc: 'https://docs.axelar.dev/validator/setup/manual',
			hardware: '16 Cores, 16GB RAM, 1,5TB of storage (NVME)',
			prHome: '/home/axelar',
			binHome: '/usr/bin/axelard',
			snapMaxSize: '10',
			port: '24',
			VAR: 'AXELAR',
			denom: 'uaxl',
			ecosystem: 'cosmos',
			bin: 'axelard',
			path: '.axelar',
			peerID: '01d8469a25123235326383f321479a0a55d63668',
			seedID: 'c1717c72e7cd2fc72c34e427e46c311f0568ffb1',
			explorer: 'https://testnet.axelarscan.io/validators',
			peerPort: '24656',
			seedPort: '24656',
			installBin:
				'AXELARD_RELEASE=v0.32.2\ncd $HOME\nrm -rf binaries\nmkdir binaries && cd binaries\nwget https://github.com/axelarnetwork/axelar-core/releases/download/$AXELARD_RELEASE/axelard-linux-amd64-$AXELARD_RELEASE\nmv axelard-linux-amd64-$AXELARD_RELEASE axelard\nchmod +x *\nsudo mv * /usr/bin/',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		cardchain: {
			chainID: 'Testnet3',
			link: 'https://testnet.itrocket.net/cardchain/staking',
			imgUrl: 'cardchain.svg',
			cardchain: true,
			desc: 'On Crowd Control you can create and design your own trading cards. Your Cards become a part of the game for everyone.',
			website: 'https://crowdcontrol.network/',
			offValDoc: 'https://github.com/DecentralCardGame/Testnet',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/cardchain',
			binHome: '/usr/local/bin/Cardchaind',
			snapMaxSize: '10',
			port: '31',
			VAR: 'CARDCHAIN',
			denom: 'ubpf',
			ecosystem: 'cosmos',
			bin: 'Cardchaind',
			path: '.Cardchain',
			peerID: '99dcfbba34316285fceea8feb0b644c4dc67c53b',
			seedID: '947aa14a9e6722df948d46b9e3ff24dd72920257',
			explorer: '',
			peerPort: '31656',
			seedPort: '31656',
			installBin:
				'cd $HOME\nwget https://github.com/DecentralCardGame/Cardchain/releases/download/v0.81/CARDCHAIN_latest_linux_amd64.tar.gz\ntar xzf CARDCHAIN_latest_linux_amd64.tar.gz\nchmod 775 Cardchaind\nsudo mv Cardchaind /usr/local/bin\nsudo rm CARDCHAIN_latest_linux_amd64.tar.gz',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		cascadia: {
			chainID: 'cascadia_6102-1',
			link: 'https://testnet.itrocket.net/cascadia/staking',
			imgUrl: 'cascadia.png',
			desc: '',
			website: 'https://www.cascadia.foundation/',
			offValDoc: 'https://cascadia.gitbook.io/gitbook/network/configuration',
			hardware: '4 Cores, 8GB RAM, 300GB of storage (NVME)',
			prHome: '/home/cascadia',
			binHome: '/home/cascadia/go/bin/cascadiad',
			snapMaxSize: '10',
			port: '40',
			VAR: 'CASCADIA',
			denom: 'aCC',
			ecosystem: 'cosmos',
			bin: 'cascadiad',
			path: '.cascadiad',
			peerID: 'c6e3921222655345d8296353994e917f13a1b4a1',
			seedID: '42c4a78f39935df1c20b51c4b0d0a21db8f01c88',
			explorer: '',
			peerPort: '40656',
			seedPort: '40656',
			installBin:
				'cd $HOME\nrm -rf cascadia\ngit clone https://github.com/cascadiafoundation/cascadia\ncd cascadia\ngit checkout v0.1.1\nmake install',
			updHeight: '0',
			newInstallBin: `sudo systemctl stop cascadiad
cd $HOME
curl -L https://github.com/CascadiaFoundation/cascadia/releases/download/v0.1.2/cascadiad-v0.1.2-linux-amd64 -o cascadiad
chmod +x cascadiad
sudo mv cascadiad $(which cascadiad)`,
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5 --gas-prices=7aCC',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.025',
		},
		celestia: {
			chainID: 'blockspacerace-0',
			link: 'https://testnet.itrocket.net/celestia/staking',
			imgUrl: 'celestia.png',
			fav: true,
			desc: 'Celestia is the first modular blockchain network. It is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead.',
			website: 'https://celestia.org/',
			offValDoc: 'https://docs.celestia.org/nodes/overview/',
			hardware: '4 Cores, 8GB RAM, 250GB of storage (NVME)',
			prHome: '/home/celestia',
			binHome: '/home/celestia/go/bin/celestia-appd',
			snapMaxSize: '10',
			port: '11',
			VAR: 'CELESTIA',
			denom: 'utia',
			ecosystem: 'cosmos',
			bin: 'celestia-appd',
			path: '.celestia-app',
			peerID: '193acd7bf7049b425d7b95c24e02250fce8ad45c',
			seedID: 'fedea9723696360d429a23792225594779cc7cd7',
			explorer: '',
			peerPort: '11656',
			seedPort: '11656',
			installBin:
				'cd $HOME \nrm -rf celestia-app \ngit clone https://github.com/celestiaorg/celestia-app.git \ncd celestia-app/ \nAPP_VERSION=v0.13.2 \ngit checkout tags/$APP_VERSION -b $APP_VERSION \nmake install\ncd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.20.1',
			gas: '',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		defund: {
			chainID: 'orbit-alpha-1',
			link: 'https://testnet.itrocket.net/defund/staking',
			imgUrl: 'defund.png',
			desc: 'DeFund is an L1 blockchain built for building decentralized permissionless, on-chain trading strategies that are packaged into a dETF (decentralized exchange-traded fund) token, tradable within any ecosystem or CEX.',
			website: 'https://www.defund.app/',
			offValDoc:
				'https://github.com/defund-labs/testnet/blob/main/defund-private-4/validators.md',
			hardware: '4 Cores, 16GB RAM, 200GB of storage (NVME)',
			prHome: '/home/defund',
			binHome: '/home/defund/go/bin/defundd',
			snapMaxSize: '10',
			port: '18',
			VAR: 'DEFUND',
			denom: 'ufetf',
			ecosystem: 'cosmos',
			bin: 'defundd',
			path: '.defund',
			peerID: '6ebe0fd3fd0990feec2dd1e09fe06b766b6b67d0',
			seedID: '74e6425e7ec76e6eaef92643b6181c42d5b8a3b8',
			explorer: '',
			peerPort: '18656',
			seedPort: '18656',
			installBin:
				'cd $HOME\nrm -rf defund\ngit clone https://github.com/defund-labs/defund\ncd defund\ngit checkout v0.2.6\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--fees 5000ufetf',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		dymension: {
			chainID: '35-C',
			link: 'https://testnet.itrocket.net/dymension/staking',
			imgUrl: 'dymension.png',
			desc: 'Dymension is a home for easily deployable and lightning fast app-chains, called RollApps.',
			fav: true,
			website: 'https://dymension.xyz/',
			offValDoc: 'https://docs.dymension.xyz/validate/dymension-hub/overview/',
			hardware: '4 Cores, 16GB RAM, 500GB of storage (NVME)',
			prHome: '/home/dymension',
			binHome: '/home/dymension/go/bin/dymd',
			snapMaxSize: '10',
			port: '32',
			VAR: 'DYMENSION',
			denom: 'udym',
			ecosystem: 'cosmos',
			bin: 'dymd',
			path: '.dymension',
			peerID: 'adf394846dc942b1fd03f6e310eda60b5eda7848',
			seedID: 'c26dc8486e8c4817e154812462993ce562cda221',
			explorer: '',
			peerPort: '32656',
			seedPort: '32656',
			installBin:
				'cd $HOME\nrm -rf dymension\ngit clone https://github.com/dymensionxyz/dymension.git --branch v0.2.0-beta\ncd dymension\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		elys: {
			chainID: 'elystestnet-1',
			link: 'https://testnet.itrocket.net/elys/staking',
			imgUrl: 'elys.jpg',
			desc: '',
			website: 'https://elys.network/',
			offValDoc: 'https://github.com/elys-network/elys',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/elys',
			binHome: '/home/elys/go/bin/elysd',
			snapMaxSize: '10',
			port: '38',
			VAR: 'ELYS',
			denom: 'uelys',
			ecosystem: 'cosmos',
			bin: 'elysd',
			path: '.elys',
			peerID: '0977dd5475e303c99b66eaacab53c8cc28e49b05',
			seedID: 'ae7191b2b922c6a59456588c3a262df518b0d130',
			explorer: '',
			peerPort: '38656',
			seedPort: '38656',
			installBin:
				'cd $HOME\nrm -rf elys\ngit clone https://github.com/elys-network/elys.git\ncd elys\ngit checkout v0.5.4\nmake install',
			updHeight: '0',
			newInstallBin: `sudo systemctl stop elysd
cd $HOME/elys
git fetch --all
git checkout v0.5.4
make install
elysd version --long | grep -e commit -e version`,
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		humans: {
			chainID: 'humans_3000-23',
			link: 'https://testnet.itrocket.net/humans/staking',
			imgUrl: 'humans.jpg',
			fav: true,
			desc: 'We are creating a scalable blockchain providing the economy of the heart driven AI, placing the humans at the facefront of the AI evolution.',
			website: 'https://humans.ai/',
			offValDoc:
				'https://github.com/humansdotai/docs-humans/blob/master/run-nodes/testnet/joining-testnet.md',
			hardware: '4 Cores, 8GB RAM, 250GB of storage (NVME)',
			prHome: '/home/humans',
			binHome: '/home/humans/go/bin/humansd',
			snapMaxSize: '10',
			port: '17',
			VAR: 'HUMANS',
			denom: 'aheart',
			ecosystem: 'cosmos',
			bin: 'humansd',
			path: '.humansd',
			peerID: 'b99df5397a6104fac055f21195f1fb25b77f5704',
			seedID: '6ce9a9acc23594ec75516617647286fe546f83ca',
			explorer: '',
			peerPort: '17656',
			seedPort: '17656',
			installBin:
				'cd $HOME\nrm -rf ~/humans\ngit clone https://github.com/humansdotai/humans\ncd humans\ngit checkout tags/v0.2.1\nmake install',
			updHeight: '0',
			newInstallBin: `sudo systemctl stop humansd
cd $HOME
rm -rf ~/humans
git clone https://github.com/humansdotai/humans
cd humans
git checkout tags/v0.2.1
make install
humansd tendermint unsafe-reset-all --home $HOME/.humansd --keep-addr-book
wget -O $HOME/.humansd/config/genesis.json "https://raw.githubusercontent.com/humansdotai/testnets/master/friction/mission-2/genesis-m2-p2.json"
humansd config chain-id humans_3000-23`,
			goVersion: '1.20.1',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		kyve: {
			chainID: 'kaon-1',
			link: 'https://testnet.itrocket.net/kyve/staking',
			imgUrl: 'kyve.svg',
			desc: 'KYVE Network is revolutionizing customized access to on- and off-chain data by providing fast and easy tooling for decentralized data validation, immutability, and retrieval.',
			website: 'https://www.kyve.network/',
			offValDoc: 'https://github.com/KYVENetwork/networks/tree/main/kaon-1',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/kyve',
			binHome: '/home/kyve/go/bin/kyved',
			snapMaxSize: '10',
			port: '28',
			VAR: 'KYVE',
			denom: 'tkyve',
			ecosystem: 'cosmos',
			bin: 'kyved',
			path: '.kyve',
			peerID: '664e06d2d6110c5ba93f8ecfee66f150bad981bf',
			seedID: 'de7865a2a4936fd4bb00861ed887f219d8dd73d7',
			explorer: '',
			peerPort: '28656',
			seedPort: '28656',
			installBin:
				'cd $HOME\nwget https://github.com/KYVENetwork/chain/releases/download/v1.0.0-rc1/kyved_linux_amd64.tar.gz\ntar -xvzf kyved_linux_amd64.tar.gz\nchmod +x ./kyved\nmv kyved $HOME/go/bin/\nrm kyved_linux_amd64.tar.gz',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5 --fees 10000tkyve',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		lava: {
			chainID: 'lava-testnet-1',
			link: 'https://testnet.itrocket.net/lava/staking',
			imgUrl: 'lava.svg',
			fav: true,
			desc: 'Lava pairs Providers with Applications for scalable, private and uncensored access to Web3.',
			website: 'https://lavanet.xyz/',
			offValDoc: 'https://docs.lavanet.xyz/testnet',
			hardware: '4 Cores, 8GB RAM, 100GB of storage (NVME)',
			prHome: '/home/lava',
			binHome: '/home/lava/go/bin/lavad',
			snapMaxSize: '10',
			port: '20',
			VAR: 'LAVA',
			denom: 'ulava',
			ecosystem: 'cosmos',
			bin: 'lavad',
			path: '.lava',
			peerID: '3693ea5a8a9c0590440a7d6c9a98a022ce3b2455',
			seedID: 'eb7832932626c1c636d16e0beb49e0e4498fbd5e',
			explorer: '',
			peerPort: '20656',
			seedPort: '20656',
			installBin:
				'cd $HOME\nrm -rf $HOME/lava\ngit clone https://github.com/lavanet/lava.git\ncd lava\ngit checkout v0.10.1\nmake install',
			updHeight: '184620',
			newInstallBin:
				'cd $HOME\nrm -rf $HOME/lava\ngit clone https://github.com/lavanet/lava.git\ncd lava\ngit checkout v0.10.1\nmake install',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		mars: {
			chainID: 'ares-1',
			link: 'https://testnet.itrocket.net/mars/staking',
			imgUrl: 'mars.jpg',
			desc: 'Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.',
			website: 'https://marsprotocol.io/',
			offValDoc:
				'https://validatordocs.marsprotocol.io/TfYZfjcaUzFmiAkWDf7P/infrastructure/validators',
			hardware: '8 Cores, 32GB RAM, 2TB of storage (NVME)',
			prHome: '/home/mars',
			binHome: '/home/mars/go/bin/marsd',
			snapMaxSize: '10',
			port: '22',
			VAR: 'MARS',
			denom: 'umars',
			ecosystem: 'cosmos',
			bin: 'marsd',
			path: '.mars',
			peerID: '56ff8e129a481f186e4ac066f3a38bac179bd8e2',
			seedID: 'a841d3e526089172867a73b709fd14e1d9fb87bd',
			explorer: '',
			peerPort: '22656',
			seedPort: '22656',
			installBin:
				'cd $HOME\nrm -rf hub\ngit clone https://github.com/mars-protocol/hub.git\ncd hub\ngit checkout v2.0.0-rc0\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		ojo: {
			chainID: 'ojo-devnet',
			link: 'https://testnet.itrocket.net/ojo/staking',
			imgUrl: 'ojo.png',
			desc: 'Give your chain access to realtime, decentralized oracles, and stop worrying about your data.',
			website: 'https://ojo.network/',
			offValDoc:
				'https://docs.ojo.network/sauron-testnet/joining-as-a-validator',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/ojo',
			binHome: '/home/ojo/go/bin/ojod',
			snapMaxSize: '10',
			port: '12',
			VAR: 'OJO',
			denom: 'uojo',
			ecosystem: 'cosmos',
			bin: 'ojod',
			path: '.ojo',
			peerID: 'd2489830a5e91ec214edfc54756512e4f89f2609',
			seedID: '7186f24ace7f4f2606f56f750c2684d387dc39ac',
			explorer: '',
			peerPort: '12656',
			seedPort: '12656',
			installBin:
				'cd $HOME\nrm -rf ojo\ngit clone https://github.com/ojo-network/ojo.git\ncd ojo\ngit checkout v0.1.2\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		nois: {
			chainID: 'nois-testnet-005',
			link: 'https://testnet.itrocket.net/nois/staking',
			imgUrl: 'nois.png',
			desc: 'Brings random beacons to Cosmos blockchains without compromising security or usability by leveraging drand and IBC.',
			website: 'https://nois.network/',
			offValDoc: 'https://docs.nois.network/use-cases/for-validators',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/nois',
			binHome: '/home/nois/go/bin/noisd',
			snapMaxSize: '10',
			port: '21',
			VAR: 'NOIS',
			denom: 'unois',
			ecosystem: 'cosmos',
			bin: 'noisd',
			path: '.noisd',
			peerID: '5ecd40831e453845587cbd03534e68a7b9fc3576',
			seedID: 'da81dd66bca4bba509163dbd06b4a6b2e05c2e12',
			explorer: '',
			peerPort: '21656',
			seedPort: '21656',
			installBin:
				'cd $HOME\nrm -rf $HOME/noisd\ngit clone https://github.com/noislabs/noisd.git\ncd noisd\ngit checkout v0.6.0\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		quasar: {
			chainID: 'qsr-questnet-04',
			link: 'https://testnet.itrocket.net/quasar/staking',
			imgUrl: 'quasar.webp',
			fav: true,
			desc: 'Expand your horizon beyond bridges and simplify the process of building complex DeFi strategies.',
			website: 'https://www.quasar.fi/',
			offValDoc:
				'https://github.com/quasar-finance/questnet/blob/main/docs/Get_quasar.md',
			hardware: '4 Cores, 16GB RAM, 500GB of storage (NVME)',
			prHome: '/home/quasar',
			binHome: '/home/quasar/go/bin/quasarnoded',
			snapMaxSize: '10',
			port: '17',
			VAR: 'QUASAR',
			denom: 'uqsr',
			ecosystem: 'cosmos',
			bin: 'quasarnoded',
			path: '.quasarnode',
			peerID: '6ccfdbe91c06698f0a66cf95a249dbcd88b5aaa4',
			seedID: 'eeb4f094eaa62841b4a9a73f0560d6aa1fa87482',
			explorer: '',
			peerPort: '17656',
			seedPort: '29656',
			installBin:
				'cd $HOME\nwget https://github.com/quasar-finance/binary-release/raw/main/v0.0.2-alpha-11/quasarnoded-linux-amd64\nchmod +x quasarnoded-linux-amd64\nsudo mv quasarnoded-linux-amd64 $HOME/go/bin/quasarnoded',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		quicksilver: {
			chainID: 'innuendo-5',
			link: 'https://testnet.itrocket.net/quicksilver/staking',
			delegate:
				'https://wallet.keplr.app/chains/quicksilver?modal=validator&validator_address=quickvaloper1jlh8cttv96kyxu0j0r2ppv4sga6ju4uzxa3c2x&chain=quicksilver-2',
			imgUrl: 'quicksilver.jpg',
			desc: 'Quicksilver is a permissionless, sovereign Cosmos SDK zone providing liquid staking for the entire Cosmos Ecosystem.',
			website: 'https://quicksilver.zone/',
			offValDoc:
				'https://github.com/ingenuity-build/testnets/tree/main/innuendo',
			hardware: '4 Cores, 16GB RAM, 500GB of storage (NVME)',
			prHome: '/home/quick',
			binHome: '/home/quick/go/bin/quicksilverd',
			snapMaxSize: '10',
			port: '37',
			VAR: 'QUICKSILVER',
			denom: 'uqck',
			ecosystem: 'cosmos',
			bin: 'quicksilverd',
			path: '.quicksilverd',
			peerID: '2aed12a25bfa92e40ccb95c88692735a9488a17e',
			seedID: '78283975c2bee9b95bbf9408cc974cbab7bfe8ef',
			explorer: '',
			peerPort: '37656',
			seedPort: '37656',
			installBin:
				'cd $HOME\nrm -rf ~/quicksilver\ngit clone https://github.com/ingenuity-build/quicksilver\ncd quicksilver\ngit fetch\ngit checkout v1.4.0-rc10.2\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		realio: {
			chainID: 'realionetwork_3300-1',
			link: 'https://testnet.itrocket.net/realio/staking',
			imgUrl: 'realio.png',
			desc: 'The Future of Private Equity is Digital',
			website: 'https://www.realio.fund/',
			offValDoc: 'https://docs.realio.network/fullnode/setup/',
			hardware: '4 Cores, 8GB RAM, 240GB of storage (NVME)',
			prHome: '/home/realio',
			binHome: '/home/realio/go/bin/realio-networkd',
			snapMaxSize: '10',
			port: '23',
			VAR: 'REALIO',
			denom: 'ario',
			ecosystem: 'cosmos',
			bin: 'realio-networkd',
			path: '.realio-network',
			peerID: '1057d9a2d9231093b4aadf3015efff8293290859',
			seedID: 'ee23c6b2367c7df0d71a7def5540cda879a06dab',
			explorer: '',
			peerPort: '23656',
			seedPort: '23656',
			installBin:
				'cd $HOME\nrm -rf realio-network\ngit clone https://github.com/realiotech/realio-network\ncd realio-network\ngit checkout v0.8.0-rc2\nmake install',
			updHeight: '77955',
			newInstallBin: 'new',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		sei: {
			chainID: 'atlantic-1',
			link: 'https://testnet.itrocket.net/sei/staking',
			imgUrl: 'sei.svg',
			fav: true,
			desc: 'Sei is the first sector-specific Layer 1 blockchain, specialized for trading to give exchanges an unfair advantage.',
			website: 'https://www.seinetwork.io/',
			offValDoc:
				'https://docs.seinetwork.io/nodes-and-validators/seinami-incentivized-testnet/joining-incentivized-testnet',
			hardware: '8 Cores, 32GB RAM, 1TB of storage (NVME)',
			prHome: '/home/sei',
			binHome: '/home/sei/go/bin/seid',
			snapMaxSize: '10',
			port: '14',
			VAR: 'SEI',
			denom: 'usei',
			ecosystem: 'cosmos',
			bin: 'seid',
			path: '.sei',
			peerID: '23566c31c1a4f852eb581cee56ce68b4b77756b1',
			seedID: '1dd91ce29a1f296a1e5dd9533c06a311b0b604f6',
			explorer: 'https://sei.explorers.guru/',
			peerPort: '12656',
			seedPort: '14656',
			installBin:
				'cd $HOME\ngit clone https://github.com/sei-protocol/sei-chain.git\ncd sei-chain\ngit checkout 1.2.2beta-postfix\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		starknet: {
			link: 'https://starkscan.co/',
			imgUrl: 'starknet.png',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		terp: {
			chainID: '90u-1',
			link: 'https://testnet.itrocket.net/terp/staking',
			imgUrl: 'terp.svg',
			desc: 'Decentralized Infrastructure for the Cannabis Community',
			website: 'https://terp.network/',
			offValDoc: 'https://github.com/terpnetwork/terp-core',
			hardware: '4 Cores, 8GB RAM, 200GB of storage (NVME)',
			prHome: '/home/terp',
			binHome: '/home/terp/go/bin/terpd',
			snapMaxSize: '10',
			port: '13',
			VAR: 'TERP',
			denom: 'uterpx',
			ecosystem: 'cosmos',
			bin: 'terpd',
			path: '.terp',
			peerID: '51d48be3809bb8907c1ef5f747e53cdd0c9ded1b',
			seedID: 'a6ee57fb457f71530d165afd1901d0d62cd7d7e0',
			explorer: '',
			peerPort: '13656',
			seedPort: '13656',
			installBin:
				'cd $HOME\nrm -rf ~/terp-core\ngit clone https://github.com/terpnetwork/terp-core.git\ncd terp-core\ngit checkout v1.0.1\nmake install',
			updHeight: '0',
			newInstallBin: `sudo systemctl stop terpd.service
cd $HOME
rm -rf ~/terp-core
git clone https://github.com/terpnetwork/terp-core.git
cd terp-core
git checkout v1.0.1
make install
curl -s  https://raw.githubusercontent.com/terpnetwork/test-net/master/90u-1/genesis.json > $HOME/.terp/config/genesis.json
terpd tendermint unsafe-reset-all --home $HOME/.terp --keep-addr-book
echo "export TERP_CHAIN_ID="90u-1"" >> $HOME/.bash_profile
source $HOME/.bash_profile
terpd config chain-id $TERP_CHAIN_ID
sed -i 's/minimum-gas-prices = "[^"]*"/minimum-gas-prices = "0.0002uthiol"/' $HOME/.terp/config/app.toml`,
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
		uptick: {
			chainID: 'uptick_7000-2',
			link: 'https://testnet.itrocket.net/uptick/staking',
			imgUrl: 'uptick.jpg',
			fav: true,
			desc: 'The Business Grade Multi-Chain NFT Infrastructure for Web 3.0',
			website: 'https://uptick.network/',
			offValDoc: 'https://docs.uptick.network/testnet/',
			hardware: '4 Cores, 4GB RAM, 100GB of storage (NVME)',
			prHome: '/home/uptick',
			binHome: '/home/uptick/go/bin/uptickd',
			snapMaxSize: '10',
			port: '10',
			VAR: 'UPTICK',
			denom: 'auptick',
			ecosystem: 'cosmos',
			bin: 'uptickd',
			path: '.uptickd',
			peerID: '86f50af23369997882ca3988eabeba998b4f07cc',
			seedID: '2c952455a0e425081b54855091ab84c1fe73c4bc',
			explorer: '',
			peerPort: '10656',
			seedPort: '10656',
			installBin:
				'cd $HOME\nrm -rf uptick\ngit clone https://github.com/UptickNetwork/uptick.git\ncd uptick\ngit checkout v0.2.5\nmake install',
			updHeight: '',
			newInstallBin: '',
			goVersion: '1.19.3',
			gas: '--gas auto --gas-adjustment 1.5',
			unsafeReset: 'tendermint unsafe-reset-all',
			minGasPrice: '0.0',
		},
	},
	finished: [
		{
			name: 'Sui',
			link: 'https://explorer.sui.io/',
			imgUrl: 'sui.svg',
		},
		{
			name: 'BlastAPI',
			link: 'https://houston.blastapi.io/',
			imgUrl: 'blastapi.jpg',
		},
		{
			name: 'Masa',
			link: 'https://www.masa.finance/',
			imgUrl: 'masa.svg',
		},
		{
			name: 'Ironfish',
			link: 'https://ironfish.network/',
			imgUrl: 'ironfish.png',
		},
		{
			name: 'Pontem',
			link: 'https://pontem.network/',
			imgUrl: 'pontem.svg',
		},
		{
			name: 'Empower',
			link: 'https://www.empowerchain.io/',
			imgUrl: 'empower.png',
		},
		{
			name: 'DeWeb',
			link: 'https://deweb.services/',
			imgUrl: 'deweb.png',
		},
		{
			name: 'Bifrost',
			link: 'https://thebifrost.io/',
			imgUrl: 'bifrost.png',
		},
		{
			name: 'Subspace',
			link: 'https://subspace.network/',
			imgUrl: 'subspace.jpg',
		},
	],
}
export default projects
