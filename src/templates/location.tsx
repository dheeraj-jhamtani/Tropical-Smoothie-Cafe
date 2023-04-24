import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Contact from "../components/locationDetail/contact";
import Nearby from "../components/locationDetail/Nearby";
import { JsonLd } from "react-schemaorg";
import { nearByLocation } from "../types/nearByLocation";
import RtfConverter from "@yext/rtf-converter";
import "../index.css";
import Appdownload from "../components/locationDetail/Appdownload";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import About from "../components/locationDetail/About";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";
import {apikey_for_entity, baseuRL,stagingBaseurl,AnalyticsEnableDebugging,AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
  Link,
} from "@yext/pages/components";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import Product from "../components/locationDetail/Product";
import BreadCrumbs from "../components/layouts/Breadcrumb";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "geocodedCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "c_bannerSubHeading",
      "c_bannerHeading",
      "c_bannerOrderButton",
      "c_hoursHeading",
      "c_featuresHeading",
      "c_contactHeading",
      "c_features",
      "c_getDirectionText",
      "c_joinUsHeading",
      "c_joinUsDescription",
      "c_DownloadHeading",
      "c_appDownloadDetails",
      "c_appDownloadDetailsText",
      "c_appDownloadImage",
      "c_appStore",
      "c_playStore",
      "c_product",
      "c_aboutBackgroundImage",
      "c_aboutHeading",
      "c_aboutButton",
      "c_aboutDescription",
      "c_markerImage",
      "c_faqHeading",
      "c_frequentlyAskedQuestions.question",
      "c_frequentlyAskedQuestions.answer",
      "c_nearbyStoresHeading",
      "c_seeMore",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta",
      "dm_directoryParents.c_addressRegionDisplayName"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
     entityTypes:['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // var url = "";
  // var name: any = document.name.toLowerCase();
  // var string: any = name.toString();;
  // let result: any = string.replaceAll(" ", "-");
  // document.dm_directoryParents.map((result: any, i: Number) => {
  //   if (i > 0) {
  //     url += result.slug + "/"
  //   }
  // })
  // if (!document.slug) {
  //   url += `${result}.html`;
  // } else {
  //   url += `${document.slug.toString()}.html`;
  // }
  
  return document.slug;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title?document.c_meta_title:`${document.name} Store of Tropichl Smoothie Cafe`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description?document.c_meta_description:`Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },

     
      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${document._site.c_canonical?document.c_canonical:stagingBaseurl

            }${document.slug?document.slug:`${document.name.toLowerCase()}`}.html`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description?document.c_meta_description:`Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: document.c_meta_title?document.c_meta_title:`${document.name} Store of Tropichl Smoothie Cafe`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description?document.c_meta_description:`Find the ${document.name} Timber Store in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      /// twitter tag






    ],

  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {

  var location = `${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.latitude : data.document.displayCoordinate.latitude},${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.longitude : data.document.displayCoordinate.longitude}`;

    const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
 console.log(url)
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()

  )) as nearByLocation;
  return { ...data, externalApiData };
};



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    address,
    slug,
    hours,
    mainPhone,
    c_canonical,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    name,
    c_bannerSubHeading,
    c_bannerHeading,
    c_bannerOrderButton,
    c_hoursHeading,
    c_featuresHeading,
    c_contactHeading,
    c_features,
    c_getDirectionText,
    c_joinUsHeading,
    c_joinUsDescription,
    c_DownloadHeading,
    c_appDownloadDetails,
    c_appDownloadDetailsText,
    c_appDownloadImage,
    c_appStore,
    c_playStore,
    c_product,
    geocodedCoordinate,
    c_aboutBackgroundImage,
    c_aboutHeading,
    c_aboutButton,
    c_aboutDescription,
    c_markerImage,
    c_faqHeading,
    c_frequentlyAskedQuestions,
    c_nearbyStoresHeading,
    c_seeMore,
    dm_directoryParents
  } = document;
 let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = {};
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
  document.dm_directoryParents.map((i: any, index: any) => {
    if (i.meta.entityType.id == "ce_country") {
      document.dm_directoryParents[index].name =
        document.dm_directoryParents[index].name;
      document.dm_directoryParents[index].slug =
        document.dm_directoryParents[index].slug;

      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
       
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_region") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_region" &&
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          console.log(j, "j");
          url = url  + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url + "/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    } else if (i.meta.entityType.id == "ce_city") {
      let url = "";
      document.dm_directoryParents.map((j: any) => {
        if (
          j.meta.entityType.id != "ce_city" &&
          j.meta.entityType.id != "ce_root"
        ) {
          console.log(j, "j");
          url = url  + "/" + j.slug;
        }
      });
      breadcrumbScheme.push({
        "@type": "ListItem",
        position: index,
        item: {
          "@id":
            stagingBaseurl +
            url +"/" +
            document.dm_directoryParents[index].slug +
            ".html",
          name: i.name,
        },
      });
    }
  });

