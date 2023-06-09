import * as React from "react";
import "../../index.css";
import logofooter from "../../images/logo-footer.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";
import Cta from "../commons/cta";

const Footer = (props: any) => {
	const { footer } = props;
	// const [isNavVisible, setNavVisibility] =  useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1024px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};
	// if (typeof window !== "undefined") {
	// 	mediaQuery = window?.innerWidth;
	// }

	return (
		<>
			<footer className="Footer" data-ya-scope="footer">
				<div className="Footer-wrapper">
					<div className="Footer-topWrapper flex justify-between">
						<div className="Footer-socialWrapper">
							<ul className="c-social-links">
							{props.global_footer.c_socialLinks && props.global_footer.c_socialLinks.map((item: any, i: Number) => {
								return (
									<>
									<li className="c-social-links-item">
										<a href={item.url}><img src={item.icon.url} /></a>
									</li>
								</>
								)
							})}
							</ul>
						</div>
						<div className="Footer-logo text-right">
							<a href="/">
							{props.global_footer.c_footerLogo?
							<img src={props.global_footer.c_footerLogo.url} alt="logo" />:
							<div dangerouslySetInnerHTML={{ __html: logofooter }} />}
							</a>
						</div>
					</div>
					<div className="Footer-linksWrapper grid grid-cols-5 gap-4">
						{props.global_footer.c_footerLinks && props.global_footer.c_footerLinks.map((item: any, i: Number) =>
						{
							return (
								<>
									<div className="Footer-col">
										<h3 className="Footer-heading">{item.linksHeading}</h3>

										<ul className="Footer-links">
											{item.links && item.links.map((item: any, i: Number) =>{
												return (
													<>
														<li className="Footer-linkWrapper">
															<a href={item.link}>{item.label}</a>
														</li>
													</>
												)
											})}
										</ul>
									</div>
								</>
							)
						})}
					</div>
					<div className="Footer-bottomWrapper">
						<ul className="Footer-bottomLinks">
							{props.global_footer.c_infoLinks && props.global_footer.c_infoLinks.map((item: any, i: Number) =>{
								return (
								<>
								<li className="Footer-bottomLinkWrapper">
									<a href={item.link}>{item.label}</a>
								</li>
								</>
								)
							})}
						</ul>
						<div className="Footer-copyright">
							{props.global_footer.c_copyrightText}
						</div>
					</div>
				</div>
			</footer>
			{/* <footer className="site-footer">

				<div className="container">

					<div className="store-locator">
					<div className="company-logo mr-4">
							<img src={footer.c_matalan_footer_logo.url} alt="logo"/>
							</div>
						{footer.c_store_finder.map((storfinder: any) => {
							console.log(storfinder)
							return (
								<>
									<div className="store-inner">
										<img src={storfinder.icon.url} alt="store-finder" />
										<Link props={storfinder.cTA}/>

									</div>
								</>
							)
						})}


						<div className="store-inner flex flex-raw">
							<div>
							<img src={footer.c_fAQs.icon.url} alt="faq-icon" />

							<Link props={footer.c_fAQs.cTA} />
							</div>
							<div>

							<img src={footer.c_getAQuate.icon.url} alt="faq-icon" />

							<Link props={footer.c_getAQuate.cTA} />
							</div>
						</div>
						

						




					</div>
					

					<div className="link-sec-footer ">
					{footer.c_customer_services?
						<div className="footer-block">
							<h4 className="footer-block-title">{footer.c_customer_services.headerLinksHeading}</h4>
							<ul className="list-none">
								{footer.c_customer_services.headerLinks.map((customerService: any) => {
									return (<li>
											<Link props={customerService}/>
										</li>)
								})}
							</ul>
						</div>:''}
						{footer.c_about_matalan?
						<div className="footer-block">
							<h4 className="footer-block-title">{footer.c_about_matalan.headerLinksHeading}</h4>
							<ul className="list-none"><li>{footer.c_about_matalan.headerLinksHeading}</li>
								{footer.c_about_matalan.headerLinks.map((aboutMatalan: any) => {
									return (<li>
										<Link props={aboutMatalan}/>
										</li>)
								})}
							</ul>
						</div>:''}
						{footer.c_our_website?
						<div className="footer-block">
							<h4 className="footer-block-title">{footer.c_our_website.headerLinksHeading}</h4>
							<ul className="list-none">
								{footer.c_our_website.headerLinks.map((ourWebsite: any) => {
									return (<li>
										<Link props={ourWebsite}/>
									</li>)
								})}
							</ul>
						</div>:''}
						<div className="footer-block">
						<ul className="social-media-bx">
							{footer.c_socialIcons.map((icon: any) => {
								return (

									<>
										<li className=""> <a href={icon.cTA.link} target="_blank"><img src={icon.icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" /> </a> </li>
									</>
								)
							})}
						</ul>
						</div>

					</div>
					<div className="copyright-bx">
						<span className="text-xs flex-wrap" data-copyright="">
							{footer.c_footerDescription}</span>

						
					</div>

				</div>

			</footer> */}

			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
					.
				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;
function handleMediaQueryChange(mediaQuery: MediaQueryList) {
	throw new Error("Function not implemented.");
}

