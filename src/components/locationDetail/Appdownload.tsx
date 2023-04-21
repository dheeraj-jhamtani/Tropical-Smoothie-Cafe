import * as React from 'react';
import DOMParserReact from "dom-parser-react";
import RtfConverter from "@yext/rtf-converter";


const Appdownload = (Props:any) => {
    const{
    c_DownloadHeading,
    c_appDownloadDetails,
    c_appDownloadDetailsText,
    c_appDownloadImage,
    c_appStore,
    c_playStore
    }=Props;
    const style={
        backgrounColor:'#367c8a',
    };
  return (
    <div className="Promo container" data-ya-scope="Promo">
        <div className="flex flex-row Promo-wrapper">
            {c_appDownloadImage?<img className="Promo-image" data-object-fit="cover" alt="" src={c_appDownloadImage.url} />:''}
            <div className={c_appDownloadImage?"Promo-container":"Promo-container withoutimage"}>
                <div className="Promo-infoWrapper">
                    {c_DownloadHeading?<h2 className="Promo-title">{c_DownloadHeading}</h2>:''}
                    {c_appDownloadDetails?
                    <div className="Promo-details">
                        <div dangerouslySetInnerHTML={{ __html:RtfConverter.toHTML(c_appDownloadDetails)}} />
                    </div>
                    :''}
                    {c_appDownloadDetailsText?<div className="Promo-downloadsText">{c_appDownloadDetailsText}</div>:''}                    
                    {c_appStore || c_playStore?
                    <div className="Promo-downloads">
                        {c_appStore?
                        <a className="Promo-downloads-apple" href={c_appStore.url} data-ya-track="itunes">
                            <img alt="apple store download link image" src={c_appStore.icon.url} height="40px" width="135px" />
                        </a>           
                        :''}
                        {c_playStore?
                        <a className="Promo-downloads-google" href={c_playStore.url} data-ya-track="google">
                            <img alt="google play store download link image" src={c_playStore.icon.url} height="40px" width="135px" />                            
                        </a>
                        :''}
                    </div>:''
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appdownload
