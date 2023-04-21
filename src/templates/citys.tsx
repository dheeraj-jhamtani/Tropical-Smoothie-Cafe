import * as React from "react";
import Banner from "../components/locationDetail/banner";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import PageLayout from "../components/layouts/PageLayout";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  stream: {
    $id: "cities",
    filter: {
      savedFilterIds: ["dm_us-directory_address_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.c_addressRegionDisplayName",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_baseEntityCount"
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({document}) => {
  return `${document.slug}`;
};

 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: 'icon',
          type: 'image/x-icon',
          href: "../public/yext-favicon.ico"
        },
      }
    ],
  };
};

 const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta
}) => {
  const {
    name,
    description,
    dm_baseEntityCount,
    dm_directoryParents,
    dm_directoryChildren
  } = document;

  var sortedChildren = dm_directoryChildren.sort(function(a:any, b:any) {
    var a = a.name;
    var b = b.name;
    return (a < b) ? -1 :(a > b) ? 1 : 0;
  });
  
  const childrenDivs = dm_directoryChildren.map((entity:any) => (
    <div>
      <a key="uRL" href={relativePrefixToRoot + entity.slug} className="font-bold text-2xl text-blue-700 hover:underline">
        {entity.name}{/*  ({entity.dm_baseEntityCount}) */}
      </a>
    </div>
  ));
  const {    
    _site
    } = document;
  
  return (
    <>
      <PageLayout global={_site} >
        <div className="centered-container">
        <Banner name="State Page" />
          <BreadCrumbs name={name} parents={dm_directoryParents} baseUrl={relativePrefixToRoot}  />
          <div className="section space-y-14 px-10">
            <div className="space-y-6">
              <h1 className="text-center">Tropichl Smoothie Cafe - {name}</h1>
              <p className="text-2xl text-center">{description}</p>
            </div>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                {childrenDivs}
              </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default City;