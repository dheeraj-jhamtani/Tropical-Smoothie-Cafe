/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Pages system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
    TransformProps,
  } from "@yext/pages";
  import { fetch } from "@yext/pages/util";
  import * as React from "react";
  import PageLayout from "../components/layouts/PageLayout";
  import BreadCrumbs from "../components/layouts/Breadcrumb";
  import Banner from "../components/locationDetail/banner";
  import { baseuRL } from "../../sites-global/global";
//   import favicon from "../assets/images/favicon";
  import "../index.css";
 
  
  
  /**
   * Required when Knowledge Graph data is used for a template.
   */
  export const config: TemplateConfig = {
    stream: {
      $id: "index",
      filter: {
        savedFilterIds: ["dm_us-directory"],
      },
      // Specifies the exact data that each generated document will contain. This data is passed in
      // directly as props to the default exported function.
      fields: [
        "id",
        "uid",
        "meta",
        "name",
        "slug",
        "dm_childEntityIds",
        "c_metaDescription",
        "c_metaTitle",
        "c_canonicalURL",
        "dm_directoryChildren.name",
        "dm_baseEntityCount",
        "dm_directoryChildren.slug",
        "dm_directoryChildren.dm_baseEntityCount",
        
      ],
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
   * NOTE: To preview production URLs locally, you must return document.slug from this function
   * and ensure that each entity has the slug field pouplated.
   */
  export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return document.slug
  };
  
  /**
   * Defines a list of paths which will redirect to the path created by getPath.
   *
   * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
   * a new deploy.
   */
  export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
    return [`index-old/${document.id.toString()}`];
  };
  
  /**
   * This allows the user to define a function which will take in their template
   * data and produce a HeadConfig object. When the site is generated, the HeadConfig
   * will be used to generate the inner contents of the HTML document's <head> tag.
   * This can include the title, meta tags, script tags, etc.
   */
  export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }): HeadConfig => {
    return {
      title: `Tropical Smoothie Cafe | Designer Stores In ${document.name}`,
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      tags: [
        {
          type: "meta",
          attributes: {
            name: "description",
            content: `Find The Tropichl Smoothie Cafe Designer Cafe Nearest You In ${document.name}. Shop Men's & Women's Designer Bags, Wallets, Clothing, Shoes & More.`,
          },
        },
        {
          type: "meta",
          attributes: {
            name: "robots",
            content: "noindex,nofollow",
          },
        },
        {
          type: "link",
          attributes: {
            rel: "canonical",
            href: `${document.c_canonicalURL
                ? document.c_canonicalURL
                : baseuRL+"/locator"
              }`,
          },
        },
        
        // {
        //   type: "link",
        //   attributes: {
        //     rel: "icon",
        //     type: "image/x-icon",
        //     href: favicon,
        //   },
        // },
      ],
    };
  };
  
  /**
   * This is the main template. It can have any name as long as it's the default export.
   * The props passed in here are the direct stream document defined by `config`.
   *
   * There are a bunch of custom components being used from the src/components folder. These are
   * an example of how you could create your own. You can set up your folder structure for custom
   * components any way you'd like as long as it lives in the src folder (though you should not put
   * them in the src/templates folder as this is specific for true template files).
   */
  
  
  const Index: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }) => {
    const {
      _site,
      name,
      dm_directoryChildren,
      dm_baseEntityCount,
      meta,
      description,
      siteDomain,
      dm_childEntityIds,
      dm_directoryParents
    } = document;
    return (
      <>
        <PageLayout global={_site}>
        <Banner name='TROPICAL SMOOTHIE CAFE LOCATIONS' />
        <BreadCrumbs name={name} parents={dm_directoryParents} baseUrl={relativePrefixToRoot} />
        <div className="centered-container">
        <div className="section">
        <div className="grid grid-cols-4 gap-x-10 gap-y-10">
        {dm_directoryChildren && dm_directoryChildren.map((res:any)=>{
       return(
        <div className="Directory-listItem">
        <a className="Directory-listLink"href={res.slug}><span className="Directory-listLinkText">{res.name}</span><span className="Directory-listitemCount">({res.dm_baseEntityCount})</span></a>
        </div>
       )
      })}
        </div>
        </div>
        </div>
        </PageLayout>
        
        {/* This component displays a link to the entity that represents the given page in the Knowledge Graph*/}
        
      </>
    );
  };
  
  export default Index;