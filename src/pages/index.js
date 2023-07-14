import React from "react";
import theme from "theme";
import { Theme, Text, Box, Section, Icon, Link, Button, Image, Span, List, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import { GiFairyWings } from "react-icons/gi";
import { MdCloudUpload } from "react-icons/md";
import { FaLock, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Hero-19">
			<Override slot="SectionContent" width="100%" flex-direction="row" max-width="100%" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				lg-overflow-y="hidden"
				lg-overflow-x="hidden"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					lg-width="100%"
					lg-padding="0 50px 50px 50px"
					padding="0px 80px 0px 80px"
					sm-padding="0 15px 50px 15px"
				>
					<Icon
						category="gi"
						icon={GiFairyWings}
						size="35px"
						color="#3f24d8"
						margin="0px 0px 45px 0px"
					/>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						margin="0px 0px 30px 0px"
						border-radius="25px"
						border-color="--color-lightD2"
						sm-flex-direction="column"
						align-items="center"
						sm-align-items="flex-start"
					>
						<Text
							margin="0px 30px 0px 0px"
							color="#3f24d8"
							font="normal 400 16px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							background="#ece9ff"
							padding="5px 15px 5px 15px"
							border-radius="15px"
						>
							SaaS company
						</Text>
						<Link href="#" color="#8b9197" font="normal 400 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Read more
						</Link>
					</Box>
					<Text margin="0px 0px 20px 0px" font="normal 700 56px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						CloudifyPro is a SaaS company
					</Text>
					<Text margin="0px 0px 50px 0px" font="--lead" color="#8b9197" lg-margin="0px 0px 30px 0px">
						Our platform offers a range of tools and services, including project management, collaboration, communication, and data analytics. With Cloudify Pro, businesses can streamline their workflows, reduce costs, and improve overall efficiency.
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-items="stretch"
					>
						<Button
							margin="0px 15px 0px 0px"
							padding="12px 28px 12px 28px"
							background="#3f24d8"
							border-radius="8px"
							font="normal 400 17px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							transition="background-color 0.2s ease 0s"
							border-width="2px"
							border-style="solid"
							border-color="#3f24d8"
							hover-color="--darkL1"
							hover-background="rgba(63, 36, 216, 0)"
						>
							Get Started
						</Button>
						<Button
							margin="0px 0 0px 0px"
							padding="12px 28px 12px 28px"
							background="rgba(0, 119, 204, 0)"
							color="--darkL1"
							font="normal 400 17px/1.5 --fontFamily-sans"
						>
							Live Demo
						</Button>
					</Box>
				</Box>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10:55:25.060Z"
					display="block"
					width="50%"
					object-fit="cover"
					lg-width="100%"
					object-position="0 0"
					padding="15px 0px 15px 15px"
					border-radius="25px 0 0 25px"
					background="--color-lightD1"
					sm-margin="0px 0px 0px 15px"
					lg-margin="0px 0px 0px 25px"
				/>
			</Box>
		</Section>
		<Section
			padding="90px 0 90px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="--color-darkL2"
			overflow-y="hidden"
			overflow-x="hidden"
			quarkly-title="Advantages/Features-12"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-justify-content="center"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-padding="0px 0px 0px 0px"
				font="20px sans-serif"
			>
				<Box
					width="972px"
					height="589px"
					md-display="flex"
					md-justify-content="center"
					box-shadow="--xl"
					lg-height="auto"
				>
					<Image
						height="589px"
						lg-width="100%"
						width="972px"
						border-radius="8px"
						z-index="9"
						position="relative"
						lg-margin="0px 0px 0px 0px"
						box-shadow="--xxl"
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10:55:25.060Z"
						object-fit="cover"
						lg-height="auto"
						lg-display="block"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="45%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 20px 0px"
				sm-margin="32px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="column"
				lg-flex-wrap="no-wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				lg-padding="36px 0px 16px 0px"
			>
				<Text as="p" font="--base" color="--orange" margin="0px 0px 8px 0px">
					Deploy faster
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-sans"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-max-width="720px"
				>
					Awesome features
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-max-width="720px"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit.
				</Text>
				<List
					margin="40px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					as="ul"
					sm-margin="24px 0 0 0"
					list-style-type="none"
					font="normal normal 18px/150% sans-serif"
					display="flex"
					flex-direction="column"
					grid-gap="25px"
					lg-margin="32px 0px 0px 0px"
				>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
						<Icon
							display="block"
							category="md"
							icon={MdCloudUpload}
							size="20px"
							color="--red"
							margin="5px 0 0 0"
						/>
						<Text
							padding="0"
							margin="0"
							color="--light"
							font="18px/27px --fontFamily-sans"
							lg-max-width="720px"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="normal 600 16px/1.5 --fontFamily-sans"
								color="--light"
							>
								Clouds.{" "}
							</Span>
							<Span
								opacity="0.9"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="--base"
								color="--light"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit.
							</Span>
						</Text>
					</Box>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
						<Icon
							display="block"
							category="fa"
							icon={FaLock}
							size="20px"
							color="--red"
							margin="5px 0 0 0"
						/>
						<Text
							padding="0"
							margin="0"
							color="--darkL2"
							font="18px/27px --fontFamily-sans"
							lg-max-width="720px"
						>
							<Span
								font-weight="600"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="normal 600 16px/1.5 --fontFamily-sans"
								color="--light"
							>
								Security.{" "}
							</Span>
							<Span
								opacity="0.9"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="--base"
								color="--light"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit.
							</Span>
						</Text>
					</Box>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
						<Icon
							display="block"
							category="go"
							icon={GoDatabase}
							size="20px"
							color="--red"
							margin="5px 0 0 0"
						/>
						<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" lg-max-width="720px">
							<Span
								font-weight="600"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="normal 600 16px/1.5 --fontFamily-sans"
								color="--light"
							>
								Servers.{" "}
							</Span>
							<Span
								opacity="0.9"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="--base"
								color="--light"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit.
							</Span>
						</Text>
					</Box>
				</List>
			</Box>
		</Section>
		<Section background="#ffffff" padding="90px 0 110px 0" quarkly-title="Team-12">
			<Text margin="0px 0px 0px 0px" color="--dark" font="600 48px --fontFamily-sans">
				Our team
			</Text>
			<Text
				text-align="left"
				color="--greyD2"
				font="300 22px --fontFamily-sansHelvetica"
				margin="16px 600px 16px 0px"
				lg-margin="16px 0 16px 0px"
			>
				We are united by our passion for innovation and our commitment to delivering high-quality solutions to our clients.{"   "}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				flex-direction="column"
				lg-width="100%"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="46px 24px"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
				sm-grid-gap="36px 0"
				margin="50px 0px 0px 0px"
				lg-grid-template-columns="repeat(2, 1fr)"
				lg-grid-template-rows="auto"
			>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-isolated-showing-facial-emotions.jpg?v=2023-04-18T19:20:05.237Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Michael Foster
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Co-Founder / CO
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18:06:34.340Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Emma Dorsey
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Sales Manager
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18:07:43.011Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Alicia Bell
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Marketing manager
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18:08:27.505Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Michael Foster
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Project manager
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18:03:35.040Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Tom Cook
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Director of Product
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/happy-woman-beige-sweater.jpg?v=2023-04-18T19:20:53.770Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Courtney Henry
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Designer
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-4">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="65%"
				justify-content="center"
				align-items="flex-start"
				margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				display="flex"
				lg-width="100%"
				padding="16px 16px 16px 16px"
				sm-margin="0px 0px 30px 0px"
			>
				<Box
					width="100%"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					padding="0px 0px 125% 0px"
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					hover-transform="translateY(-10px)"
				>
					<Image
						bottom={0}
						min-height="100%"
						top={0}
						left={0}
						position="absolute"
						display="block"
						width="100%"
						right={0}
						src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
						object-fit="cover"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				align-items="flex-start"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
				lg-order="1"
				width="35%"
				flex-direction="column"
				lg-align-items="center"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
			>
				<Box
					overflow-x="hidden"
					padding="0px 0px 65% 0px"
					width="100%"
					height="auto"
					overflow-y="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
				>
					<Image
						left={0}
						right={0}
						bottom="0px"
						object-fit="cover"
						position="absolute"
						display="block"
						width="100%"
						top="auto"
						min-height="100%"
						src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80"
					/>
				</Box>
				<Text
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					margin="24px 0px 48px 0px"
					md-text-align="left"
				>
					The Road Ring is a national road in Iceland that runs around the island and connects most of the inhabited parts of the country. The total length of the road is 1,352 kilometres.
				</Text>
				<Box
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					width="100%"
					padding="0px 0px 65% 0px"
				>
					<Image
						display="block"
						width="100%"
						top="auto"
						bottom="0px"
						min-height="100%"
						src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80"
						object-fit="cover"
						position="absolute"
						left={0}
						right={0}
					/>
				</Box>
				<Text
					margin="24px 0px 0px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					md-text-align="left"
				>
					The Road Ring is a national road in Iceland that runs around the island and connects most of the inhabited parts of the country. The total length of the road is 1,352 kilometres.
				</Text>
			</Box>
		</Section>
		<Section padding="100px 0 100px 0" background="--color-light" quarkly-title="FAQ-8">
			<Text margin="0px 0px 15px 0px" font="normal 600 42px/1.2 --fontFamily-sans" color="--darkL1">
				Frequently asked questions
			</Text>
			<Text margin="0px 0px 70px 0px" font="normal 300 20px/1.5 --fontFamily-sansHelvetica" color="#555a5f" sm-margin="0px 0px 50px 0px">
				Here are the most frequently asked questions in our field and the{" "}
				<Span color="#5851df" font="500 20px/30px Frutiger, &quot;Frutiger Linotype&quot;, Univers, Calibri, &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, &quot;Myriad Pro&quot;, Myriad, &quot;DejaVu Sans Condensed&quot;, &quot;Liberation Sans&quot;, &quot;Nimbus Sans L&quot;, Tahoma, Geneva, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif">
					answers
				</Span>
				{" "}to them
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="50px 50px"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				sm-grid-gap="35px 0"
			>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--darkL1">
						What are some examples of IT jobs?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
						Some examples of IT jobs include software developer, network administrator, database administrator, cybersecurity analyst, and IT project manager.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--darkL1">
						What is cybersecurity?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
						Cybersecurity refers to the practice of protecting computer systems and networks from unauthorized access, theft, damage, or disruption.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--darkL1">
						What skills do I need to work in IT?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
						Skills needed for IT jobs vary depending on the specific role, but generally include technical knowledge, problem-solving abilities, communication skills, attention to detail, and the ability to work well in a team.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--darkL1">
						What is cloud computing?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
						Cloud computing is the delivery of computing services—including servers, storage, databases, software, and analytics—over the internet rather than through on-premises servers.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--darkL1">
						What is artificial intelligence?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
						Artificial intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and natural language processing.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--darkL1">
						What is the Internet of Things (IoT)?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
						The Internet of Things (IoT) refers to the network of physical devices—including vehicles, appliances, and other items—that are embedded with sensors, software, and other technologies that allow them to connect and exchange data over the internet.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reviews From Readers
				</Text>
				<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
					Sign up with your email address to receive news and updates.
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19:47:23.498Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Sam Smith
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Product Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19:47:16.297Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Mason Johnson
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Manager
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Adriana Williams
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Product Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19:46:11.754Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Ethan Tremblay
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								UI/UX Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Adriana Williams
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Product Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Mason Johnson
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Manager
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64b0e88291dc650018422952"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});