breadcrumbScheme.push({
  "@type": "ListItem",
  position: 4,
  item: {
    "@id": stagingBaseurl + path,
    name: document.name,
  },
});
  return (

    <>

      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          /* image: imageurl, */
          telephone: mainPhone,
          url: `${c_canonical?c_canonical:stagingBaseurl}${slug?slug:`${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
    


<AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging} 
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
      <PageLayout global={_site}>
        <div className="banner-section">
          <Banner c_bannerSubHeading={c_bannerSubHeading} c_bannerHeading={c_bannerHeading} c_bannerOrderButton={c_bannerOrderButton} hours={hours} timezone={timezone} />
        </div>
        <div className="NAP-wrapper">
          <BreadCrumbs name={name} parents={dm_directoryParents} baseUrl={relativePrefixToRoot}  />
          <div className="join_us-section">
            {c_joinUsHeading || c_joinUsDescription?
              (
                <div className='container'>
                    <div className="join_us">
                    {c_joinUsHeading?<h3>{c_joinUsHeading}</h3>:''}
                      <div dangerouslySetInnerHTML={{ __html:RtfConverter.toHTML(c_joinUsDescription?c_joinUsDescription:'')}} />
                    </div>
                </div>
              ):('')
            }
          </div>
          <div className="location-information">
            <Contact c_getDirectionsCTAText={c_getDirectionText} c_hoursHeading={c_hoursHeading} c_storeInfoHeading={c_contactHeading} address={address} 
            phone={mainPhone} latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
            yextDisplayCoordinate={yextDisplayCoordinate} longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude} hours={hours}  additionalHoursText={additionalHoursText} ></Contact>
            {c_features || c_featuresHeading ?
            (<div className="cafe-features">
              <h4 className="Cafe-title Cafe-icon-features box-title">{c_featuresHeading?c_featuresHeading:"Cafe Features"}</h4>
              <div className="content-col">
              <ul className="primary-nav">
                {c_features && c_features.map((item: any, i: Number) => {
                  return (
                    <>
                      <li>{item}</li>
                    </>
                  )
                })}

              </ul>             
              </div>
            </div>):('')
            }

          </div>
          <div className="download_app-section">
              <Appdownload c_DownloadHeading={c_DownloadHeading} c_appDownloadDetails={c_appDownloadDetails}  c_appDownloadDetailsText={c_appDownloadDetailsText} c_appDownloadImage={c_appDownloadImage} c_appStore={c_appStore} c_playStore={c_playStore}  />
          </div>
          <div className="Products">
              <Product c_product={c_product} />
          </div>
          <div className="About">
              <About geocodedCoordinate={geocodedCoordinate} c_aboutBackgroundImage={c_aboutBackgroundImage} c_aboutHeading={c_aboutHeading} c_aboutButton={c_aboutButton} c_aboutDescription={c_aboutDescription} c_markerImage={c_markerImage} />
          </div>
          <div className="FAQs container">
              <Faq c_fAQsHeading={c_faqHeading} faqs={c_frequentlyAskedQuestions} />
          </div>
          <div className="nearby-sec">
                {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
                  <Nearby externalApiData={externalApiData} c_nearbyStoresHeading={c_nearbyStoresHeading} c_seeMore={c_seeMore} /> 
              : ''}
          </div>
        </div>
      </PageLayout>
      </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;