import * as React from 'react'

type Ctaicon = {
  buttonText: string;
  url?: string;
  style?: string;
  buttonIcon?: string
};


const Ctaicon = (props:Ctaicon) => {
  const { 
    buttonText, 
    buttonIcon,
    url,
    style 
  } = props;
  return (
    <div className='text-center'>
        <div className="ctaicon">
          <img src={buttonIcon} className='inline' />
        </div>
        <a href={url} className={`${style}` + " py-4 px-6 text-base"} rel="noopener noreferrer">
          {buttonText}
        </a>
    </div>
  )
}

export default Ctaicon
